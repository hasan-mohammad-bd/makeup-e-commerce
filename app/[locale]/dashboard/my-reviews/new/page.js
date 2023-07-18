"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillSmile } from "react-icons/ai";
import { BsInfoCircleFill, BsStar, BsStarFill } from "react-icons/bs";
import { HiArrowLongLeft } from "react-icons/hi2";
import ReviewImagesUpload from "./ReviewImagesUpload";

const order = {
  id: 10,
  isReviewed: false,
  items: [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
  ],
};

export default function page() {
  // const [imageFiles, setImageFiles] = useState([]);
  const [reviews, setReviews] = useState({});
  const [imageFiles, setImageFiles] = useState({});

  // Function to update the review text for a specific item
  const updateReviewText = (itemId, newText) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [itemId]: newText,
    }));
  };

  // Function to update the image files for a specific item
  const updateImageFiles = (itemId, newFiles) => {
    setImageFiles((prevFiles) => {
      const existingFiles = prevFiles[itemId] || []; // Get the existing files for the item
      const uniqueNewFiles = newFiles.filter((file) => {
        const fileExists = existingFiles.some(
          (existingFile) =>
            existingFile.name === file.name && existingFile.size === file.size
        );
        return !fileExists;
      }); // Filter out duplicates from new files
      const updatedFiles = [...existingFiles, ...uniqueNewFiles]; // Append unique new files to existing files
      return {
        ...prevFiles,
        [itemId]: updatedFiles,
      };
    });
  };

  return (
    <div className="px-10 py-6">
      <div className="heading">
        <h2 className="text-slate-900 font-bold text-2xl">আমার রিভিউ</h2>
        <Link
          href={"/dashboard/my-reviews"}
          className="icon-btn my-4 hover:text-primary"
        >
          <HiArrowLongLeft size={24} /> ফিরে যান
        </Link>
      </div>
      <div className="content mt-2">
        <div className="relative">
          <div className="sec-heading absolute top-[-10px] left-0 w-full px-8">
            <span className="bg-white text-secondary-700 px-2">
              ডেলিভারি সম্পন্ন হয়েছে: ১২ মার্চ ২০২৩ - ১২:৪৩
            </span>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 mb-3">
            <div className="ordered-items">
              {order.items.map((item, index) => (
                <div key={item.id}>
                  <div className={`flex gap-4 my-4`}>
                    <div className="">
                      <Image
                        src={"/assets/images/shop/product-thumb-1.png"}
                        alt="product"
                        height={60}
                        width={60}
                        sizes="60px"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <h4 className="font-semibold">
                        প্রিমিয়াম কোয়ালিটির ইয়ার ব্লুটুথ হেডফোন, মাইক্রোফোন সহ
                        বাচ্চাদের এবং প্রাপ্তবয়স্কদের জন্য
                      </h4>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="px-2 border border-slate-300 rounded-md">
                          সাদা
                        </div>
                        <div className="px-2 border border-slate-300 rounded-md">
                          Small
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Rating Area */}
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="font-semibold">রেটিং দিন:</p>
                      <div className="bg-slate-100 h-[8.75rem] w-[10.5rem] flex flex-col justify-between gap-2 items-center p-4">
                        <span className="flex items-center gap-1 text-primary">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          {/* <BsStarHalf /> */}
                          <BsStar />
                        </span>
                        <p>অসাধারণ</p>
                        <p className="text-primary">
                          <AiFillSmile size={24} />
                        </p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="form-control w-full">
                        <div className="flex-between mb-2">
                          <label className="block font-semibold text-slate-900">
                            মতামত লিখুন:
                          </label>
                          <span className="text-base text-secondary-800">
                            যেভাবে একটি সুন্দর রিভিউ লিখবেন{" "}
                            <BsInfoCircleFill
                              size={20}
                              className="text-slate-500"
                            />
                          </span>
                        </div>
                        <textarea
                          className="h-[148px]"
                          type="text"
                          name="msg"
                          placeholder="আপনার মতামত লিখুন"
                          value={reviews[item.id] || ""}
                          onChange={(e) =>
                            updateReviewText(item.id, e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <ReviewImagesUpload
                          itemId={item.id}
                          imageFiles={imageFiles}
                          updateImageFiles={updateImageFiles}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 my-8">
                    <h3 className="font-bold font-title">মনে রাখবেন:</h3>
                    <ul className="list-disc ml-8 text-slate-600 [&>*]:mt-1">
                      <li>
                        সর্বোচ্চ ৬টি ছবি আপলোড করা যাবে (ছবির সাইজ সর্বোচ্চ 5mb
                        হতে পারে)
                      </li>
                      <li>ছবিটি পর্যালোচনা করতে 24 ঘন্টা পর্যন্ত সময় লাগে৷</li>
                      <li>
                        আপনার পর্যালোচনা আপলোড করার আগে দয়া করে নিশ্চিত করুন যে
                        আপনি সম্প্রদায় নির্দেশিকা পূরণ করেছেন৷
                      </li>
                    </ul>
                  </div>
                  {order.items.length > 1 && index < order.items.length - 1 && (
                    <div className="border-b-2 border-dashed border-slate-300 mb-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end my-4">
          <button className="submit-btn">রিভিউ দিন</button>
        </div>
      </div>
    </div>
  );
}
