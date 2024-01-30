"use client";
import React from "react";

const DynamicBackgroundComponent = ({ imageUrl, children, heading, height }) => {
  const containerStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    // Add any other styles you want for the container
    width: "100%",
    height: height, // Adjust the height as needed
  };

  return (
    <div
      className="flex items-center justify-center text-white font-bold text-5xl"
      style={containerStyle}
    >
      <div className="flex-col text-center">
        <h2>{heading}</h2>
        {children}
      </div>
    </div>
  );
};

export default DynamicBackgroundComponent;
