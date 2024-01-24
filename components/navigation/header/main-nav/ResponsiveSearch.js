"use client";
import React, { useEffect, useRef, useState } from "react";
// import { HiMenuAlt1 } from "react-icons/hi";
import Search from "../../../elements/Search";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

export default function ResponsiveSearch() {
	const [searchOpen, setSearchOpen] = useState(false);
	const searchMenuRef = useRef(null);

	const closeMenu = () => {
		setSearchOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				searchMenuRef.current &&
				!searchMenuRef.current.contains(event.target)
			) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<span className="hidden lg:block">
				<Search />
			</span>
			<div className="header-actions lg:hidden">
				<button
					onClick={() => setSearchOpen(!searchOpen)}
					className="single-action"
				>
					<HiMagnifyingGlass size={24} />
				</button>
			</div>

			{searchOpen && (
				<div
					ref={searchMenuRef}
					// top-full
					className="absolute z-30 left-0 top-0 w-full bg-white lg:hidden"
				>
					<div className="container flex justify-center gap-4 py-4">
						<Search />
						<button
							onClick={() => setSearchOpen(!searchOpen)}
							className="text-[#475569] md:hidden"
						>
							<AiOutlineClose size={24} />
						</button>
					</div>
				</div>
			)}
		</>
	);
}
