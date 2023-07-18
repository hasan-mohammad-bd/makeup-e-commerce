import FlashSaleSlider from "./elements/sliders/FlashSale";
import { fetchData } from "@/utils/fetchData";

const FlashSale = async () => {
  const data = await fetchData({ api: "products" });
  const allProducts = data?.products || [];
  const saleProducts = allProducts.filter((item) => item.discount.isActive);

  return (
    <>
      <FlashSaleSlider saleProducts={saleProducts} />
    </>
  );
};

export default FlashSale;
