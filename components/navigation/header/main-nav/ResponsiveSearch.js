"use client";
import React, { useEffect, useRef, useState } from "react";
// import { HiMenuAlt1 } from "react-icons/hi";
import Search from "../../../elements/Search";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModalOpen } from "@/store/slices/commonSlice";

export default function ResponsiveSearch() {
  const {isSearchModalOpen} = useSelector((state) => state.common);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchMenuRef = useRef(null);
  const dispatch = useDispatch();
 console.log(isSearchModalOpen, "hello")
  const closeMenu = () => {
    setSearchModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchMenuRef.current &&
        !searchMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <span className="">
        <Search />
      </span>
      <div className="header-actions text-center">

      </div>

{/*       {isSearchModalOpen && (
        <div
          ref={searchMenuRef}
          // top-full
          className="absolute top-0 z-30 w-full bg-white lg:hidden"
        >
          <div className="container flex justify-center gap-6 py-4">
            <Search />
            <button
              onClick={() => dispatch(setSearchModalOpen(false))}
              className="text-[#475569] md:hidden"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}
