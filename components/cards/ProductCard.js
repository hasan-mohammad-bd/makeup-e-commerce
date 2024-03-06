"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useState } from "react";
import Loader from "../elements/loaders/Loader";
import { siteConfig } from "@/config/site";
import { getDiscountPercent, getSalePercent } from "@/utils/percent";
import { getDaysSinceCreation } from "@/utils/format-date";
import { formatLongNumber } from "@/utils/format-number";
import useCart from "@/hooks/useCart";
import useWishList from "@/hooks/useWishList";
import { Rating } from "react-simple-star-rating";

// ** Import Icon

import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";

import HeartRedIcon from "../elements/svg/HeartRedIcon";
import { MdOutlineRemoveRedEye } from "react-icons/md";

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
                {translations["out-of-stock"] || "Out of Stock"}
              </span>
            </div>
          ) : null}

          <div
            className={twMerge(
              `min-w-[166px] bg-white md:w-auto relative w-auto h-full pb-8 flex flex-col justify-between`,
              stockOut ? "opacity-50" : ""
            )}
          >
            <div className="product-img-action-wrap relative">
              {getDaysSinceCreation(created_at) < 8 && (
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-primary text-sm px-2 rounded-tl-lg rounded-br-lg text-white">
                    {translations["new"] || "New"}
                  </span>
                </div>
              )}

              <div className="product-img pb-0">
                <Link
                  className={`${stockOut ? "pointer-events-none" : ""}`}
                  disabled={stockOut}
                  href="/products/[slug]"
                  as={`/products/${slug}`}
                >
                  <Image
                    className={`default-img object-cover lg:!h-[18.188rem] !h-[12rem] md:!h-[15rem] w-full bg-[#DCDDDF]`}
                    src={image || "/assets/images/no-image.png"}
                    alt={product_name}
                    width={0}
                    height={0}

                    // priority={true}
                  />
                </Link>
              </div>
            </div>
            <div className="product-content-wrap my-3">
              <div className="product-category">
                <span
                  // href={`/brands/${brand?.id ? brand?.id : ""}`}
                  className="text-xs capitalize text-slate-500"
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

              <div
                className={`product-price flex justify-start whitespace-nowrap ${
                  isLarge ? "items-center" : "items-start lg:items-center"
                } lg:flex-row gap-1`}
              >
                <span className="text-slate-800">
                  {siteConfig.currency.sign}
                  {new_price}
                </span>

                {old_price > new_price ? (
                  <div className="flex items-center gap-2">
                    {/*                    <span>
                      <FiMinus className="text-slate-800 mx-1" />
                    </span> */}
                    <del className="old-price mx-1 font-normal text-slate-800">
                      {siteConfig.currency.sign}
                      {old_price}
                    </del>

                    <span className="discount-badge ml-1 !text-[12px]">
                      {getDiscountPercent(old_price, new_price)}% OFF
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="product-rating mt-2 md:mt-0">
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
            </div>
            <div className="actions bottom-3 w-full">
              <div
                className="product-actions flex gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  disabled={stockOut}
                  aria-label="Add To Cart"
                  className="border border-slate-200 flex items-center h-fit px-[0.625rem] py-2 rounded-[0.2rem] group  hover:text-white hover:bg-primary"
                  onClick={(e) => handleAddToCart(product)}
                >
                  <HiOutlineShoppingCart
                    size={24}
                    className="active:scale-90 text-slate-500 mr-1 group-hover:text-white"
                  />
                  {"  "}
                  <span className="whitespace-nowrap  justify-center items-center hidden lg:flex">
                    <p className="text-[14px] leading-none"> + Add to Cart</p>
                  </span>
                </button>
                <button
                  aria-label="Add To Wishlist group hover:bg-primary"
                  className={`border border-slate-300 px-3 rounded-[0.2rem] group hover:bg-primary  @  text-slate-500`}
                  onClick={(e) =>
                    isInWishList
                      ? handleRemoveFromWishlist(id)
                      : handleAddToWishlist(id)
                  }
                >
                  {isInWishList ? (
                    <HeartRedIcon
                      className="text-red-500 border group-hover:border-white"
                      size={20}
                    />
                  ) : (
                    <>
                      <span className="">
                        <HiOutlineHeart
                          className="group-hover:text-white"
                          size={20}
                        />
                      </span>
                    </>
                  )}
                </button>
                <button
                  className={`border border-slate-300 px-3 group hover:bg-primary rounded-[0.2rem] text-slate-500`}
                  onClick={() => toggleModal()}
                >
                  <MdOutlineRemoveRedEye
                    className="group-hover:text-white"
                    size={20}
                  />
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
                      {translations["sold"] || "Sold"}:{" "}
                      <span className="font-bold">{total_sale_qty}</span>
                    </h3>
                    <h3>
                      {translations["in-stock"] || "In Stock"}:{" "}
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
