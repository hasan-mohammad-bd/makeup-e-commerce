import SingleProduct from "./SingleProductList";

async function fetchProducts() {
  const res  = await fetch(`${process.env.server}/products`, { next: { revalidate: 60 } });
  const allProducts = await res.json();
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const newProducts = allProducts.sort(function (a, b) {
      return a.created > b.created ? -1 : 1;
  });
  
  return newProducts;
}
const  LatestViews = async () => {

  const newProducts = await fetchProducts()


  return (
    <>
        <div className="products-wpr grid grid-cols-4 gap-5">
            {newProducts?.slice(0,16)?.map((product, i) => (
            <div className="col-span-1" key={i}>
                <SingleProduct product={product} />
            </div>
            ))}
        
        </div>
    </>
  );
};

export default LatestViews;
