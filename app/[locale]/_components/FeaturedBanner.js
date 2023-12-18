import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/lib/fetch-data";
import noImage from "@/public/assets/images/no-image.png";

const FeaturedBanner = async () => {
	const { data: featuredBanner = [] } = await fetchData({ api: "banners" });
	if (!featuredBanner?.length) return null;
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
				<Link href={featuredBanner[0].url || "/"} className="block relative">
					<Image
						src={featuredBanner[0].image || noImage}
						alt="Banner"
						width={0}
						height={0}
						sizes="100vw"
						className="w-full h-auto rounded-2xl"
					/>
				</Link>

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
