import { fetchData } from "@/lib/fetch-data";
import BrandsSlider from "./BrandsSlider";
const Brands = async () => {
	const data = await fetchData({ api: "brands" });
	const brands = data?.data || [];

	return <BrandsSlider brands={brands} />;
};

export default Brands;
