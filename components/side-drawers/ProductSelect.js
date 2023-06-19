"use client";
import DrawerRight from "@/components/elements/DrawerRight";
import { removeFromSelected } from "@/store/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

const sizes = [
  "Small",
  "Medium",
  "Large",
  "Extra Large",
  "2XL Large",
  "3XL Large",
];
const ProductSelect = () => {
  const { selectedProduct } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeDrawer = (param) => {
    dispatch(removeFromSelected());
  };
  return (
    <DrawerRight
      title={"নির্বাচন করুন"}
      show={selectedProduct}
      setShow={closeDrawer}
    >
      <div className="p-6">
        <div className="product-info flex gap-2">
          <Image
            src={"/assets/images/review/image-2.png"}
            alt="product"
            height={84}
            width={84}
            sizes="84px"
          />
          <div className="flex flex-col justify-between">
            <h5 className="text-primary">Havit</h5>
            <h4>{selectedProduct?.title.slice(0, 50) + "..."}</h4>
            <div className="flex gap-3 items-center">
              <h3 className="text-xl text-red-500">৳ 1,657</h3>
              <h4 className="text-md text-slate-300 line-through">৳2,984</h4>
              <div className="rounded-full px-3 text-white bg-red-500">
                XL 44% OFF
              </div>
            </div>
          </div>
        </div>
        <div className="product-color mt-4">
          <h4 className="text-slate-700 py-3 font-bold">
            কালার নির্বাচন করুন:
          </h4>
          <div className="flex gap-2">
            {new Array(3).fill(3).map((img) => (
              <Image
                key={img}
                src={"/assets/images/review/image-2.png"}
                alt="product"
                height={52}
                width={52}
                sizes="52px"
                className="rounded-md border-2 border-slate-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="product-size mt-4">
          <h4 className="text-slate-700 py-3 font-bold">সাইজ নির্বাচন করুন:</h4>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <div
                key={size}
                className="py-3 px-4 rounded-lg text-slate-700 border-2 border-slate-300 cursor-pointer"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="product-actions my-6 flex gap-4 justify-between items-center">
          <button className="bg-secondary-700 py-3 w-full px-6 text-white rounded-lg text-center">
            <HiOutlineShoppingCart size={24} />
            <span className="ml-2">কার্টে রাখুন</span>
          </button>
          <button className="bg-primary py-3 w-full px-6 text-white rounded-lg text-center">
            <span className="mr-2">কার্টে রাখুন</span>
            <HiArrowLongRight size={20} />
          </button>
        </div>
        <Link href="/products/productIdOrSlug" className="text-secondary-700">
          <p className="text-center">প্রডাক্টির বিস্তারিত দেখতে ক্লক করুন</p>
        </Link>
      </div>
    </DrawerRight>
  );
};

export default ProductSelect;
