"use client";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import NoItems from "../_components/NoItems";
import OrderReviewCard from "./_components/OrderReviewCard";
import { useGetUserReviewsQuery } from "@/store/api/productReviewAPI";
import {
	getFilteredByKeyNotValue,
	getFilteredByKeyValue,
} from "@/utils/filter-items";
import { getCountByKeyNotValue, getCountByKeyValue } from "@/utils/items-count";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function MyReview() {
	const { data, isLoading } = useGetUserReviewsQuery();
	const { translations } = useSelector((state) => state.common);

	const myReviews = data?.data || [];

	// console.log(myReviews);
	const [isReviewed, setIsReviewed] = useState(false);

	let filteredReviews = [];
	if (!isReviewed && !isLoading) {
		filteredReviews = getFilteredByKeyValue(myReviews, "total_review", 0);
	} else if (!isLoading) {
		filteredReviews = getFilteredByKeyNotValue(myReviews, "total_review", 0);
	}

	return (
		<div className="py-3 lg:py-6 mb-20 lg:mb-0">
			<div className="flex items-center gap-2 pb-4 pt-1 px-3 lg:px-10  border-b border-slate-200 lg:border-none">
				<Link href={"/dashboard"} className="lg:hidden">
					<HiArrowLongLeft size={24} />
				</Link>
				<h2 className="text-slate-900 font-semibold lg:font-bold text-base/4 lg:text-2xl">
					{translations["my-review"] || "আমার রিভিউ"}
				</h2>
			</div>
			<div className="px-3 lg:px-0 lg:mx-10 flex items-center lg:mt-4 gap-4 border-b border-slate-200">
				<button
					className={`font-title bg-transparent box-border py-3 border-b-2 ${
						!isReviewed
							? "border-primary text-slate-900"
							: "border-transparent text-slate-500"
					}`}
					onClick={() => setIsReviewed((preRevState) => !preRevState)}
				>
					<span>
						{translations["review-pending"] || "রিভিউ পেন্ডিং"} (
						{getCountByKeyValue(myReviews, "total_review", 0)})
					</span>
				</button>
				<button
					className={`font-title bg-transparent box-border py-3 border-b-2 ${
						isReviewed
							? "border-primary text-slate-900"
							: "border-transparent text-slate-500"
					}`}
					onClick={() => setIsReviewed((preRevState) => !preRevState)}
				>
					<span>
						{translations["reviewed"] || "রিভিউ হয়েছে "} (
						{getCountByKeyNotValue(myReviews, "total_review", 0)})
					</span>
				</button>
			</div>
			{isLoading ? (
				<div className="py-8 px-3 lg:px-10">
					<ItemsListLoader itemHeight={110} noImage={true} viewBoxWidth={900} />
				</div>
			) : (
				<div className="my-reviews  mt-8 px-3 lg:px-10">
					{filteredReviews.length ? (
						filteredReviews.map((sellReview, index) => (
							<OrderReviewCard
								key={index}
								sellReview={sellReview}
								translations={translations}
							/>
						))
					) : (
						<NoItems title={translations["no-reviews"] || "কোন রিভিউ নেই"} />
					)}
				</div>
			)}
		</div>
	);
}
