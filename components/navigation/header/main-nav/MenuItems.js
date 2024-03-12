import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Link } from "@/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";

const MegaMenu = dynamic(() => import("./MegaMenu"), {
  ssr: false,
});
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MenuItems = ({ settings, noAds }) => {

  const navItems = settings?.header_page || [
    {
      name: "Home",
      path: "/",
      id: "home",
    },
    {
      name: "About us",
      path: "/pages/about-us",
      id: "about",
    },
    {
      name: "Categories",
      path: "/categories",
      id: "categories",
    },
    {
      name: "Pages",
      id: "pages",
      subLink: [
        {
          name: "Wishlist",
          path: "/dashboard/my-wishlist",
          id: "wishlist",
        },
        {
          name: "Q&A",
          path: "/help/qna",
          id: "qna",
        },
        {
          name: "Privacy policy",
          link: "/pages/privacy-policy",
          id: "privacy",
        },
      ],
    },
  ];
  return (
    <div className="container lg:px-10 2xl:px-0 md:flex items-center justify-between hidden">
      <div>
        {navItems.map((item, index) => (
          <Link
            key={index}
            className={`mr-10 hover:text-primary text-lg ${
              item.path && "relative sub-menu"
            }`}
            href={item.subLink ? "/" : item.path}
          >
            {item.name}
            {item.subLink && (
              <span className="ml-1">
                <MdOutlineKeyboardArrowDown size={20} />
              </span>
            )}

            {item.subLink && (
              <div className="absolute top-12 left-0 w-[150px] sub-item z-40 shadow-lg p-3 bg-white rounded-lg">
                {item.subLink.map((subItem) => (
                  <div className="" key={subItem.id}>
                    <Link className="" href={subItem.link} key={subItem.id}>
                      {subItem.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <div className="h-1 absolute right-0 top-3 bg-red"></div>
          </Link>
        ))}
      </div>

      {!noAds && (
        <div className="flex items-center justify-center">
          <Image
            src={`/assets/images/banner/lamp.png`}
            width={0}
            height={0}
            alt="Not Found"
            className="my-6 mx-auto h-auto w-[28px]"
          />
          <span className="text-lg ml-3 text-slate-500">
            Special up to 60% Off all item
          </span>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
