"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import noImage from "@/public/assets/images/no-image.png";
import menuOffer from "@/public/assets/images/banner/category-menu-offer.png";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useParams, usePathname } from "next/navigation";
import { useGetPopularCategoriesQuery } from "@/store/features/api/categoriesAPI";

export default function MegaMenu({ settings }) {
	const pathname = usePathname();
	const { locale } = useParams();
	const { data: categoriesData } = useGetPopularCategoriesQuery({ locale });
	const popularCategories = categoriesData?.data || [];
	const matches = useMediaQuery("(max-width: 768px)");
	const isActiveForMobile = [
		`/${locale}`,
		"/",
		`/${locale}/categories`,
		"/categories",
	].includes(pathname);

	const [menuOpen, setMenuOpen] = useState(false);
	const headerPage = settings?.header_page || {};
	const { translations } = useSelector((state) => state.common);
	//   console.log(headerPage);
	//   console.log(categories);

	const megaMenuRef = useRef(null);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const menuClasses =
		"px-2 sm:px-3 py-2 lg:px-2 lg:py-3 bg-white rounded-lg lg:rounded-sm";

	return (
		<>
			{(!matches || (matches && isActiveForMobile)) && (
				<div className="nav-menu container -ml-4 lg:ml-0 absolute z-30 top-full lg:static mt-3 lg:mt-0 flex items-center gap-2">
					{!menuOpen ? (
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className={`hidden lg:flex menuBtn ${menuClasses} items-center gap-1`}
						>
							{translations["category"]} <BsChevronDown />
						</button>
					) : (
						<span
							className={`hidden lg:flex menuBtn ${menuClasses} cursor-pointer items-center gap-1`}
						>
							{translations["category"]} <BsChevronUp />
						</span>
					)}
					<Link
						href={"/categories"}
						className={`flex lg:hidden ${menuClasses} items-center`}
					>
						{translations["category"]}
					</Link>
					{Object.keys(headerPage).map((key) => (
						<Link
							key={key}
							href={headerPage[key]}
							className={`${menuClasses} flex items-center`}
						>
							{key}
						</Link>
					))}
				</div>
			)}
			{menuOpen && !matches && (
				<div
					ref={megaMenuRef}
					className="absolute z-30 left-0 top-full bg-white shadow-lg w-full border border-slate-300 border-t-0"
				>
					<div className="container flex gap-6 py-8 pl-8">
						<div className="">
							<div className="grid grid-cols-4 gap-4">
								{popularCategories?.slice(0, 8)?.map((category, i) => (
									<Link
										key={i}
										href={`/categories/${category.slug}`}
										onClick={closeMenu}
										className="flex gap-2 items-center py-2 hover:text-primary"
									>
										<div className="category-img flex justify-center items-center w-[58px] h-[38px]">
											<Image
												src={category?.icon || noImage}
												alt={category.category_name}
												priority
												width={58}
												height={38}
												className="w-[58px] h-[38px] object-contain"
											/>
										</div>
										{category.category_name}
									</Link>
								))}
							</div>
							<div className="mt-6">
								<Link
									href={"/products"}
									onClick={closeMenu}
									className="border border-primary rounded-lg py-2 px-3 text-primary active:scale-95"
								>
									{translations["view-all-products"]} <BsArrowRight />
								</Link>
							</div>
						</div>
						<div className="category-img flex justify-center items-center w-[356px] h-[200px]">
							<Image
								src={menuOffer}
								alt={"offer"}
								width={356}
								height={200}
								className="w-[356px] h-[200px] object-contain"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
