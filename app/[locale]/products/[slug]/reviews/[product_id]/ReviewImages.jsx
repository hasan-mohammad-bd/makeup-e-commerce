"use client";
import { useState } from "react";
import Image from "next/image";

import Modal from "@/components/elements/Modal";
import ReviewImageSlider from "@/components/elements/sliders/ReviewImageSlider";

const ReviewImages = ({ review, max }) => {
  console.log(review);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex gap-4">
      {review.images.slice(0, max).map((item, index) => (
        <span key={item.image} className="relative cursor-pointer">
          <Image
            key={item.image}
            src={item.image}
            alt={`review-image-` + index}
            width={90}
            height={90}
            className="h-20 w-20"
            onClick={() => setShowModal(true)}
          />
          {index === max - 1 ? (
            <div className="backdrop-blur-sm backdrop-brightness-100 rounded-lg absolute top-0 w-full h-full left-0 flex flex-col justify-center">
              <h3 className="text-white text-2xl text-center">
                +{review.images.length - max + 1}
              </h3>
            </div>
          ) : null}
        </span>
      ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"কাস্টমারের দেয়া রিভিউ ছবি গুলো"}
      >
        <ReviewImageSlider />
      </Modal>
    </div>
  );
};

export default ReviewImages;
