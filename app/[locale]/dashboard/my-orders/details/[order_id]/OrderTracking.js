import React from "react";
import { HiCheck } from "react-icons/hi";

export default function OrderTracking({ orderData }) {
  // console.log(orderData);
  return (
    <div className="bg-white rounded-lg min-h-[300px] p-5">
      <h3 className="text-xl font-bold font-title">পার্সেল ট্র্যাকিং</h3>
      <div className="pl-2 pt-4">
        <ol class="relative text-slate-600">
          <li class="pb-10 pl-6 border-l border-dashed border-slate-300">
            <div class="absolute flex items-center justify-center w-6 h-6 bg-slate-400 rounded-full -left-3"></div>
            <div className="ml-3">
              <h3 class="font-title font-bold mb-2">প্যাকি সম্পন্ন</h3>
              <p>রাইডার ডেলিভারির জন্য আপনার প্রডাক্ট তুলে নিয়েছে</p>
            </div>
          </li>
          <li class="pb-10 pl-6 border-l border-dashed border-slate-300">
            <div class="absolute flex items-center justify-center w-6 h-6 bg-slate-400 rounded-full -left-3"></div>
            <div className="ml-3">
              <h3 class="font-title font-bold mb-2">প্যাকিং</h3>
              <p>আপনি আপনার প্রডাক্ট হাতে পেয়েছেন</p>
            </div>
          </li>
          <li class="pb-10 pl-6 border-l border-slate-300">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
              <HiCheck className="text-white" />
            </span>
            <h3 class="text-primary">১২ এপ্রিল, ২০২৩ ০১:৫৫</h3>
            <div className="bg-slate-200 p-4 rounded-lg mt-4">
              <h3 className="font-title font-bold mb-2">প্রসেসিং</h3>
              <p>
                আপনার অর্ডার পেয়েছি, আমাদের প্রতিনিধি শিঘ্রই অর্ডার নিশ্চিত করবে
              </p>
            </div>
          </li>
          <li class="pb-3 pl-6 border-l border-slate-300">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
              <HiCheck className="text-white" />
            </span>
            <h3 class="text-primary">১২ এপ্রিল, ২০২৩ ১২:৩৩</h3>
            <div className="bg-slate-200 p-4 rounded-lg mt-4">
              <h3 className="font-title font-bold mb-2">অর্ডার প্লেসড</h3>
              <p>
                আপনার অর্ডার সফলভাবে সততা স্টোরে এ প্লেসড হয়েছে৷ আপনার অর্ডার
                আইডি #{orderData?.sale?.invoice_no}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
