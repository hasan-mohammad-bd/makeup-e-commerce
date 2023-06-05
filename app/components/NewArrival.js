import NewArrivalSlider from "../elements/sliders/NewArrival";
import { fetchData } from "@/utils/fetchData";

const NewArrival = async () => {
  const data = await fetchData({ api: "products", revalidate: 60 });
  const allProducts = data?.products || [];
  const newProducts = allProducts.sort(function (a, b) {
    return a.created > b.created ? -1 : 1;
  });

  return (
    <>
      <NewArrivalSlider newProducts={newProducts} />
    </>
  );
};

export default NewArrival;
