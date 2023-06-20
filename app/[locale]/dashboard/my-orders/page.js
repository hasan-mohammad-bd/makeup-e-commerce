"use client";
import CountButton from "@/components/elements/CountButton";
import Image from "next/image";
import React, { useState } from "react";

const orderFilters = [
  { key: "all-orders", title: "সব অর্ডার", count: 0 },
  { key: "confirmed", title: "নিশ্চিত", count: 0 },
  { key: "in-deliver", title: "ডেলিভারিতে", count: 0 },
  { key: "completed", title: "সম্পন্ন", count: 0 },
  { key: "canceled", title: "বাতিল", count: 0 },
];

const MyOrders = () => {
  const [selectedFilter, setSelectedFilter] = useState(orderFilters[0]);
  return (
    <div className="p-12">
      <h2 className="text-slate-900 font-bold text-xl">আমার অর্ডার</h2>
      <div className="flex items-center gap-4 mt-4">
        {orderFilters.map((filter) => (
          <CountButton
            key={filter.key}
            isActive={selectedFilter.key === filter.key}
            label={filter.title}
            count={filter.count}
            onClick={() => setSelectedFilter(filter)}
          />
        ))}
      </div>
      <div className="flex-center mt-28">
        <div className="flex-center flex-col jus h-[25rem] w-[25rem] rounded-2xl border border-slate-300">
          <Image
            src={"/assets/images/empty.png"}
            height={216}
            width={216}
            alt="not-item"
            sizes="100vh"
          />
          <h3 className="font-bold text-slate-700">কোন অর্ডার নেই</h3>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
