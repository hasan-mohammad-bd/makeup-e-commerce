"use client";
import RatingReviews from "./reviews";
import ProductQNA from "./product-qna";
import Descriptions from "./descriptions";
import Specifications from "./specifications";
import ActiveLink from "@/components/elements/ActiveLink";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";
import Link from "next/link";

const ProductTabsView = ({ product, settings, translations }) => {
	const tabItems = [
		{
			id: 1,
			title: translations["product-description"] || "প্রডাক্টের বিবরণ",
			key: `#product-descriptions`,
		},
		{
			id: 2,
			title: translations["specifications"] || "স্পেসিফিকেশন",
			key: `#product-specifications`,
		},
		{
			id: 3,
			title: translations["ratings-and-reviews"] || "রেটিং ও রিভিউ",
			key: `#product-rating-reviews`,
		},
		{
			id: 4,
			title: translations["questions-and-answers"] || "প্রশ্ন ও উত্তর",
			key: `#product-questions-and-answers`,
		},
	];

	return (
		<div className="tabs-view">
			{/* tabs view */}
			<div className="sticky top-20 lg:top-20 bg-white z-20 mt-7 lg:mt-0 lg:pt-6">
				<HorizontalScrollView
					className={
						"product-tab-links  border-b border-slate-200 py-0 justify-evenly lg:w-full lg:pb-4"
					}
				>
					{tabItems.map((item) => (
						<div key={item.id}>
							<Link href={item.key}>{item.title}</Link>
						</div>
					))}
				</HorizontalScrollView>
			</div>
			{/* tabs content  */}
			<div className="product-tab-content">
				<div className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200">
					<Descriptions
						product={product}
						settings={settings}
						translations={translations}
					/>
				</div>

				<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
				<div className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200">
					<Specifications product={product} translations={translations} />
				</div>

				<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
				<div className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200">
					<RatingReviews product_id={product?.id} />
				</div>

				<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
				<div className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7">
					<ProductQNA product_id={product?.id} />
				</div>
			</div>
		</div>
	);
};

export default ProductTabsView;
