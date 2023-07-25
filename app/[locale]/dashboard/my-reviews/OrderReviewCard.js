"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import ReviewSummaryPopover from "./ReviewSummaryPopover";

const OrderReviewCard = ({ order }) => {
  const [reviewOpen, setReviewOpen] = useState(null);

  //Popover
  const popoverRef = useRef(null);

  // Function to toggle popover for a specific index
  const togglePopover = (index) => {
    if (reviewOpen !== null) {
      setReviewOpen(null);
    } else {
      setReviewOpen(index);
    }
  };

  //useRef issue need to fix
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setReviewOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //end of popover

  return (
    <div className="relative mb-8">
      <div className="sec-heading absolute top-[-10px] left-0 w-full px-8">
        <span className="bg-white text-secondary-700 px-2">
          ডেলিভারি সম্পন্ন হয়েছে: ১২ মার্চ ২০২৩ - ১২:৪৩
        </span>
      </div>
      <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 mb-3">
        <div className="ordered-items">
          {order.items.map((item, index) => (
            <div key={index} className={`flex gap-4 my-4`}>
              <div className="">
                <Image
                  src={"/assets/images/shop/product-thumb-1.png"}
                  alt="product"
                  height={80}
                  width={80}
                  sizes="80px"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <h4>
                  প্রিমিয়াম কোয়ালিটির ইয়ার ব্লুটুথ হেডফোন, মাইক্রোফোন সহ
                  বাচ্চাদের এবং প্রাপ্তবয়স্কদের জন্য
                </h4>
                <div className="flex products-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="px-2 border border-slate-300 rounded-md">
                      সাদা
                    </div>
                    <div className="px-2 border border-slate-300 rounded-md">
                      Small
                    </div>
                  </div>
                  {order?.isReviewed ? (
                    <div className="relative" ref={popoverRef}>
                      <span
                        className="ml-auto flex items-center gap-1 text-primary cursor-pointer"
                        onClick={() => togglePopover(index)}
                      >
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        {/* <BsStarHalf /> */}
                        <BsStar />
                      </span>
                      {reviewOpen === index && <ReviewSummaryPopover />}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!order?.isReviewed ? (
          <div className="flex justify-end mt-4">
            <Link href={"/dashboard/my-reviews/new"} className="text-btn">
              রিভিউ লিখুন <BsArrowRight />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OrderReviewCard;
