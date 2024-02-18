"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react";

const DynamicBackgroundComponent = ({
  imageUrl,
  children,
  heading,
  height,
  mobileHeight,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    // Add any other styles you want for the container
    width: "100%",
    height: isMobile ? mobileHeight : height, // Adjust the height as needed
  };

  return (
    <div className="" style={containerStyle}>
      <div className="flex flex-col h-full justify-center items-center text-center">
        <h2
          className={`${
           ( heading === "Product Details" || heading === "My Account")
           &&
              " md:text-5xl text-3xl text-white font-bold"
          }`}
        >
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default DynamicBackgroundComponent;
