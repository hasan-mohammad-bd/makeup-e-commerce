"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { removeFromSelected } from "@/store/slices/cartSlice";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import ProductVariantSelect from "../products/ProductVariantSelect";
import noImage from "@/public/assets/images/no-image.png";
import Drawer from "../elements/Drawer";
import { siteConfig } from "@/config/site";
import useCart from "@/hooks/useCart";
import { getDiscountPercent } from "@/utils/percent";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Modal from "../elements/Modal";

const ProductSelect = () => {
	const { handleAddToCart, handleAddAndCheckout } = useCart(); //custom hook for reusing
	const { selectedProduct } = useSelector((state) => state.cart);
	const { translations } = useSelector((state) => state.common);
	const [selectedVariants, setSelectedVariants] = useState([]);
	const isMobile = useMediaQuery("(max-width: 768px)");
	const dispatch = useDispatch();

	const closeDrawer = (param) => {
		setSelectedVariants([]); // clearing selected variants on close
		dispatch(removeFromSelected());
	};

	const pageContent = (
		<div className="lg:p-6">
			<div className="product-info flex gap-4 items-center">
				<Image
					src={selectedProduct?.image || noImage}
					alt="product"
					height={84}
					width={84}
					className="h-[72px] lg:h-20 w-[72px] lg:w-20 rounded-lg"
				/>
				<div className="">
					<h5 className="text-primary text-xs font-semibold">
						{selectedProduct?.brand?.brand_name || "No Brand"}
					</h5>
					<h2 className="mt-2">
						<Link
							href={`/products/${selectedProduct?.slug}`}
							className="product-title"
						>
							{selectedProduct?.product_name}
						</Link>
					</h2>
					<div className="flex gap-2 lg:gap-3 products-center items-center">
						<h3 className="text-base/[16px] lg:text-xl text-red-500">
							{siteConfig.currency.sign} {selectedProduct?.new_price}
						</h3>
						{selectedProduct?.old_price > selectedProduct?.new_price ? (
							<>
								<del className="text-sm text-slate-300">
									{siteConfig.currency.sign} {selectedProduct?.old_price}
								</del>
								<div className="rounded-md px-1 text-xs py-0.5 text-white bg-red-500">
									{getDiscountPercent(
										selectedProduct?.old_price,
										selectedProduct?.new_price
									)}
									% OFF
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
			<ProductVariantSelect
				photos={selectedProduct?.photos}
				productBarCodes={selectedProduct?.barcodes}
				selectedVariants={selectedVariants}
				setSelectedVariants={setSelectedVariants}
				translations={translations}
			/>
			<div className="product-actions mt-8 lg:mt-10 mb-3 lg:my-6 flex gap-3 lg:gap-4 justify-between items-center">
				<button
					className="bg-secondary-700 py-3 w-full px-2 text-white rounded-lg text-center active:scale-95"
					onClick={() => handleAddToCart(selectedProduct, selectedVariants)}
				>
					<HiOutlineShoppingCart size={24} />
					<span className="ml-2">
						{translations["add-to-cart"] || "কার্টে রাখুন"}
					</span>
				</button>
				<button
					onClick={() =>
						handleAddAndCheckout(selectedProduct, selectedVariants, true)
					}
					className="bg-primary py-3 w-full px-2 text-white rounded-lg text-center active:scale-95"
				>
					<span className="mr-2">
						{translations["buy-now"] || "এখনই কিনুন"}
					</span>
					<HiArrowLongRight size={20} className="hidden lg:inline" />
				</button>
			</div>
			<Link
				href="/products/productIdOrSlug"
				className="text-secondary-700 text-sm"
			>
				<p className="text-center">
					{translations["click-product-details"] ||
						"প্রোডাক্টির বিস্তারিত দেখতে ক্লিক করুন"}
				</p>
			</Link>
		</div>
	);

	return (
		<>
			{isMobile ? (
				<Modal
					showModal={selectedProduct}
					setShowModal={closeDrawer}
					title={translations["select-variant"] || "নির্বাচন করুন"}
				>
					{pageContent}
				</Modal>
			) : (
				<Drawer
					title={translations["select-variant"] || "নির্বাচন করুন"}
					show={selectedProduct}
					setShow={closeDrawer}
				>
					{pageContent}
				</Drawer>
			)}
		</>
	);
};

export default ProductSelect;
