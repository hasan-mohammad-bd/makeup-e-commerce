import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import React from "react";

export default function loading() {
	return (
		<div>
			<ItemsListLoader numItems={1} />
		</div>
	);
}
