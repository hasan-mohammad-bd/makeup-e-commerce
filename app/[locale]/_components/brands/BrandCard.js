import React from "react";
import Image from "next/image";
import noImage from "@/public/assets/images/no-image.png";

export default function BrandCard({ brand }) {
	return (
		<div className="inline-block border-slate-300 rounded-xl border p-3 lg:p-2">
			<div className="h-[96px] lg:h-[118px] w-[96px] lg:w-[118px] flex items-center justify-center">
				<Image
					src={brand.brand_image || noImage}
					alt={brand.title}
					width={118}
					height={118}
					className="w-full object-contain"
				/>
			</div>
		</div>
	);
}
