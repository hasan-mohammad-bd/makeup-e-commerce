"use client";
import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import SizeChartModal from "../modals/SizeChartModal";
import { groupByKey } from "@/utils/format-list";
import { toast } from "react-toastify";

const ProductVariantSelect = forwardRef(
	(
		{
			productBarCodes,
			photos = [],
			selectedVariants,
			setSelectedVariants,
			sizeChart,
			translations,
		},
		ref
	) => {
		const [colorsGroup, setColorsGroup] = useState({});
		const [selectedColor, setSelectedColor] = useState("");
		const [showSizeChart, setShowSizeChart] = useState(false);
		const colors = Object.keys(colorsGroup);

		/**
		 * The function `handleVariantToggle` is used to add or remove a variant from the `selectedVariants`
		 * array based on its availability and stock quantity.
		 * @param variantProp - The variantProp parameter is an object that represents a variant. It likely has
		 * properties such as id, stock_qty, and possibly others.
		 * @returns The function `handleVariantToggle` returns nothing (`undefined`).
		 */
		const handleVariantToggle = (variantProp) => {
			// activate this following blocks if you want to prevent deselecting last Item
			// if (
			// 	selectedVariants.length <= 1 &&
			// 	selectedVariants[0].id === variantProp.id
			// ) {
			// 	toast.error("You must select one variant at least");
			// 	return;
			// }
			let filteredVariants = selectedVariants.filter(
				(variant) => variant.id !== variantProp.id
			);
			if (filteredVariants.length === selectedVariants.length) {
				// checking available stock quantity before adding;
				if (variantProp.stock_qty <= 0) {
					toast.error("Oops! this variant isn't available");
					return;
				}
				setSelectedVariants([...selectedVariants, variantProp]);
				return;
			}
			setSelectedVariants(filteredVariants);
		};

		/**
		 * The function `triggerColorImgToView` takes a color name as input and finds the corresponding photo
		 * in an array, then slides to that photo in a swiper and stops the autoplay.
		 * @param colorName - The color name that you want to trigger the image to view.
		 */
		const triggerColorImgToView = (colorName) => {
			if (ref) {
				photos.some((photo, index) => {
					if (photo.color_name === colorName) {
						ref.current.swiper.slideTo(index);
						ref.current.swiper.autoplay.stop();
						return true;
					}
					return false;
				});
			}
		};

		const handleColorSelect = (colorProp) => {
			setSelectedColor(colorProp);
			// Only if one size available for a color following block of code
			// will try to add/remove this variant when color gets selected
			if (colorsGroup[colorProp].length === 1) {
				let firstVariantOfColor = colorsGroup[colorProp][0];
				handleVariantToggle(firstVariantOfColor);
			}
			triggerColorImgToView(colorProp);
		};

		useEffect(() => {
			// console.log(photos);
			const variants = productBarCodes || [];
			if (variants.length) {
				const colorVariantsGroup = groupByKey(variants, "color"); // Group the data based on color
				setColorsGroup(colorVariantsGroup);

				// Activate this block to auto variant select onload
				// const firstColor = Object.keys(colorVariantsGroup)[0];
				// setSelectedColor(firstColor);
				// setSelectedVariants([colorVariantsGroup[firstColor][0]]);
			}
		}, [productBarCodes]);

		return (
			<>
				{!(colors.length === 1 && colors[0] === "") ? (
					<div className="product-color mt-4">
						<h4 className="text-slate-900 text-sm lg:text-base font-normal">
							{translations["select-color"] || "কালার নির্বাচন করুন"}:
						</h4>
						<div className="flex gap-2 flex-wrap mt-2 lg:mt-3">
							{colors.map((color) => {
								let colorImgInfo = photos.find(
									(photo) => photo.color_name === color
								);

								return (
									<div
										key={color}
										className={`p-2 h-[60px] min-w-[60px] w-fit rounded-md border ${
											selectedVariants.find((v) => v.color === color) ||
											(selectedColor === color && colorsGroup[color].length > 1)
												? "border-primary"
												: "border-slate-300"
										} cursor-pointer`}
										onClick={() => handleColorSelect(color)}
									>
										{colorImgInfo ? (
											<Image
												src={colorImgInfo?.image}
												alt="product"
												height={52}
												width={52}
												title={color}
												className={`h-full w-full rounded-md`}
											/>
										) : (
											<span
												className={`h-full w-full flex items-center`}
												// style={{ backgroundColor: colorImgInfo?.color_code }}
											>
												{color}
											</span>
										)}
									</div>
								);
							})}
						</div>
					</div>
				) : null}

				{colorsGroup[selectedColor]?.length > 1 ? (
					<div className="product-size mt-4">
						<div className="flex justify-between font-normal items-center">
							<h4 className="text-slate-900 text-sm lg:text-base">
								{translations["select-size"] || "সাইজ নির্বাচন করুন"}:
							</h4>
							{sizeChart && (
								<button
									className="text-secondary-700 flex items-center gap-x-1 text-sm lg:text-base"
									onClick={() => setShowSizeChart((show) => !show)}
								>
									<span>
										{translations["see-size-chart"] || "সাইজ চার্ট দেখুন"}
									</span>
									<MdArrowForwardIos />
								</button>
							)}
						</div>
						<div className="flex gap-2 flex-wrap mt-2 lg:mt-3">
							{colorsGroup[selectedColor]?.map((variant) => (
								<div
									key={variant.id}
									className={`py-3 px-4 rounded-lg border ${
										selectedVariants.find((v) => v.id === variant.id)
											? "border-primary"
											: "border-slate-300"
									} cursor-pointer  ${
										variant.stock_qty <= 0
											? "bg-slate-300 text-slate-400 cursor-not-allowed"
											: "text-slate-700"
									}`}
									onClick={() => handleVariantToggle(variant)}
								>
									{variant.size}
								</div>
							))}
						</div>
					</div>
				) : null}
				{sizeChart && showSizeChart && (
					<SizeChartModal
						showModal={showSizeChart}
						setShowModal={setShowSizeChart}
						sizeChart={sizeChart}
					/>
				)}
			</>
		);
	}
);

ProductVariantSelect.displayName = "ProductVariantSelect";

export default ProductVariantSelect;
