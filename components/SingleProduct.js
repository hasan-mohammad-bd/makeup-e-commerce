"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "./elements/Loader";
import { useRouter } from "next/navigation";

// ** Import Icon
import { FaStar } from "react-icons/fa";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiArrowLongRight,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart, addToSelected } from "@/store/features/cartSlice";

const SingleProduct = ({
  product,
  addToCompare,
  addToWishlist,
  openQuickView,
}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setLoading(false);
    }
  }, [product]);

  const handleAddToCart = (product) => {
    if (product.productVariants.length) {
      dispatch(addToSelected(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  // Buy Now action
  const handleCheckout = (product) => {
    if (product.productVariants.length) {
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

  const handleWishlist = (product) => {
    addToWishlist(product);
    toast.success("Add to Wishlist !");
  };
  return (
    <>
      {!loading ? (
        <>
          <div className="product-card-wrap bg-white border border-slate-200 rounded-xl">
            <div className="product-img-action-wrap relative">
              <div className="product-img p-2 pb-0">
                <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                  <Image
                    className="default-img"
                    src={product?.image || "/assets/images/no-image.png"}
                    alt={product?.product_name}
                    width={220}
                    height={220}
                    priority={true}
                  />
                </Link>
              </div>
              <div className="product-action">
                <Link
                  href={""}
                  aria-label="Add To Wishlist"
                  className="action-btn"
                  onClick={(e) => handleWishlist(product)}
                >
                  <HiOutlineHeart />
                </Link>
              </div>
            </div>
            <div className="product-content-wrap p-3">
              <div className="product-category">
                <Link
                  href="/products"
                  className="text-xs text-primary capitalize"
                >
                  {product?.brand?.brand_name || "No Brand"}
                </Link>
              </div>
              <h2>
                <Link
                  href={`/products/${product.slug}`}
                  className="product-title text-base font-semibold text-slate-900 font-body overflow-text"
                >
                  {product?.product_name}
                </Link>
              </h2>
              <div className="rating-result flex items-center gap-3 mb-4">
                <div className="font-semibold text-slate-900 inline-flex gap-1 justify-center">
                  {product?.rating || 0}
                  <FaStar className="inline text-primary align-middle" />
                </div>
                <div className="font-semibold text-slate-900 inline-flex gap-1 justify-center">
                  {product?.review || 0}K
                </div>
              </div>
              <div className="product-price mb-3 flex gap-2">
                <span className="text-lg/[24px] font-semibold text-red-500">
                  ৳{product?.new_price}
                </span>
                {typeof product?.discount_percentage === "number" &&
                product?.discount_percentage > 0 ? (
                  <>
                    <del className="old-price text-lg/[24px] font-normal text-slate-400">
                      {product?.old_price}
                    </del>
                    <span className="discount inline-block text-xs text-white bg-red-500 rounded-md py-1 px-1 ml-2">
                      -{product?.discount_percentage.toFixed(2)}%
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
