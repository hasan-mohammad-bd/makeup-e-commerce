import { fetchData } from "@/lib/fetch-data";
import ProductCard from "../cards/ProductCard";
import PaginationWithSummery from "../PaginationWithSummery";

const AllProducts = async ({
	customSearchParams = {},
	pagination,
	translations,
}) => {
	const params = new URLSearchParams(customSearchParams);
	const data = await fetchData({ api: `products?${params.toString()}` });
	const products = data?.data || [];
	const meta = data?.meta || {};

	return (
		<>
			<div className="products-wpr grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-x-6 lg:gap-y-12">
				{products?.map((product, i) => (
					<div className="col-span-1" key={i}>
						<ProductCard product={product} translations={translations} />
					</div>
				))}
			</div>
			{pagination && (
				<PaginationWithSummery
					meta={meta}
					totalItemsShowing={products?.length}
				/>
			)}
		</>
	);
};

export default AllProducts;
