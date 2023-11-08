import { fetchData } from "@/lib/fetch-data";
import ProductList from "../../../components/products/ProductList";
import PaginationWithSummery from "../../../components/PaginationWithSummery";

const HomeAllProducts = async () => {
	const data = await fetchData({ api: "products" });
	const products = data?.data || [];
	const meta = data?.meta || {};
	return (
		<div className="bestSell-slider mt-6">
			<ProductList products={products} />
			<PaginationWithSummery meta={meta} totalItemsShowing={products?.length} />
		</div>
	);
};

export default HomeAllProducts;
