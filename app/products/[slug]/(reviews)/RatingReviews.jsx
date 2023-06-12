import { StarIcon, StarHalfIcon } from "@/components/elements/svg";
import Image from "next/image";
// import { HiOutlineFilter } from "react-icons/hi";
import RatingReviewCard from "./RatingReviewCard";
import ReviewImages from "./ReviewImages";

const reviewImages = [
  { title: "review Image", imgUrl: "/assets/images/review/image-1.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-2.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-3.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-4.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-5.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-1.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-1.png" },
  { title: "review Image", imgUrl: "/assets/images/review/image-1.png" },
];

const RatingReviews = ({ ratingReviews }) => {
  return (
    <div className="question-answer mb-8">
      <h2 className="text-2xl font-bold font-title text-slate-900">
        রেটিং ও রিভিউ:
      </h2>
      <div className="rating grid grid-cols-7 mt-3 mb-5 pb-6 border-b-[1px] border-slate-200">
        <div className="justify-self-start col-span-2 text-center flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-slate-950">4.5</h3>
          <div className="flex items-center my-3">
            <StarIcon className="w-5 h-5" fill="#F59E0B" />
            <StarIcon className="w-5 h-5" fill="#F59E0B" />
            <StarIcon className="w-5 h-5" fill="#F59E0B" />
            <StarIcon className="w-5 h-5" fill="#F59E0B" />
            <StarHalfIcon className="w-5 h-5" fill="#F59E0B" empty="#E2E8F0" />
          </div>
          <p className="text-slate-700">1265 গুলো রেটিং</p>
        </div>
        <div className="rating-summery col-span-5 grid grid-cols-12 items-center">
          <div className="h-[88px] w-[1px] bg-slate-200 mr-5 justify-self-start"></div>
          <div className="col-span-11">
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-slate-700">5 star</span>
              <div className="w-2/3 h-2 mx-4 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#F59E0B] rounded"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-slate-300">487</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-slate-700">4 star</span>
              <div className="w-2/3 h-2 mx-4 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#F59E0B] rounded"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-slate-300">298</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-slate-700">3 star</span>
              <div className="w-2/3 h-2 mx-4 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#F59E0B] rounded"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-slate-300">312</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-slate-700">2 star</span>
              <div className="w-2/3 h-2 mx-4 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#F59E0B] rounded"
                  style={{ width: "15%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-slate-300">143</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-slate-700">1 star</span>
              <div className="w-2/3 h-2 mx-4 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#F59E0B] rounded"
                  style={{ width: "1%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-slate-300">0</span>
            </div>
          </div>
        </div>
      </div>
      <div id="customer-pictures">
        <h2 className="text-md font-bold font-title text-slate-700">
          কাস্টমারের দেয়া ছবি গুলো
        </h2>
        <div className="bg-slate-50 rounded-md mt-3 h-[7.375rem] py-4 pl-4">
          <ReviewImages reviewImages={reviewImages} max={6} />
        </div>
      </div>
      <div
        id="customer-review-header"
        className="bg-slate-50 rounded-md mt-8 h-16 p-3 flex items-center"
      >
        <h2 className="text-md font-bold font-title text-slate-700">
          কাস্টমারের রিভিউ গুলো
        </h2>
        <div className="ml-auto flex gap-4 items-center">
          <div className="sort-by-dropdown-wrap">
            <select
              className="w-[13rem] text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-0"
              // onChange={(e) => selectOption(e)}
            >
              <option value="random">এলোমেলো</option>
              <option value="recent">সাম্প্রতিক</option>
              <option value="lowToHigh">রেটিং (কম থেকে বেশি)</option>
              <option value="highToLow">রেটিং (বেশি থেকে কম)</option>
            </select>
          </div>
          <div className="sort-by-dropdown-wrap">
            {/* <HiOutlineFilter size={20} className="absolute left-3 top-2" /> */}
            <select
              className="w-48 text-base text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-0"
              // onChange={(e) => selectOption(e)}
            >
              <option value="all-star">সব স্টার</option>
              <option value="lowToHigh">৫ স্টার</option>
              <option value="highToLow">৪ স্টার</option>
              <option value="lowToHigh">৩ স্টার</option>
              <option value="highToLow">২ স্টার</option>
              <option value="highToLow">১ স্টার</option>
            </select>
          </div>
        </div>
      </div>
      {/* Rating Review Cards */}
      <div className="mt-2">
        {new Array(5).fill(5).map((review) => (
          <RatingReviewCard key={review} reviewImages={reviewImages} />
        ))}
      </div>
    </div>
  );
};

export default RatingReviews;
