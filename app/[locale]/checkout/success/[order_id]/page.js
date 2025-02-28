"use client";
import { Link } from "@/navigation";
import React from "react";
import dynamic from "next/dynamic";
import { FaCheck } from "react-icons/fa";
import { useGetOrderByIdQuery } from "@/store/api/orderAPI";
import ArticleLoader from "@/components/elements/loaders/ArticleLoader";
import { getFormattedDate } from "@/utils/format-date";
const Lottie = dynamic(() => import("lottie-react"));
import confetti from "@/public/assets/lottie/confetti.json";
import { useSelector } from "react-redux";
import { siteConfig } from "@/config/site";

const OrderSuccess = ({ params }) => {
	const { translations } = useSelector((state) => state.common);
	const { order_id, locale } = params;
	const { data: orderData, isLoading } = useGetOrderByIdQuery({
		order_id,
		locale,
	});
	const order = orderData?.sale || null;

	return (
		<div className="container min-h-screen">
			<div className="w-full lg:w-[540px] mx-auto my-6 lg:my-12 py-6 lg:p-5 rounded-lg">
				{!isLoading && (
					<div className="text-center font-bold">
						<div className="relative flex-center my-4">
							<div className="p-3 bg-green-100 rounded-[100%]">
								<div className="bg-green-500 rounded-[100%] p-5 w-20">
									<FaCheck className="text-white" size={36} />
								</div>
							</div>
							<div className="absolute">
								<Lottie animationData={confetti} loop={true} />
							</div>
						</div>
						<h1 className="text-green-500 text-2xl lg:text-3xl font-title">
							{translations["order-success-msg"] ||
								"Order Placed Successfully"}
						</h1>
						<h3 className="text-slate-800 text-base lg:text-2xl my-3">
							{translations["order-thank-msg"] ||
								"Thank you for your order"}
						</h3>
					</div>
				)}
				{isLoading ? (
					<ArticleLoader />
				) : (
					<div className="order-info">
						<div className="order-info bg-slate-50 p-4 my-4 rounded-lg">
							<div className="flex-between my-2">
								<p>{translations["order-id"] || "Order ID"}</p>
								<p>{order?.invoice_no}</p>
							</div>
							<div className="flex-between my-2">
								<p>{translations["order-date"] || "Order Date"}</p>
								<p>{getFormattedDate(order?.sale_date)}</p>
							</div>
							<div className="flex-between my-2">
								<p>{translations["total-amount"] || "Total Amount"}</p>
								<p>
									{siteConfig.currency.sign} {order?.total_amount}
								</p>
							</div>
							<div className="border-b border-slate-700 my-2"></div>
							<div className="flex-between my-2 font-bold">
								<p>
									{translations["amount-payable"] || "Amount Payable"}{" "}
									<span className="bg-red-100 px-2 rounded-lg text-red-500">
										{translations["due"] || "Due"}
									</span>
								</p>
								<p>
									{siteConfig.currency.sign} {order?.due_amount}
								</p>
							</div>
						</div>
						<div className="actions my-6 flex gap-3 lg:gap-4 justify-between items-center">
							<Link
								href={`/dashboard/my-orders/details/${order_id}`}
								className="bg-secondary-700 p-3 w-full text-white rounded-lg text-center active:scale-95"
							>
								{translations["track-order"] || "Track Order"}
							</Link>
							<Link
								href={"/products"}
								className="bg-primary p-3 w-full text-white rounded-lg text-center active:scale-95"
							>
								{translations["shop-more"] || "Shop More"}
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default OrderSuccess;
