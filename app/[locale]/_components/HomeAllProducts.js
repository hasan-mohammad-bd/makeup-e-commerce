import { fetchData } from "@/lib/fetch-data";
import ProductList from "../../../components/products/ProductList";
import PaginationWithSummery from "../../../components/PaginationWithSummery";

const HomeAllProducts = async ({ translations }) => {
	const data = await fetchData({ api: "products?per_page=20" });
	const products = data?.data || [];
	const meta = data?.meta || {};
	return (
		<div className="bestSell-slider mt-1 lg:mt-6">
			<ProductList products={products} translations={translations} />
			<PaginationWithSummery meta={meta} totalItemsShowing={products?.length} />
		</div>
	);
};

export default HomeAllProducts;
