import React from "react";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

export default function loading() {
	return (
		<div>
			<ItemsListLoader numItems={1} />
		</div>
	);
}
