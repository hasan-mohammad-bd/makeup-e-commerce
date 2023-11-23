"use client";
import { useSelector } from "react-redux";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";

const ReviewFilterSelect = () => {
	const { handleSelectChange } = useSelectURLQuery();
	const { translations } = useSelector((state) => state.common);
	return (
		<div className="rating-filter-dropdown-wrap">
			<select
				className="select  w-[9.625rem] lg:w-48 text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-0"
				onChange={(e) => handleSelectChange("rating", e.target.value)}
			>
				<option value="all-star">
					{translations["all-stars"] || "সব স্টার"}
				</option>
				<option value="5">{translations["5-star"] || "৫ স্টার"}</option>
				<option value="4">{translations["4-star"] || "৪ স্টার"}</option>
				<option value="3">{translations["3-star"] || "৩ স্টার"}</option>
				<option value="2">{translations["2-star"] || "২ স্টার"}</option>
				<option value="1">{translations["1-star"] || "১ স্টার"}</option>
			</select>
		</div>
	);
};

export default ReviewFilterSelect;
