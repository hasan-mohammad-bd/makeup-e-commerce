"use client";
import DrawerRight from "@/components/elements/DrawerRight";
import { addToCart, removeFromSelected } from "@/store/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

const ProductSelect = () => {
  const { selectedProduct } = useSelector((state) => state.cart);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const variants = selectedProduct?.productVariants || [];
    if (variants.length) {
      // Group the data based on color
      const colorVariantsGroup = variants.reduce((result, variant) => {
        const { color } = variant;
        if (!result[color]) {
          result[color] = [];
        }
        result[color].push(variant);
        return result;
      }, {});
      const firstColor = Object.keys(colorVariantsGroup)[0];
      setColors(colorVariantsGroup);
      setSelectedColor(firstColor);
      setSelectedVariant(colorVariantsGroup[firstColor][0]);
    }
  }, [selectedProduct?.productVariants]);

  const handleAddToCart = () => {
    const variantProduct = {
      ...selectedProduct,
      variantId: selectedVariant?.id,
      selectedVariant,
      // sizes: colors[selectedColor],
    };
    // console.log(variantProduct);
    dispatch(addToCart(variantProduct));
  };

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
            <h5 className="text-primary">
              {selectedProduct?.brand?.brand_name || "No Brand"}
            </h5>
            <h4>{selectedProduct?.product_name.slice(0, 50) + "..."}</h4>
            <div className="flex gap-3 items-center">
              <h3 className="text-xl text-red-500">
                ৳{selectedProduct?.new_price || 0}
              </h3>
              {selectedProduct?.old_price ? (
                <h4 className="text-md text-slate-300 line-through">
                  ৳{selectedProduct?.old_price}
                </h4>
              ) : null}
              {selectedProduct?.discount_percentage ? (
                <div className="rounded-full px-3 text-sm py-1 text-white bg-red-500">
                  {selectedProduct?.discount_percentage}% OFF
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="product-color mt-4">
          <h4 className="text-slate-700 py-3 font-bold">
            কালার নির্বাচন করুন:
          </h4>
          {selectedColor ? (
            <div className="flex gap-2">
              {Object.keys(colors).map((key) => (
                <Image
                  key={key}
                  src={"/assets/images/review/image-2.png"}
                  alt="product"
                  height={52}
                  width={52}
                  sizes="52px"
                  title={key}
                  className={`rounded-md border-2 ${
                    key === selectedColor
                      ? "border-primary"
                      : "border-slate-300"
                  } cursor-pointer`}
                  onClick={() => setSelectedColor(key)}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="product-size mt-4">
          <h4 className="text-slate-700 py-3 font-bold">সাইজ নির্বাচন করুন:</h4>
          {colors[selectedColor]?.length ? (
            <div className="flex gap-2 flex-wrap">
              {colors[selectedColor]?.map((variant) => (
                <div
                  key={variant.id}
                  className={`py-3 px-4 rounded-lg text-slate-700 border-2 ${
                    variant?.id === selectedVariant?.id
                      ? "border-primary"
                      : "border-slate-300"
                  } cursor-pointer`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.size}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="product-actions my-6 flex gap-4 justify-between items-center">
          <button
            className="bg-secondary-700 py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
            onClick={handleAddToCart}
          >
            <HiOutlineShoppingCart size={24} />
            <span className="ml-2">কার্টে রাখুন</span>
          </button>
          <Link
            href={"/checkout"}
            className="bg-primary py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
          >
            <span className="mr-2">এখনই কিনুন</span>
            <HiArrowLongRight size={20} />
          </Link>
        </div>
        <Link href="/products/productIdOrSlug" className="text-secondary-700">
          <p className="text-center">প্রডাক্টির বিস্তারিত দেখতে ক্লক করুন</p>
        </Link>
      </div>
    </DrawerRight>
  );
};

export default ProductSelect;
