import Image from "next/image";
import BestSellSlider from "./elements/sliders/BestSell";
import { fetchData } from "@/utils/fetchData";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const BestSell = async () => {
	const [bestSaleRes, translationRes] = await Promise.allSettled([
		fetchData({ api: `product-bestsale` }),
		fetchData({ api: `translations` }),
	]);

	const bestProducts =
		bestSaleRes.status === "fulfilled" ? bestSaleRes.value?.data || [] : [];

	const translations =
		translationRes.status === "fulfilled"
			? translationRes.value?.data || {}
			: {};

	return (
		<>
			<div className="container">
				<div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
					<h2 className="sec-title">
						<Image
							src={`/assets/images/icons/fire-1.png`}
							alt="Fire"
							width={32}
							height={32}
							className="inline-block mr-1"
						/>
						{translations["best-selling-product"]}
					</h2>
					<Link href="/products" className="all-btn capitalize">
						{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
					</Link>
				</div>

				<div className="bestSell-slider mt-6 relative">
					<BestSellSlider bestProducts={bestProducts} />
				</div>
			</div>
		</>
	);
};

export default BestSell;
