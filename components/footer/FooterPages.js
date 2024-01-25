"use client";
import React, { useState } from "react";
import { Link } from "@/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import FooterTitle from "./FooterTitle";

export default function FooterPages({ title, pages }) {
  const [pagesOpen, setPagesOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  // console.log(isMobile);
  return (
    <div className="text-white ">
      <FooterTitle title={title} />
      <div className="flex items-center">
        <button
          onClick={() => setPagesOpen(!pagesOpen)}
          className={`text-slate-400 lg:hidden`}
        >
          {!pagesOpen ? <BsChevronDown size={16} /> : <BsChevronUp size={16} />}
        </button>
      </div>
      {(!isMobile || pagesOpen) && (
        <ul className="footer-list">
          {Object.keys(pages).map((key) => (
            <li key={key}>
              <Link href={pages[key]}>{key}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
