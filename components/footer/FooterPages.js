"use client";
import React, { useState } from "react";
import { Link } from "@/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function FooterPages({ title, pages }) {
	const [pagesOpen, setPagesOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 768px)");
	// console.log(isMobile);
	return (
		<div className="footer-widget">
			<div className="flex justify-between items-center">
				<h5>{title}</h5>
				<button
					onClick={() => setPagesOpen(!pagesOpen)}
					className={`text-slate-400 lg:hidden`}
				>
					{!pagesOpen ? <BsChevronDown size={16} /> : <BsChevronUp size={16} />}
				</button>
			</div>
			{(!isMobile || pagesOpen) && (
				<ul className="footer-list mt-3 lg:mt-8">
					{pages.map((page) => (
						<li key={page?.path}>
							<Link href={page?.path || "/"}>{page?.name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
