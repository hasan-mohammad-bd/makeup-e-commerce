"use client";
import React from "react";
import Paginator from "./elements/Paginator";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { SeeAll } from "./elements/buttons";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function PaginationWithSummery({
  meta,
  totalItemsShowing,
  paginateItems,
  className,
}) {
  const { translations } = useSelector((state) => state.common);
  const param = useParams();
  const pathname = usePathname()
  const route = pathname.split("/")[1];
 



  return (
    <div
      className={twMerge(
        "border-t border-slate-200 py-3 lg:p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-4",
        className
      )}
    >
      {
        ((param.slug || route === "products") ? (
          <p>
            {translations["showing"] || "Showing"} {totalItemsShowing || 0}{" "}
            {translations["out-of"] || "out of"} {meta?.total}{" "}
            {translations["total-products" || "products"]}{" "}
          </p>
        ) : (
          <SeeAll href="/products" buttonText={translations["see-all"]} />
        ))
      }

      <div className="flex justify-center md:justify-end">
        <Paginator meta={meta} paginateItems={paginateItems} />
      </div>
    </div>
  );
}
