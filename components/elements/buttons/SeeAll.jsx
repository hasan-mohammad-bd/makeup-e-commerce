import { Link } from "@/navigation";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function SeeAll({ href = "/", buttonText, className, invert }) {
  return (
    <Link
      href={href}
      className={twMerge(
        "inline-flex justify-center items-center w-full md:max-w-fit gap-2 py-[10px] px-3 font-semibold border capitalize mt-4",
        invert
          ? "text-white border-white bg-transparent"
          : "bg-white border-primary text-primary",
        className
      )}
    >
      {buttonText} <HiArrowLongRight size={24} />{" "}
    </Link>
  );
}
