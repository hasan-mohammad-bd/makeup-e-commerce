import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TfiCar } from "react-icons/tfi";
import LanguageSelector from "./main-nav/LanguageSelector";

const TopHeaderBanner = ({ locale }) => {
  return (
    <div className="top-header-banner bg-primary w-full py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-area flex justify-center items-center">
            <p className="text-white font-normal text-4">
              Welcome to Netmark online Store
            </p>
            <Link
              href="#"
              className="text-white font-normal text-4 border-l border-white text-4 pl-3 ml-3 flex justify-center"
            >
              <TfiCar size={20} /> <p className="ml-2"> Track your order</p>
            </Link>
            <span className="text-white font-normal border-l border-white text-4 pl-3 ml-3 flex justify-center items-center">
              <AiOutlineMail size={20} /> <p className="ml-2">demo@gmail.com</p>
            </span>
          </div>
          <div className="language-select-area">
            <LanguageSelector locale={locale} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopHeaderBanner;
