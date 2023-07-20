import { fetchData } from "@/utils/fetchData";
import BrandSlider from "./elements/sliders/Brands";
const Brands = async () => {
  const data = await fetchData({ api: "brands" });
  const brands = data?.data || [];

  return (
    <>
      <BrandSlider brands={brands} />
    </>
  );
};

export default Brands;
