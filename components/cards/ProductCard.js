"use client";

import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useState } from "react";
import Loader from "../elements/loaders/Loader";
import { siteConfig } from "@/config/site";
import { getDiscountPercent, getSalePercent } from "@/utils/percent";
import { getDaysSinceCreation } from "@/utils/format-date";
import { formatLongNumber, getFractionFixed } from "@/utils/format-number";
import useCart from "@/hooks/useCart";
import useWishList from "@/hooks/useWishList";

// ** Import Icon
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProductCard = ({ product, isFlashSale, isLarge, translations = {} }) => {
	const { handleAddToCart, handleAddAndCheckout } = useCart(); //custom hook for reusing
	const { handleAddToWishlist } = useWishList(); //custom hook for reusing
	const [loading, setLoading] = useState(true);

	const {
		id,
		slug,
		image,
		product_name,
		brand,
		average_rating,
		total_rating,
		new_price,
		old_price,
		stock_qty,
		total_sale_qty,
		created_at,
	} = product;

	useEffect(() => {
		if (Object.keys(product).length !== 0) {
			setLoading(false);
		}
	}, [product]);

	return (
		<>
			{!loading ? (
				<>
					<div
						className={twMerge(
							`min-w-[166px] bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-md md:w-auto relative`,
							isLarge ? "w-[200px]" : "w-auto h-full",
							isFlashSale ? "pb-[84px]" : "pb-8"
						)}
					>
						<div className="product-img-action-wrap relative">
							{getDaysSinceCreation(created_at) < 8 && (
								<div className="absolute top-3 left-3 z-20">
									<span className="bg-secondary-700 text-sm px-2 rounded-full text-white">
										{translations["new"] || "নতুন"}
									</span>
								</div>
							)}
							<div className="absolute top-3 right-3 z-20">
								<button
									aria-label="Add To Wishlist"
									className="action-btn"
									onClick={(e) => handleAddToWishlist(id)}
								>
									<HiOutlineHeart />
								</button>
							</div>
							<div className="product-img p-2 pb-0">
								<Link href="/products/[slug]" as={`/products/${slug}`}>
									<Image
										className={`default-img ${
											isLarge ? "h-[196px] w-[192px]" : "h-[158px] w-full"
										} md:h-[220px]  md:w-[220px] rounded-lg`}
										src={image || "/assets/images/no-image.png"}
										alt={product_name}
										width={226}
										height={226}
										// priority={true}
									/>
								</Link>
							</div>
						</div>
						<div className="product-content-wrap p-3">
							<div className="product-category">
								<span
									// href={`/brands/${brand?.id ? brand?.id : ""}`}
									className="text-xs text-primary capitalize"
								>
									{brand?.brand_name || "No Brand"}
								</span>
							</div>
							<h2 className="product-title !line-clamp-2 lg:!line-clamp-1">
								<Link href={`/products/${slug}`}>{product_name}</Link>
							</h2>
							<div className="product-rating">
								<span className="font-semibold text-slate-900">
									{getFractionFixed(average_rating) || 5}{" "}
									<FaStar className="text-primary pb-1" />
								</span>
								<span className="block border-l border-l-slate-200 pl-2 font-semibold text-slate-900">
									{total_rating === 0 ? 0 : formatLongNumber(total_rating)}
								</span>
							</div>
							<div
								className={`product-price mb-3 flex  justify-start ${
									isLarge ? "items-center" : "flex-col items-start"
								} lg:flex-row gap-1`}
							>
								<span className="text-base/4 lg:text-lg/[24px] font-semibold text-red-500">
									{siteConfig.currency.sign}
									{new_price}
								</span>
								{old_price > new_price ? (
									<div className="flex items-center gap-2">
										<del className="old-price text-sm lg:text-lg/[24px] font-normal text-slate-400">
											{siteConfig.currency.sign}
											{old_price}
										</del>
										<span className="discount-badge ml-1">
											{getDiscountPercent(old_price, new_price)}% OFF
										</span>
									</div>
								) : null}
							</div>
						</div>
						<div className="actions absolute bottom-3 w-full px-3">
							<div
								className="product-actions flex items-center gap-2"
								onClick={(e) => e.stopPropagation()}
							>
								<button
									aria-label="Add To Cart"
									className="action-btn"
									onClick={(e) => handleAddToCart(product)}
								>
									<HiOutlineShoppingCart
										size={24}
										className="active:scale-90"
									/>
								</button>
								<button
									onClick={() => handleAddAndCheckout(product)}
									className="buy-btn flex-center gap-1"
								>
									{translations["buy-now"] || "এখনই কিনুন"}
									<div className="hidden lg:block">
										<HiOutlineArrowNarrowRight
											className="hidden lg:block"
											size={20}
										/>
									</div>
								</button>
							</div>
							{isFlashSale && (
								<div className="product-flash-counter mt-4">
									<div className=" flex items-center gap-3">
										<div className="w-full h-[6px] bg-gray-200 rounded">
											<div
												className="h-[6px] bg-secondary-700 rounded"
												style={{
													width: `${getSalePercent(
														total_sale_qty,
														stock_qty
													)}%`,
												}}
											></div>
										</div>
										{/* <h3>{getSalePercent(total_sale_qty, stock_qty)}%</h3> */}
									</div>
									<div className="flex-between mt-3 text-xs">
										<h3>
											{translations["sold"] || "বিক্রি"}:{" "}
											<span className="font-bold">{total_sale_qty}</span>
										</h3>
										<h3>
											{translations["in-stock"] || "বাকি"}:{" "}
											<span className="font-bold">{stock_qty}</span>
										</h3>
									</div>
								</div>
							)}
						</div>
					</div>
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default ProductCard;
