import { fetchData } from "@/lib/fetch-data";
import BestSellSlider from "./BestSellSlider";

const BestSell = async () => {
	const data = await fetchData({ api: "product-bestsale" });
	const bestProducts = data?.data || [];

	return (
		<div className="bestSell-slider mt-6 relative">
			<BestSellSlider bestProducts={bestProducts} />
		</div>
	);
};

export default BestSell;
