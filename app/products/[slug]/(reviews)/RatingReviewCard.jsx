import { StarHalfIcon, StarIcon } from "@/components/elements/svg";
import Image from "next/image";
import ReviewImages from "./ReviewImages";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const RatingReviewCard = ({ reviewImages }) => {
  return (
    <div className="flex border-b border-slate-300 px-4 py-3 mb-4 justify-between items-start">
      <div
        id="user-info"
        className="flex flex-col justify-center w-[32.5rem] pr-4"
      >
        <div className="flex items-center mb-3">
          <StarIcon className="w-5 h-5" fill="#F59E0B" />
          <StarIcon className="w-5 h-5" fill="#F59E0B" />
          <StarIcon className="w-5 h-5" fill="#F59E0B" />
          <StarIcon className="w-5 h-5" fill="#F59E0B" />
          <StarHalfIcon className="w-5 h-5" fill="#F59E0B" empty="#E2E8F0" />
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src={`/assets/images/user/male.jpg`}
            alt={"male"}
            width={28}
            height={28}
            // sizes="100vw"
            className="w-auto rounded-full"
          />
          <div>
            <p className="font-bold">Abdullah Al-Mamun Hossain</p>
          </div>
        </div>
        <p className="text-slate-500 mt-3">16 Feb 2023</p>
      </div>
      <div id="review" className="ml-auto">
        <p className="text-slate-700">
          ক্যামেরাটি ভালো হয়েছে আমার পছন্দ কিন্তু একটু সমস্যা হচ্ছে ফাইভ-জি
          মোবাইল ছাড়া এর অ্যাপ ব্যবহার করতে পারছি না তবে আমি ডিসকাউন্টে
          ক্যামেরা পেয়েছি আমি ... আরও পড়ুন
        </p>
        <div className="rounded-md h-[7.375rem] py-4">
          <ReviewImages reviewImages={reviewImages} max={4} />
        </div>
        <div className="actions flex-between mt-2">
          <p>কালার: সাদা</p>
          <p>সাইজ: Small</p>
          <div className="like-dislike flex-center gap-4">
            <button className="icon-btn text-primary">
              <AiFillLike /> 36
            </button>
            <button className="icon-btn text-slate-700 hover:text-primary">
              <AiFillDislike /> 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingReviewCard;
