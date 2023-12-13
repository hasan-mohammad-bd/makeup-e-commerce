import { fetchData } from "@/lib/fetch-data";
import dynamic from "next/dynamic";
import { getChunksList } from "@/utils/format-list";

const NewArrivalViewSelector = dynamic(
	() => import("./NewArrivalViewSelector"),
	{
		ssr: false,
	}
);

const NewArrival = async () => {
	const data = await fetchData({ api: "product-latest" });
	const newProducts = data?.data || [];
	const productsChunks = getChunksList(newProducts, 2);

	return (
		<div className="new-slider mt-4 lg:mt-6  relative">
			<NewArrivalViewSelector productsChunks={productsChunks} />
		</div>
	);
};

export default NewArrival;
