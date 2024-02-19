"use client";
import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="scroll-to-top-button z-50 fixed right-5 bottom-5 rounded-full  justify-center items-center shadow-lg w-12 h-12 bg-primary text-white cursor-pointer hidden md:flex"
          onClick={scrollToTop}
        >
          <FiArrowUp size={20} />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
