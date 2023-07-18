import { fetchData } from "@/utils/fetchData";
import CategorySlider from "./elements/sliders/CategorySlider";

const PopularCategories = async () => {
  const data = await fetchData({ api: "popular-categories" });
  const popularCategories = data?.data || [];
  return (
    <>
      <CategorySlider categories={popularCategories} />
    </>
  );
};

export default PopularCategories;
