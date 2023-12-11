"use client";
import React from "react";
import { useSelector } from "react-redux";
import WishListCard from "./WishListCard";
import { useParams } from "next/navigation";
import { useGetWishListQuery } from "@/store/api/wishListAPI";
import NoItems from "../_components/NoItems";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

const MyWishList = () => {
	const { locale } = useParams();
	const { data, isLoading } = useGetWishListQuery({ locale });
	const { translations } = useSelector((state) => state.common);

	const wishedProducts = data?.data || [];
	return (
		<div className="px-10 py-6">
			<h2 className="text-slate-900 font-title font-bold text-2xl">
				{translations["my-wish-list"] || "আমার উইশ লিষ্ট"}
			</h2>
			{isLoading ? (
				<div className="py-4">
					<ItemsListLoader itemHeight={90} viewBoxWidth={900} />
				</div>
			) : wishedProducts.length ? (
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
