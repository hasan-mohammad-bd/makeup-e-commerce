"use client";
import { toggleCart } from "@/store/slices/cartSlice";
import { Link, useRouter } from "@/navigation";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../cards/CartCard";
import { FiPlus } from "react-icons/fi";
import { siteConfig } from "@/config/site";
import Drawer from "../elements/Drawer";
import { getCartTotal } from "@/lib/checkout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { setLoginModalOpen } from "@/store/slices/authSlice";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";

const Cart = () => {
  const { isCartOpen, cart } = useSelector((state) => state.cart);
  const router = useRouter();
  const { settings, translations } = useSelector((state) => state.common);
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleSelectChange } = useSelectURLQuery();

  const closeCart = () => {
    dispatch(toggleCart());
  };

  const handleModal = () => {
    if (user) {
      router.push("/checkout");
      closeCart();
      return;
    }

    closeCart();
    dispatch(setLoginModalOpen(true));
    handleSelectChange("redirect", "/checkout");
  };

  return (
    <Drawer
      title={`${translations["cart-list"]} (${cart.length} ${translations["items"]})`}
      show={isCartOpen}
      setShow={closeCart}
    >
      <div className="content mb-24 lg:mb-16 ">
        <div
          onClick={closeCart}
          className="w-6 h-[112px] cursor-pointer rounded-l-lg bg-slate-300 fixed text-5 flex top-1/2 left-[-24px] justify-center items-center"
        >
          <MdOutlineKeyboardArrowRight size={70} />
        </div>
        {settings?.free_delivery_charges_limit ? (
          <div
            /* 						style={{
							background:
								"linear-gradient(90deg, #EF4444 -2.83%, #F99104 100%)",
						}} */
            className="p-2 lg:p-3 text-black text-xs/[100%] lg:text-sm"
          >
            {settings?.free_delivery_charges_limit} টাকার উপের অর্ডার করেল
            ডেলিভারি চার্জ ফ্রী! সারাদেশে ক্যাশ অন ডেলিভারি।
          </div>
        ) : null}
        <div className="cart-items px-3 py-4 lg:p-3">
          {cart.map((item) => (
            <CartCard key={item.barcodeId} item={item} />
          ))}

          <div className="my-5 lg:my-8 text-center ">
            <Link
              href="/products"
              onClick={closeCart}
              className="text-primary text-sm lg:text-lg/[26px] font-semibold text-center"
            >
              <FiPlus size={20} className="mr-1" />
              {translations["shop-more"] || "আরো শপিং করুন"}
            </Link>
          </div>
        </div>
        <div className="fixed left-0 bottom-0 w-full px-3 py-4 lg:px-8 lg:py-4 bg-slate-50 border-t border-slate-200 flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between lg:items-center">
          <div className="flex lg:block justify-between items-center lg:text-center">
            <p className="">{translations["total"]}:</p>
            <h3 className="text-slate-900 font-bold">
              {`${siteConfig.currency.sign} ${getCartTotal(cart)}`}
            </h3>
          </div>
          <button
            onClick={handleModal}
            className="bg-primary py-3 px-6 w-full lg:w-[276px] text-white text-center active:scale-95"
          >
            <span className="mr-2">{translations["buy-now"]}</span>
            <HiArrowLongRight size={20} />
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default Cart;
