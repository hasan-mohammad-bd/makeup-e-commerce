import ServiceFeatures from "@/components/ServiceFeatures";
import Intro from "@/components/Intro";
import FlashSale from "@/components/FlashSale";
import BestSell from "@/components/BestSell";
import NewArrival from "@/components/NewArrival";
import Brands from "@/components/Brands";
import Link from "next/link";
import VideoBanner from "@/components/elements/VideoBanner";
import FeaturedBanner from "@/components/FeaturedBanner";
import PopularCategories from "@/components/PopularCategories";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";
import HomeAllProducts from "@/components/HomeAllProducts";

export default function Home({ searchParams }) {
	return (
		<>
			<section className="bg-slate-100 lg:bg-white banner pt-16 lg:pt-0">
				<div className="bg-white py-3 lg:pt-5">
					<Intro />
				</div>
			</section>

			<section className="service-features mt-3">
				<ServiceFeatures />
			</section>

			<section className="flash-sale mt-28">
				<div className="container">
					<FlashSale />
				</div>
			</section>

			<section
				className="all-category py-14 mt-12"
				style={{
					backgroundImage: "linear-gradient(90deg, #00B7C9 0%, #00C999 100%)",
				}}
			>
				<div className="container">
					<div className="sec-heading w-full flex justify-between items-center">
						<h2 className="sec-title !text-white">জনপ্রিয় ক্যাটাগর‍ি</h2>
						<Link href="/categories" className="all-btn !text-white">
							সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="category-slider mt-12  relative">
						<PopularCategories />
					</div>
				</div>
			</section>

			<section className="best-sell bg-slate-50 mt-8 py-14">
				<BestSell />
			</section>

			<section className="banners pt-14">
				<div className="container">
					<FeaturedBanner />
				</div>
			</section>

			<section className="all-products pt-6 lg:pt-14">
				<HomeAllProducts />
			</section>

			<section className="new-products py-14">
				<NewArrival />
			</section>

			<VideoBanner />

			<section className="all-brands py-14">
				<Brands />
			</section>
		</>
	);
}
