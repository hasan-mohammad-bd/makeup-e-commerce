"use client";
import CountButton from "@/components/elements/CountButton";
import React, { useState } from "react";
import OrderCard from "./_components/OrderCard";
import NoItems from "../_components/NoItems";
import { useGetOrdersQuery } from "@/store/api/orderAPI";
import { getCountByKeyValue } from "@/utils/items-count";
import orderFilterKeys from "./_components/OrderFilterKeys";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";
import { useSelector } from "react-redux";

const MyOrders = () => {
	const { data: ordersData, isLoading } = useGetOrdersQuery();
	const { translations } = useSelector((state) => state.common);

	const myOrders = ordersData?.data || [];

	// console.log(myOrders[0]);

	const orderFilters = [
		{
			key: "all-orders",
			title: translations["all-orders"] || "সব অর্ডার",
			count: myOrders.length,
		},
		{
			key: orderFilterKeys.pending,
			title: translations["pending"] || "পেন্ডিং",
			count: getCountByKeyValue(myOrders, "status", orderFilterKeys.pending),
		},
		{
			key: orderFilterKeys.confirmed,
			title: translations["confirmed"] || "নিশ্চিত",
			count: getCountByKeyValue(myOrders, "status", orderFilterKeys.confirmed),
		},
		{
			key: orderFilterKeys.inDeliver,
			title: translations["on-delivery"] || "ডেলিভারিতে",
			count: getCountByKeyValue(myOrders, "status", orderFilterKeys.inDeliver),
		},
		{
			key: orderFilterKeys.complete,
			title: translations["complete"] || "সম্পন্ন",
			count: getCountByKeyValue(myOrders, "status", orderFilterKeys.complete),
		},
		{
			key: orderFilterKeys.cancelled,
			title: translations["cancel"] || "বাতিল",
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
		<div className="py-3 lg:py-6 mb-20 lg:mb-0">
			<div className="flex items-center gap-2 pb-3 px-3 lg:px-10  border-b border-slate-200 lg:border-none">
				<Link href={"/dashboard"} className="lg:hidden">
					<HiArrowLongLeft size={24} />
				</Link>
				<h2 className="text-slate-900 font-semibold lg:font-bold text-base/4 lg:text-2xl">
					{translations["my-order"] || "আমার অর্ডার"}
				</h2>
			</div>
			<div className="lg:px-10">
				<HorizontalScrollView>
					{orderFilters.map((filter) => (
						<CountButton
							key={filter.key}
							isActive={selectedFilter.key === filter.key}
							label={filter.title}
							count={filter.count}
							onClick={() => setSelectedFilter(filter)}
						/>
					))}
				</HorizontalScrollView>
			</div>
			<div className="px-3 lg:px-10">
				{isLoading ? (
					<div className="py-4">
						<ItemsListLoader
							itemHeight={110}
							noImage={true}
							viewBoxWidth={900}
						/>
					</div>
				) : filteredOrders.length ? (
					<div className="py-3">
						{filteredOrders.map((order) => (
							<OrderCard
								key={order.id}
								order={order}
								translations={translations}
							/>
						))}
					</div>
				) : (
					<NoItems title={translations["no-order"] || "কোন অর্ডার নেই"} />
				)}
			</div>
		</div>
	);
};

export default MyOrders;
