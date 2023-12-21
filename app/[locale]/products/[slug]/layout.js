import React from "react";
import { notFound } from "next/navigation";

export const metadata = {
	title: "Sotota Stall || product details page",
	description: "product details page",
};

export default function ProductViewLayout({ children, params }) {
	const { slug } = params;
	if (slug === "null") return notFound();

	return <>{children}</>;
}
