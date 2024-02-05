"use client";
import React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useGetFilterOptionsByCategoryQuery } from "@/store/api/filterOptionsAPI";

import BrandFilter from "../filters/BrandFilter";
import ColorFilter from "../filters/ColorFilter";
import CategoryFilter from "../filters/CategoryFilter";
import PriceRangeFilter from "../filters/PriceRangeFilter";

// ** Imoprt icons
import { IoCloseOutline } from "react-icons/io5";
import useSelectURLQuery from "@/hooks/useSelectURLQuery";

const Filter = ({ category }) => {
  const router = useRouter();
  const { locale } = useParams();
  const { handleSelectChange } = useSelectURLQuery();
  const searchQuery = category?.id ? `category_ids=${category?.id}` : "";
  const { data: filterOptions } = useGetFilterOptionsByCategoryQuery({
    searchQuery,
    locale,
  });

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  //selected brands
  const brandIdsString = params.get("brand_ids");
  let selectedBrandIds = [];
  if (brandIdsString) {
    selectedBrandIds = brandIdsString.split(",");
  }
  //selected colors
  const colorsString = params.get("colors");
  let selectedColors = [];
  if (colorsString) {
    selectedColors = colorsString.split(",");
  }

  return (
    <div className={`pl-4 filter-sidebar flex flex-col gap-y-7 `}>
      <div className="p-5 rounded shadow-lg">
        {category || selectedBrandIds.length || selectedColors.length ? (
          <div className="flex items-center flex-wrap gap-2">
            {/* selected category  */}
            {category && (
              <div className="flex items-center gap-1 bg-slate-100 border-slate-200 rounded px-2 py-1">
                <p className="text-sm text-slate-900">
                  {category.category_name}
                </p>
                <IoCloseOutline
                  size={24}
                  className="text-red-500 cursor-pointer"
                  onClick={() => router.push("/products")}
                />
              </div>
            )}
            {/* brands  */}
            {filterOptions?.brands?.map((brand) =>
              selectedBrandIds.includes(`${brand.id}`) ? (
                <div
                  key={brand.id}
                  className="flex items-center gap-1 bg-slate-100 border-slate-200 rounded px-2 py-1"
                >
                  <p className="text-sm text-slate-900 shadow-md filter">
                    {brand.brand_name}
                  </p>
                  <IoCloseOutline
                    size={24}
                    className="text-red-500 cursor-pointer"
                    onClick={() =>
                      handleSelectChange(
                        "brand_ids",
                        selectedBrandIds
                          .filter((id) => id !== `${brand.id}`)
                          .join(",")
                      )
                    }
                  />
                </div>
              ) : null
            )}
            {/* colors  */}
            {filterOptions?.colors?.map((color) =>
              selectedColors.includes(`${color.name}`) ? (
                <div
                  key={color.id}
                  className="flex items-center gap-1 bg-slate-100 border-slate-200 rounded px-2 py-1"
                >
                  <span
                    className={`inline-block w-3 h-3 rounded-full`}
                    style={{ background: color.code }}
                  ></span>
                  <p className="text-sm text-slate-900">{color.name}</p>
                  <IoCloseOutline
                    size={24}
                    className="text-red-500 cursor-pointer"
                    onClick={() =>
                      handleSelectChange(
                        "colors",
                        selectedColors
                          .filter((name) => name !== `${color.name}`)
                          .join(",")
                      )
                    }
                  />
                </div>
              ) : null
            )}
          </div>
        ) : null}

        <CategoryFilter selectedCategory={category} />
      </div>

      <div className="p-5 rounded shadow-lg">
        {filterOptions?.brands?.length ? (
          <BrandFilter
            filteredBrands={filterOptions?.brands}
            selectedBrandIds={selectedBrandIds}
          />
        ) : null}
      </div>

      <div className="p-5 rounded shadow-lg">
        {filterOptions?.max_price ? (
          <PriceRangeFilter
            min_price={filterOptions?.min_price}
            max_price={filterOptions?.max_price}
          />
        ) : null}
      </div>
      <div className="p-5 rounded shadow-lg">
        {filterOptions?.colors?.length ? (
          <ColorFilter
            colors={filterOptions?.colors}
            selectedColors={selectedColors}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
