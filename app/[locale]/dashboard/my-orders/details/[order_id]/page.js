"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderTracking from "./_components/OrderTracking";
import SaleProductCard from "./_components/SaleProductCard";
import { useGetOrderByIdQuery } from "@/store/api/orderAPI";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import { getFormattedDate } from "@/utils/format-date";
import { setGlobalLoader } from "@/store/slices/commonSlice";
import handleSSLOrderPayLater from "@/lib/ssl-pay";

import { HiArrowLongLeft } from "react-icons/hi2";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import NestedPageTitle from "../../../_components/NestedPageTitle";

const OrderDetail = ({ params }) => {
	const { order_id, locale } = params;
	const { translations } = useSelector((state) => state.common);
	const { data: orderData, isLoading } = useGetOrderByIdQuery({
		order_id,
		locale,
	});
	const dispatch = useDispatch();
	const sale = orderData?.sale || {};
	const saleProducts = orderData?.saleProducts || [];

	return (
		<div className="mb-4 lg:mb-14">
			<NestedPageTitle
				title={translations["order-details"] || "অর্ডারের বিস্তারিত"}
				href={"/dashboard/my-orders"}
				buttonText={translations["go-back"] || "ফিরে যান"}
			/>
			<div className="content lg:mx-10 bg-slate-200 text-slate-700 mt-3 rounded-lg p-3 lg:p-5">
				<OrderTracking
					orderData={orderData}
					isLoading={isLoading}
					translations={translations}
				/>
				<div className="bg-white rounded-lg p-3 lg:p-4 mt-2 lg:mt-5">
					<h3 className="text-base/[22px] lg:text-lg/[26px] font-semibold font-title mb-4">
						{translations["products"] || "প্রডাক্টগুলো"}
					</h3>
					{isLoading ? (
						<ItemsListLoader numItems={2} viewBoxWidth={900} />
					) : (
						saleProducts.map((saleProduct, index) => (
							<SaleProductCard key={index} saleProduct={saleProduct} />
						))
					)}
				</div>
				<div className="bg-white rounded-lg p-3 lg:p-4 mt-2 lg:mt-5">
					<h3 className="text-base/[22px] lg:text-lg/[26px] font-semibold font-title mb-4">
						{translations["shipping-address"] || "শিপিং এড্রেস"}
					</h3>
					{isLoading ? (
						<ItemsListLoader numItems={1} viewBoxWidth={900} />
					) : (
						<div className="flex gap-6">
							<div className="bg-slate-100 rounded-xl flex justify-center items-center p-5">
								<Image
									src={"/assets/icons/location/located-pin.svg"}
									height={36}
									width={36}
									className="h-9 w-9"
									alt="location-icon"
								/>
							</div>
							<div>
								<h4 className="font-bold">{sale?.shipping?.name}</h4>
								<p>{sale?.shipping?.phone}</p>
								<p>{sale?.shipping?.address}</p>
							</div>
						</div>
					)}
				</div>
				<div className="p-4 bg-white rounded-lg mt-2 lg:mt-5">
					<h3 className="text-base/[22px] lg:text-lg/[26px] font-semibold font-title mb-4">
						{translations["payment-details"] || "পেমেন্টের বিবরণ"}
					</h3>
					{isLoading ? (
						<ItemsListLoader numItems={2} noImage={true} viewBoxWidth={900} />
					) : (
						<>
							<div className="text-sm lg:text-base font-normal">
								<div className="flex-between my-2">
									<p>{translations["order-id"] || "অর্ডার আইডি"}</p>
									<p>{sale.invoice_no}</p>
								</div>
								<div className="flex-between my-2">
									<p>{translations["order-date"] || "অর্ডারের তারিখ"}</p>
									<p>{getFormattedDate(sale.sale_date)}</p>
								</div>

								<div className="flex-between my-2">
									<p>{translations["total"] || "সর্বমোট"}</p>
									<p>
										{siteConfig.currency.sign}
										{sale.sub_total}
									</p>
								</div>
								<div className="flex-between my-2">
									<p>
										{translations["discount-amount"] || "ডিসকাউন্ট পাচ্ছেন"}
									</p>
									<p className="text-red-500">
										-{siteConfig.currency.sign}
										{sale.discount_amount}
									</p>
								</div>
								<div className="border-b border-slate-300 my-2"></div>
								<div className="flex-between my-2">
									<p>{translations["total-with-discount"] || "মোট পরিমান"}</p>
									<p>
										{siteConfig.currency.sign}
										{sale.sub_total - sale.discount_amount}
									</p>
								</div>
								<div className="flex-between my-2">
									<p>{translations["delivery-charge"] || "ডেলিভারি চার্জ"}</p>
									<p>
										{siteConfig.currency.sign}
										{sale.shipping?.delivery_charge}
									</p>
								</div>
								<div className="border-b border-slate-900 my-2"></div>
								<div className="flex-between my-2 font-bold">
									<p>
										{translations["amount-payable"] || "প্রদেয় পরিমান"}{" "}
										<span
											className={`px-2 rounded-lg ${
												sale.due_amount > 0
													? "text-red-500 bg-red-100"
													: "text-green-500 bg-green-100"
											}`}
										>
											{sale.due_amount > 0
												? sale.payment_type !== "COD"
													? translations["payment-incomplete"] ||
													  "পেমেন্ট অসম্পূর্ণ"
													: translations["due"] || "বাকি"
												: translations["paid"] || "পরিশোধ"}
										</span>
									</p>
									<p>
										{siteConfig.currency.sign}
										{sale.due_amount}
									</p>
								</div>
							</div>
							{sale.due_amount > 0 && sale.payment_type !== "COD" ? (
								<button
									onClick={() =>
										handleSSLOrderPayLater(sale.id, (loading) =>
											dispatch(setGlobalLoader(loading))
										)
									}
									className="w-full bg-primary py-2 px-4 mt-3 lg:mt-5 text-white rounded-lg text-center active:scale-95"
								>
									{translations["make-payment"] || "পেমেন্ট করুন"}
								</button>
							) : (
								<a
									target="_blank"
									href={`${process.env.serverBaseUrl}/in/${sale.customer.id}/${sale.id}/sale`}
									className="bg-slate-200 p-3 block text-center hover:text-primary w-full  mt-3 lg:mt-5 rounded-lg"
								>
									<FaCloudDownloadAlt size={24} className="mr-2" />
									{translations["download-invoice"] || "ইনভয়েস ডাউনলোড করুন"}
								</a>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default OrderDetail;
