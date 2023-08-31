"use client";
import { useSearchParams } from "next/navigation";
import RatingReviewCard from "./RatingReviewCard";
import { Rating } from "react-simple-star-rating";
import {
  useGetProductReviewsQuery,
  useGetReviewImagesQuery,
  useGetReviewSummaryQuery,
} from "@/store/features/api/productReviewAPI";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import AllReviewImages from "./AllReviewImages";
import Paginator from "@/components/elements/Paginator";
import ReviewSortSelect from "./ReviewSortSelect";
import ReviewFilterSelect from "./ReviewFilterSelect";
import { useSelector } from "react-redux";

const RatingReviews = ({ params }) => {
  const { product_id } = params;
  const { user } = useSelector((state) => state.auth);

  // Review Summary
  const { data: summary = {}, isLoading: summaryLoading } =
    useGetReviewSummaryQuery(product_id);

  const starLabelToValue = {
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
  };

  // Calculate percentage for each star rating
  const percentages = {
    five: (summary.five / summary.totalReview) * 100,
    four: (summary.four / summary.totalReview) * 100,
    three: (summary.three / summary.totalReview) * 100,
    two: (summary.two / summary.totalReview) * 100,
    one: (summary.one / summary.totalReview) * 100,
  };

  //ALL Review Images
  const { data: reviewImageData, isLoading: imagesLoading } =
    useGetReviewImagesQuery(product_id);

  const reviewImages = reviewImageData?.data || [];

  //ALL Reviews
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);

  if (user) {
    queryParams.set("reference_id", user?.id);
  }

  const { data, isLoading } = useGetProductReviewsQuery(
    product_id + "&" + queryParams.toString()
  );
  const allReviews = data?.data || [];
  const meta = data?.meta || {};
  // console.log(allReviews);

  return (
    <div className="product-rating-reviews mb-8">
      <h2 className="text-2xl font-bold font-title text-slate-900">
        রেটিং ও রিভিউ:
      </h2>
      {summaryLoading ? (
        <ItemsListLoader noImage={true} numItems={1} />
      ) : (
        <div className="rating grid grid-cols-7 mt-3 mb-5 pb-6 border-b-[1px] border-slate-200">
          <div className="justify-self-start col-span-2 text-center flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-slate-950">
              {summary?.avarateReview || 0}
            </h3>
            <div className="my-3">
              <Rating
                initialValue={summary?.avarateReview}
                allowFraction
                readonly
                size={24}
                transition
                fillColor="#F59E0B"
              />
            </div>
            <p className="text-slate-700">{summary?.totalReview} গুলো রেটিং</p>
          </div>
          <div className="rating-summery col-span-5 grid grid-cols-12 items-center">
            <div className="h-[88px] w-[1px] bg-slate-200 mr-5 justify-self-start"></div>
            <div className="col-span-11">
              {Object.keys(percentages).map((star) => (
                <div key={star} className="flex items-center gap-2 mt-4">
                  <span className="text-sm font-medium text-slate-700">
                    {starLabelToValue[star]}
                  </span>
                  <div className="w-5/6 h-[6px] bg-gray-200 rounded">
                    <div
                      className="h-[6px] bg-amber-500 rounded"
                      style={{ width: `${percentages[star] || 0}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {summary[star]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div id="customer-pictures">
        <h2 className="text-md font-bold font-title text-slate-700">
          কাস্টমারের দেয়া ছবি গুলো
        </h2>
        <div className="bg-slate-50 rounded-md mt-3 p-4">
          {imagesLoading ? (
            <ItemsListLoader noImage={true} numItems={1} />
          ) : (
            <AllReviewImages images={reviewImages} max={6} />
          )}
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
          <ReviewSortSelect />
          <ReviewFilterSelect />
        </div>
      </div>
      {/* Rating Review Cards */}
      {isLoading ? (
        <ItemsListLoader noImage={true} numItems={3} />
      ) : (
        <div className="mt-2">
          {allReviews.map((review) => (
            <RatingReviewCard
              key={review.id}
              review={review}
              reviewImages={reviewImages}
            />
          ))}
        </div>
      )}
      <div className="flex justify-end my-9">
        <Paginator meta={meta} />
      </div>
    </div>
  );
};

export default RatingReviews;
