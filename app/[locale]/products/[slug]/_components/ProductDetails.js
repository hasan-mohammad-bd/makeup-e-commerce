"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { getCouponDiscount } from "@/lib/checkout";
import ProductViewSlider from "@/app/[locale]/products/[slug]/_components/ProductViewSlider";
import { getSlicedText } from "@/utils/format-text";
import ViewHTML from "@/components/elements/ViewHTML";
import { addToCart } from "@/store/slices/cartSlice";
import ProductVariantSelect from "@/components/products/ProductVariantSelect";
import ActiveLink from "@/components/elements/ActiveLink";
import { Rating } from "react-simple-star-rating";
import { formatLongNumber, getFractionFixed } from "@/utils/format-number";
import SocialShare from "@/components/elements/SocialShare";

// ** Import Icon
import { HiChatBubbleLeftRight, HiOutlineShoppingCart } from "react-icons/hi2";
import { TbTag } from "react-icons/tb";
import { IoCall, IoCopy } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";

const ProductDetails = ({
	children,
	product,
	tabItems,
	settings,
	translations,
}) => {
	const [selectedVariant, setSelectedVariant] = useState(null);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleAddToCart = () => {
		if (product?.productVariants?.length) {
			const variantProduct = {
				...product,
				variantId: selectedVariant?.id,
				selectedVariant,
				// sizes: colors[selectedColor],
			};
			// console.log(variantProduct);
			dispatch(addToCart(variantProduct));
		} else {
			dispatch(addToCart(product));
		}
	};

	const handleBuyNow = () => {
		handleAddToCart();
		router.push("/checkout");
	};

	return (
		<div className="relative product-details">
			<div className="flex flex-col lg:flex-row lg:gap-10">
				<div className="lg:w-1/2">
					<div className="lg:sticky top-4">
						<ProductViewSlider product={product} />
						<div className="px-3 lg:px-0 responsive-action">
							<div className="product-actions pb-3 lg:py-6 flex gap-4 justify-between items-center">
								<button
									className="bg-secondary-700 py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
									onClick={handleAddToCart}
								>
									<HiOutlineShoppingCart size={24} />
									<span className="ml-2">
										{translations["add-to-cart"] || "কার্টে রাখুন"}
									</span>
								</button>
								<button
									onClick={handleBuyNow}
									className="bg-primary py-3 w-full px-6 text-white rounded-lg text-center active:scale-95"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M7.91634 1.66667H15.4163L10.833 7.50001H17.083L7.08301 18.3333L9.16634 10.4167H3.33301L7.91634 1.66667Z"
											fill="white"
											stroke="white"
											strokeLinejoin="round"
										/>
									</svg>{" "}
									<span className="mr-2">
										{translations["buy-now"] || "এখনই কিনুন"}
									</span>
								</button>
							</div>
							<div className="lg:border-t border-slate-200 flex gap-4 justify-center lg:justify-between items-center flex-wrap pt-1 lg:py-4 font-bold">
								<p className="text-slate-900">
									{translations["call-for-details"] ||
										"বিস্তারিত জানতে কল করুন"}
								</p>
								<p className="text-primary">
									<IoCall /> {settings?.phone[0] || "no contact added"}
								</p>
								{settings?.phone[1] && (
									<>
										<p className="text-slate-500 hidden lg:block">
											{translations["or"] || "অথবা"}
										</p>
										<p className="text-primary hidden lg:block">
											<IoCall /> {settings?.phone[1]}
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2">
					<div className="product-content-wrap">
						<div className="px-3 lg:px-0 pt-3 lg:pt-0">
							<p className="text-sm font-bold text-primary capitalize mb-2">
								{product?.brand?.brand_name || "No Brand"}
							</p>
							<h5 className="text-2xl font-bold font-title text-slate-900">
								{getSlicedText(product?.product_name, 100)}
							</h5>
							<div className="product-summary grid grid-cols-2 lg:flex gap-y-3 lg:gap-3 items-center mt-2">
								<div className="flex gap-1 items-center">
									<Rating
										initialValue={product?.averate_rating || 5}
										allowFraction
										readonly
										size={24}
										fillColor="#F59E0B"
									/>
									<span>{getFractionFixed(product?.averate_rating || 5)}</span>
								</div>
								<p className="border-l pl-3 border-slate-300 leading-4">
									{formatLongNumber(product?.total_rating)}{" "}
									{translations["rating"] || "রেটিং"}
								</p>
								<p className="lg:border-l lg:pl-3 border-slate-300 leading-4">
									<HiChatBubbleLeftRight
										size={20}
										className="text-secondary-700"
									/>{" "}
									{formatLongNumber(product?.toptal_question_answer || 0)}{" "}
									{translations["questions-and-answers"] || "প্রশ্ন ও উত্তর"}
								</p>

								<SocialShare translations={translations} />
							</div>
							{/* short description  */}
							<ViewHTML
								htmlText={product?.product_short_description}
								className={"desc text-sm lg:text-base text-slate-600"}
							/>
							<div className="product-price flex items-center gap-4 lg:border-b border-slate-200 py-4 lg:py-5">
								<span className="text-2xl lg:text-3xl/[48px] font-bold font-title text-slate-900">
									{siteConfig.currency.sign} {product?.new_price || "0.00"}{" "}
								</span>
								{product?.discount_percentage > 0 ? (
									<>
										<del className="old-price text-base lg:text-lg/[24px] font-normal text-slate-400">
											{siteConfig.currency.sign}{" "}
											{product?.old_price ? `$ ${product?.old_price}` : "0.00"}
										</del>
										<span className="discount inline-block text-base/[22px] font-semibold font-title text-white bg-red-500 rounded-md py-1 px-2">
											- {getFractionFixed(product?.discount_percentage)}%
										</span>
									</>
								) : null}
							</div>
						</div>
						<div className="h-2 w-full bg-slate-200 lg:hidden"></div>
						<div className="px-3 lg:px-0">
							{product?.productVariants?.length ? (
								<ProductVariantSelect
									productVariants={product?.productVariants}
									selectedVariant={selectedVariant}
									setSelectedVariant={setSelectedVariant}
									sizeChart={product?.size_chart}
								/>
							) : null}
						</div>
						<div className="h-2 w-full mt-4 bg-slate-200 lg:hidden"></div>
						<div className="px-3 lg:px-0">
							{product?.coupons.length ? (
								<div className="mt-5 mb-8">
									<p className="font-semibold font-title text-slate-900 mb-2">
										{translations["best-offer"] || "সেরা অফার"}{" "}
										<TbTag size={24} className="text-primary mb-1" />
									</p>
									<ul className="coupon-info">
										<li className="relative text-slate-900 pl-4">
											{translations["coupon-discount"] || "কুপন ডিসকাউন্ট"}:{" "}
											<span className="font-semibold text-title text-secondary-700">
												&#2547;
												{getCouponDiscount(
													product?.coupons[0],
													product.new_price
												)}{" "}
												{translations["off!"] || "ছাড়!"}
											</span>
										</li>
										<li className="relative text-slate-900 pl-4 my-2 before:!top-3">
											{translations["coupon-code"] || "কুপন কোড"}:{" "}
											<span className="inline-block text-primary border border-dashed border-primary rounded px-2 py-1 ml-1">
												{product.coupons[0].code}{" "}
												<CopyToClipboard
													text={product.coupons[0].code}
													// onCopy={() => alert("copied")}
												>
													<IoCopy
														size={20}
														className="text-primary mb-1 active:scale-90"
													/>
												</CopyToClipboard>
											</span>
										</li>
										<li className="relative text-slate-900 pl-4 mb-3">
											{translations["applicable"] || "প্রযোজ্য"}:{" "}
											{siteConfig.currency.sign}
											{product.coupons[0].max_discount}{" "}
											{translations["amount-above-order"] ||
												"উপরে অর্ডারে (শুধুমাত্র প্রথম কেনাকাটায়)"}
										</li>
									</ul>
									<Link href="#" className="text-secondary-700 underline">
										{translations["see-all-products-on-offer"] ||
											"অফারের সকল প্রডাক্ট দেখুন"}
									</Link>
								</div>
							) : null}
							<div className="delivery flex flex-col lg:flex-row lg:flex-wrap gap-y-4 lg:gap-y-7 bg-slate-50 border border-slate-200 rounded-lg py-4 mt-7 lg:mt-12">
								<div className="single-info">
									<Image
										src={`/assets/images/icons/inside.png`}
										alt=""
										width={0}
										height={0}
										sizes="100vw"
										className="w-full"
									/>
									<div className="info">
										<p className="text-slate-600">
											{translations["delivery-charge"] || "ডেলিভারি চার্জ"}:{" "}
										</p>
										<p className="text-slate-600">
											{translations["inside-dhaka"] || "ঢাকার ভিতরে"} -{" "}
											{settings?.inside_dhaka_delivery_charges}{" "}
											{translations["currency-locale"] || "টাকা"}
										</p>
									</div>
								</div>
								<div className="single-info border-l border-slate-200">
									<Image
										src={`/assets/images/icons/outside.png`}
										alt=""
										width={0}
										height={0}
										sizes="100vw"
										className="w-full"
									/>
									<div className="info">
										<p className="text-slate-600">
											{translations["delivery-charge"] || "ডেলিভারি চার্জ"}:{" "}
										</p>
										<p className="text-slate-600">
											{translations["outside-dhaka"] || "ঢাকার বাইরে"} -{" "}
											{settings?.outside_dhaka_delivery_charges}{" "}
											{translations["currency-locale"] || "টাকা"}
										</p>
									</div>
								</div>
								<div className="single-info">
									<Image
										src={`/assets/images/icons/COD.png`}
										alt=""
										width={0}
										height={0}
										sizes="100vw"
										className="w-full"
									/>
									<div className="info">
										<p className="text-slate-600">
											{translations["cash-on-delivery-nationwide"] ||
												"সারাদেশ এ ক্যাশ অন ডেলিভারি"}
										</p>
									</div>
								</div>
								<div className="single-info lg:py-2 border-l border-slate-200">
									<Image
										src={`/assets/images/icons/paymnt.png`}
										alt=""
										width={0}
										height={0}
										sizes="100vw"
										className="w-full"
									/>
									<div className="info">
										<p className="text-slate-600">
											{translations["easy-way-to-make-secure-payments"] ||
												"নিরাপদ পেমেন্ট করার সহজ মাধ্যম"}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* tabs-view previous position */}
					<div className="tabs-view">
						{/* tabs view */}
						<div className="sticky top-20 lg:top-0 bg-white z-20 mt-7 lg:mt-12">
							<HorizontalScrollView
								className={
									"product-tab-links  border-b border-slate-200 py-0 justify-evenly lg:w-full lg:pb-4"
								}
							>
								{tabItems.map((item) => (
									<div key={item.id} className="shir">
										<ActiveLink href={item.path}>{item.title}</ActiveLink>
									</div>
								))}
							</HorizontalScrollView>
						</div>
						{/* tabs content  */}
						<div className="px-3 lg:px-0 product-tab-content mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
