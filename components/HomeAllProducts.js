import Link from "next/link";
import { fetchData } from "@/utils/fetchData";
import { HiArrowLongRight } from "react-icons/hi2";
// import AllProducts from "./products/AllProducts";
import ProductList from "./products/ProductList";
import PaginationWithSummery from "./PaginationWithSummery";

const HomeAllProducts = async () => {
	const [ProductRes, translationRes] = await Promise.allSettled([
		fetchData({ api: `products` }),
		fetchData({ api: `translations` }),
	]);

	const products =
		ProductRes.status === "fulfilled" ? ProductRes.value?.data || [] : [];
	const meta =
		ProductRes.status === "fulfilled" ? ProductRes.value?.meta || {} : {};
	const translations =
		translationRes.status === "fulfilled"
			? translationRes.value?.data || {}
			: {};

	return (
		<div className="container">
			<div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
				<h2 className="sec-title capitalize">{translations["all-products"]}</h2>
				<Link href="/products" className="all-btn capitalize">
					{translations["see-all"]} <HiArrowLongRight size={24} />{" "}
				</Link>
			</div>

			<div className="bestSell-slider mt-6">
				<ProductList products={products} />
				<PaginationWithSummery
					meta={meta}
					totalItemsShowing={products?.length}
				/>
			</div>
		</div>
	);
};

export default HomeAllProducts;
