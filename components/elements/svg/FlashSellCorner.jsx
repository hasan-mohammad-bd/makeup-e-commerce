import React from "react";
import { useSelector } from "react-redux";

const FlashSellCorner = () => {
	const { translations } = useSelector((state) => state.common);
	return (
		<div className="rounded-l-3xl relative">
			<div className="absolute top-3 text-[14px] md:text-[16px] left-4 z-3 text-white font-bold">
				{" "}
				{translations["flash-sale"] || "ফ্ল্যাশ সেল"}
			</div>
			<svg
				width="124"
				height="48"
				viewBox="0 0 124 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Rectangle 4404"
					d="M0 0H124L95.3846 48H0V0Z"
					fill="url(#paint0_linear_634_14542)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_634_14542"
						x1="-3.50943"
						y1="24"
						x2="124"
						y2="24"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#EF4444" />
						<stop offset="1" stopColor="#F99104" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default FlashSellCorner;
