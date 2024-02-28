"use client";
import React from "react";
import Paginator from "./elements/Paginator";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { SeeAll } from "./elements/buttons";

export default function PaginationWithSummery({
  meta,
  totalItemsShowing,
  paginateItems,
  className,
}) {
  const { translations } = useSelector((state) => state.common);
  // console.log(translations);
  return (
    <div
      className={twMerge(
        "border-t border-slate-200 py-3 lg:p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-4",
        className
      )}
    >
      <SeeAll href="/products" buttonText={translations["see-all"]} />
      <div className="flex justify-center md:justify-end">
      <Paginator meta={meta} paginateItems={paginateItems} />
      </div>

    </div>
  );
}
