import { fetchData } from "@/lib/fetch-data";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }, parent) => {
	const parentMetaData = await parent;
	// const previousImages = parentMetaData.openGraph?.images || [];
	let product = {};
	try {
		const productRes = await fetchData({ api: `products/${params.slug}` });
		product = productRes?.data;
		// console.log(product);
	} catch (error) {
		console.log(error);
		return notFound();
	}

	return {
		title: `${product?.product_name} || ${parentMetaData.applicationName}`,
		description: `${product?.product_name} a product of ${parentMetaData.applicationName}`,
		// openGraph: {
		// 	images: [product?.image, ...previousImages],
		// },
	};
};

export default async function ProductDetailsLayout({ children }) {
	return <div>{children}</div>;
}
