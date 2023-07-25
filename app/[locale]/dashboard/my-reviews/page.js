"use client";
import { useState } from "react";
import NoItems from "../NoItems";
import OrderReviewCard from "./OrderReviewCard";

const orders = [
  { id: 1, isReviewed: false, items: ["1"] },
  { id: 2, isReviewed: false, items: ["1", "2"] },
  { id: 3, isReviewed: true, items: ["1"] },
  { id: 4, isReviewed: true, items: ["1", "2"] },
];

export default function MyReview() {
  const [isReviewed, setIsReviewed] = useState(false);
  const filteredOrders = orders.filter(
    (order) => order.isReviewed === isReviewed
  );

  return (
    <div className="px-10 py-6">
      <div className="mb-6">
        <h2 className="text-slate-900 font-bold text-2xl">আমার রিভিউ</h2>
      </div>
      <div className="flex items-center mt-4 gap-4 border-b border-slate-300">
        <button
          className={`font-title bg-transparent box-border py-2 border-b-2 ${
            !isReviewed ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setIsReviewed((preRevState) => !preRevState)}
        >
          <span>রিভিউ পেন্ডিং (2)</span>
        </button>
        <button
          className={`font-title bg-transparent box-border py-2 border-b-2 ${
            isReviewed ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setIsReviewed((preRevState) => !preRevState)}
        >
          <span>রিভিউ হয়েছে (2)</span>
        </button>
      </div>
      <div className="my-reviews mt-8">
        {filteredOrders.length ? (
          filteredOrders.map((order, index) => <OrderReviewCard key={index} order={order} />)
        ) : (
          <NoItems title={"কোন রিভিউ নেই"} />
        )}
      </div>
    </div>
  );
}
