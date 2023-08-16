import Image from "next/image";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";

import ReviewImages from "./ReviewImages";
import { getSlicedText } from "@/utils/formatText";
import { getBdFormattedDate } from "@/utils/formatDate";

const RatingReviewCard = ({ review }) => {
  // console.log(review);
  return (
    <div className="flex border-b border-slate-300 px-4 py-3 mb-4 gap-6 items-start">
      <div
        id="user-info"
        className="flex flex-col justify-center max-w-[35rem] pr-4"
      >
        <div className="flex items-center mb-3">
          <Rating
            initialValue={review.rating}
            allowFraction
            readonly
            size={24}
            transition
          />
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src={`/assets/images/user/male.jpg`}
            alt={"male"}
            width={28}
            height={28}
            className="h-7 w-7 rounded-full"
          />
          <div>
            <p className="font-bold">{getSlicedText(review.customer.name)}</p>
          </div>
        </div>
        <p className="text-slate-500 mt-3">
          {getBdFormattedDate(review.created_at)}
        </p>
      </div>
      <div id="review" className="w-full">
        <p className="text-slate-700">{review.comment}</p>
        <div className="rounded-md h-[7.375rem] py-4">
          <ReviewImages review={review} max={4} />
        </div>
        <div className="actions flex-between mt-2">
          <p>কালার: সাদা</p>
          <p>সাইজ: Small</p>
          <div className="like-dislike flex-center gap-4">
            <button className="icon-btn text-primary">
              <AiFillLike /> {review.likes_count}
            </button>
            <button className="icon-btn text-slate-700 hover:text-primary">
              <AiFillDislike /> {review.dislikes_count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingReviewCard;
