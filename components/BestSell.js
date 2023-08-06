import BestSellSlider from "./elements/sliders/BestSell";
import { fetchData } from "@/utils/fetchData";

const BestSell = async () => {
  const data = await fetchData({ api: "product-bestsale" });
  const allProducts = data?.data || [];
  // const bestProducts = allProducts.sort(function (a, b) {
  //   return a.totalSell > b.totalSell ? -1 : 1;
  // });

  return (
    <>
      <BestSellSlider bestProducts={allProducts} />
    </>
  );
};

export default BestSell;
