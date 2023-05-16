import NewArrivalSlider from "../elements/sliders/NewArrival";

const  NewArrival = async () => {

  async function fetchProducts() {
    const res  = await fetch(`${process.env.server}/products`, { cache: 'force-cache' });
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
    

  const newProducts = await fetchProducts()


  return (
    <>
      <NewArrivalSlider newProducts={newProducts}/>
    </>
  );
};

export default NewArrival;
