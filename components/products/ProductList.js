import React from "react";
import SingleProduct from "../cards/SingleProduct";

export default function ProductList({ products, isFlashSale }) {
	return (
		<div className="products-wpr grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-x-5 lg:gap-y-12 mb-3 lg:mb-12">
			{products?.map((product, i) => (
				<div className="col-span-1" key={i}>
					<SingleProduct product={product} isFlashSale={isFlashSale} />
				</div>
			))}
		</div>
	);
}
