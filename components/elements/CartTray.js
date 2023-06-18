"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";

// ** Import Icons
import { TbCurrencyTaka } from "react-icons/tb";
import { toggleCart } from "@/store/features/cartSlice";

const CartTray = () => {
  // const router = useRouter();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCart = () => {
    // router.push("/cart");
    dispatch(toggleCart());
  };

  return (
    <>
      <div
        className="cart fixed top-1/2 right-0 cursor-pointer z-50"
        onClick={handleCart}
      >
        <div className="icon bg-white border border-r-0 border-primary rounded-ss-lg px-1 text-center">
          <Image
            src="/assets/images/icons/cart.svg"
            alt="Cart"
            width={58}
            height={58}
            className="inline-block"
          />
        </div>
        <div className="content rounded-es-lg text-center">
          <p className="text-xs text-white">{cart?.length} আইটেম</p>
          <p className="text-xs font-semibold text-white">
            <TbCurrencyTaka size={14} className="font-semibold" />
            168,699
          </p>
        </div>
      </div>
    </>
  );
};

export default CartTray;
