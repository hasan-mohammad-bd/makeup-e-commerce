"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "../elements/loaders/Loader";
import { formatLongNumber, getFractionFixed } from "@/utils/format-number";

// ** Import Icon
import { FaStar } from "react-icons/fa";
import { siteConfig } from "@/config/site";
// import { getDaysSinceCreation } from "@/utils/formatDate";

const ProductVerticalCard = ({ product }) => {
	const [loading, setLoading] = useState(true);

	const {
		slug,
		image,
		product_name,
		brand,
		averate_rating,
		total_rating,
		new_price,
		old_price,
		discount_percentage,
		created_at,
	} = product;

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) return <Loader />;

	return (
		<div
			className={`product-card-wrap grid grid-cols-[99px_auto] lg:grid-cols-[116px_auto] items-center bg-white border border-slate-200 rounded-xl w-[298px] lg:w-full p-3 lg:p-4 gap-3 lg:gap-4`}
		>
			<div className="product-img relative h-[99px] lg:h-[116px]">
				{/* {getDaysSinceCreation(created_at) < 8 && (
					<div className="absolute top-0 left-0 z-20">
						<span className="bg-secondary-700 text-sm px-2 rounded-full text-white">
							নতুন
						</span>
					</div>
				)} */}
				<Link href="/products/[slug]" as={`/products/${slug}`}>
					<Image
						src={image || "/assets/images/no-image.png"}
						alt={`product`}
						width={116}
						height={116}
						// priority={true}
						className="h-full w-full object-cover"
					/>
				</Link>
			</div>
			<div className="product-content-wrap">
				<div className="product-category">
					<span
						// href={`/brands/${brand?.id ? brand?.id : ""}`}
						className="text-xs text-primary capitalize"
					>
						{brand?.brand_name || "No Brand"}
					</span>
				</div>

				<h2>
					<Link href={`/products/${slug}`} className="product-title">
						{product_name}
					</Link>
				</h2>
				<div className="product-rating">
					<span className="font-semibold text-slate-900">
						{getFractionFixed(averate_rating) || 0}{" "}
						<FaStar className="text-primary pb-1" />
					</span>
					<span className="block border-l border-l-slate-200 pl-2 font-semibold text-slate-900">
						{total_rating === 0 ? "No Rating" : formatLongNumber(total_rating)}
					</span>
				</div>
				<div className="product-price text-sm flex items-center gap-2">
					<span className="text-base/4 lg:text-lg/[24px] font-semibold text-red-500">
						{siteConfig.currency.sign}
						{new_price}
					</span>
					{typeof discount_percentage === "number" &&
					discount_percentage > 0 ? (
						<>
							<del className="old-price text-base/4 lg:text-lg/[24px] font-normal text-slate-400">
								{siteConfig.currency.sign}
								{old_price}
							</del>
							<span className="discount inline-block !text-xs text-white bg-red-500 rounded-md py-0.5 lg:py-1 px-1 ml-2">
								-{getFractionFixed(discount_percentage)}%
							</span>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProductVerticalCard;
