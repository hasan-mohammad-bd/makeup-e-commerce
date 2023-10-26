import NewArrivalSlider from "./NewArrivalSlider";
import { fetchData } from "@/utils/fetchData";

const NewArrival = async () => {
	const data = await fetchData({ api: "product-latest" });
	const newProducts = data?.data || [];

	return (
		<div className="new-slider mt-4 lg:mt-6  relative">
			<NewArrivalSlider newProducts={newProducts} />
		</div>
	);
};

export default NewArrival;
