
'use client';
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import loading from "@/public/assets/images/loading.gif";
import loading from "@/public/assets/lottie/loading.json";
const Lottie = dynamic(() => import("lottie-react"));

export default function Loading() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center -mt-16">
      {/*       <Image
        className={`h-[200px] w-[200px]`}
        src={"https://i.ibb.co/1THxscd/Rolling-1s-200px-1.gif" || loading}
        alt={"loader"}
        width={200}
        height={200}
      /> */}
      <Lottie animationData={loading} loop={true} />
{/*       <span className="text-black font-bold text:[1.5rem]  md:text-[2rem]">
        LOADING
      </span> */}
    </div>
  );
}
