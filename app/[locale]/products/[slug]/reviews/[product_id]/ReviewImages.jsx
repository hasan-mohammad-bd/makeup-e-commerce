"use client";
import { useState } from "react";
import Image from "next/image";
import ReviewViewModal from "@/components/modals/ReviewViewModal";
import ReviewGalleryModal from "@/components/modals/ReviewGalleryModal";

const ReviewImages = ({ review, max }) => {
  const [showModal, setShowModal] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

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
            className="h-[90px] w-[90px] rounded-lg"
            onClick={() => setShowModal(true)}
          />
          {index === max - 1 ? (
            <div
              onClick={() => setGalleryOpen(true)}
              className="backdrop-blur-sm backdrop-brightness-100 rounded-lg absolute top-0 w-full h-full left-0 flex flex-col justify-center"
            >
              <h3 className="text-white text-2xl text-center">
                +{review.images.length - max + 1}
              </h3>
            </div>
          ) : null}
        </span>
      ))}
      {galleryOpen && (
        <ReviewGalleryModal
          showModal={galleryOpen}
          setShowModal={setGalleryOpen}
          images={review.images}
        />
      )}
      {showModal && (
        <ReviewViewModal
          showModal={showModal}
          setShowModal={setShowModal}
          review={review}
        />
      )}
    </div>
  );
};

export default ReviewImages;
