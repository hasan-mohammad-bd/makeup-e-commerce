import dynamic from "next/dynamic";
import { fetchData } from "@/lib/fetch-data";
const BrandsViewSelector = dynamic(() => import("./BrandsViewSelector"), {
	ssr: false,
});

const Brands = async () => {
	const data = await fetchData({ api: "brands" });
	const brands = data?.data || [];

	return <BrandsViewSelector brands={brands} />;
};
export default Brands;
