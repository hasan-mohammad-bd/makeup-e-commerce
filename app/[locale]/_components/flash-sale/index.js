"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Timer from "@/components/elements/Timer";
import { HiArrowLongRight } from "react-icons/hi2";
import { useGetProductFlashSaleQuery } from "@/store/api/productFlashSaleAPI";
import FlashSaleSlider from "./FlashSaleSlider";
import { SeeAll } from "@/components/elements/buttons";

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
		<section className="flash-sale mt-28">
			<div className="container">
				<div className="relative">
					<div className="sec-heading absolute top-[-95px] lg:top-[-30px] left-0 w-full flex justify-center lg:justify-between items-center px-8">
						<div className="flex flex-col lg:flex-row gap-4 bg-white px-3 lg:px-0">
							<div className="text-center lg:text-left">
								<h2 className="sec-title">{flashSaleInfo?.title}</h2>
								<p>{translations["the-offer-will-only-last"]}</p>
							</div>
							<Timer targetDate={flashSaleInfo?.expire_time} />
						</div>
						<Link
							href="/flash-sale"
							className="all-btn bg-white !hidden lg:!block"
						>
							{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="flashSale-slider border border-primary rounded-2xl p-6 pt-16">
						<FlashSaleSlider saleProducts={saleProducts} />
					</div>
					<SeeAll href="/flash-sale" buttonText={translations["see-all"]} />
				</div>
			</div>
		</section>
	);
};

export default FlashSale;
