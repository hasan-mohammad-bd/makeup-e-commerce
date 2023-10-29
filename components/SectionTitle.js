import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

export default function SectionTitle({
	title,
	href,
	buttonText = "See All",
	children,
}) {
	return (
		<div className="sec-heading w-full flex justify-between items-center lg:border-b border-slate-200 pb-3">
			<h2 className="sec-title capitalize">
				{children}
				{title}
			</h2>
			{href && (
				<Link href={href} className="all-btn !hidden lg:!block capitalize">
					{buttonText} <HiArrowLongRight size={24} />{" "}
				</Link>
			)}
		</div>
	);
}
