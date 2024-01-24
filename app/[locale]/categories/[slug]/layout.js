import { fetchData } from "@/lib/fetch-data";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }, parent) => {
	const parentMetaData = await parent;
	let category = {};
	try {
		const categoryRes = await fetchData({ api: `category/${params?.slug}` });
		category = categoryRes?.data;
	} catch (error) {
		return notFound();
	}
	return {
		title: `${category?.category_name} || ${parentMetaData.applicationName}`,
		description: `${category?.category_name} a category of ${parentMetaData.applicationName}`,
	};
};

export default function CategoryLayout({ children }) {
	return <div>{children}</div>;
}
