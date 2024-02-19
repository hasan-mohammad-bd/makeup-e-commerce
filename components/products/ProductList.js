import React from "react";
import ProductCard from "../cards/ProductCard";

export default function ProductList({
  products,
  isFlashSale,
  translations,
  isWithFilter,
}) {
  return (
    <div
      className={`products-wpr grid grid-cols-2 gap-3 md:gap-7 justify-between md:grid-cols-4 lg:gap-x-6 lg:gap-y-12 mb-3 lg:mb-12 ${
        isWithFilter ? "lg:grid-cols-4" : "lg:grid-cols-5"
      } `}
    >
      {products?.map((product, i) => (
        <ProductCard
          key={i}
          product={product}
          isFlashSale={isFlashSale}
          translations={translations}
        />
      ))}
    </div>
  );
}
