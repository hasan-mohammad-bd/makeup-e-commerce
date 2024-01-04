"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const ZoomExample = ({ image, zoomImage }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorOverImage, setIsCursorOverImage] = useState(false);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const imageWidth = 550; // Example width
    const imageHeight = 600; // Example height

    const isXWithinBounds = mouseX > 0 && mouseX < imageWidth;
    const isYWithinBounds = mouseY > 0 && mouseY < imageHeight;

    if (isXWithinBounds && isYWithinBounds) {
      setCursorPosition({ x: mouseX, y: mouseY });
      setIsCursorOverImage(true);
    } else {
      setIsCursorOverImage(false);
    }
  };
  const imgRef = useRef();
  const paneRef = useRef();
  const inlineContainerRef = useRef();
  useEffect(() => {
    let Drift;
    if (typeof window !== "undefined") {
      Drift = require("drift-zoom").default;
    }
    new Drift(imgRef.current, {
      paneContainer: paneRef.current,
      inlineContainer: inlineContainerRef.current,
    });
  }, []);
  return (
    <div
      className="zoom-container !h-full hover:!h-auto active:!h-auto"
      onMouseMove={handleMouseMove}
    >
      <Image
        className="demo-trigger zoom-image__img !h-[100%] !object-contain"
        ref={imgRef}
        data-zoom={zoomImage}
        src={image}
        alt="product-image"
        width={524}
        height={524}
      />
      <div ref={inlineContainerRef} />
      <div ref={paneRef} />
      <div
        className={isCursorOverImage ? "zoom-square" : ""}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
    </div>
  );
};

export default ZoomExample;
