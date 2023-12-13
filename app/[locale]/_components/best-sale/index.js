"use client";
import { useParams } from "next/navigation";
import BestSellSlider from "./BestSellSlider";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductCard from "@/components/cards/ProductCard";
import { useGetBestSellingProductsQuery } from "@/store/api/productBestSaleAPI";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";

const BestSell = ({ translations }) => {
	const { locale } = useParams();
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { data, isLoading } = useGetBestSellingProductsQuery({
		locale,
	});

	const bestProducts = data?.data || [];

	return (
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
	);
};

export default BestSell;
