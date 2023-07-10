"use client";
import React from "react";
import WishListCard from "./WishListCard";
import NoWishList from "./NoWishList";
import { useGetWishListQuery } from "@/store/features/api/wishListAPI";

const MyWishList = () => {
  const { data } = useGetWishListQuery();
  const wishedProducts = data?.data || [];
  return (
    <div className="px-10 py-6">
      <h2 className="text-slate-900 font-bold text-2xl">আমার উইশ লিষ্ট</h2>
      {wishedProducts.length ? (
        <div className="mt-4">
          {wishedProducts.map((product, index) =>
            index == 1 ? (
                <WishListCard key={product.id} product={product} stockOut />
            ) : (
              <WishListCard key={product.id} product={product} />
            )
          )}
        </div>
      ) : (
        <NoWishList />
      )}
    </div>
  );
};

export default MyWishList;
