"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SortSelect = ({ updateProductFilters }) => {
  const searchTerm = useSearchParams().get("search");

  const [featured, setFeatured] = useState("");

  useEffect(() => {
    // const filters = {
    //     featured,
    // };
    // updateProductFilters(filters);
  }, [searchTerm, featured]);

  const seleceOption = (e) => {
    setFeatured(e.target.value);
  };

  return (
    <>
      <div className="sort-by-product-wrap flex items-center gap-x-8 gap-y-4">
        <div className="sort-by">
          <span className=" text-sm text-slate-600">ক্রমানুসার :</span>
        </div>
        <div className="sort-by-dropdown-wrap">
          <select
            className="select w-72 text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-0"
            onChange={(e) => seleceOption(e)}
          >
            <option value="">এলোমেলো</option>
            <option value="new">নতুন প্রডাক্ট</option>
            <option value="lowToHigh">দাম (কম থেকে বেশি)</option>
            <option value="highToLow">দাম (বেশি থেকে কম)</option>
            <option value="lowToHigh">রেটিং (কম থেকে বেশি)</option>
            <option value="highToLow">রেটিং (বেশি থেকে কম)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortSelect;
