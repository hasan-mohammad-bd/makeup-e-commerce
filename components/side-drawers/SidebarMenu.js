"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../elements/Drawer";
import { Link } from "@/navigation";
import { IoLogOut } from "react-icons/io5";
import { setLogoutModalOpen } from "@/store/slices/authSlice";
import { fetchData } from "@/lib/fetch-data";
import CategoryItems from "../CategoryItems";
import LanguageSelector from "../navigation/header/main-nav/LanguageSelector";
import { useParams } from "next/navigation";

const SidebarMenu = ({ sidebarToggle, isSideBarOpen }) => {
  const { locale } = useParams();
  //Drawer logics
  const dispatch = useDispatch();
  const { isFilterPanelOpen, translations, settings } = useSelector(
    (state) => state.common
  );
  const closeFilterPanel = () => {
    sidebarToggle();
  };

  const handleLogout = () => {
    dispatch(setLogoutModalOpen(true));
    closeFilterPanel(false);
  };

  return (
    <Drawer
      title={"Menu items"}
      show={isSideBarOpen}
      position={"left"}
      className={"w-[70vw]"}
      setShow={closeFilterPanel}
      image={settings?.logo}
    >
      {isSideBarOpen && (
        <div className="py-3 ">
          <CategoryItems setShow={closeFilterPanel} />
          <li
            className={`flex items-center py-3 px-4 hover:bg-amber-200 rounded-lg w-full font-bold`}
          >
            <button
              className="flex items-center text-primary space-x-2 text-base font-normal"
              onClick={() => handleLogout()}
            >
              <span className={``}>
                <IoLogOut size={28} />
              </span>
              <span className="font-bold">
                {translations["log-out"] || "Log Out"}
              </span>
            </button>
          </li>
          <div className="language-select-area flex ml-1">
            <LanguageSelector sideBarMenu={true} locale={locale} />
          </div>
          {/*           <ul>
            <li className="shadow">
              <Link className="p-4 block" href="/">
                {translations["home"] || "হোম"}
              </Link>
            </li>
            <li className="shadow ">
              <Link className="p-4 block" href="/products">
                {translations["products"] || ""}
              </Link>
            </li>
            <li className="shadow ">
              <Link className="p-4 block" href="/dashboard/my-wishlist">
                {translations["wishlist"] || "হোম"}
              </Link>
            </li>
            <li className="shadow">
              <Link className="p-4 block" href="/pages/about-us">
                {translations["about-us"] || "হোম"}
              </Link>
            </li>
            <li
              className={`flex items-center py-3 px-4 hover:bg-amber-200 rounded-lg w-full font-bold`}
            >
              <button
                className="flex items-center space-x-2 text-base font-normal"
                onClick={() => handleLogout()}
              >
                <span className={``}>
                  <IoLogOut />
                </span>
                <span className="font-bold">
                  {translations["log-out"] || "লগ-আউট"}
                </span>
              </button>
            </li>
          </ul> */}
        </div>
      )}
    </Drawer>
  );
};

export default SidebarMenu;
