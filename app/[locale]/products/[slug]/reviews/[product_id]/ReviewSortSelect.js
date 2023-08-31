"use client";

import useSelectURLQuery from "@/hooks/useSelectURLQuery";

const ReviewSortSelect = () => {
  const { handleSelectChange } = useSelectURLQuery();
  return (
    <div className="sort-by-dropdown-wrap">
      <select
        className="select w-[13rem] text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-0"
        onChange={(e) => handleSelectChange("sort_type", e.target.value)}
      >
        <option value="default">এলোমেলো</option>
        <option value="new">সাম্প্রতিক</option>
        <option value="rating_low_high">রেটিং (কম থেকে বেশি)</option>
        <option value="rating_high_low">রেটিং (বেশি থেকে কম)</option>
      </select>
    </div>
  );
};

export default ReviewSortSelect;
