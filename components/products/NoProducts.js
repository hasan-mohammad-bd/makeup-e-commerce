"use client";
import React from "react";
import { Link } from "@/navigation";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const Lottie = dynamic(() => import("lottie-react"));
import notFound from "@/public/assets/lottie/not-found.json";
import CallInquiry from "../elements/CallInquiry";

export default function NoProducts() {
	const { translations } = useSelector((state) => state.common);

	return (
		<div className="container">
			<div className="content flex flex-col items-center pb-12">
				<div className="h-[200px] lg:h-[311px] w-[200px] lg:w-[340px] mb-12">
					<Lottie animationData={notFound} loop={false} />
				</div>
				<h2 className="text-2xl lg:text-3xl font-bold font-title text-slate-900">
					{translations["no-products"] || "দুঃখিত, কোন প্রাডাক্ট পাওয়া যায় নি"}
				</h2>
				<p className="text-base text-center lg:text-lg text-slate-600 mt-6 mb-8">
					{translations["no-products-msg"] ||
						"আমরা আপনার অনুসন্ধান এর সাথে কোনো মিল খুঁজে পাচ্ছি না"}
				</p>
				<Link
					href="/"
					className="inline-block font-semibold text-white bg-primary rounded-lg px-8 py-3"
				>
					{translations["back-to-home"] || "হোমে ফিরে যান"}
				</Link>
			</div>
			<CallInquiry />
		</div>
	);
}
