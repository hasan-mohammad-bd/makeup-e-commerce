import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TfiCar } from "react-icons/tfi";
import LanguageSelector from "./main-nav/LanguageSelector";

const TopHeaderBanner = ({ locale, settings }) => {

  
  return (
    <div className="top-header-banner bg-primary w-full py-1">
      <div className="container mx-auto lg:px-10 2xl:px-0">
        <div className="md:flex justify-between ">
          <div className="text-area md:flex justify-center items-center">
            <p className="text-white text-center md:text-start !items-center w-full font-normal text-4">
              Welcome to Amarsolution online Store
            </p>
            <Link
              href="#"
              className="text-white hidden md:flex font-normal text-4 border-l border-white text-4 pl-3 ml-3 justify-center"
            >
              <TfiCar size={20} />{" "}
              <Link href="/dashboard/my-orders" className="ml-2 whitespace-nowrap"> Track your order</Link>
            </Link>
            <span className="text-white font-normal border-l border-white text-4 pl-3 ml-3 hidden md:flex justify-center items-center">
              <AiOutlineMail size={20} /> <p className="ml-2">{settings?.email}</p>
            </span>
          </div>
          <div className="language-select-area hidden md:flex">
            <LanguageSelector locale={locale} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopHeaderBanner;
