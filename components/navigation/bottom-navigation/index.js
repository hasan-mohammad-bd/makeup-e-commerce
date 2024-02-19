"use client";
import React from "react";
import {
  CallFillIcon,
  CallIcon,
  CategoryFillIcon,
  CategoryIcon,
  HomeIFillIcon,
  HomeIcon,
  MessengerFillIcon,
  MessengerIcon,
  ProfileFillIcon,
  ProfileIcon,
} from "@/components/elements/svg";
import { useSelector } from "react-redux";
import { useParams, usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import FilterMenu from "@/components/elements/FilterMenu";
import SortMenu from "./SortMenu";
import ResponsiveSearch from "../header/main-nav/ResponsiveSearch";
import { HiOutlineHeart } from "react-icons/hi2";
import useWishList from "@/hooks/useWishList";

export default function BottomNavigation() {
  const { translations, settings } = useSelector((state) => state.common);
  const pathArray = usePathname().split("/");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const params = useParams();
  const { user } = useSelector((state) => state.auth);
  const { getWishlistCount } = useWishList();

  const wishlistCount = getWishlistCount();

  if (
    !isMobile ||
    pathArray.includes("checkout") ||
    (pathArray.includes("products") && params.slug) ||
    (pathArray.includes("dashboard") &&
      pathArray[pathArray.length - 1] !== "dashboard")
  )
    return null;

  //Required to show sorting and filtering menus in bottom navigation
  // for products and category products page
  const isSortFilter =
    isMobile &&
    ((pathArray.includes("categories") && !!params.slug) ||
      (pathArray.includes("products") && !params.slug));

  // console.log(isSortFilter);

  const menuList = [
    {
      href: "/",
      name: translations["home"],
      icon: <HomeIcon />,
      activeIcon: <HomeIFillIcon />,
    },
    {
      href: "/categories",
      name: translations["category"],
      icon: <CategoryIcon />,
      activeIcon: <CategoryFillIcon />,
    },
    /*     {
      href: `${user ? "/dashboard" : "/mobile-login"}`,
      name: translations["profile"],
      icon: <ProfileIcon />,
      activeIcon: <ProfileFillIcon />,
    }, */
    {
      href: "https://m.me/p.touhid",
      name: translations["chat"],
      icon: <MessengerIcon />,
      activeIcon: <MessengerFillIcon />,
    },
    /*     {
      href: `tel:${settings?.phone}`,
      name: translations["call"],
      icon: <CallIcon />,
      activeIcon: <CallFillIcon />,
    }, */
  ];

  return (
    <div className={`${isSortFilter ? "pb-40" : "pb-24"} bg-white`}>
      <div className="fixed bottom-0 left-0 z-20 w-screen h-fit bg-white">
        {isSortFilter && (
          <div className="sort-filter-actions rounded-t-xl shadow-top flex gap-3 items-center p-3">
            <SortMenu />
            <FilterMenu />
          </div>
        )}
        <div className="rounded-t-xl shadow-top grid h-full max-w-lg items-center grid-cols-5 mx-auto font-medium py-3">
          <ResponsiveSearch />
          {menuList.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 group"
            >
              {pathname === menu.href ? (
                <>
                  {React.cloneElement(menu.activeIcon, {
                    fillClass: "fill-primary",
                    strokeClass: "stroke-primary",
                  })}
                  <span className="mt-2 text-xs/[100%] text-primary capitalize">
                    {menu.name}
                  </span>
                </>
              ) : (
                <>
                  {menu.icon}
                  <span className="mt-2 text-xs/[100%] text-slate-400 capitalize">
                    {menu.name}
                  </span>
                </>
              )}
            </Link>
          ))}
          <Link
            href="/dashboard/my-wishlist"
            className="relative inline-flex flex-col mt-[-7px]  justify-center px-5 group text-slate-400"
          >
            <HiOutlineHeart size={24} />
            <span className="whitespace-nowrap text-[12px]">
              {translations["wishlist"]}
            </span>
            {wishlistCount ? (
              <span className="text-xs absolute right-7 top-[-8px] bg-red-500 text-white px-[6px] text-center rounded-full">
                {wishlistCount > 9 ? "9+" : wishlistCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
}
