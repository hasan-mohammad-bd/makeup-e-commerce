import { fetchData } from "@/lib/fetch-data";
import ProductList from "../../../components/products/ProductList";
import PaginationWithSummery from "../../../components/PaginationWithSummery";

const HomeAllProducts = async ({ translations, home }) => {
  const data = await fetchData({ api: "product-latest" });
  const products = data?.data || [];
  const meta = data?.meta || {};
  return (
    <div className="bestSell-slider mt-1 lg:mt-6">
      <ProductList home={true}  products={products} translations={translations} />
      <div>
        
      </div>
      <PaginationWithSummery meta={meta} totalItemsShowing={products?.length} />
    </div>
  );
};

export default HomeAllProducts;
