import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Link } from "@/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";

const MegaMenu = dynamic(() => import("./MegaMenu"), {
  ssr: false,
});
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MenuItems = ({ setting }) => {
  const navItems = [
    {
      title: "Home",
      link: "/",
      id: "home",
    },
    {
      title: "About us",
      link: "/pages/about-us",
      id: "about",
    },
    {
      title: "Categories",
      link: "/categories",
      id: "categories",
    },
    {
      title: "Pages",
      id: "pages",
      subLink: [
        {
          title: "Wishlist",
          link: "/dashboard/my-wishlist",
          id: "wishlist",
        },
        {
          title: "Q&A",
          link: "/help/qna",
          id: "qna",
        },
        {
          title: "Privacy policy",
          link: "/pages/privacy-policy",
          id: "privacy",
        },
      ],
    },
  ];
  return (
    <div className="container md:flex items-center justify-between hidden">
      <div>
        {navItems.map((item) => (
          <Link
            className={`mr-10 hover:text-primary text-lg ${
              item.subLink && "relative sub-menu"
            }`}
            key={item.id}
            href={item.subLink ? "/" : item.link}
          >
            {item.title}
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
                      {subItem.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <div className="h-1 absolute right-0 top-3 bg-red"></div>
          </Link>
        ))}
      </div>

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
    </div>
  );
};

export default MenuItems;
