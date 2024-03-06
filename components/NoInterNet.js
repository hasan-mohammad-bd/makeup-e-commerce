"use client";

import Image from "next/image";
import { Link, useRouter } from "@/navigation";
import { useSelector } from "react-redux";
import CallInquiry from "./elements/CallInquiry";
import NoInternetImg from "../public/assets/images/banner/no-internet.png";

export const metadata = {
	title: "No Internet Connection",
};

export default function NoInterNet() {
	const { translations } = useSelector((state) => state.common);

	const router = useRouter();

	return (
		<div className="container">
			<div className="content flex flex-col items-center py-12 lg:py-28">
				<Image
					src={NoInternetImg}
					width={340}
					height={312}
					alt="Not Found"
					className="mb-12 h-[184px] w-[200px] lg:h-[312px] lg:w-[340px]"
				/>
				<h2 className="text-2xl lg:text-3xl font-bold font-title text-slate-900 text-center">
					{translations["no-internet"] || "Your device is not connected to the internet"}
				</h2>
				<p className="text-base text-center lg:text-lg text-slate-600 mt-6 mb-8">
					{translations["no-internet-msg"] ||
						"Please check your internet connection and try again"}
				</p>
				<Link
					href="javascript:void(0)"
					onClick={() => router.refresh()}
					className="inline-block font-semibold text-white bg-primary rounded-lg px-8 py-3"
				>
					{translations["reload"] || "Reload"}
				</Link>
			</div>
			<CallInquiry />
		</div>
	);
}
