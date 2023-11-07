import React from "react";
import { twMerge } from "tailwind-merge";

const ViewHTML = ({ htmlText, className, ...props }) => {
	return htmlText ? (
		<div
			className={twMerge("prose max-w-none", className)}
			dangerouslySetInnerHTML={{ __html: htmlText }}
			{...props}
		/>
	) : (
		<p className="py-2 text-slate-300">Not Available</p>
	);
};

export default ViewHTML;
