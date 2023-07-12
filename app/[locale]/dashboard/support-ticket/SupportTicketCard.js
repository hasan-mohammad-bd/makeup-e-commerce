"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import productImage from "@/public/assets/images/shop/product-1.png";

function SupportTicketCard({ ticket }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-slate-900 p-4 rounded-lg bg-white border border-slate-200 my-4">
      <div className="flex justify-between items-center">
        <h3>১০ এপ্রিল, ২০২৩</h3>
        <span className="text-blue-500">#412313987</span>
      </div>
      <div className="border-b border-slate-300 my-3"></div>
      <div className="grid grid-cols-5 gap-4 justify-between">
        <div>
          <h3 className="text-slate-500 mb-3">অর্ডার নাম্বার:</h3>
          <h3>SST263545</h3>
        </div>
        <div>
          <h3 className="text-slate-500 mb-3">সমস্যার ধরণ:</h3>
          <h3>প্রডাক্ট ফেরৎ/পরিবর্তন</h3>
        </div>
        <div className="col-span-2">
          <h3 className="text-slate-500 mb-3">সাবজেক্ট:</h3>
          <h3>প্রডাক্ট-এর কালার ‍ছবির সাথে মিল নাই</h3>
        </div>
        <div className="flex justify-end items-end">
          <button
            className="icon-btn group/toggle-btn"
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          >
            {isOpen ? (
              <BsChevronUp
                size={24}
                className="group-hover/toggle-btn:text-primary"
              />
            ) : (
              <BsChevronDown
                size={24}
                className="group-hover/toggle-btn:text-primary"
              />
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <>
          <div className="ticket-content bg-slate-100 rounded-lg py-4 px-5 my-5">
            <p>
              প্রোডাক্টটি আমি ২/২/২৩ বিকেলে রিসিভ করি, এবং আনবক্স করি, কিন্তু
              যখন ভিডিও টেস্ট করার জন্য নেই তখন আমার কাছে এটা লকে কিছু একটা
              প্রবলেম মনে হয়েছিলো, পরে ভালো করে লক্ষ করে দেখলাম আসলেই এই মার্ক
              করা লকটা একটা প্রবলেম, এটাকে যখম খুলি তখন এটা নরবরে থাকে অটো মেটি
              নাড়াচাড়া করে লক স্টেবল হয়ে থাকে না। আমি সেলার এর দৃষ্টি আকর্ষন
              করছি, আমার সমস্যা দ্রুত সমাধান চাই এখন রাত বাজে ৩:৪৬, ৩/২/২৩ ইং।
              আমার সমস্যাটি দ্রুত তুলে ধরেছি আপনাদের কাছে দয়া করে এটি দ্রুত
              সমাধান দিন।
            </p>
            <div className="relative bg-slate-200 rounded-lg p-5 mt-5">
              <div className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-5 h-5 bg-slate-200"></div>

              <p>
                Sir you can claim warranty. We are giving 1 year of brand
                warranty with this.
              </p>
              <p className="text-right">১৫ এপ্রিল, ২০২৩</p>
            </div>
          </div>
          <div className="">
            <Image
              src={productImage}
              height={90}
              width={90}
              sizes="90px"
              alt="product-img"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default SupportTicketCard;
