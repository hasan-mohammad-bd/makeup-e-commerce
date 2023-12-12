"use client";
import React from "react";
import { useSelector } from "react-redux";
import WishListCard from "./WishListCard";
import { useParams } from "next/navigation";
import { useGetWishListQuery } from "@/store/api/wishListAPI";
import NoItems from "../_components/NoItems";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import NestedPageTitle from "../_components/NestedPageTitle";

const MyWishList = () => {
  const { locale } = useParams();
  const { data, isLoading } = useGetWishListQuery({ locale });
  const { translations } = useSelector((state) => state.common);

  const wishedProducts = data?.data || [];
  return (
    <div className="mb-20 lg:mb-0">
      <NestedPageTitle
        title={translations["my-wish-list"] || "আমার উইশ লিষ্ট"}
        href={"/dashboard"}
      />

      {isLoading ? (
        <div className="py-4 px-3 lg:px-10">
          <ItemsListLoader itemHeight={90} viewBoxWidth={900} />
        </div>
      ) : wishedProducts.length ? (
        <div className="mt-4 px-3 lg:px-10">
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
