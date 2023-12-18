"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import BestSellSlider from "./BestSellSlider";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductCard from "@/components/cards/ProductCard";
import { useGetBestSellingProductsQuery } from "@/store/api/productBestSaleAPI";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";
const Lottie = dynamic(() => import("lottie-react"));
import fire from "@/public/assets/lottie/fire.json";
import SectionTitle from "@/components/elements/SectionTitle";
import { SeeAll } from "@/components/elements/buttons";

const BestSell = ({ translations }) => {
	const { locale } = useParams();
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { data, isLoading } = useGetBestSellingProductsQuery({
		locale,
	});

	const bestProducts = data?.data || [];

	return (
		<>
			<div className="container">
				<SectionTitle
					title={translations["best-selling-product"]}
					href="/products"
					buttonText={translations["see-all"]}
				>
					<Lottie animationData={fire} loop={true} className="h-8 w-8" />
				</SectionTitle>
			</div>
			<div className="bestSell-slider lg:mt-6 relative md:container">
				{isMobile ? (
					<HorizontalScrollView className={"space-x-2 py-0 px-3"}>
						{bestProducts.map((product, index) => (
							<ProductCard
								key={index}
								product={product}
								isLarge
								translations={translations}
							/>
						))}
					</HorizontalScrollView>
				) : (
					<BestSellSlider
						bestProducts={bestProducts}
						translations={translations}
					/>
				)}
			</div>
			<div className="container">
				<SeeAll href="/products" buttonText={translations["see-all"]} />
			</div>
		</>
	);
};

export default BestSell;
