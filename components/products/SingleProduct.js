"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../elements/loaders/Loader";
import { addToCart, addToSelected } from "@/store/features/cartSlice";
import { useAddToWishListMutation } from "@/store/features/api/wishListAPI";
import { formatLongNumber, getFractionFixed } from "@/utils/formatNumber";
import { getSalePercent } from "@/utils/getPercent";
import { getDaysSinceCreation } from "@/utils/formatDate";

// ** Import Icon
import { FaStar } from "react-icons/fa";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiArrowLongRight,
} from "react-icons/hi2";

const SingleProduct = ({ product, isFlashSale }) => {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [addToWishlist] = useAddToWishListMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    id,
    slug,
    image,
    product_name,
    brand,
    averate_rating,
    total_rating,
    new_price,
    old_price,
    discount_percentage,
    productVariants,
    stock_qty,
    total_sale_qty,
    created_at,
  } = product;

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setLoading(false);
    }
  }, [product]);

  const handleAddToCart = (product) => {
    if (productVariants?.length) {
      dispatch(addToSelected(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  // Buy Now action
  const handleCheckout = (product) => {
    if (productVariants.length) {
      dispatch(addToSelected(product));
    } else {
      dispatch(addToCart(product));
      router.push("/checkout");
    }
  };

  const handleWishlist = async (productId) => {
    if (!user) {
      toast.error("You're not logged in");
      return;
    }
    try {
      await addToWishlist({ product_id: productId });
      toast.success("Product added to Wishlist!");
    } catch (error) {
      toast.error("Failed to add to wishlist");
    }
  };
  return (
    <>
      {!loading ? (
        <>
          <div className="product-card-wrap min-w-[236px] bg-white border border-slate-200 rounded-xl hover:border-primary">
            <div className="product-img-action-wrap relative">
              {getDaysSinceCreation(created_at) < 8 && (
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-secondary-700 text-sm px-2 rounded-full text-white">
                    নতুন
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 z-20">
                <button
                  aria-label="Add To Wishlist"
                  className="action-btn"
                  onClick={(e) => handleWishlist(id)}
                >
                  <HiOutlineHeart />
                </button>
              </div>
              <div className="product-img p-2 pb-0">
                <Link href="/products/[slug]" as={`/products/${slug}`}>
                  <Image
                    className="default-img h-56 w-56 rounded-lg"
                    src={image || "/assets/images/no-image.png"}
                    alt={product_name}
                    width={226}
                    height={226}
                    // priority={true}
                  />
                </Link>
              </div>
            </div>
            <div className="product-content-wrap p-3">
              <div className="product-category">
                <Link
                  href={`/brands/${brand?.id ? brand?.id : ""}`}
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
                  {product_name}
                </Link>
              </h2>
              <div className="rating-result flex items-center gap-2 mb-4">
                <span className="font-semibold text-slate-900">
                  {getFractionFixed(averate_rating) || 0}{" "}
                  <FaStar className="text-primary pb-1" />
                </span>
                <span className="block border-l border-l-slate-200 pl-2 font-semibold text-slate-900">
                  {total_rating === 0
                    ? "No Rating"
                    : formatLongNumber(total_rating)}
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
                      ৳{old_price}
                    </del>
                    <span className="discount inline-block text-xs text-white bg-red-500 rounded-md py-1 px-1 ml-2">
                      -{getFractionFixed(discount_percentage)}%
                    </span>
                  </>
                ) : null}
              </div>
              <div className="product-actions flex justify-center items-center gap-2">
                <button
                  aria-label="Add To Cart"
                  className="action-btn"
                  onClick={(e) => handleAddToCart(product)}
                >
                  <HiOutlineShoppingCart
                    size={24}
                    className="active:scale-90"
                  />
                </button>
                <button
                  onClick={() => handleCheckout(product)}
                  className="buy-btn px-2"
                >
                  এখনই কিনুন <HiArrowLongRight size={20} />
                </button>
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
                      বিক্রি হয়েছে:{" "}
                      <span className="font-bold">{total_sale_qty}</span>
                    </h3>
                    <h3>
                      বাকি আছে: <span className="font-bold">{stock_qty}</span>
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleProduct;
