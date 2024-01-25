import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function FooterTitle({ title, children, className }) {
  return (
    <div className={twMerge(`sec-heading w-full items-center`, className)}>
      <div className="items-center">
        {children}
        <h2 className={`text-2xl`}>{title}</h2>
      </div>

      <div className="h-[1px] w-[50px] text-slate-100 mt-3 mb-8 bg-white"></div>
    </div>
  );
}
