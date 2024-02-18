"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useState } from "react";
import Loader from "../elements/loaders/Loader";
import { siteConfig } from "@/config/site";
import { getDiscountPercent, getSalePercent } from "@/utils/percent";
import { getDaysSinceCreation } from "@/utils/format-date";
import { formatLongNumber, getFractionFixed } from "@/utils/format-number";
import useCart from "@/hooks/useCart";
import useWishList from "@/hooks/useWishList";
import { Rating } from "react-simple-star-rating";

// ** Import Icon
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import HeartRedIcon from "../elements/svg/HeartRedIcon";
import { MdOutlineMinimize, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import ProductDetailsModal from "../modals/ProductDetailsModal";
import { useSelector } from "react-redux";

const ProductCard = ({ product, isFlashSale, isLarge, translations = {} }) => {
  const { settings } = useSelector((state) => state.common);
  const [showModal, setShowModal] = useState(false);
  const { handleAddToCart, handleAddAndCheckout } = useCart(); //custom hook for reusing
  const {
    handleAddToWishlist,
    handleWishListProductStatus,
    handleRemoveFromWishlist,
  } = useWishList(); //custom hook for reusing
  const [loading, setLoading] = useState(true);

  const {
    id,
    slug,
    image,
    product_name,
    brand,
    average_rating,
    total_rating,
    new_price,
    old_price,
    stock_qty,
    total_sale_qty,
    created_at,
  } = product;

  

  const isInWishList = handleWishListProductStatus(id);
  const stockOut = stock_qty <= 0 ? true : false;

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setLoading(false);
    }
  }, [product]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {!loading ? (
        <div className="relative">
          <div className="absolute top-4 right-4 z-20"></div>
          {stockOut ? (
            <div className="rounded z-10 absolute right-1/2 w-full translate-x-1/2 top-1/4 flex items-center justify-center ">
              <span className="text-red-500  text-[14px] md:[18px] leading-6 rounded-lg whitespace-nowrap capitalize bg-white border-red-500 px-3 py-1">
                {translations["out-of-stock"] || "স্টক শেষ"}
              </span>
            </div>
          ) : null}

          <div
            className={twMerge(
              `min-w-[166px] bg-white md:w-auto relative w-auto h-full pb-8`,
              stockOut ? "opacity-50" : ""
            )}
          >
            <div className="product-img-action-wrap relative">
              {getDaysSinceCreation(created_at) < 8 && (
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-primary text-sm px-2 rounded-tl-lg rounded-br-lg text-white">
                    {translations["new"] || "নতুন"}
                  </span>
                </div>
              )}

              <div className="product-img p-1 md:p-1.5 pb-0">
                <Link
                  className={`${stockOut ? "pointer-events-none" : ""}`}
                  disabled={stockOut}
                  href="/products/[slug]"
                  as={`/products/${slug}`}
                >
                  <Image
                    className={`default-img object-cover md:h-[17.188rem] h-[12rem] w-full bg-[#DCDDDF]`}
                    src={image || "/assets/images/no-image.png"}
                    alt={product_name}
                    width={0}
                    height={0}

                    // priority={true}
                  />
                </Link>
              </div>
            </div>
            <div className="product-content-wrap p-3">
              <div className="product-category">
                <span
                  // href={`/brands/${brand?.id ? brand?.id : ""}`}
                  className="text-xs capitalize"
                >
                  {brand?.brand_name || "No Brand"}
                </span>
              </div>
              <h2
                className={`product-title !line-clamp-2 lg:!line-clamp-1 ${
                  stockOut ? "pointer-events-none" : ""
                }`}
              >
                <Link href={`/products/${slug}`}>{product_name}</Link>
              </h2>
              <div className="product-rating">
                <span className="font-semibold text-slate-900">
                  <Rating
                    initialValue={average_rating || 5}
                    allowFraction
                    readonly
                    size={18}
                    fillColor="#FFC107"
                  />{" "}
                </span>
                <span className="block border-l border-l-slate-200 pl-2 font-semibold text-slate-900">
                  {total_rating === 0 ? 0 : formatLongNumber(total_rating)}
                </span>
              </div>
              <div
                className={`product-price mb-3 flex justify-start whitespace-nowrap ${
                  isLarge ? "items-center" : "items-start lg:items-center"
                } lg:flex-row gap-1`}
              >
                <span className="text-slate-500">
                  {siteConfig.currency.sign}
                  {new_price}
                </span>

                {old_price > new_price ? (
                  <div className="flex items-center gap-2">
                    <span>
                      <FiMinus className="text-slate-500 mx-1 my-2" />
                    </span>
                    <del className="old-price text-sm font-normal text-slate-500">
                      {siteConfig.currency.sign}
                      {old_price}
                    </del>

                    {/*                     <span className="discount-badge ml-1 !text-[12px]">
                      {getDiscountPercent(old_price, new_price)}% OFF
                    </span> */}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="actions bottom-3 w-full px-3">
              <div
                className="product-actions flex gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  disabled={stockOut}
                  aria-label="Add To Cart"
                  className="border border-slate-300 flex h-fit px-[10px] py-2"
                  onClick={(e) => handleAddToCart(product)}
                >
                  <HiOutlineShoppingCart
                    size={24}
                    className="active:scale-90 text-slate-500"
                  />{" "}
                  <span className="text-slate-500 whitespace-nowrap hidden md:block">
                    + Add to card
                  </span>
                </button>
                <button
                  aria-label="Add To Wishlist"
                  className={`border border-slate-300 px-3  @  text-slate-500`}
                  onClick={(e) =>
                    isInWishList
                      ? handleRemoveFromWishlist(id)
                      : handleAddToWishlist(id)
                  }
                >
                  {isInWishList ? (
                    <HeartRedIcon size={20} />
                  ) : (
                    <>
                      <span className="">
                        <HiOutlineHeart size={20} />
                      </span>
                    </>
                  )}
                </button>
                <button
                  className={`border border-slate-300 px-3 text-slate-500`}
                  onClick={() => toggleModal()}
                >
                  <MdOutlineRemoveRedEye size={20} />
                </button>
                {/*                 <button
                  disabled={stockOut}
                  onClick={() => handleAddAndCheckout(product)}
                  className="buy-btn flex-center gap-1"
                >
                  {translations["buy-now"] || "এখনই কিনুন"}
                  <div className="hidden lg:block">
                    <HiOutlineArrowNarrowRight
                      className="hidden lg:block"
                      size={20}
                    />
                  </div>
                </button> */}
              </div>
              {isFlashSale && (
                <div className="product-flash-counter mt-4">
                  <div className=" flex items-center gap-3">
                    <div className="w-full h-[6px] bg-gray-200 rounded">
                      <div
                        className="h-[6px] bg-secondary-700 rounded"
                        style={{
                          width: `${getSalePercent(
                            total_sale_qty,
                            stock_qty
                          )}%`,
                        }}
                      ></div>
                    </div>
                    {/* <h3>{getSalePercent(total_sale_qty, stock_qty)}%</h3> */}
                  </div>
                  <div className="flex-between mt-3 text-xs">
                    <h3>
                      {translations["sold"] || "বিক্রি"}:{" "}
                      <span className="font-bold">{total_sale_qty}</span>
                    </h3>
                    <h3>
                      {translations["in-stock"] || "বাকি"}:{" "}
                      <span className="font-bold">{stock_qty}</span>
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      {showModal && (
        <ProductDetailsModal
          product={product}
          showModal={showModal}
          setShowModal={setShowModal}
          settings={settings}
          translations={translations}

        />
      )}
    </>
  );
};

export default ProductCard;
