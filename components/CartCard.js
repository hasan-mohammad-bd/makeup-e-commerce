"use client";

import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import * as cartActions from "@/store/features/cartSlice";
import noImage from "@/public/assets/images/no-image.png";
import { getFractionFixed } from "@/utils/formatNumber";
import Link from "next/link";

const CartCard = ({ item }) => {
	const {
		slug,
		brand,
		product_name,
		new_price,
		old_price,
		image,
		// productVariants,
		discount_percentage,
		quantity,
		cartId,
		variantId,
		selectedVariant,
		// sizes,
	} = item;

	const dispatch = useDispatch();
	return (
		<div className="relative cart-card p-3 lg:p-4 bg-white border border-slate-200 rounded-xl mb-3">
			<button
				className="absolute right-3 lg:right-4 top-2 lg:top-3 bg-transparent text-red-500"
				onClick={() => dispatch(cartActions.removeFromCart(cartId))}
			>
				<FiTrash2 />
			</button>
			<div className="flex gap-2">
				<Image
					src={image || noImage}
					alt="product"
					height={80}
					width={80}
					className="h-[72px] lg:h-20 w-[72px] lg:w-20 rounded-lg"
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
							৳ {new_price}
						</h3>
						{typeof discount_percentage === "number" &&
						discount_percentage > 0 ? (
							<>
								<del className="text-sm text-slate-300">৳ {old_price}</del>
								<div className="rounded-md px-1 text-xs py-0.5 text-white bg-red-500">
									{getFractionFixed(discount_percentage)}% OFF
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
			<div className="flex products-center justify-between text-sm mt-2">
				<div className="flex products-center gap-3">
					{variantId ? (
						<>
							<div className="px-2 border border-slate-300 rounded-md">
								{selectedVariant?.color}
							</div>
							<div className="px-2 border border-slate-300 rounded-md">
								{selectedVariant?.size}
							</div>
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
						</>
					) : null}
				</div>
				<div className="flex items-center products-center gap-3 text-slate-900">
					<button
						className="bg-transparent border border-primary rounded px-1"
						onClick={() => dispatch(cartActions.removeQuantity(cartId))}
					>
						<FiMinus />
					</button>
					<div className="mx-1 font-bold">{quantity || 1}</div>
					<button
						className="bg-transparent border border-primary rounded px-1"
						onClick={() => dispatch(cartActions.addQuantity(cartId))}
					>
						<FiPlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
