"use client";
import { useGetOrderByIdQuery } from "@/store/features/api/orderAPI";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import ArticleLoader from "@/components/elements/loaders/ArticleLoader";

const OrderSuccess = ({ params }) => {
  const { order_id } = params;
  const { data: orderData, isLoading } = useGetOrderByIdQuery(order_id);
  const order = orderData?.sale || null;
  const dueAmount = order?.total_amount - order?.paid_amount;
  // console.log(order);
  return (
    <div className="container min-h-screen">
      <div className="w-[540px] mx-auto my-12 p-5 rounded-lg">
        <div className="text-center font-bold">
          <div className="flex-center my-4">
            <div className="p-3 bg-green-100 rounded-[100%]">
              <div className="bg-green-500 rounded-[100%] p-5 w-20">
                <FaCheck className="text-white" size={36} />
              </div>
            </div>
          </div>
          <h1 className="text-green-500 text-4xl">
            অর্ডার সফলভাবে সম্পন্ন হয়েছে!
          </h1>
          <h3 className="text-slate-800 text-xl my-2">
            সততা স্টোর থেকে কেনাকাটা করার জন্য আপনাকে আন্তরিকভাবে ধন্যবাদ৷
          </h3>
        </div>
        {isLoading ? (
          <ArticleLoader />
        ) : (
          <div className="order-info">
            <div className="order-info bg-slate-50 p-4 my-4">
              <div className="flex-between my-2">
                <p>অর্ডার আইডি</p>
                <p>{order?.invoice_no}</p>
              </div>
              <div className="flex-between my-2">
                <p>অর্ডারের তারিখ</p>
                <p>{new Date(order?.sale_date).toLocaleDateString("bn-BD")}</p>
              </div>
              <div className="border-b border-slate-700 my-2"></div>
              <div className="flex-between my-2 font-bold">
                <p>
                  প্রদেয় পরিমান{" "}
                  {dueAmount > 0 ? (
                    <span className="bg-red-100 px-2 rounded-lg text-red-500">
                      বাকি
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                <p>৳ {dueAmount}</p>
              </div>
            </div>
            <div className="actions  my-6 flex gap-4 justify-between items-center">
              <Link
                href={"/dashboard/my-orders"}
                className="bg-secondary-700 py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
              >
                অর্ডার ট্র্যাক করুন
              </Link>
              <Link
                href={"/products"}
                className="bg-primary py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
              >
                আরও শপিং করুন
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSuccess;
