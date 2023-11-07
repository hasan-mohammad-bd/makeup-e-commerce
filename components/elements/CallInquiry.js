"use client";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function CallInquiry() {
	const { settings, translations } = useSelector((state) => state.common);
	return (
		<div className="contact w-fit mx-auto mb-12 text-center flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 bg-amber-200 border border-primary rounded-xl px-8 py-4">
			<p className="">
				<span className="text-xl font-bold font-title text-slate-900">
					{translations["call-inquiry"] ||
						"যে কোন জিজ্ঞাসা বা অর্ডার করতে আমাদের কল করুন"}
					:
				</span>
			</p>
			<p>
				<Link
					href={`tel:${(settings?.phone || ["0170000000"])[0]}`}
					className="text-xl font-bold font-title text-primary"
				>
					<BsFillTelephoneFill /> {(settings?.phone || ["0170000000"])[0]}
				</Link>
			</p>
		</div>
	);
}
