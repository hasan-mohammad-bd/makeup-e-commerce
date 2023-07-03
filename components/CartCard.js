"use client";

import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import * as cartActions from "@/store/features/cartSlice";

const CartCard = ({ item }) => {
  const {
    brand,
    product_name,
    new_price,
    old_price,
    // productVariants,
    discount_percentage,
    quantity,
    cartId,
    variantId,
    selectedVariant,
    // sizes,
  } = item;

  const dispatch = useDispatch();
  return (
    <div className="relative cart-card p-3 bg-white shadow rounded-lg mb-3">
      <button
        className="absolute right-1.5 top-1 bg-transparent text-red-500"
        onClick={() => dispatch(cartActions.removeFromCart(cartId))}
      >
        <MdDeleteSweep />
      </button>
      <div className="flex gap-2">
        <Image
          src={"/assets/images/review/image-2.png"}
          alt="product"
          height={84}
          width={84}
          sizes="84px"
        />
        <div className="flex flex-col justify-between">
          <h5 className="text-primary">{brand?.brand_name || "No Brand"}</h5>
          <h4>
            {product_name?.length >= 50
              ? product_name.slice(0, 50) + "..."
              : product_name}
          </h4>
          <div className="flex gap-3 products-center items-center">
            <h3 className="text-xl text-red-500">৳ {new_price}</h3>
            {typeof discount_percentage === "number" &&
            discount_percentage > 0 ? (
              <>
                <del className="text-xl text-slate-300">৳ {old_price}</del>
                <div className="rounded-full px-3 text-sm py-1 text-white bg-red-500">
                  -{discount_percentage.toFixed(2)}% OFF
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex products-center justify-between text-sm mt-4">
        <div className="flex products-center gap-3">
          {variantId ? (
            <>
              <div className="px-2 border border-slate-300 rounded-md">
                {selectedVariant?.color}
              </div>
              <div className="px-2 border border-slate-300 rounded-md">
                {selectedVariant?.size}
              </div>
              {/* <div className="px-2 border border-slate-300 rounded">
                {sizes[0]?.color}
              </div>
              <div>
                <select className="bg-slate-50 bg-transparent border border-slate-300 text-slate-900 rounded focus:ring-primary focus:border-primary">
                  {sizes.map((s) => (
                    <option key={s.size} selected={s.id === variantId}>
                      {s.size}
                    </option>
                  ))}
                </select>
              </div> */}
            </>
          ) : null}
        </div>
        <div className="flex products-center gap-3 text-slate-900">
          <button
            className="bg-transparent border border-primary rounded px-1"
            onClick={() => dispatch(cartActions.addQuantity(cartId))}
          >
            <FiPlus />
          </button>
          <div className="mx-1 font-bold">{quantity || 1}</div>
          <button
            className="bg-transparent border border-primary rounded px-1"
            onClick={() => dispatch(cartActions.removeQuantity(cartId))}
          >
            <FiMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
