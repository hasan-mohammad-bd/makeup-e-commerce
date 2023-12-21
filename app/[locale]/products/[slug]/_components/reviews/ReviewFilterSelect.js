"use client";
import { useSelector } from "react-redux";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";
import DropdownSelect from "@/components/elements/DropdownSelect";
import { HiOutlineFilter } from "react-icons/hi";

const ReviewFilterSelect = () => {
	const { handleSelectChange } = useSelectURLQuery();
	const { translations } = useSelector((state) => state.common);

	const sortItems = [
		{ key: "all-star", value: translations["all-stars"] || "সব স্টার" },
		{ key: "5", value: translations["5-star"] || "৫ স্টার" },
		{ key: "4", value: translations["4-star"] || "৪ স্টার" },
		{ key: "3", value: translations["3-star"] || "৩ স্টার" },
		{ key: "2", value: translations["2-star"] || "২ স্টার" },
		{ key: "1", value: translations["1-star"] || "১ স্টার" },
	];
	return (
		<div className="rating-filter-dropdown-wrap">
			<DropdownSelect
				className={"w-[154px] lg:w-[192px] max-w-[192px]"}
				options={sortItems}
				onSelectChange={(item) => handleSelectChange("rating", item.key)}
			>
				<HiOutlineFilter size={20} className="text-slate-900" />
			</DropdownSelect>
		</div>
	);
};

export default ReviewFilterSelect;
