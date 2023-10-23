import { fetchData } from "@/utils/fetchData";
import BrandsSlider from "./elements/sliders/BrandsSlider";
const Brands = async () => {
	const data = await fetchData({ api: "brands" });
	const brands = data?.data || [];

	return (
		<div className="container">
			<h2 className="sec-title text-center lg:text-left">
				আমাদের ব্র্যান্ড সমূহ
			</h2>
			<div className="brands-slider mt-6  relative">
				<BrandsSlider brands={brands} />
			</div>
		</div>
	);
};

export default Brands;
