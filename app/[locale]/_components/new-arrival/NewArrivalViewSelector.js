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
					{productsChunks?.map((chunk, index) => (
						<div
							key={index}
							className={`flex flex-col gap-2 justify-center items-start`}
						>
							{chunk.map((product, chunkIndex) => (
								<div key={chunkIndex}>
									<ProductVerticalCard product={product} />
								</div>
							))}
						</div>
					))}
				</HorizontalScrollView>
			) : (
				<div className="container relative">
					<NewArrivalSlider productsChunks={productsChunks} />
				</div>
			)}
		</>
	);
}
