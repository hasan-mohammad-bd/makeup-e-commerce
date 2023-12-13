"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";
import NewArrivalSlider from "./NewArrivalSlider";
import ProductVerticalCard from "@/components/cards/ProductVerticalCard";

export default function NewArrivalViewSelector({ productsChunks }) {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<>
			{isMobile ? (
				<HorizontalScrollView className={"space-x-2 px-3 py-0 items-start"}>
					{productsChunks?.map((product, i) => (
						<div key={i}>
							{product.map((product, i) => (
								<div key={i} className="mb-2">
									<ProductVerticalCard product={product} />
								</div>
							))}
						</div>
					))}
				</HorizontalScrollView>
			) : (
				<NewArrivalSlider productsChunks={productsChunks} />
			)}
		</>
	);
}
