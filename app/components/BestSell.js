import BestSellSlider from "../elements/sliders/BestSell";

const  BestSell = async () => {

  async function fetchProducts() {
    const res  = await fetch(`${process.env.server}/products`, { cache: 'force-cache' });
    const allProducts = await res.json();
    
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    const bestProducts = allProducts.sort(function (a, b) {
        return a.totalSell > b.totalSell ? -1 : 1;
    });
    
    return bestProducts;
  }
    

  const bestProducts = await fetchProducts()


  return (
    <>
      <BestSellSlider bestProducts={bestProducts}/>
    </>
  );
};

export default BestSell;
