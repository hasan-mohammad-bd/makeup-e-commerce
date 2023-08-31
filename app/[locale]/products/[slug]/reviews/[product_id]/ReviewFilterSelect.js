"use client";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";

const ReviewFilterSelect = () => {
  const { handleSelectChange } = useSelectURLQuery();
  return (
    <div className="rating-filter-dropdown-wrap">
      <select
        className="select w-48 text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-0"
        onChange={(e) => handleSelectChange("rating", e.target.value)}
      >
        <option value="all-star">সব স্টার</option>
        <option value="5">৫ স্টার</option>
        <option value="4">৪ স্টার</option>
        <option value="3">৩ স্টার</option>
        <option value="2">২ স্টার</option>
        <option value="1">১ স্টার</option>
      </select>
    </div>
  );
};

export default ReviewFilterSelect;
