import Link from "next/link";
import NewArrivalSlider from "./elements/sliders/NewArrivalSlider";
import { fetchData } from "@/utils/fetchData";
import { HiArrowLongRight } from "react-icons/hi2";

const NewArrival = async () => {
	// const data = await fetchData({ api: "product-latest" });
	// const newProducts = data?.data || [];

	const [newProductRes, translationRes] = await Promise.allSettled([
		fetchData({ api: `product-latest` }),
		fetchData({ api: `translations` }),
	]);

	const newProducts =
		newProductRes.status === "fulfilled" ? newProductRes.value?.data || [] : [];
	const translations =
		translationRes.status === "fulfilled"
			? translationRes.value?.data || {}
			: {};

	return (
		<>
			<div className="container">
				<div className="sec-heading w-full flex justify-between items-center lg:border-b border-slate-200 pb-3">
					<h2 className="sec-title capitalize">
						{translations["new-in-shop"]}
					</h2>
					<Link
						href="/products"
						className="all-btn !hidden lg:!block capitalize"
					>
						{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
					</Link>
				</div>

				<div className="new-slider mt-4 lg:mt-6  relative">
					<NewArrivalSlider newProducts={newProducts} />
				</div>
				<Link href="/products" className="border-btn mt-3 lg:hidden capitalize">
					{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
				</Link>
			</div>
		</>
	);
};

export default NewArrival;
