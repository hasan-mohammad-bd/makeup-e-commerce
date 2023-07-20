"use client";
import React from "react";
import WishListCard from "./WishListCard";
import { useGetWishListQuery } from "@/store/features/api/wishListAPI";
import NoItems from "../NoItems";

const MyWishList = () => {
  const { data } = useGetWishListQuery();
  const wishedProducts = data?.data || [];
  return (
    <div className="px-10 py-6">
      <h2 className="text-slate-900 font-bold text-2xl">আমার উইশ লিষ্ট</h2>
      {wishedProducts.length ? (
        <div className="mt-4">
          {wishedProducts.map((product) => (
            <WishListCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <NoItems title={"কোন প্রডাক্ট নেই"} />
      )}
    </div>
  );
};

export default MyWishList;
