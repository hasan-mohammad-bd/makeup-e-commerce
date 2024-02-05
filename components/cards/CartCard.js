"use client";

import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import * as cartActions from "@/store/slices/cartSlice";
import noImage from "@/public/assets/images/no-image.png";
import { Link } from "@/navigation";
import { siteConfig } from "@/config/site";
import { getDiscountPercent } from "@/utils/percent";
import { BsChevronDown } from "react-icons/bs";
import { getAppropriatePhoto } from "@/lib/cart";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const {
    slug,
    brand,
    product_name,
    quantity,
    // barcodes,
    barcodeId,
    selectedBarCode,
    availableSizes,
  } = item;

  return (
    <div className="relative cart-card  bg-white border-t pt-3 border-slate-200 mb-3 p-3">
      <button
        className="absolute right-3 lg:right-4 top-2 lg:top-3 bg-transparent text-red-500"
        onClick={() => dispatch(cartActions.removeFromCart(barcodeId))}
      >
        <FiTrash2 />
      </button>
      <div className="grid grid-cols-[72px_auto] lg:grid-cols-[104px_auto] gap-3 lg:gap-4">
        <Image
          src={getAppropriatePhoto(item, selectedBarCode?.color) || noImage}
          alt="product"
          height={84}
          width={84}
          className="h-[72px] w-[72px] lg:w-[104px] lg:h-[104px]"
        />
        <div className="flex flex-col justify-between">
          <h5 className="text-primary text-xs">
            {brand?.brand_name || "No Brand"}
          </h5>
          <h2>
            <Link href={`/products/${slug}`} className="product-title">
              {product_name}
            </Link>
          </h2>
          {/*         <div className="flex gap-2 lg:gap-3 products-center items-center">
            <h3 className="text-base/[16px] lg:text-xl text-red-500">
              {siteConfig.currency.sign}{" "}
              {selectedBarCode.discount_selling_price}
            </h3>
            {selectedBarCode.discount_selling_price <
            selectedBarCode.selling_price ? (
              <>
                <del className="text-sm text-slate-300">
                  {siteConfig.currency.sign} {selectedBarCode.selling_price}
                </del>
                <div className="rounded-md px-1 text-xs py-0.5 text-white bg-red-500">
                  {getDiscountPercent(
                    selectedBarCode.selling_price,
                    selectedBarCode.discount_selling_price
                  )}
                  % OFF
                </div>
              </>
            ) : null}
          </div> */}
          <div className="product-price flex items-center gap-4">
            <span className="text-lg font-title text-slate-900">
              {siteConfig.currency.sign}{" "}
              {selectedBarCode.discount_selling_price}
            </span>

            <>
              <del className="old-price text-base lg:text-lg/[24px] font-normal text-slate-400">
                {siteConfig.currency.sign} {selectedBarCode.selling_price}
              </del>
              {/*                     <span className="discount inline-block text-lg font-semibold font-title text-white bg-red-500 rounded-md py-1 px-2">
                      {getDiscountPercent(oldPrice, newPrice)}% OFF
                    </span> */}
            </>
          </div>
          <div className="flex products-center justify-between items-center text-sm mt-2">
            <div className="flex products-center gap-3">
              {selectedBarCode.color && (
                <p className="px-2 py-[1px] text-sm h-6 border border-slate-300 ">
                  {selectedBarCode?.color}
                </p>
              )}

              {availableSizes?.length > 1
                ? selectedBarCode.size && (
                    <button
                      className="px-2 py-[1px] text-sm h-6 border border-slate-300 cursor-pointer"
                      onClick={() =>
                        dispatch(cartActions.addToSizeChange(item))
                      }
                    >
                      {selectedBarCode?.size}
                      <BsChevronDown className="ml-1 text-slate-900" />
                    </button>
                  )
                : selectedBarCode.size && (
                    <p className="px-2 py-[1px] text-sm h-6 border border-slate-300 rounded-md">
                      {selectedBarCode?.size}
                    </p>
                  )}
            </div>
            <div className="flex w-fit rounded-full border border-slate-200 items-center products-center gap-2 text-slate-900 ">
              <button
                disabled={quantity <= 1}
                className={`rounded-l-full border-r bg-slate-200 w-7 h-7 flex justify-center items-center ${
                  quantity <= 1
                    ? "border-slate-200 cursor-not-allowed text-slate-300 "
                    : ""
                }  w-7 h-7`}
                onClick={() => dispatch(cartActions.removeQuantity(barcodeId))}
              >
                <FiMinus size={16} />
              </button>
              <div className="mx-1 text-base font-normal text-slate-900 font-title">
                {quantity || 1}
              </div>
              <button
                className=" border-l rounded-r-full bg-slate-200 border-slate-200 w-7 h-7 flex justify-center items-center"
                onClick={() => dispatch(cartActions.addQuantity(barcodeId))}
              >
                <FiPlus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
