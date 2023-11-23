"use client";

import { useSelector } from "react-redux";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";

const ReviewSortSelect = () => {
	const { handleSelectChange } = useSelectURLQuery();
	const { translations } = useSelector((state) => state.common);

	return (
		<div className="sort-by-dropdown-wrap">
			<select
				className="select w-[9.625rem] lg:w-[13rem] text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-0"
				onChange={(e) => handleSelectChange("sort_type", e.target.value)}
			>
				<option value="default">
					{translations["random"] || "সাম্প্রতিক"}
				</option>
				<option value="rating_low_high">
					{translations["rating-(low-to-high)"] || "রেটিং (কম থেকে বেশি)"}
				</option>
				<option value="rating_high_low">
					{translations["rating-(high-to-low)"] || "রেটিং (বেশি থেকে কম)"}
				</option>
			</select>
		</div>
	);
};

export default ReviewSortSelect;
