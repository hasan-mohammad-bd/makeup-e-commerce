"use client";
import Link from "next/link";
import React from "react";
import { useGetOrderByIdQuery } from "@/store/features/api/orderAPI";

import { HiArrowLongLeft } from "react-icons/hi2";
import OrderTracking from "./OrderTracking";
import SaleProductCard from "./SaleProductCard";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

const OrderDetail = ({ params }) => {
  const { order_id } = params;
  const { data: orderData, isLoading } = useGetOrderByIdQuery(order_id);
  //   console.log(orderData);
  const sale = orderData?.sale || {};
  const saleProducts = orderData?.saleProducts || [];
  return (
    <div className="px-10 py-6">
      <div className="heading">
        <h2 className="text-slate-900 font-bold text-2xl">আমার অর্ডার</h2>
        <Link
          href={"/dashboard/my-orders"}
          className="icon-btn my-4 hover:text-primary"
        >
          <HiArrowLongLeft size={24} /> ফিরে যান
        </Link>
      </div>
      <div className="content bg-slate-200 rounded-lg p-5">
        <OrderTracking orderData={0} />
        <div className="bg-white rounded-lg p-4 mt-5">
          {isLoading ? (
            <ItemsListLoader numItems={2} viewBoxWidth={900} />
          ) : (
            saleProducts.map((saleProduct, index) => (
              <SaleProductCard key={index} saleProduct={saleProduct} />
            ))
          )}
        </div>
        <div className="text-slate-700 p-4 bg-white rounded-lg mt-5">
          <div className="flex-between my-2">
            <p>অর্ডার আইডি</p>
            <p>{sale.invoice_no}</p>
          </div>
          <div className="flex-between my-2">
            <p>অর্ডারের তারিখ</p>
            <p>৳{new Date(sale.sale_date).toLocaleDateString("bn-BD")}</p>
          </div>

          <div className="flex-between my-2">
            <p>মোট টাকার পরিমান</p>
            <p>৳{sale.sub_total}</p>
          </div>
          <div className="flex-between my-2">
            <p>ডিসকাউন্ট পাচ্ছেন</p>
            <p className="text-red-500">-৳{sale.discount_amount}</p>
          </div>
          <div className="border-b border-slate-300 my-2"></div>
          <div className="flex-between my-2">
            <p>মোট পরিমান</p>
            <p>৳{sale.sub_total - sale.discount_amount}</p>
          </div>
          <div className="flex-between my-2">
            <p>ডেলিভারি খরচ</p>
            <p>৳{sale.shipping?.delivery_charge}</p>
          </div>
          <div className="border-b border-slate-900 my-2"></div>
          <div className="flex-between my-2 font-bold">
            <p>
              প্রদেয় পরিমান{" "}
              <span
                className={`px-2 rounded-lg ${
                  sale.due_amount > 0
                    ? "text-red-500 bg-red-100"
                    : "text-green-500 bg-green-100"
                }`}
              >
                {sale.due_amount > 0 ? "বাকি" : "পরিশোধ"}
              </span>
            </p>
            <p>৳{sale.due_amount}</p>
          </div>
          <button className="bg-slate-200 p-3 w-full my-3 rounded-lg">
            ইনভয়েস ডাউনলোড করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
