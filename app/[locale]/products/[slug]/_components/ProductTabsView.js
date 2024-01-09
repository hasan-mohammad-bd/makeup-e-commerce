"use client";
import { Link } from "@/navigation";
import { useEffect, useRef, useState } from "react";
import RatingReviews from "./reviews";
import ProductQNA from "./product-qna";
import Descriptions from "./descriptions";
import Specifications from "./specifications";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";

const ProductTabsView = ({ product, settings, translations }) => {
	const [activeSection, setActiveSection] = useState(null);
	const observer = useRef(null);

	useEffect(() => {
		//create new instance and pass a callback function
		observer.current = new IntersectionObserver((entries) => {
			const visibleSection = entries.find(
				(entry) => entry.isIntersecting
			)?.target;
			//Update state with the visible section ID
			if (visibleSection) {
				setActiveSection(visibleSection.id);
			}
		});

		//Get custom attribute data-section from all sections
		const sections = document.querySelectorAll("[data-section]");

		sections.forEach((section) => {
			observer.current.observe(section);
		});
		//Cleanup function to remove observer
		return () => {
			sections.forEach((section) => {
				observer.current.unobserve(section);
			});
		};
	}, []);

	const handleTabClick = (e, sectionId) => {
		e.preventDefault();

		const targetElement = document.getElementById(sectionId);

		if (targetElement) {
			const offset = 48; // Adjust this value based on your design
			const targetOffset = targetElement.offsetTop - offset;

			window.scroll({
				top: targetOffset,
				behavior: "smooth",
			});
		}
	};

	const tabItems = [
		{
			id: 1,
			title: translations["product-description"] || "প্রডাক্টের বিবরণ",
			key: `p-descriptions`,
		},
		{
			id: 2,
			title: translations["specifications"] || "স্পেসিফিকেশন",
			key: `p-specifications`,
		},
		{
			id: 3,
			title: translations["ratings-and-reviews"] || "রেটিং ও রিভিউ",
			key: `p-rating-reviews`,
		},
		{
			id: 4,
			title: translations["questions-and-answers"] || "প্রশ্ন ও উত্তর",
			key: `p-qna`,
		},
	];

	// console.log(activeSection, "activeSection");

	return (
		<div className="tabs-view">
			{/* tabs view */}
			<div className="sticky top-20 lg:top-20 bg-white z-20 mt-7 lg:mt-0 lg:pt-6">
				<HorizontalScrollView
					className={
						"product-tab-links  border-b border-slate-200 py-0 justify-evenly lg:w-full lg:pb-4"
					}
				>
					{tabItems.map((item) =>
						item.key === "p-specifications" &&
						!product?.specification ? null : (
							<div key={item.id}>
								<Link
									className={activeSection === item.key ? "active" : ""}
									href={`#${item.key}`}
									onClick={(e) => handleTabClick(e, item.key)}
								>
									{item.title}
								</Link>
							</div>
						)
					)}
				</HorizontalScrollView>
			</div>
			{/* tabs content  */}
			<div className="product-tab-content">
				<div
					data-section
					id="p-descriptions"
					className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200"
				>
					<Descriptions
						product={product}
						settings={settings}
						translations={translations}
					/>
				</div>
				{product?.specification && (
					<>
						<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
						<div
							data-section
							id="p-specifications"
							className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200 overflow-hidden"
						>
							<Specifications product={product} translations={translations} />
						</div>
					</>
				)}

				<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
				<div
					data-section
					id="p-rating-reviews"
					className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200"
				>
					<RatingReviews product_id={product?.id} />
				</div>

				<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
				<div data-section id="p-qna" className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7">
					<ProductQNA product_id={product?.id} />
				</div>
			</div>
		</div>
	);
};

export default ProductTabsView;
