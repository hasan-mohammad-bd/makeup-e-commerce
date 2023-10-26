import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";

// Components
import Intro from "./_components/intro";
import Brands from "./_components/brands";
import BestSell from "./_components/best-sale";
import FlashSale from "./_components/flash-sale";
import NewArrival from "./_components/new-arrival";
import VideoBanner from "./_components/VideoBanner";
import FeaturedBanner from "./_components/FeaturedBanner";
import HomeAllProducts from "./_components/HomeAllProducts";
import ServiceFeatures from "./_components/service-features";
import PopularCategories from "./_components/popular-categories";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";
import SectionTitle from "@/components/SectionTitle";

export default async function Home() {
	const data = await fetchData({ api: "translations" });
	const translations = data?.data || {};
	// console.log(translations);

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
						<h2 className="sec-title !text-white capitalize">
							{translations["popular-category"]}
						</h2>
						<Link href="/categories" className="all-btn !text-white capitalize">
							{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<div className="category-slider mt-12  relative">
						<PopularCategories />
					</div>
				</div>
			</section>

			<section className="best-sell bg-slate-50 mt-8 py-14">
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
					<BestSell />
				</div>
			</section>

			<section className="banners pt-14">
				<div className="container">
					<FeaturedBanner />
				</div>
			</section>

			<section className="all-products pt-6 lg:pt-14">
				<div className="container">
					<div className="sec-heading w-full flex justify-between items-center lg:border-b border-slate-200 pb-3">
						<h2 className="sec-title capitalize">
							{translations["all-products"]}
						</h2>
						<Link
							href="/products"
							className="all-btn !hidden lg:!block capitalize"
						>
							{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
						</Link>
					</div>

					<HomeAllProducts />
					<Link
						href="/products"
						className="border-btn mt-3 lg:hidden capitalize"
					>
						{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
					</Link>
				</div>
			</section>

			<section className="new-products pt-6 lg:pt-14">
				<div className="container">
					<SectionTitle
						title={translations["new-in-shop"]}
						href="/products"
						buttonText={translations["see-all"]}
					/>
					<NewArrival />
					<Link
						href="/products"
						className="border-btn mt-3 lg:hidden capitalize"
					>
						{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
					</Link>
				</div>
			</section>

			<VideoBanner translations={translations} />

			<section className="all-brands py-14">
				<div className="container">
					<h2 className="sec-title text-center lg:text-left">
						{translations["our-brands"]}
					</h2>
					<div className="brands-slider mt-6  relative">
						<Brands />
					</div>
				</div>
			</section>
		</>
	);
}
