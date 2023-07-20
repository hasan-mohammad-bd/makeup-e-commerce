"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getSlicedText } from "@/utils/formatText";
import Loader from "../elements/Loader";

// ** Import Icon
import { FaStar } from "react-icons/fa";

const SingleProductList = ({ product }) => {
  const [loading, setLoading] = useState(true);

  const {
    slug,
    image,
    product_name,
    brand,
    rating,
    review,
    new_price,
    old_price,
    discount_percentage,
  } = product;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <div className="product-card-wrap flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4">
            <div className="product-img-action-wrap relative">
              <div className="product-img">
                <Link href="/products/[slug]" as={`/products/${slug}`}>
                  <Image
                    className="default-img"
                    src={image || "/assets/images/no-image.png"}
                    alt={product_name}
                    width={116}
                    height={116}
                    priority={true}
                  />
                </Link>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="product-category">
                <Link
                  href="/products"
                  className="text-xs text-primary capitalize"
                >
                  {brand?.brand_name || "No Brand"}
                </Link>
              </div>
              <h2>
                <Link
                  href={`/products/${slug}`}
                  className="product-title text-base font-semibold text-slate-900 font-body overflow-text"
                >
                  {getSlicedText(product_name, 25)}
                </Link>
              </h2>
              <div className="rating-result flex items-center gap-3 mb-2">
                <span className="text-sm/[16px] font-semibold text-slate-900">
                  {rating || 0}
                  <FaStar
                    size={12}
                    className="inline text-primary align-middle"
                  />
                </span>
                <span className="text-sm/[16px] font-semibold text-slate-900">
                  {review || 0}K
                </span>
              </div>
              <div className="product-price mb-3 flex gap-2">
                <span className="text-lg/[24px] font-semibold text-red-500">
                  ৳{new_price}
                </span>
                {typeof discount_percentage === "number" &&
                discount_percentage > 0 ? (
                  <>
                    <del className="old-price text-lg/[24px] font-normal text-slate-400">
                      {old_price}
                    </del>
                    <span className="discount inline-block text-xs text-white bg-red-500 rounded-md py-1 px-1 ml-2">
                      -{discount_percentage.toFixed(2)}%
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleProductList;
