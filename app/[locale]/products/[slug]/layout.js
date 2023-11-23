import Link from "next/link";
import AllProducts from "@/components/products/AllProducts";
import LastVisitedProducts from "@/components/products/LastVisitedProducts";
import ProductDetails from "./_components/ProductDetails";
import { fetchData } from "@/lib/fetch-data";
import { notFound } from "next/navigation";
import React from "react";
import { getSlicedText } from "@/utils/format-text";
import SectionTitle from "@/components/elements/SectionTitle";
import { SeeAll } from "@/components/elements/buttons";

export const metadata = {
	title: "Sotota Stall || product details page",
	description: "product details page",
};

export default async function ProductDetailsLayout({ children, params }) {
	const { slug } = params;
	if (slug === "null") return notFound();
	// const response = await fetchData({ api: `products/${slug}` });
	// const product = response?.data || {};

	const [settingsRes, productRes, tranRes] = await Promise.allSettled([
		fetchData({ api: `info/basic` }),
		fetchData({ api: `products/${slug}` }),
		fetchData({ api: `translations` }),
	]);

	const settings =
		settingsRes.status === "fulfilled" ? settingsRes.value?.data || {} : {};
	const product =
		productRes.status === "fulfilled" ? productRes.value?.data || [] : [];
	const translations =
		tranRes.status === "fulfilled" ? tranRes.value?.data || {} : {};

	//Category Filter
	const customSearchParams = {
		category_id: product?.category?.id,
		per_page: 20,
	};

	const tabItems = [
		{
			id: 1,
			title: translations["product-description"] || "প্রডাক্টের বিবরণ",
			path: `/products/${slug}`,
		},
		{
			id: 2,
			title: translations["specifications"] || "স্পেসিফিকেশন",
			path: `/products/${slug}/specifications`,
		},
		{
			id: 3,
			title: translations["ratings-and-reviews"] || "রেটিং ও রিভিউ",
			path: `/products/${slug}/reviews/${product?.id}`,
		},
		{
			id: 4,
			title: translations["questions-and-answers"] || "প্রশ্ন ও উত্তর",
			path: `/products/${slug}/qna/${product?.id}`,
		},
	];
	return (
		<div className="mb-32 lg:mb-0">
			<div className="container hidden lg:block">
				<div className="breadcrumb breadcrumb-2 py-5">
					<div>
						<Link
							href={`/`}
							className="text-base text-slate-600 hover:text-primary"
						>
							{translations["home"] || "হোম"}
						</Link>
						<Link
							href={`/products`}
							className="text-base text-slate-600 hover:text-primary"
						>
							{translations["products"] || "প্রডাক্টস"}
						</Link>
						<Link
							href={`/products/${slug}`}
							className={`text-base text-slate-900 hover:text-primary`}
						>
							{getSlicedText(slug, 50)}
						</Link>
					</div>
				</div>
			</div>
			<div className="lg:container">
				<ProductDetails
					product={product}
					settings={settings}
					tabItems={tabItems}
					translations={translations}
				>
					{children}
				</ProductDetails>
			</div>
			<section>
				<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
				<div className="container mt-4 lg:mt-12 mb-6 lg:mb-12">
					<SectionTitle
						className={"justify-start"}
						title={
							translations["same-category-products"] ||
							"একই ক্যাটাগরির আরও প্রোডাক্ট"
						}
						buttonText={translations["see-all"]}
					/>
					<div className="category-products mt-1 lg:mt-6">
						<AllProducts customSearchParams={customSearchParams} />
						<SeeAll
							href={`/categories/${product?.category?.slug}`}
							buttonText={translations["see-all"]}
						/>
					</div>
				</div>
			</section>
			<LastVisitedProducts
				visitedProductId={product?.id}
				translations={translations}
			/>
		</div>
	);
}
