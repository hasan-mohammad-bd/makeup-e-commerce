"use client";
import React, { useState } from "react";
import Modal from "../elements/Modal";
import Image from "next/image";
import ReviewViewModal from "./ReviewViewModal";
import { useSelector } from "react-redux";

export default function ReviewGalleryModal({
	showModal,
	setShowModal,
	images,
}) {
	const [reviewId, setReviewId] = useState(null);
	const [showReview, setShowReview] = useState(false);
	const { translations } = useSelector((state) => state.common);

	const handleReviewView = (reviewId) => {
		// console.log(reviewId);
		setReviewId(reviewId);
		setShowReview(true);
	};
	return (
		<Modal
			showModal={showModal}
			setShowModal={setShowModal}
			title={translations["imgs-from-cstmr"] || "কাস্টমারের দেয়া ছবি গুলো"}
		>
			<div className="min-h-[500px]">
				<div className="grid grid-cols-4 lg:grid-cols-6 items-start gap-3">
					{images.map((image, index) => (
						<Image
							key={index}
							src={image.image}
							alt={`review-image-${index}`}
							width={122}
							height={122}
							onClick={() => handleReviewView(image.product_review_id)}
							className={`h-[74px] lg:h-[122px] w-[74px] lg:w-[122px] rounded-lg cursor-pointer`}
						/>
					))}
					{images.map((image, index) => (
						<Image
							key={index}
							src={image.image}
							alt={`review-image-${index}`}
							width={122}
							height={122}
							onClick={() => handleReviewView(image.product_review_id)}
							className={`h-[74px] lg:h-[122px] w-[74px] lg:w-[122px] rounded-lg cursor-pointer`}
						/>
					))}
					{images.map((image, index) => (
						<Image
							key={index}
							src={image.image}
							alt={`review-image-${index}`}
							width={122}
							height={122}
							onClick={() => handleReviewView(image.product_review_id)}
							className={`h-[74px] lg:h-[122px] w-[74px] lg:w-[122px] rounded-lg cursor-pointer`}
						/>
					))}
				</div>
			</div>
			{showReview && (
				<ReviewViewModal
					showModal={showReview}
					setShowModal={setShowReview}
					reviewId={reviewId} // passing product review Id
				/>
			)}
		</Modal>
	);
}
