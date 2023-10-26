import { fetchData } from "@/utils/fetchData";
import CategorySlider from "./CategorySlider";

const PopularCategories = async () => {
	const data = await fetchData({ api: "popular-categories?no_child=1" });
	const popularCategories = data?.data || [];
	return (
		<>
			<CategorySlider categories={popularCategories} />
		</>
	);
};

export default PopularCategories;
