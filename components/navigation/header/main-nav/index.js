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
  HiMagnifyingGlass,
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
import Search from "@/components/elements/Search";
import { AiOutlineClose } from "react-icons/ai";
import { setSearchModalOpen } from "@/store/slices/commonSlice";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function MainNav({ settings }) {
  const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
  const searchMenuRef = useRef(null);
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const { locale } = useParams();
  const [scroll, setScroll] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const { user, isLoginModalOpen, isLogoutModalOpen } = useSelector(
    (state) => state.auth
  );
  const { translations, isSearchModalOpen } = useSelector(
    (state) => state.common
  );
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
      <TopHeaderBanner settings={settings} locale={locale} />
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
          
              {!isVisible ? (
                <div className=" justify-center items-center hidden md:flex">
                <ResponsiveSearch />
                </div>

              ) : (
                <div className=" justify-center  items-center hidden md:flex">
                <MenuItems noAds={true} settings={settings} />
            </div>
              )}
            <div className="header-right  flex justify-between items-center ml-4 gap-2 lg:gap-6">
              <div className="header-actions flex items-center gap-4">


                  <button
                    onClick={() => dispatch(setSearchModalOpen(true))}
                    className={`${!isVisible && "md:!hidden"} md:flex flex-col  ${
                      isSearchModalOpen ? "!text-primary" : "text-black"
                    }`}
                  >
                    <HiMagnifyingGlass className="" size={24} />
                    {!isVisible && <p className="hidden md:block">Search</p>}
                    {/* <span>Search</span> */}
                  </button>


                <div className="text-center hidden md:flex flex-col justify-center items-center ml-4 font-normal">
                  <Link className="text center" href="/dashboard/profile">
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
                   {!isVisible &&  <p className="hidden md:block">Profile</p>}
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
                   {!isVisible &&  <p className="">My Wishlist</p>}
                  </Link>
                </div>

                <div className="text-center ml-4">
                  <button
                    onClick={() => dispatch(toggleCart())}
                    className="relative"
                  >
                    <HiOutlineShoppingCart size={28} />

                    {cart?.length ? (
                      <span className="text-xs absolute right-0 -top-1 bg-red-500 text-white px-[6px] text-center rounded-full">
                        {cart?.length > 9 ? "9+" : cart?.length}
                      </span>
                    ) : null}
                   {!isVisible &&   <p className="hidden md:block">My Cart</p>}
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

      {isSearchModalOpen && (
        <div
          ref={searchMenuRef}
          // top-full
          className="fixed top-0 right-0 z-30 w-full bg-white"
        >
          <div className=" flex flex-col justify-center gap-6 py-5 shadow">
{/*             <h3 className="text-xl md:text-2xl font-bold text-center">
              Product Search
            </h3> */}
            <div className="flex justify-center items-center gap-2 mx-3 md:mx-0">
              <Search />
              <button
                onClick={() => dispatch(setSearchModalOpen(false))}
                className="text-white bg-primary rounded-full p-2 mx-2"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
