import Image from "next/image";
import { AiFillSmile } from "react-icons/ai";
import { BsStar, BsStarFill } from "react-icons/bs";
import productImage from "@/public/assets/images/shop/product-10.png";

export default function ReviewSummaryPopover({ review }) {
  return (
    <div className="absolute right-0 top-[40px] z-10">
      <div className="relative bg-white p-6 border w-[33.5rem] border-slate-300 rounded-lg">
        <div className="absolute top-0 right-4 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 bg-white border-l border-t border-slate-300"></div>
        <div className="content-area flex gap-4">
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
          <div className="">
            <p>
              প্রোডাক্টটি ভাল লেগেছে। যদিও এখনো ব্যবহার করে দেখি নাই।
              আনবক্সিংভিডিও আপলোড করা হয়েছে Vromon Vibes ইউটিউব চ্যানেলে। চাইলে
              দেখতে পারেন।
            </p>
            <div className="flex gap-4 mt-3">
              {Array(2)
                .fill(2)
                .map((image, index) => (
                  <Image
                    key={index}
                    src={productImage}
                    height={90}
                    width={90}
                    sizes="90px"
                    alt="product-img"
                    className="rounded-lg"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
