import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/lib/fetch-data";
import noImage from "@/public/assets/images/no-image.png";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";
const FeaturedBanner = async () => {
	const { data: featuredBanner = [] } = await fetchData({ api: "banners" });
	if (!featuredBanner?.length) return null;
	// console.log(featuredBanner);
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
				<div className="relative">
					<div className="banner-img">
						<Image
							src={featuredBanner[0].image || noImage}
							alt="Banner"
							width={0}
							height={0}
							sizes="100vw"
							className="w-full h-auto rounded-2xl"
						/>
					</div>
					<div className="absolute bottom-4 lg:bottom-11 left-1/2 -translate-x-[60px]">
						<Link
							href={featuredBanner[0].url || "/"}
							className="text-center block w-max text-base font-semibold font-title text-white bg-primary px-4 py-3 rounded-lg"
						>
							এখুনি কিনুন <HiArrowLongRight size={20} />
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-4 lg:gap-6">
					<div className="col-span-2">
						<div className="mb-4">
							<Link href={featuredBanner[1]?.url || "/"} className="banner-img">
								<Image
									src={featuredBanner[1]?.image || noImage}
									alt="Banner"
									width={80}
									height={142}
									sizes="100vw"
									className="w-full h-auto rounded-2xl"
								/>
							</Link>
						</div>

						<div>
							<Link href={featuredBanner[2]?.url || "/"} className="banner-img">
								<Image
									src={featuredBanner[2]?.image || noImage}
									alt="Banner"
									width={80}
									height={142}
									sizes="100vw"
									className="w-full h-auto rounded-2xl"
								/>
							</Link>
						</div>
					</div>
					<div className="col-span-1">
						<Link href={featuredBanner[3]?.url || "/"} className="banner-img">
							<Image
								src={featuredBanner[3]?.image || noImage}
								alt="Banner"
								width={0}
								height={0}
								sizes="100vw"
								className="w-full h-auto"
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedBanner;
