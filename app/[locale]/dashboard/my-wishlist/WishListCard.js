"use client";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import noImage from "@/public/assets/images/no-image.png";
import useCart from "@/hooks/useCart";
import useWishList from "@/hooks/useWishList";
import { siteConfig } from "@/config/site";
import { getDiscountPercent } from "@/utils/percent";

const WishListCard = ({ product }) => {
	const { handleAddToCart } = useCart(); //custom hook for reusing
	const { handleRemoveFromWishlist } = useWishList(); //custom hook for reusing
	const { id, slug, brand, product_name, new_price, old_price, stock_qty } =
		product;

	const stockOut = stock_qty <= 0 ? true : false;

	return (
		<div className="relative px-3 py-4 bg-white border border-slate-200 rounded-xl mb-3">
			<button
				className="absolute right-1.5 top-1 bg-transparent text-red-500"
				onClick={() => handleRemoveFromWishlist(id)}
			>
				<FiTrash2 />
			</button>
			<div className={`flex gap-4`}>
				<div className="relative">
					<Image
						src={product.image || noImage}
						alt="product"
						height={80}
						width={96}
						className={`${stockOut ? "opacity-50" : ""} w-24 h-20`}
					/>
					{stockOut ? (
						<div className="w-full h-full rounded absolute left-0 top-0 flex items-center justify-center">
							<span className="text-red-500 rounded-lg bg-red-100 px-2 py-1 font-bold">
								স্টক শেষ
							</span>
						</div>
					) : null}
				</div>
				<div className="flex flex-col justify-between w-full">
					<span
						// href={`/brands/${brand?.id}`}
						className={`text-primary ${stockOut ? "opacity-50" : ""}`}
					>
						{brand?.brand_name || "No Brand"}
					</span>
					<Link
						href={`/products/${slug}`}
						className={`${
							stockOut ? "opacity-50" : ""
						} product-title overflow-text`}
					>
						{product_name}
					</Link>
					<div className="flex justify-between items-center">
						<div
							className={`flex gap-3 products-center items-center ${
								stockOut ? "opacity-50" : ""
							}`}
						>
							<h3 className="text-xl text-red-500">
								{siteConfig.currency.sign} {new_price}
							</h3>
							{old_price > new_price ? (
								<>
									<del className="text-xl text-slate-300">
										{siteConfig.currency.sign} {old_price}
									</del>
									<div className="rounded-md px-2 py-1 text-sm text-white bg-red-500">
										{getDiscountPercent(old_price, new_price)}% OFF
									</div>
								</>
							) : null}
						</div>
						{!stockOut ? (
							<button
								className="bg-secondary-700 py-2 px-3 text-white rounded-lg text-center active:scale-95"
								onClick={() => handleAddToCart(product)}
							>
								<HiOutlineShoppingCart size={16} />
								<span className="ml-2">কার্টে রাখুন</span>
							</button>
						) : (
							<Link
								href={"/products"}
								className="text-secondary-700 font-bold border border-secondary-700 py-2 px-3 rounded-lg active:scale-95 cursor-pointer"
							>
								সিমিলার খুঁজুন
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishListCard;
