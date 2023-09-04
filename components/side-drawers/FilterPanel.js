"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrawerLeft from "../elements/DrawerLeft";
import { toggleFilterPanel } from "@/store/features/commonSlice";

import { useState, useRef } from "react";

// ** Imoprt icons
import CategoryFilter from "../CategoryFilter";
import BrandFilter from "../BrandFilter";
import PriceRangeSlider from "../elements/sliders/PriceRangeSlider";
import ColorFilter from "../ColorFilter";
import { useGetFilterOptionsByCategoryQuery } from "@/store/features/api/filterOptionsAPI";

const FilterPanel = ({ category }) => {
  //Drawer logics
  const dispatch = useDispatch();
  const { isFilterPanelOpen } = useSelector((state) => state.common);

  const closeFilterPanel = () => {
    dispatch(toggleFilterPanel());
  };

  //Brands
  const [brandIds, setBrandIds] = useState([]);

  //Colors
  const [selectedColors, setSelectedColors] = useState([]);

  const query = category?.id ? `category_ids=${category?.id}` : "";

  const { data: filterOptions } = useGetFilterOptionsByCategoryQuery(query, {
    skip: !isFilterPanelOpen,
  });

  const [productFilters, setProductFilters] = useState({});

  const checkedElms = useRef([]);

  //Resetting other filters based on category change
  useEffect(() => {
    if (category) {
      setBrandIds([]);
      setSelectedColors([]);
    }
  }, [category]);

  const removeFilter = (key, val) => {
    setProductFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== val),
    }));

    checkedElms?.current.forEach((ele) => {
      if (ele?.value === val) {
        ele.checked = false;
      }
    });

    checkedElms.current = checkedElms?.current.filter(
      (ele) => ele?.value !== val
    );
  };

  const handleFilterReset = () => {
    setProductFilters({});
    checkedElms?.current.forEach((ele) => {
      if (ele?.checked) {
        ele.checked = !ele.checked;
      }
    });
  };

  return (
    <DrawerLeft
      title={`ফিল্টার করুন`}
      show={isFilterPanelOpen}
      setShow={closeFilterPanel}
    >
      <div className="p-4 flex flex-col h-[77%]">
        <div className={`pl-4 filter-sidebar flex flex-col gap-y-7`}>
          {/* {Object.keys(productFilters)
            .filter((key) => key !== "price")
            .some((key) => productFilters[key].length !== 0) && (
            <div className="flex items-center flex-wrap gap-2">
              {Object.keys(productFilters)
                .filter((key) => key !== "price")
                .map((key) =>
                  productFilters[key].map((val, indx) => (
                    <div
                      className="flex items-center gap-1 bg-slate-100 border-slate-200 rounded px-2 py-1"
                      key={indx}
                    >
                      {key === "color" && (
                        <span
                          className={`inline-block w-3 h-3 bg-${val}-500 rounded-full`}
                        ></span>
                      )}
                      <p className="text-sm text-slate-900">{val}</p>
                      <IoCloseOutline
                        size={24}
                        className="text-red-500 cursor-pointer"
                        onClick={() => removeFilter(key, val)}
                      />
                    </div>
                  ))
                )}
            </div>
          )} */}

          <CategoryFilter selectedCategory={category} />
          {filterOptions?.brands?.length ? (
            <BrandFilter
              filteredBrands={filterOptions?.brands}
              setFilters={setProductFilters}
              brandIds={brandIds}
              setBrandIds={setBrandIds}
              checkedElms={checkedElms}
            />
          ) : null}
          {filterOptions?.max_price ? (
            <PriceRangeSlider
              setFilters={setProductFilters}
              min_price={filterOptions?.min_price}
              max_price={filterOptions?.max_price}
            />
          ) : null}
          {filterOptions?.colors?.length ? (
            <ColorFilter
              setFilters={setProductFilters}
              checkedElms={checkedElms}
              colors={filterOptions?.colors}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
            />
          ) : null}
        </div>
      </div>
    </DrawerLeft>
  );
};

export default FilterPanel;
