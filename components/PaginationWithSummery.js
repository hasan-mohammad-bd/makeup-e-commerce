"use client";
import React from "react";
import Paginator from "./elements/Paginator";
import { useSelector } from "react-redux";

export default function PaginationWithSummery({
	meta,
	totalItemsShowing,
	paginateItems,
}) {
	const { translations } = useSelector((state) => state.common);
	// console.log(translations);
	return (
		<div className="lg:border-t border-slate-200 py-3 lg:p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
			<p>
				{translations["showing"]} {totalItemsShowing || 0}{" "}
				{translations["out-of"]} {meta?.total} {translations["total-products"]}{" "}
			</p>
			<Paginator meta={meta} paginateItems={paginateItems} />
		</div>
	);
}
