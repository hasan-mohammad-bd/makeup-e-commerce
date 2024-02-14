import React from "react";
import SortSelect from "@/components/elements/SortSelect";
import ProductList from "./ProductList";
import { fetchData } from "@/lib/fetch-data";
import PaginationWithSummery from "../PaginationWithSummery";
import NoProducts from "./NoProducts";
import FilterPanel from "../side-drawers/FilterPanel";
import FilterMenu from "../elements/FilterMenu";
import Filter from "../filters/Filter";

const ProductsWithFilter = async ({
  customSearchParams = {},
  category,
  translations = {},
}) => {
  const params = new URLSearchParams(customSearchParams);
  const productResponse = await fetchData({
    api: `products?per_page=20&${params.toString()}`,
  });
  const products = productResponse?.data || [];
  const meta = productResponse?.meta || {};

  return (
    <>
      <div className="lg:mb-20">
        <div className="lg:container toolbar lg:grid grid-cols-5 gap-5 my-5">
          <div className="relative col-span-1 hidden lg:block">
            <FilterMenu />
          </div>

          {/* only for mobile view category products  */}
          {category && (
            <h3 className="lg:hidden font-title font-bold text-2xl px-4">
              {category?.category_name}
            </h3>
          )}

          <div
            className={`${
              category ? "hidden lg:block" : ""
            } col-span-4 lg:flex justify-between items-center lg:bg-slate-50 lg:rounded-xl px-4 py-3 border-b lg:border-b-0 border-slate-200`}
          >
            <p>
              {params.get("text") ? `"${params.get("text")}" ` : ""}
              {`${products?.length} ${translations["items"]}` ||
                `এখানে ${products?.length} টি প্রডাক্ট আছে`}
            </p>

            <div className="hidden lg:block">
              <SortSelect />
            </div>
          </div>
        </div>

        <div className="container gap-3 grid grid-cols-1 md:grid-cols-10">
          <div className="col-span-2">
            <Filter category={category} />
          </div>

          {products?.length ? (
            <div className="col-span-8">
              <ProductList products={products} translations={translations} isWithFilter={true}/>
              <PaginationWithSummery
                meta={meta}
                totalItemsShowing={products?.length}
              />
            </div>
          ) : (
            <NoProducts />
          )}
        </div>
      </div>
      <FilterPanel  category={category} />
    </>
  );
};
export default ProductsWithFilter;
