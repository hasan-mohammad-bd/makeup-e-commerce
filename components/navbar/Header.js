"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// ** Import Icons
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import Search from "../elements/Search";
import LanguageSelector from "./LanguageSelector";
import { HiArrowNarrowRight } from "react-icons/hi";
import LoginModal from "../modals/login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/features/cartSlice";

const Header = ({ totalCartItems, totalCompareItems, children, locale }) => {
  const [isToggled, setToggled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //start of popover
  const [userOpen, setUserOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setUserOpen((prevState) => !prevState);
  };

  const handleModalOpen = () => {
    setUserOpen(false);
    setShowModal(true);
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

  const handleToggle = () => setToggled(!isToggled);

  return (
    <>
      <header className="header border-b border-slate-300 py-4">
        <div className="container">
          <div className="header-wrap flex justify-between items-center">
            {children}
            <div className="header-right flex justify-between items-center gap-6">
              <div className="nav-search">
                <Search />
                {/* <NavItems /> */}
              </div>
              <div className="header-actions flex gap-4">
                <Link href="/shop-compare" className="single-action">
                  <HiOutlineHeart size={24} />
                  <span className="pro-count blue">{totalCompareItems}</span>
                </Link>
                <button
                  onClick={() => dispatch(toggleCart())}
                  className="single-action relative"
                >
                  <HiOutlineShoppingCart size={24} />
                  <span className="absolute -right-2 -top-2 bg-red-500 text-white px-2 text-center rounded-full">
                    {cart?.length || 0}
                  </span>
                </button>
                <div className="relative" ref={popoverRef}>
                  <button className="single-action" onClick={togglePopover}>
                    <HiOutlineUser size={24} />
                    <span className="pro-count blue">{totalCartItems}</span>
                  </button>
                  {userOpen && (
                    <div className="absolute right-0 top-0 z-10 mt-14">
                      <div className="relative bg-white px-6 py-8 w-52 border border-slate-300 rounded-lg">
                        <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-slate-300"></div>
                        <p className="text-slate-500 text-base font-bold text-center">
                          আপনার একাউন্ট লগ-ইন করা নেই
                        </p>
                        <div className="flex justify-center mt-4">
                          <button
                            className="primary-btn px-6"
                            onClick={handleModalOpen}
                          >
                            লগ-ইন করুন
                            <HiArrowNarrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <LanguageSelector locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <LoginModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"স্বাগতম"}
      />
    </>
  );
};

export default Header;
