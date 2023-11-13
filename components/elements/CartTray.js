"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/slices/cartSlice";
import { getMultipliedColumnTotal } from "@/utils/total";
import { siteConfig } from "@/config/site";
import cartImage from "@/public/assets/images/cart.gif";
// import dynamic from "next/dynamic";
// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
// 	ssr: false,
// });

const CartTray = () => {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleCart = () => {
		dispatch(toggleCart());
	};

	return (
		<>
			<div
				className="cart fixed top-1/2 right-0 cursor-pointer z-40 hidden md:block"
				onClick={handleCart}
			>
				<div className="icon bg-white border border-r-0 border-primary rounded-ss-lg px-1 text-center">
					<Image
						src={cartImage}
						width={56}
						height={56}
						alt="Cart Icon"
						className="p-1 h-14 w-14"
					/>
				</div>
				<div className="content rounded-es-lg text-center">
					<p className="text-xs text-white">{cart?.length} আইটেম</p>
					<div className="text-xs font-semibold text-white flex items-center justify-center">
						<span className="mr-1">{siteConfig.currency.sign}</span>
						{/* <AnimatedNumbers
							animateToNumber={20000}
							includeComma
							// fontStyle={{ fontSize: 32 }}
							locale="en-US"
							configs={(number, index) => {
								return { mass: 1, tension: 230 * (index + 1), friction: 140 };
							}}
							// configs={[
							//   { mass: 1, tension: 220, friction: 100 },
							//   { mass: 1, tension: 180, friction: 130 },
							//   { mass: 1, tension: 280, friction: 90 },
							//   { mass: 1, tension: 180, friction: 135 },
							//   { mass: 1, tension: 260, friction: 100 },
							//   { mass: 1, tension: 210, friction: 180 },
							// ]}
						></AnimatedNumbers> */}
						{getMultipliedColumnTotal(cart, "quantity", "new_price")}
					</div>
				</div>
			</div>
		</>
	);
};

export default CartTray;
