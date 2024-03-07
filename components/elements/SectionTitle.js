import React from "react";
import { Link } from "@/navigation";
// import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function SectionTitle({
  title,
  href,
  buttonText = "See All",
  children,
  className,
}) {
  return (
    <div
      className={twMerge(
        `sec-heading w-full items-center text-center`,
        className
      )}
    >
      <div className="items-center">
        {children}
        <h2
          className={`text-xl md:text-4xl font-bold text-slate-900 font-title capitalize`}
        >
          {title}
        </h2>
      </div>
      <span className="w-full text-center">
        <Image
          src={`/assets/images/banner/heading-shape.png`}
          width={0}
          height={0}
          alt="Not Found"
          className="my-6 mx-auto h-auto w-[160px]"
        />
      </span>
    </div>
  );
}
