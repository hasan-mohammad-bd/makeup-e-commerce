import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/lib/fetch-data";

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
import SectionTitle from "@/components/elements/SectionTitle";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";
import { SeeAll } from "@/components/elements/buttons";

export default async function Home() {
	const data = await fetchData({ api: "translations" });
	const translations = data?.data || {};
	// console.log(translations);

	return (
		<>
			<section className="banner">
				<div className="bg-white pt-3 lg:pt-5">
					<Intro />
				</div>
			</section>

			<section className="service-features mt-3 lg:mt-5">
				<ServiceFeatures />
			</section>

			<FlashSale translations={translations} />

			<section className="lg:pb-14 mt-6 lg:mt-12 relative">
				<div
					className="all-category py-4 lg:py-14"
					style={{
						backgroundImage: "linear-gradient(90deg, #00B7C9 0%, #00C999 100%)",
					}}
				>
					<div className="container">
						<div className="sec-heading w-full flex justify-between items-center">
							<h2 className="sec-title !text-white capitalize">
								{translations["popular-category"] || "জনপ্রিয় ক্যাটাগর‍ি"}
							</h2>
							<Link
								href="/categories"
								className="all-btn !text-white capitalize !hidden lg:!block"
							>
								{translations["see-all"] || "সবগুলো  দেখুন"}{" "}
								<HiArrowLongRight size={24} />{" "}
							</Link>
						</div>

						<div className="mt-6 lg:mt-10">
							<PopularCategories />
						</div>
						<SeeAll
							href="/products"
							buttonText={translations["see-all"]}
							invert={true}
						/>
					</div>
				</div>
			</section>

			<section className="best-sell bg-slate-50 mt-8 lg:mt-0 py-6 lg:pb-14">
				<div className="container">
					<SectionTitle
						title={translations["best-selling-product"]}
						href="/products"
						buttonText={translations["see-all"]}
					>
						<Image
							src={`/assets/images/icons/fire-1.png`}
							alt="Fire"
							width={32}
							height={32}
							className="inline-block mr-1"
						/>
					</SectionTitle>
					<BestSell />
				</div>
			</section>

			<section className="banners pt-6 lg:pt-14">
				<div className="container">
					<FeaturedBanner />
				</div>
			</section>

			<section className="all-products pt-6 lg:pt-14">
				<div className="container">
					<SectionTitle
						title={translations["all-products"]}
						href="/products"
						buttonText={translations["see-all"]}
					/>
					<HomeAllProducts />
					<SeeAll href="/products" buttonText={translations["see-all"]} />
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
					<SeeAll href="/products" buttonText={translations["see-all"]} />
				</div>
			</section>

			<section className="mt-6 lg:mt-14">
				<VideoBanner translations={translations} />
			</section>

			<section className="all-brands py-6 lg:py-14">
				<div className="container">
					<SectionTitle title={translations["our-brands"]} />
					<div className="brands-slider mt-6  relative">
						<Brands />
					</div>
				</div>
			</section>
		</>
	);
}
