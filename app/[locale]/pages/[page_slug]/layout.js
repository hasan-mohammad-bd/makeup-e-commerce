import { fetchData } from "@/lib/fetch-data";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }, parent) => {
	// const parentMetaData = await parent;
	let page = {};
	try {
		const pageRes = await fetchData({ api: `pages/${params.page_slug}` });
		page = pageRes?.data;
		// console.log(page);
	} catch (error) {
		return notFound();
	}
	return {
		title: `${page?.title}`,
		// description: `${page?.title} a category of ${parentMetaData.applicationName}`,
	};
};
export default function DynamicPageLayout({ children }) {
	return <div>{children}</div>;
}
