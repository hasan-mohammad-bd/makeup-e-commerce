import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

export default function SectionTitle({
	title,
	href = "/",
	buttonText = "See All",
}) {
	return (
		<div className="sec-heading w-full flex justify-between items-center lg:border-b border-slate-200 pb-3">
			<h2 className="sec-title capitalize">{title}</h2>
			<Link href={href} className="all-btn !hidden lg:!block capitalize">
				{buttonText} <HiArrowLongRight size={24} />{" "}
			</Link>
		</div>
	);
}
