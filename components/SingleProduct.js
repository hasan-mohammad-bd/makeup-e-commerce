"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { toast } from "react-toastify";
// import { addToCart } from "../../redux/action/cart";
// import { addToCompare } from "../../redux/action/compareAction";
// import { openQuickView } from "../../redux/action/quickViewAction";
// import { addToWishlist } from "../../redux/action/wishlistAction";
import Loader from "./elements/Loader";

// ** Import Icon
import { FaStar } from "react-icons/fa";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiArrowLongRight,
} from "react-icons/hi2";

const SingleProduct = ({
  product,
  addToCart,
  addToCompare,
  addToWishlist,
  openQuickView,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setLoading(false);
    }
  }, [product]);

  const handleCart = (product) => {
    addToCart(product);
    toast.success("Add to Cart !");
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
                    src={product.images[0].img}
                    alt={product.title}
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
                  {product.brand}
                </Link>
              </div>
              <h2>
                <Link
                  href={`/products/${product.slug}`}
                  className="product-title text-base font-semibold text-slate-900 font-body overflow-text"
                >
                  {product.title}
                </Link>
              </h2>
              <div className="rating-result flex items-center gap-3 mb-4">
                <span className="text-sm/[16px] font-semibold text-slate-900">
                  {product.rating}
                  <FaStar
                    size={12}
                    className="inline text-primary align-middle"
                  />
                </span>
                <span className="text-sm/[16px] font-semibold text-slate-900">
                  {product.review}K
                </span>
              </div>
              <div className="product-price mb-3">
                <span className="text-lg/[24px] font-semibold text-red-500">
                  {product.price}{" "}
                </span>
                <del className="old-price text-sm font-normal text-slate-400">
                  {product.oldPrice ? `$ ${product.oldPrice}` : null}
                </del>
                <span className="discount inline-block text-xs text-white bg-red-500 rounded-md py-.5 px-1 ml-2">
                  {product.discount.percentage}%
                </span>
              </div>
              <div className="product-actions flex justify-center items-center gap-2">
                <a
                  aria-label="Add To Cart"
                  className="action-btn"
                  onClick={(e) => handleCart(product)}
                >
                  <HiOutlineShoppingCart size={24} />
                </a>
                <Link href={"/"} className="buy-btn">
                  এখনই কিনুন <HiArrowLongRight size={20} />
                </Link>
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
