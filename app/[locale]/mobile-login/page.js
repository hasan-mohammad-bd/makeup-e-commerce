"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//icons
import { RiQuestionAnswerFill } from "react-icons/ri";
import MenuCard from "@/components/cards/MenuCard";
import { useRouter } from "next/navigation";
import { setLoginModalOpen } from "@/store/slices/authSlice";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";
import { IoIosWarning } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";

export default function MobileLogin({ params }) {
	const { user } = useSelector((state) => state.auth);
	const { translations } = useSelector((state) => state.common);
	const dispatch = useDispatch();
	const router = useRouter();

	if (user) router.push("/dashboard"); //redirecting user to dashboard

	const helpLink = [
		{
			text: translations["questions-and-answers"] || "প্রশ্ন ও উত্তর",
			icon: <RiQuestionAnswerFill />,
			path: "/help/qna",
		},
	];
	const companyLinks = [
		{
			text:translations["about-us"] || "আমাদের সম্পর্কে",
			icon: <BsInfoCircleFill />,
			path: "/pages/about-us",
		},
		{
			text: translations["booking-policy"] || "বুকিং পলিসি",
			icon: <MdLibraryBooks />,
			path: "/pages/booking-policy",
		},
		{
			text:  translations["trams-and-conditions"] || "ট্রামস এন্ড কন্ডিশন",
			icon: <IoIosWarning />,
			path: "/pages/terms-and-conditions",
		},
		{
			text: translations["privacy-policy"] || "প্রাইভেসি পলিসি",
			icon: <SiSpringsecurity />,
			path: "/pages/privacy-policy",
		},
	];
	return (
		<section id="mobile-dashboard-layout">
			<div
				id="user-quick-menu"
				className="bg-gradient-to-r from-red-500 to-primary p-3"
			>
				<div className="profile flex flex-col items-center justify-center gap-3 bg-white rounded-xl p-4">
					<span className="font-normal text-slate-500 text-base">
						{translations["login-status"] || "আপনার একাউন্ট লগ-ইন করা নেই"}
					</span>
					<div className="flex justify-center">
						<button
							className="primary-btn px-6"
							onClick={() => dispatch(setLoginModalOpen(true))}
						>
							{translations["log-in"]}
							<HiArrowNarrowRight />
						</button>
					</div>
				</div>
			</div>
			<div id="user-additional-menu" className="my-4 p-3">
				<MenuCard title={translations["help"] || "হেল্প"} menuItems={helpLink} />
				<MenuCard title={translations["company"] || "কোম্পানি"} menuItems={companyLinks} />
			</div>
		</section>
	);
}
