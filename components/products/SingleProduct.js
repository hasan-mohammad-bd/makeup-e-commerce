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

// ** Import Icon
import { FaStar } from "react-icons/fa";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiArrowLongRight,
} from "react-icons/hi2";

const SingleProduct = ({ product, addToCompare }) => {
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

  const handleCompare = (product) => {
    addToCompare(product);
    toast.success("Add to Compare !");
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
          <div className="product-card-wrap bg-white border border-slate-200 rounded-xl hover:border-primary">
            <div className="product-img-action-wrap relative">
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
              <div className="product-action">
                <button
                  href={""}
                  aria-label="Add To Wishlist"
                  className="action-btn"
                  onClick={(e) => handleWishlist(id)}
                >
                  <HiOutlineHeart />
                </button>
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
