"use client";
import CountButton from "@/components/elements/CountButton";
import React, { useState } from "react";
import OrderCard from "./OrderCard";
import NoItems from "../NoItems";
import { useGetOrdersQuery } from "@/store/features/api/orderAPI";
import { getCountByKeyValue } from "@/utils/itemsCount";
import orderFilterKeys from "./OrderFilterKeys";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

const MyOrders = () => {
  const { data: ordersData, isLoading } = useGetOrdersQuery();
  const myOrders = ordersData?.data || [];
  // console.log(myOrders[0]);

  const orderFilters = [
    { key: "all-orders", title: "সব অর্ডার", count: myOrders.length },
    {
      key: orderFilterKeys.pending,
      title: "পেন্ডিং",
      count: getCountByKeyValue(myOrders, "status", orderFilterKeys.pending),
    },
    {
      key: orderFilterKeys.confirmed,
      title: "নিশ্চিত",
      count: getCountByKeyValue(myOrders, "status", orderFilterKeys.confirmed),
    },
    {
      key: orderFilterKeys.inDeliver,
      title: "ডেলিভারিতে",
      count: getCountByKeyValue(myOrders, "status", orderFilterKeys.inDeliver),
    },
    {
      key: orderFilterKeys.complete,
      title: "সম্পন্ন",
      count: getCountByKeyValue(myOrders, "status", orderFilterKeys.complete),
    },
    {
      key: orderFilterKeys.cancelled,
      title: "বাতিল",
      count: getCountByKeyValue(myOrders, "status", orderFilterKeys.cancelled),
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState(orderFilters[0]);
  let filteredOrders = myOrders;
  if (selectedFilter.key !== "all-orders") {
    filteredOrders = myOrders.filter(
      (order) => order?.status === selectedFilter.key
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
      {isLoading ? (
        <div className="py-4">
          <ItemsListLoader itemHeight={110} noImage={true} viewBoxWidth={900} />
        </div>
      ) : filteredOrders.length ? (
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
