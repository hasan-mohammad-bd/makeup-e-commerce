import { fetchData } from "@/utils/fetchData";
import BrandsSlider from "./BrandsSlider";
const Brands = async () => {
	const data = await fetchData({ api: "brands" });
	const brands = data?.data || [];

	return <BrandsSlider brands={brands} />;
};

export default Brands;
