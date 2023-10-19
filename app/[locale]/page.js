import Image from "next/image";

import ServiceFeatures from "@/components/ServiceFeatures";
import Intro from "@/components/Intro";
import FlashSale from "@/components/FlashSale";
import BestSell from "@/components/BestSell";
import AllProducts from "@/components/products/AllProducts";
import NewArrival from "@/components/NewArrival";
import Brands from "@/components/Brands";
import Link from "next/link";
import VideoBanner from "@/components/elements/VideoBanner";
import FeaturedBanner from "@/components/FeaturedBanner";
import PopularCategories from "@/components/PopularCategories";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";

export default function Home({ searchParams }) {
	return (
		<>
			<section className="bg-slate-100 lg:bg-white banner pt-12 lg:pt-0">
				<div className="container py-8">
					<Intro />
				</div>
			</section>

			<section className="service-features">
				<div className="container">
					<ServiceFeatures />
				</div>
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

			<section className="best-sell bg-slate-50 py-14">
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
							বেস্ট সেলিং প্রডাক্ট
						</h2>
						<Link href="/products" className="all-btn">
							সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="bestSell-slider mt-6 relative">
						<BestSell />
					</div>
				</div>
			</section>

			<section className="banners pt-14">
				<div className="container">
					<FeaturedBanner />
				</div>
			</section>

			<section className="all-products py-14">
				<div className="container">
					<div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
						<h2 className="sec-title">সকল প্রডাক্ট</h2>
						<Link href="/products" className="all-btn">
							সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="bestSell-slider mt-6">
						<AllProducts customSearchParams={searchParams} pagination={true} />
					</div>
				</div>
			</section>

			<section className="new-products py-14">
				<div className="container">
					<div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
						<h2 className="sec-title">শপে নতুন এসেছে</h2>
						<Link href="/products" className="all-btn">
							সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="new-slider mt-6  relative">
						<NewArrival />
					</div>
				</div>
			</section>

			<VideoBanner />

			<section className="all-brands py-14">
				<div className="container">
					<div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
						<h2 className="sec-title">আমাদের ব্র্যান্ড সমূহ</h2>
						<Link href="/brands" className="all-btn">
							সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="brands-slider mt-6  relative">
						<Brands />
					</div>
				</div>
			</section>
		</>
	);
}
