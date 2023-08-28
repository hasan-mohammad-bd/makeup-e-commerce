"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrawerLeft from "../elements/DrawerLeft";
import { toggleFilterPanel } from "@/store/features/commonSlice";

import { useState, useRef } from "react";

// ** Imoprt icons
import { IoCloseOutline } from "react-icons/io5";
import CategoryFilter from "../CategoryFilter";
import BrandFilter from "../BrandFilter";
import PriceRangeSlider from "../elements/sliders/PriceRangeSlider";
import ColorFilter from "../ColorFilter";
import { useGetFilterOptionsByCategoryQuery } from "@/store/features/api/filterOptionsAPI";

const FilterPanel = ({ category }) => {
  // console.log(category);

  //Drawer logics
  const dispatch = useDispatch();
  const { isFilterPanelOpen } = useSelector((state) => state.common);

  const closeFilterPanel = () => {
    dispatch(toggleFilterPanel());
  };

  //Categories Filter logics
  const [selectedCategory, setSelectedCategory] = useState({});
  const [mainCategory, setMainCategory] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [childCategory, setChildCategory] = useState({});

  //Brands
  const [brandIds, setBrandIds] = useState([]);

  //Colors
  const [selectedColors, setSelectedColors] = useState([]);

  const query = selectedCategory?.id
    ? `category_ids=${selectedCategory?.id}`
    : "";

  const { data: filterOptions } = useGetFilterOptionsByCategoryQuery(query, {
    skip: !isFilterPanelOpen,
  });
  // console.log(filterOptions);

  //Filtering logics
  const [productFilters, setProductFilters] = useState({});
  // console.log(productFilters);

  const checkedElms = useRef([]);

  // resetting other filters when category changed
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setBrandIds([]);
    setSelectedColors([]);
  };

  useEffect(() => {
    if (category) {
      handleCategorySelect(category);
      setMainCategory(category);
      setSubCategory({});
      setChildCategory({});
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
          {Object.keys(productFilters)
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
          )}

          <CategoryFilter
            setFilters={setProductFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategorySelect}
            mainCategory={mainCategory}
            setMainCategory={setMainCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            childCategory={childCategory}
            setChildCategory={setChildCategory}
            checkedElms={checkedElms}
          />
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
