"use client";
import { useState } from "react";
import Image from "next/image";

import Modal from "@/components/elements/Modal";
import ReviewImageSlider from "@/components/elements/sliders/ReviewImageSlider";

const ReviewImagesBackup = ({ reviewImages, max }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex gap-4">
      {reviewImages.slice(0, max).map((image, index) => (
        <span key={image.imgUrl} className="relative cursor-pointer">
          <Image
            key={image.imgUrl}
            src={image.imgUrl}
            alt={image.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto"
            onClick={() => setShowModal(true)}
          />
          {index === max - 1 ? (
            <div className="backdrop-blur-sm backdrop-brightness-100 rounded-lg absolute top-0 w-full h-full left-0 flex flex-col justify-center">
              <h3 className="text-white text-2xl text-center">
                +{reviewImages.length - max + 1}
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

export default ReviewImagesBackup;
