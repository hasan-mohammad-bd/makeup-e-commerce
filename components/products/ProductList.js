import React from "react";
import ProductCard from "../cards/ProductCard";

export default function ProductList({
  products,
  isFlashSale,
  translations,
  isWithFilter,
  home,
}) {
  return (
    <div
      className={` grid grid-cols-2 gap-3 md:gap-7 justify-between md:grid-cols-4 lg:gap-x-6 lg:gap-y-12 mb-3 lg:mb-12 ${
        isWithFilter
          ? "xl:!grid-cols-3 2xl:!grid-cols-4"
          : "2xl:!grid-cols-5 xl:!grid-cols-5 md:!grid-cols-3"
      } `}
    >
      {home
        ? products.slice(0, 12).map((product, i) => {
            const stockOut = product.stock_qty <= 0;
            if (!stockOut) {
              return (
                <ProductCard
                  key={i}
                  product={product}
                  isFlashSale={isFlashSale}
                  translations={translations}
                />
              );
            } else {
              // If product is out of stock, don't render anything
              return null;
            }
          })
        : products?.map((product, i) => {
            const stockOut = product.stock_qty <= 0;
            if (!stockOut) {
              return (
                <ProductCard
                  key={i}
                  product={product}
                  isFlashSale={isFlashSale}
                  translations={translations}
                />
              );
            }
        })}
    </div>
  );
}
