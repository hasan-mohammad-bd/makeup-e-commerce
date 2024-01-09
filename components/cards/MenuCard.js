import { Link } from "@/navigation";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function MenuCard({ title, menuItems = [] }) {
	return (
		<div className="border border-slate-200 rounded-lg p-3 mb-2">
			<p className="title text-sm text-slate-500 font-normal">{title}</p>
			<div className="menu-items">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={item.path}
						className={`bg-white w-full flex items-center gap-2 ${
							menuItems.length - 1 === index
								? "pt-2"
								: "border-b border-slate-100 py-2"
						}`}
					>
						<span className="text-slate-500 text-[20px]">{item.icon}</span>
						<span className="text-base font-normal text-slate-800">
							{item.text}
						</span>
						<div className="ml-auto">
							<MdArrowForwardIos className="text-slate-300" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
