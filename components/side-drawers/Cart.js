"use client";
import DrawerRight from "@/components/elements/DrawerRight";
import { toggleCart } from "@/store/slices/cartSlice";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../CartCard";
import { FiPlus } from "react-icons/fi";
import { getMultipliedColumnTotal } from "@/utils/total";

const Cart = () => {
	const { isCartOpen, cart } = useSelector((state) => state.cart);
	const { settings, translations } = useSelector((state) => state.common);
	// console.log(settings);
	const dispatch = useDispatch();
	const closeCart = () => {
		dispatch(toggleCart());
	};

	return (
		<DrawerRight
			title={`${translations["cart-list"]} (${cart.length} ${translations["items"]})`}
			show={isCartOpen}
			setShow={closeCart}
		>
			{settings?.free_delivery_charges_limit ? (
				<div
					style={{
						background: "linear-gradient(90deg, #EF4444 -2.83%, #F99104 100%)",
					}}
					className="p-3 lg:p-4 text-white text-xs/[100%] lg:text-sm"
				>
					{settings?.free_delivery_charges_limit} টাকার উপের অর্ডার করেল
					ডেলিভারি চার্জ ফ্রী! সারাদেশে ক্যাশ অন ডেলিভারি।
				</div>
			) : null}
			<div className="px-3 py-4 lg:p-8 flex flex-col h-[77%]">
				<div className="overflow-y-auto">
					{cart.map((item) => (
						<CartCard key={item.id} item={item} />
					))}

					<div className="my-5 lg:my-8 text-center">
						<Link
							href="/products"
							onClick={closeCart}
							className="text-secondary-700 text-sm lg:text-lg/[26px] font-semibold text-center"
						>
							<FiPlus size={20} className="mr-1" />
							{translations["shop-more"] || "আরো শপিং করুন"}
						</Link>
					</div>
				</div>
			</div>
			<div className="fixed left-0 bottom-0 w-full px-3 py-4 lg:px-8 lg:py-4 bg-slate-50 border-t border-slate-200 flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between lg:items-center">
				<div className="flex lg:block justify-between items-center lg:text-center">
					<p className="">{translations["total"]}:</p>
					<h3 className="text-slate-900 font-bold">
						{`৳ ${getMultipliedColumnTotal(cart, "quantity", "new_price")}`}
					</h3>
				</div>
				<Link
					href={"/checkout"}
					onClick={closeCart}
					className="bg-primary py-3 px-6 w-full lg:w-[276px] text-white rounded-lg text-center active:scale-95"
				>
					<span className="mr-2">{translations["buy-now"]}</span>
					<HiArrowLongRight size={20} />
				</Link>
			</div>
		</DrawerRight>
	);
};

export default Cart;
