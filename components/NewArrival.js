import Link from "next/link";
import NewArrivalSlider from "./elements/sliders/NewArrivalSlider";
import { fetchData } from "@/utils/fetchData";
import { HiArrowLongRight } from "react-icons/hi2";

const NewArrival = async () => {
	const data = await fetchData({ api: "product-latest" });
	const newProducts = data?.data || [];

	return (
		<>
			<div className="container">
				<div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
					<h2 className="sec-title">শপে নতুন এসেছে</h2>
					<Link href="/products" className="all-btn">
						সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
					</Link>
				</div>

				<div className="new-slider mt-6  relative">
					<NewArrivalSlider newProducts={newProducts} />
				</div>
			</div>
		</>
	);
};

export default NewArrival;
