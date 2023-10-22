"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function FooterPages({ title, pages }) {
	const [pagesOpen, setPagesOpen] = useState(false);
	const matches = useMediaQuery("(max-width: 768px)");
	// console.log(matches);
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
			{(!matches || pagesOpen) && (
				<ul className="footer-list mt-3 lg:mt-8">
					{Object.keys(pages).map((key) => (
						<li key={key}>
							<Link href={pages[key]}>{key}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
