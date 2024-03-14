"use client";
import React from "react";
import dynamic from "next/dynamic";
import loading from "@/public/assets/lottie/loading3.json";
const Lottie = dynamic(() => import("lottie-react"));

export default function Loading() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center -mt-16">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
}
