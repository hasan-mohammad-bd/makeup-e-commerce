"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Timer from "@/components/elements/Timer";
import { HiArrowLongRight } from "react-icons/hi2";
import { useGetProductFlashSaleQuery } from "@/store/features/api/productFlashSaleAPI";
import FlashSaleSlider from "./FlashSaleSlider";

const FlashSale = ({ translations }) => {
	const { locale } = useParams();
	// const { translations } = useSelector((state) => state.common);
	const { data: flashSaleData, isLoading } = useGetProductFlashSaleQuery({
		locale,
	});
	const flashSaleInfo = flashSaleData?.flashSale || {};
	const saleProducts = flashSaleData?.data || [];
	if (flashSaleData?.status === false || isLoading || !flashSaleData)
		return null;

	return (
		<div className="relative">
			<div className="sec-heading absolute top-[-90px] lg:top-[-30px] left-0 w-full flex justify-center lg:justify-between items-center px-8">
				<div className="flex flex-col lg:flex-row gap-4 bg-white">
					<div className="text-center lg:text-left">
						<h2 className="sec-title">{flashSaleInfo?.title}</h2>
						<p>অফার চলবে আর মাত্র</p>
					</div>
					<Timer targetDate={flashSaleInfo?.expire_time} />
				</div>
				<Link href="/flash-sale" className="all-btn bg-white !hidden lg:!block">
					{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
				</Link>
			</div>

			<div className="flashSale-slider border border-primary rounded-2xl p-6 pt-16">
				<FlashSaleSlider saleProducts={saleProducts} />
			</div>
			<Link href="/flash-sale" className="border-btn mt-3 lg:hidden capitalize">
				{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
			</Link>
		</div>
	);
};

export default FlashSale;
