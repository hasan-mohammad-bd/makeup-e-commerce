import BestSellSlider from "./elements/sliders/BestSell";
import { fetchData } from "@/utils/fetchData";

const BestSell = async () => {
  const data = await fetchData({ api: "products" });
  const allProducts = data?.products || [];
  const bestProducts = allProducts.sort(function (a, b) {
    return a.totalSell > b.totalSell ? -1 : 1;
  });

  return (
    <>
      <BestSellSlider bestProducts={bestProducts} />
    </>
  );
};

export default BestSell;
