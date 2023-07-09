import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";

function OrderCard({ order }) {
  const getClass = (orderStatus) => {
    let classNames = "";
    switch (orderStatus) {
      case "ডেলিভারিতে":
        classNames = "bg-blue-500";
        break;
      case "নিশ্চিত":
        classNames = "bg-yellow-500";
        break;
      case "সম্পন্ন":
        classNames = "bg-green-500";
        break;
      case "বাতিল":
        classNames = "bg-red-500";
        break;
      default:
        classNames = "bg-yellow-500";
    }
    return classNames;
  };
  return (
    <div className="text-slate-900 p-4 rounded-lg bg-slate-100 my-4">
      <div className="grid grid-cols-4 justify-between">
        <div>
          <h3 className="text-slate-500 mb-3">তারিখ</h3>
          <h3>১২ এপ্রিল, ২০২৩</h3>
        </div>
        <div>
          <h3 className="text-slate-500 mb-3">অর্ডার আইডি</h3>
          <h3>SST263598</h3>
        </div>
        <div>
          <h3 className="text-slate-500 mb-3">টাকার পরিমান</h3>
          <h3>
            ৳2630.00{" "}
            <span
              className={`${
                order?.paymentStatus === "পরিশোধ"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {order?.paymentStatus}
            </span>
          </h3>
        </div>
        <div className="text-right">
          <h3 className="text-white mb-3">
            <span className={`${getClass(order?.orderStatus)} rounded-lg p-1`}>
              {order?.orderStatus}
            </span>
          </h3>
          <h3>২ টি প্রডাক্ট</h3>
        </div>
      </div>
      <div className="border-b border-slate-300 my-3"></div>
      <div className="flex justify-between items-center">
        <h3>
          <HiLocationMarker className="text-red-500" /> জোড়গাছা, সাঁথিয়া, পাবনা৷
          বিস্তারিত দেখুন
        </h3>
        <Link href={"/dashboard/my-orders-details/"} className="text-slate-500">
          বিস্তারিত দেখুন <HiArrowLongRight />
        </Link>
      </div>
    </div>
  );
}

export default OrderCard;
