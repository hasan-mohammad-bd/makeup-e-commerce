"use client";
import React from "react";

const DynamicBackgroundComponent = ({ imageUrl }) => {
  const containerStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Add any other styles you want for the container
    width: "100%",
    height: "50vh", // Adjust the height as needed
  };

  return (
    <div style={containerStyle}></div>
  );
};

export default DynamicBackgroundComponent;
