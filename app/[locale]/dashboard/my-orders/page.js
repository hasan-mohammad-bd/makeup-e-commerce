"use client";
import CountButton from "@/components/elements/CountButton";
import React, { useState } from "react";
import OrderCard from "./OrderCard";
import NoItems from "../NoItems";

const orderFilters = [
  { key: "all-orders", title: "সব অর্ডার", count: 4 },
  { key: "confirmed", title: "নিশ্চিত", count: 1 },
  { key: "in-deliver", title: "ডেলিভারিতে", count: 0 },
  { key: "completed", title: "সম্পন্ন", count: 2 },
  { key: "canceled", title: "বাতিল", count: 1 },
];

const orders = [
  // { id: 1, paymentStatus: "পরিশোধ", orderStatus: "ডেলিভারিতে" },
  { id: 2, paymentStatus: "বাকি", orderStatus: "নিশ্চিত" },
  { id: 3, paymentStatus: "বাকি", orderStatus: "সম্পন্ন" },
  { id: 4, paymentStatus: "বাকি", orderStatus: "সম্পন্ন" },
  { id: 5, paymentStatus: "বাকি", orderStatus: "বাতিল" },
];

const MyOrders = () => {
  const [selectedFilter, setSelectedFilter] = useState(orderFilters[0]);
  let filteredOrders = orders;
  if (selectedFilter.key !== "all-orders") {
    filteredOrders = orders.filter(
      (order) => order.orderStatus === selectedFilter.title
    );
  }
  return (
    <div className="px-10 py-6">
      <h2 className="text-slate-900 font-bold text-2xl">আমার অর্ডার</h2>
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
      {filteredOrders.length ? (
        <div className="py-3">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <NoItems title={"কোন অর্ডার নেই"} />
      )}
    </div>
  );
};

export default MyOrders;
