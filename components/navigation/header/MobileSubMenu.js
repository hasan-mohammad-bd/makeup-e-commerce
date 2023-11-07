"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useParams, usePathname } from "next/navigation";

export default function MobileSubMenu({ settings }) {
	const { locale } = useParams();
	const pathname = usePathname();
	const { translations } = useSelector((state) => state.common);
	// const pathArray = usePathname().split("/");
	const isActiveForMobile = [
		`/${locale}`,
		"/",
		`/${locale}/categories`,
		"/categories",
	].includes(pathname);

	const matches = useMediaQuery("(max-width: 768px)");

	const headerPage = settings?.header_page || {};
	const className = "px-2 py-2 bg-white rounded-lg flex items-center";
	return (
		matches &&
		isActiveForMobile && (
			<div className="mobile-menu bg-slate-100 container py-3 flex items-center gap-2">
				<Link href={"/categories"} className={`${className}`}>
					{translations["category"]}
				</Link>
				{Object.keys(headerPage).map((key) => (
					<Link key={key} href={headerPage[key]} className={`${className}`}>
						{key}
					</Link>
				))}
			</div>
		)
	);
}
