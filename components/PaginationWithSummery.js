import React from "react";
import Paginator from "./elements/Paginator";

export default function PaginationWithSummery({
  meta,
  totalItemsShowing,
  paginateItems,
}) {
  return (
    <div className="border-t border-slate-200 p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
      <p>
        ফলাফল {totalItemsShowing || 0} টি দেখতে পাচ্ছেন {meta?.total} এর মধ্যে{" "}
      </p>
      <Paginator meta={meta} paginateItems={paginateItems} />
    </div>
  );
}
