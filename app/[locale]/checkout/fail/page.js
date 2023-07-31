"use client";
import Link from "next/link";
import React from "react";
import { ImWarning } from "react-icons/im";

const PaymentFail = () => {
  return (
    <div className="container min-h-screen">
      <div className="w-[540px] mx-auto my-12 p-5 rounded-lg">
        <div className="text-center font-bold">
          <div className="flex-center my-4">
            <div className="p-3 bg-green-100 rounded-[100%]">
              <div className="bg-yellow-500 rounded-[100%] p-5 w-20">
                <ImWarning className="text-white" size={36} />
              </div>
            </div>
          </div>
          <h1 className="text-red-500 text-4xl mt-8">
            দুঃখিত পেমেন্ট সফল হয়নি,
          </h1>
          <h3 className="text-slate-800 text-xl mt-2 mb-8">
            অনুগ্রহপূর্বক আবার চেষ্টা করুন, ধন্যবাদ৷
          </h3>
        </div>

        <div className="order-info">
          <div className="actions  my-6 flex gap-4 justify-between items-center">
            <Link
              href={"/checkout"}
              className="bg-secondary-700 py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
            >
              আবার চেষ্টা করুন
            </Link>
            <Link
              href={"/products"}
              className="bg-primary py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
            >
              আরও শপিং করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
