import React from "react";
import Filter from "@/components/Filter";
import SortSelect from "@/components/elements/SortSelect";
import ProductList from "./ProductList";
import { fetchData } from "@/utils/fetchData";

const ProductsWithFilter = async ({ searchParams = {} }) => {
  const params = new URLSearchParams(searchParams);
  const productResponse = await fetchData({
    api: `products?${params.toString()}`,
  });
  const products = productResponse?.data || [];

  return (
    <div className="container">
      <div className="toolbar grid grid-cols-5 gap-5 my-5">
        <div className="relative col-span-1">
          <Filter />
        </div>
        <div className="col-span-4 flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3">
          <p>এখানে {products?.length} টি প্রডাক্ট আছে</p>
          <SortSelect />
        </div>
      </div>
      <ProductList products={products} />
    </div>
  );
};
export default ProductsWithFilter;
