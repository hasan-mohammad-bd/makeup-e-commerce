"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import LoginModal from "../../../modals/login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/slices/cartSlice";
import AuthUserMenus from "./AuthUserMenus";
import LanguageSelector from "./LanguageSelector";
import {
  setLoginModalOpen,
  setLogoutModalOpen,
} from "@/store/slices/authSlice";

// ** Import Icons
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useParams } from "next/navigation";
import ResponsiveSearch from "./ResponsiveSearch";
import MenuItems from "./MenuItems";
import LogoutModal from "@/components/modals/logoutModal";
import { useGetWishListQuery } from "@/store/api/wishListAPI";

export default function MainNav({ settings }) {
  const { locale } = useParams();
  const { data, isLoading } = useGetWishListQuery({ locale });
  const [scroll, setScroll] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const { user, isLoginModalOpen, isLogoutModalOpen } = useSelector(
    (state) => state.auth
  );
  const { translations } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  //start of popover
  const [userOpen, setUserOpen] = useState(false);
  const popoverRef = useRef(null);

  const wishedProducts = data?.data || [];

  const togglePopover = () => {
    setUserOpen((prevState) => !prevState);
  };

  const handleModalOpen = () => {
    setUserOpen(false);
    // setShowModal(true);
    dispatch(setLoginModalOpen(true));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //end of popover

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <div className="mt-20">
      <div className="fixed left-0 top-0 w-full z-30 bg-white border-b border-slate-300 py-4">
        <div className="container">
          <div className="header-wrap flex justify-between items-center">
            {/* Nav Items  */}
            <div className="header-left flex items-center gap-4">
              <Link href="/" className="logo">
                <Image
                  src={settings?.logo}
                  alt={settings?.name}
                  width={200}
                  height={48}
                  className="h-[48px] min-h-[48px] py-2 object-contain object-left"
                />
              </Link>
              <MenuItems settings={settings} />
            </div>
            <div className="header-right flex justify-between items-center ml-4 gap-2 lg:gap-6">
              <ResponsiveSearch />
              <div className="header-actions flex items-center gap-4">
                <Link
                  href="/dashboard/my-wishlist"
                  className="single-action !hidden lg:!flex relative"
                >
                  <HiOutlineHeart size={24} />
                  {wishedProducts?.length ? (
                    <span className="absolute -right-2 -top-2 bg-red-500 text-white px-2 text-center rounded-full">
                      {wishedProducts?.length > 9 ? "9+" : wishedProducts?.length}
                    </span>
                  ) : null}
                </Link>

                <button
                  onClick={() => dispatch(toggleCart())}
                  className="single-action relative"
                >
                  <HiOutlineShoppingCart size={24} />
                  {cart?.length ? (
                    <span className="absolute -right-2 -top-2 bg-red-500 text-white px-2 text-center rounded-full">
                      {cart?.length > 9 ? "9+" : cart?.length}
                    </span>
                  ) : null}
                </button>
                <div
                  ref={popoverRef}
                  className="relative hidden lg:flex items-center"
                >
                  <button className="single-action" onClick={togglePopover}>
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt="Profile"
                        height={32}
                        width={32}
                        className="h-full w-full rounded-full"
                      />
                    ) : (
                      <HiOutlineUser size={24} />
                    )}
                  </button>
                  {userOpen && !user ? (
                    <div className="absolute right-0 top-0 z-10 mt-14">
                      <div className="relative bg-white px-6 py-8 w-52 border border-slate-300 rounded-lg">
                        <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-slate-300"></div>
                        <p className="text-slate-500 text-base font-bold text-center">
                          {translations["login-status"]}
                        </p>
                        <div className="flex justify-center mt-4">
                          <button
                            className="primary-btn px-6"
                            onClick={handleModalOpen}
                          >
                            {translations["log-in"]}
                            <HiArrowNarrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {/* for authenticated user */}
                  {userOpen && user ? (
                    <AuthUserMenus togglePopover={togglePopover} />
                  ) : null}
                </div>
                {/* <div className="hidden lg:block"> */}
                <LanguageSelector locale={locale} />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {isLoginModalOpen && (
          <LoginModal
            showModal={isLoginModalOpen}
            setShowModal={(show) => dispatch(setLoginModalOpen(show))}
            title={translations["welcome"]}
          />
        )}
        {isLogoutModalOpen && (
          <LogoutModal
            showModal={isLogoutModalOpen}
            setShowModal={(show) => dispatch(setLogoutModalOpen(show))}
            title={translations["log-out"]}
          />
        )}
      </div>
    </div>
  );
}
