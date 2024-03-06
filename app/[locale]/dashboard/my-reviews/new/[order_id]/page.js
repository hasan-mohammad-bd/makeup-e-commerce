"use client";

import Image from "next/image";
import { useRouter } from "@/navigation";
import { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import ReviewImagesUpload from "./_components/ReviewImagesUpload";
import {
  useAddReviewMutation,
  useGetUserReviewShowQuery,
} from "@/store/api/productReviewAPI";
import noImage from "@/public/assets/images/no-image.png";
import { getFormattedDate } from "@/utils/format-date";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import EmojiSmile from "@/components/elements/svg/EmojiSmile";
import NestedPageTitle from "../../../_components/NestedPageTitle";
import ReviewInstruction from "./_components/ReviewInstruction";

const AddReview = ({ params }) => {
  const { order_id } = params;
  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [imageFiles, setImageFiles] = useState({});
  const [validationError, setValidationError] = useState(false);
  const { translations } = useSelector((state) => state.common);

  const { data } = useGetUserReviewShowQuery(order_id);
  const reviewShow = data?.data || {};
  const totalItemsCount = reviewShow?.saleProducts?.length || 0;

  const [createReview] = useAddReviewMutation();
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (isActive && !event.target.closest("#myButton")) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isActive]);

  // Function to update the rating for a specific item
  const updateRating = (itemId, rating) => {
    // console.log(itemId, rating);
    setRatings((prevRating) => ({
      ...prevRating,
      [itemId]: rating,
    }));
  };

  // Function to update the review text for a specific item
  const updateReviewText = (itemId, newText) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [itemId]: newText,
    }));
  };

  // Function to update the image files for a specific item
  const updateImageFiles = (itemId, newFiles) => {
    setImageFiles((prevFiles) => {
      const existingFiles = prevFiles[itemId] || []; // Get the existing files for the item
      const uniqueNewFiles = newFiles.filter((file) => {
        const fileExists = existingFiles.some(
          (existingFile) =>
            existingFile.name === file.name && existingFile.size === file.size
        );
        return !fileExists;
      }); // Filter out duplicates from new files
      const updatedFiles = [...existingFiles, ...uniqueNewFiles]; // Append unique new files to existing files
      return {
        ...prevFiles,
        [itemId]: updatedFiles,
      };
    });
  };

  // Handling review creating
  const handleReviewSubmit = async () => {
    if (
      Object.keys(ratings).length !== totalItemsCount ||
      Object.keys(reviews).length !== totalItemsCount
    ) {
      setValidationError(true);
      return;
    }
    try {
      const createPromises = reviewShow?.saleProducts?.map(
        ({ barcode, product }, index) => {
          const formData = new FormData();
          if (imageFiles[index] && imageFiles[index].length) {
            imageFiles[index].forEach((image) => {
              formData.append("image[]", image);
            });
          }
          formData.append("sale_id", reviewShow?.id);
          formData.append("product_id", product.id);
          formData.append("rating", ratings[index]);
          formData.append("comment", reviews[index]);
          formData.append("barcode_id", barcode.id);
          return createReview(formData);
        }
      );
      await Promise.all(createPromises);
      toast.success("Review Added Successfully");
      router.push("/dashboard/my-reviews");
    } catch (error) {
      toast.error("Failed to add reviews");
      console.log(error);
    }
  };

  return (
    <div className="mb-4 lg:mb-14">
      <NestedPageTitle
        title={translations["my-review"] || "My Review"}
        href={"/dashboard/my-reviews"}
        buttonText={translations["go-back"] || "Go Back"}
      />
      <div className="content mt-7 lg:mt-6 px-3 lg:px-10">
        <div className="relative">
          <div className="sec-heading absolute top-[-10px] left-0 w-full px-3 lg:px-8">
            <span className="bg-white text-secondary-700 px-2">
              {translations["delivery-completed"] || "Delivery Completed"}:{" "}
              {getFormattedDate(reviewShow?.delivered_at)}
            </span>
          </div>
          <div className="p-4 bg-white border-2 border-slate-200">
            <div className="ordered-items">
              {reviewShow?.saleProducts?.map(({ barcode, product }, index) => (
                <div key={index}>
                  <div className={`flex gap-4 my-4`}>
                    <div className="">
                      <Image
                        src={product.image || noImage}
                        alt="product"
                        height={64}
                        width={64}
                        className="h-16 w-16"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <h4 className="font-semibold">{product.product_name}</h4>
                      <div className="flex items-center gap-3">
                        {barcode?.color && (
                          <div className="px-2 border border-slate-300">
                            {barcode.color}
                          </div>
                        )}
                        {barcode?.size && (
                          <div className="px-2 border border-slate-300 ">
                            {barcode.size}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Rating Area */}
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
                    <div className="lg:text-center">
                      <p className="font-semibold">
                        <span className="text-primary">*</span>{" "}
                        {translations["give-a-rating"] || "Give a Rating"}:
                      </p>
                      <div className="bg-slate-100 h-fit lg:h-[8.75rem] w-full lg:w-[10.5rem] flex lg:flex-col justify-between gap-2 lg:gap-3 items-center p-3 lg:p-4 mt-2">
                        <div className="order-2 lg:order-none text-right lg:text-center">
                          <div
                            style={{
                              direction: "ltr",
                              fontFamily: "sans-serif",
                              touchAction: "none",
                            }}
                            className="-mr-1"
                          >
                            <Rating
                              size={24}
                              allowFraction
                              onClick={(rating) => updateRating(index, rating)}
                              transition
                              fillColor="#F59E0B"
                            />
                          </div>
                          <p className="pt-2 lg:pt-4">
                            {translations["outstanding"] || "Outstanding"}
                          </p>
                        </div>
                        <p className="text-primary order-1 lg:order-none">
                          <EmojiSmile />
                        </p>
                      </div>
                      {validationError && !ratings[index] && (
                        <p className="errorMsg">Rating required</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="form-control w-full">
                        <div className="flex-between mb-2">
                          <label className="font-semibold text-slate-900 text-sm lg:text-base whitespace-nowrap">
                            <span className="text-primary">*</span>{" "}
                            {translations["write-a-comment"] || "Write a Comment"}:
                          </label>
                          <span
                            onClick={handleButtonClick}
                            className="cursor-pointer text-sm lg:text-base text-secondary-800 whitespace-nowrap relative"
                          >
                            {translations["review-tips-title"] ||
                              "Review Tips"}{" "}
                            <span className="group ">
                              {isActive && (
                                <ReviewInstruction
                                  isActive={isActive}
                                  setIsActive={setIsActive}
                                />
                              )}

                              <BsInfoCircleFill
                                size={20}
                                className="text-slate-500"
                              />
                            </span>
                          </span>
                        </div>
                        <textarea
                          className="h-[140px]"
                          type="text"
                          name="msg"
                          placeholder={
                            translations["type-comment"] || "Type comment"
                          }
                          value={reviews[index] || ""}
                          onChange={(e) =>
                            updateReviewText(index, e.target.value)
                          }
                        />
                        {validationError && !reviews[index] && (
                          <p className="errorMsg">Review message is required</p>
                        )}
                      </div>
                      <div>
                        <ReviewImagesUpload
                          itemId={index}
                          imageFiles={imageFiles}
                          updateImageFiles={updateImageFiles}
                          translations={translations}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-0 bg-slate-50 p-4">
                    <h3 className="font-bold font-title">
                      {translations["note"] || "Note"}:
                    </h3>
                    <ul className="list-disc ml-8 text-slate-600 [&>*]:mt-1">
                      <li>
                        {translations["review-note-1"] ||
                          "Maximum 6 images can be uploaded(max size 5MB)"}
                      </li>
                      <li>
                        {translations["review-note-2"] ||
                          "Need maximum 24 hours to analyze your photos"}
                      </li>
                      <li>
                        {translations["review-note-3"] ||
                          "Make sure you have fulfilled all the criteria for giving a review"}
                      </li>
                    </ul>
                  </div>
                  {reviewShow?.saleProducts?.length > 1 &&
                    index < reviewShow?.saleProducts?.length - 1 && (
                      <div className="border-b-2 border-dashed border-slate-300 mt-5 mb-8"></div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end my-4">
          <button
            onClick={handleReviewSubmit}
            className="text-white bg-primary py-3 px-6"
          >
            {translations["give-review"] || "Give Review"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
