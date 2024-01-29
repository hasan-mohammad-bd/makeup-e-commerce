import React from "react";
import Image from "next/image";
import noImage from "@/public/assets/images/no-image.png";
import { Link } from "@/navigation";

export default function BrandCard({ brand }) {
	return (
		<Link
			href={`/products?brand_ids=${brand.id}`}
			className="inline-block border-slate-300 hover:border-primary rounded-xl border p-2.5"
		>
			<div className="h-[96px] w-[96px] lg:h-[118px] lg:w-[118px] flex items-center justify-center rounded-lg">
				<Image
					src={brand.brand_image || noImage}
					alt={brand.brand_name}
					width={118}
					height={118}
					className="w-full h-full object-contain rounded-lg"
				/>
			</div>
		</Link>
	);
}
