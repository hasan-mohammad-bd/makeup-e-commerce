"use client";
import React from "react";
import {
	CallFillIcon,
	CallIcon,
	CategoryFillIcon,
	CategoryIcon,
	HomeIFillIcon,
	HomeIcon,
	MessengerFillIcon,
	MessengerIcon,
	ProfileFillIcon,
	ProfileIcon,
} from "@/components/elements/svg";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function BottomNavigation() {
	const { translations, settings } = useSelector((state) => state.common);
	const matches = useMediaQuery("(max-width: 768px)");
	const pathname = usePathname();
	if (!matches) return null;

	const menuList = [
		{
			href: "/",
			name: translations["home"],
			icon: <HomeIcon />,
			activeIcon: <HomeIFillIcon />,
		},
		{
			href: "/categories",
			name: translations["category"],
			icon: <CategoryIcon />,
			activeIcon: <CategoryFillIcon />,
		},
		{
			href: "/profile",
			name: translations["profile"],
			icon: <ProfileIcon />,
			activeIcon: <ProfileFillIcon />,
		},
		{
			href: "https://m.me/p.touhid",
			name: translations["chat"],
			icon: <MessengerIcon />,
			activeIcon: <MessengerFillIcon />,
		},
		{
			href: `tel:${settings?.phone}`,
			name: translations["call"],
			icon: <CallIcon />,
			activeIcon: <CallFillIcon />,
		},
	];

	return (
		<div className="h-28 bg-white">
			<div className="fixed bottom-0 left-0 z-20 w-full h-20 bg-white rounded-t-xl shadow-top">
				<div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
					{menuList.map((menu, index) => (
						<Link
							key={index}
							href={menu.href}
							type="button"
							className="inline-flex flex-col items-center justify-center px-5 group"
						>
							{pathname === menu.href ? (
								<>
									{React.cloneElement(menu.activeIcon, {
										fillClass: "fill-primary",
										strokeClass: "stroke-primary",
									})}
									<span className="mt-2 text-xs/[100%] text-primary capitalize">
										{menu.name}
									</span>
								</>
							) : (
								<>
									{menu.icon}
									<span className="mt-2 text-xs/[100%] text-slate-400 capitalize">
										{menu.name}
									</span>
								</>
							)}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
