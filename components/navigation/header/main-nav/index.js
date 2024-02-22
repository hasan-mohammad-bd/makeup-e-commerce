"use client";

import { Link } from "@/navigation";
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
import useWishList from "@/hooks/useWishList";
import TopHeaderBanner from "../TopHeaderBanner";
import { IoMdMenu } from "react-icons/io";
import SidebarMenu from "@/components/side-drawers/SidebarMenu";

export default function MainNav({ settings }) {
  const [isVisible, setIsVisible] = useState(false);

  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const { locale } = useParams();
  const [scroll, setScroll] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const { user, isLoginModalOpen, isLogoutModalOpen } = useSelector(
    (state) => state.auth
  );
  const { translations } = useSelector((state) => state.common);
  const { getWishlistCount } = useWishList();
  const dispatch = useDispatch();

  //start of popover
  const [userOpen, setUserOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setUserOpen((prevState) => !prevState);
  };

  const handleModalOpen = () => {
    setUserOpen(false);
    // setShowModal(true);
    dispatch(setLoginModalOpen(true));
  };

  const sidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
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

  const wishlistCount = getWishlistCount();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <TopHeaderBanner locale={locale} />
      <div
        className={`${
          isVisible ? "fixed top-0" : ""
        }  w-full z-30 bg-white border-b border-slate-300 py-3 md:py-4`}
      >
        <div className="container lg:px-10  2xl:px-0 ">
          <div className="header-wrap flex justify-between items-center">
            {/* Nav Items  */}
            <button onClick={sidebarToggle} className="md:hidden">
              <IoMdMenu size={28} />
            </button>
            <div className="header-left  gap-4">
              <Link href="/" className="logo w-full ">
                <Image
                  src={settings?.logo}
                  alt={settings?.name}
                  width={0}
                  height={48}
                  className="h-[48px] min-w-[150px]  min-h-[48px] mr-[-50px] md:mr-0 py-2 object-contain object-left"
                />
              </Link>
            </div>
            <div className=" justify-center items-center hidden md:flex">
              {!isVisible ? (
                <ResponsiveSearch />
              ) : (
                <MenuItems noAds={true} settings={settings} />
              )}
            </div>
            <div className="header-right flex justify-between items-center ml-4 gap-2 lg:gap-6">
              <div className="header-actions flex items-center gap-4">
                <div className="text-center font-normal">
                  <Link className="" href="/dashboard/profile">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt="Profile"
                        height={0}
                        width={0}
                        className="rounded-full w-[32px] h-[32px] object-cover"
                      />
                    ) : (
                      <HiOutlineUser className="" size={28} />
                    )}
                    <p className="hidden md:block">Profile</p>
                  </Link>
                </div>
                <div className="text-center ml-4 hidden md:flex flex-col">
                  <Link href="/dashboard/my-wishlist" className="relative">
                    <HiOutlineHeart size={28} />
                    {wishlistCount ? (
                      <span className="text-xs absolute right-4 -top-1 bg-red-500 text-white px-[6px] text-center rounded-full">
                        {wishlistCount > 9 ? "9+" : wishlistCount}
                      </span>
                    ) : null}
                    <p className="">My Wishlist</p>
                  </Link>
                </div>

                <div className="text-center ml-4">
                  <button
                    onClick={() => dispatch(toggleCart())}
                    className="relative"
                  >
                    <HiOutlineShoppingCart size={28} />

                    {cart?.length ? (
                      <span className="text-xs absolute -right-2 -top-1 bg-red-500 text-white px-[6px] text-center rounded-full">
                        {cart?.length > 9 ? "9+" : cart?.length}
                      </span>
                    ) : null}
                    <p className="hidden md:block">My Cart</p>
                  </button>
                </div>
                <div
                  ref={popoverRef}
                  className="relative hidden lg:flex items-center"
                >
                  {userOpen && !user ? (
                    <div className="absolute right-[13.5rem] top-0 z-10 mt-14">
                      <div className="relative bg-white px-6 py-8 w-52 border border-slate-300 rounded-lg">
                        <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-slate-300"></div>
                        <p className="text-slate-500 text-base font-bold text-center">
                          {translations["login-status"]}
                        </p>
                        <div className="flex justify-center mt-4">
                          <button
                            className="primary-btn px-3"
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
      <div className="h-16 w-full border border-t-slate-100 bg-white hidden md:flex item-center">
        <MenuItems settings={settings} />
      </div>
      <SidebarMenu
        sidebarToggle={sidebarToggle}
        isSideBarOpen={isSideBarOpen}
      />
    </div>
  );
}
