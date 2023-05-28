import SingleProduct from "./SingleProduct";

const  AllProducts = async () => {

  async function fetchProducts() {
    const res  = await fetch(`${process.env.server}/products`, { cache: 'no-store' });
    const allProducts = await res.json();
    
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return allProducts;
  }
    

  const allProducts = await fetchProducts()


  return (
    <>
        <div className="products-wpr grid grid-cols-5 gap-x-5 gap-y-12 mb-12">
            {allProducts?.map((product, i) => (
                <div className="col-span-1" key={i}>
                    <SingleProduct product={product} />
                </div>
            ))}
        </div>
        
    </>
  );
};

export default AllProducts;
