import FlashSaleSlider from "../elements/sliders/FlashSale";

const  FlashSale = async () => {

  async function fetchProducts() {
    const res  = await fetch(`${process.env.server}/products`, { cache: 'force-cache' });
    const allProducts = await res.json();
    
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    const saleProducts = allProducts.filter(item => item.discount.isActive)
    
    return saleProducts;
  }
    

  const saleProducts = await fetchProducts()


  return (
    <>
      <FlashSaleSlider saleProducts={saleProducts}/>
    </>
  );
};

export default FlashSale;
