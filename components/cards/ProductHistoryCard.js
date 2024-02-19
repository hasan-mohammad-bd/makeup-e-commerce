"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Loader from "../elements/loaders/Loader";
import { formatLongNumber, getFractionFixed } from "@/utils/format-number";
import { getDaysSinceCreation } from "@/utils/format-date";

import { FaStar } from "react-icons/fa";
import { getDiscountPercent } from "@/utils/percent";
import { useSelector } from "react-redux";

const ProductHistoryCard = ({ product, status }) => {
  const { translations } = useSelector((state) => state.common);
  const [loading, setLoading] = useState(true);

  const {
    slug,
    image,
    product_name,
    average_rating,
    total_rating,
    new_price,
    old_price,
    created_at,
  } = product;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Link
      href={`/products/${slug}`}
      className={`grid grid-cols-[76px_auto] items-center bg-white border border-slate-200 hover:border-primary p-4 gap-x-3 h-full`}
    >
      <div
        className="product-img relative"
        style={{
          height: "76px",
        }}
      >
        {getDaysSinceCreation(created_at) < 8 && (
          <div className="absolute top-[-3px] left-0 z-20">
            <span className="bg-primary text-xs px-2 rounded-tl-lg rounded-br-lg text-white">
              {translations["new"] || "নতুন"}
            </span>
          </div>
        )}
        <Image
          src={image || "/assets/images/no-image.png"}
          alt={`product`}
          width={76}
          height={76}
          // priority={true}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="product-content-wrap">
        <h2 className="product-title">{product_name}</h2>
        <div className="product-rating">
          <span className="font-semibold text-slate-900">
            {getFractionFixed(average_rating) || 5}{" "}
            <FaStar className="text-primary pb-1" />
          </span>
          <span className="block border-l border-l-slate-200 pl-2 font-semibold text-slate-900">
            {total_rating === 0 ? 0 : formatLongNumber(total_rating)}
          </span>
        </div>
        <div className="product-price text-sm flex items-center gap-1">
          <span className="text-base/4 font-semibold text-red-500">
            {siteConfig.currency.sign}
            {new_price}
          </span>
          {old_price > new_price ? (
            <>
              <del className="old-price text-sm font-normal text-slate-400">
                {siteConfig.currency.sign}
                {old_price}
              </del>
              <span className="discount inline-block !text-xs text-white bg-red-500 rounded-md py-0.5 px-1 ml-2">
                {getDiscountPercent(old_price, new_price)}% OFF
              </span>
            </>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductHistoryCard;
