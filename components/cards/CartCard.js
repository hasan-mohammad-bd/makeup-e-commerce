"use client";

import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import * as cartActions from "@/store/slices/cartSlice";
import noImage from "@/public/assets/images/no-image.png";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getDiscountPercent } from "@/utils/percent";

const CartCard = ({ item }) => {
	const {
		slug,
		brand,
		product_name,
		image,
		quantity,
		barcodeId,
		selectedBarCode,
		// sizes,
	} = item;

	const dispatch = useDispatch();
	return (
		<div className="relative cart-card p-3 lg:p-4 bg-white border border-slate-200 rounded-xl mb-3">
			<button
				className="absolute right-3 lg:right-4 top-2 lg:top-3 bg-transparent text-red-500"
				onClick={() => dispatch(cartActions.removeFromCart(barcodeId))}
			>
				<FiTrash2 />
			</button>
			<div className="grid grid-cols-[72px_auto] lg:grid-cols-[84px_auto] gap-3 lg:gap-4">
				<Image
					src={image || noImage}
					alt="product"
					height={84}
					width={84}
					className="h-[72px] w-[72px] lg:w-[84px] lg:h-[84px] rounded-lg"
				/>
				<div className="flex flex-col justify-between">
					<h5 className="text-primary text-xs">
						{brand?.brand_name || "No Brand"}
					</h5>
					<h2>
						<Link href={`/products/${slug}`} className="product-title">
							{product_name}
						</Link>
					</h2>
					<div className="flex gap-2 lg:gap-3 products-center items-center">
						<h3 className="text-base/[16px] lg:text-xl text-red-500">
							{siteConfig.currency.sign}{" "}
							{selectedBarCode.discount_selling_price}
						</h3>
						{selectedBarCode.discount_selling_price <
						selectedBarCode.selling_price ? (
							<>
								<del className="text-sm text-slate-300">
									{siteConfig.currency.sign} {selectedBarCode.selling_price}
								</del>
								<div className="rounded-md px-1 text-xs py-0.5 text-white bg-red-500">
									{getDiscountPercent(
										selectedBarCode.selling_price,
										selectedBarCode.discount_selling_price
									)}
									% OFF
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
			<div className="flex products-center justify-between items-center text-sm mt-2">
				<div className="flex products-center gap-3">
					{selectedBarCode.color && (
						<p className="px-2 py-[1px] text-sm h-6 border border-slate-300 rounded-md">
							{selectedBarCode?.color}
						</p>
					)}
					{selectedBarCode.size && (
						<p className="px-2 py-[1px] text-sm h-6 border border-slate-300 rounded-md">
							{selectedBarCode?.size}
						</p>
					)}
					{/* <div className="px-2 border border-slate-300 rounded">
                {sizes[0]?.color}
              </div>
              <div>
                <select className="bg-slate-50 bg-transparent border border-slate-300 text-slate-900 rounded focus:ring-primary focus:border-primary">
                  {sizes.map((s) => (
                    <option key={s.size} selected={s.id === variantId}>
                      {s.size}
                    </option>
                  ))}
                </select>
              </div> */}
				</div>
				<div className="flex items-center products-center gap-3 text-slate-900">
					<button
						disabled={quantity <= 1}
						className={`bg-transparent border ${
							quantity <= 1
								? "border-slate-300 cursor-not-allowed text-slate-300"
								: "border-primary"
						} rounded w-7 h-7`}
						onClick={() => dispatch(cartActions.removeQuantity(barcodeId))}
					>
						<FiMinus size={20} />
					</button>
					<div className="mx-1 text-base font-normal text-slate-900 font-title">
						{quantity || 1}
					</div>
					<button
						className="bg-transparent border border-primary rounded w-7 h-7"
						onClick={() => dispatch(cartActions.addQuantity(barcodeId))}
					>
						<FiPlus size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
