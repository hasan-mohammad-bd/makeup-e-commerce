"use client";
import { useSelector } from "react-redux";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";
import DropdownSelect from "./DropdownSelect";

const SortSelect = () => {
	const { handleSelectChange } = useSelectURLQuery();
	const { translations } = useSelector((state) => state.common);

	const sortItems = [
		{ key: "default", value: translations["random"] || "এলোমেলো" },
		{ key: "new", value: translations["new-product"] || "নতুন প্রডাক্ট" },
		{
			key: "low_high",
			value: translations["price-(low-to-high)"] || "দাম (কম থেকে বেশি)",
		},
		{
			key: "high_low",
			value: translations["price-(high-to-low)"] || "দাম (বেশি থেকে কম)",
		},
		{
			key: "rating_low_high",
			value: translations["rating-(low-to-high)"] || "রেটিং (কম থেকে বেশি)",
		},
		{
			key: "rating_high_low",
			value: translations["rating-(high-to-low)"] || "রেটিং (বেশি থেকে কম)",
		},
	];

	return (
		<>
			<div className="sort-by-product-wrap flex items-center gap-x-4 gap-y-4">
				<div className="sort-by">
					<span className=" text-sm text-slate-600">
						{translations["sort"] || "শর্টিং করুন"}:
					</span>
				</div>
				<div className="sort-by-dropdown-wrap">
					<DropdownSelect
						title={"এলোমেলো"}
						className={"w-72"}
						options={sortItems}
						onSelectChange={(item) => handleSelectChange("sort_type", item.key)}
					/>
					{/* <select
						className="select w-72 text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-0"
						onChange={(e) => handleSelectChange("sort_type", e.target.value)}
					>
						<option value="default">
							{translations["random"] || "এলোমেলো"}
						</option>
						<option value="new">
							{translations["new-product"] || "নতুন প্রডাক্ট"}
						</option>
						<option value="low_high">
							{translations["price-(low-to-high)"] || "দাম (কম থেকে বেশি)"}
						</option>
						<option value="high_low">
							{translations["price-(high-to-low)"] || "দাম (বেশি থেকে কম)"}
						</option>
						<option value="rating_low_high">
							{translations["rating-(low-to-high)"] || "রেটিং (কম থেকে বেশি)"}
						</option>
						<option value="rating_high_low">
							{translations["rating-(high-to-low)"] || "রেটিং (বেশি থেকে কম)"}
						</option>
					</select> */}
				</div>
			</div>
		</>
	);
};

export default SortSelect;
