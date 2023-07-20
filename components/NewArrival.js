import NewArrivalSlider from "./elements/sliders/NewArrivalSlider";
import { fetchData } from "@/utils/fetchData";

const NewArrival = async () => {
  const data = await fetchData({ api: "product-latest" });
  const newProducts = data?.data || [];

  return (
    <>
      <NewArrivalSlider newProducts={newProducts} />
    </>
  );
};

export default NewArrival;
