"use client";
import { Link } from "@/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { removeFromSelected, toggleCart } from "@/store/slices/cartSlice";
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
	const [selectedVariant, setSelectedVariant] = useState(null);
	const [selectedColor, setSelectedColor] = useState("");
	const isMobile = useMediaQuery("(max-width: 768px)");
	const dispatch = useDispatch();

	const closeDrawer = (param) => {
		setSelectedVariant(null); // clearing selected variants on close
		dispatch(removeFromSelected());
	};

	const handleAddAndClose = () => {
		const isSuccess = handleAddToCart(selectedProduct, selectedVariant);
		if (isSuccess) {
			closeDrawer();
			dispatch(toggleCart()); //opening cart
		}
	};

	const newPrice =
		selectedVariant?.discount_selling_price || selectedProduct?.new_price;
	const oldPrice = selectedVariant?.selling_price || selectedProduct?.old_price;

	const pageContent = (
		<div className="lg:p-6">
			<div className="product-info grid grid-cols-[72px_auto] lg:grid-cols-[84px_auto] gap-3 lg:gap-4 items-center">
				<Image
					src={selectedProduct?.image || noImage}
					alt="product"
					height={84}
					width={84}
					className="h-[72px] w-[72px] lg:w-[84px] lg:h-[84px] rounded-lg"
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
							{siteConfig.currency.sign} {newPrice}
						</h3>
						{oldPrice > newPrice ? (
							<>
								<del className="text-sm text-slate-300">
									{siteConfig.currency.sign} {oldPrice}
								</del>
								<div className="rounded-md px-1 text-xs py-0.5 text-white bg-red-500">
									{getDiscountPercent(oldPrice, newPrice)}% OFF
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
			<ProductVariantSelect
				photos={selectedProduct?.photos}
				productBarCodes={selectedProduct?.barcodes}
				selectedVariant={selectedVariant}
				setSelectedVariant={setSelectedVariant}
				translations={translations}
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>
			<div className="product-actions mt-8 lg:mt-10 mb-3 lg:my-6 flex gap-3 lg:gap-4 justify-between items-center">
				<button
					className="bg-secondary-700 py-3 w-full px-2 text-white rounded-lg text-center active:scale-95"
					onClick={() => handleAddAndClose()}
				>
					<HiOutlineShoppingCart size={24} />
					<span className="ml-2">
						{translations["add-to-cart"] || "কার্টে রাখুন"}
					</span>
				</button>
				<button
					onClick={() =>
						handleAddAndCheckout(selectedProduct, selectedVariant, true)
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
