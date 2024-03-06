"use client";
import React from "react";
import { Link } from "@/navigation";
import { useDispatch, useSelector } from "react-redux";
import ArticleLoader from "@/components/elements/loaders/ArticleLoader";
import { useGetOrderByIdQuery } from "@/store/api/orderAPI";
import { ImWarning } from "react-icons/im";
import handleSSLOrderPayLater from "@/lib/ssl-pay";
import { setGlobalLoader } from "@/store/slices/commonSlice";
import { siteConfig } from "@/config/site";

const PaymentFail = ({ params }) => {
	const { translations } = useSelector((state) => state.common);
	const dispatch = useDispatch();
	const { order_id, locale } = params;
	const { data: orderData, isLoading } = useGetOrderByIdQuery({
		order_id,
		locale,
	});
	const order = orderData?.sale || null;

	return (
		<div className="container min-h-screen">
			<div className="w-full lg:w-[540px] mx-auto my-12 py-6 lg:p-5 rounded-lg font-title">
				{!isLoading && (
					<div className="text-center">
						<div className="flex-center my-3">
							<div className="p-3 bg-red-100 rounded-[100%]">
								<div className="text-red-500 rounded-[100%] p-5 w-20">
									<ImWarning size={36} />
								</div>
							</div>
						</div>

						<h1 className="text-red-500 text-2xl lg:text-3xl mt-4 lg:mt-8 font-bold">
							{translations["payment-incomplete"] || "payment incomplete"}
						</h1>
						<h3 className="text-slate-600 mt-2 text-base lg:text-xl">
							{translations["payment-fail-msg"] ||
								"Your order has been confirmed. <br /> but somehow the payment has failed."}
						</h3>
					</div>
				)}

				{isLoading ? (
					<ArticleLoader />
				) : (
					<>
						<div className="order-info bg-slate-100 p-4 my-4 text-center text-slate-600">
							<p>
								{translations["your-order-id"] || "Your Order ID"}: #
								{order?.invoice_no}
							</p>
							<p>
								{translations["amount-payable"] || "Amount Payable"}:{" "}
								{siteConfig.currency.sign}
								{order?.due_amount}
							</p>
						</div>
						<div className="text-center text-slate-600 text-base lg:text-xl">
							<h3 className="md:w-3/4 mx-auto">
								{translations["payment-fail-info"] ||
									"Press the button to complete payment process. <br /> or, of the order"}{" "}
								<Link
									href={`/dashboard/my-orders/details/${order_id}`}
									className="text-secondary-700 active:scale-95 underline"
								>
									{translations["see-details"] || "See Details"}
								</Link>
							</h3>
						</div>
						<div className="order-info">
							<div className="action my-5 flex justify-center">
								<button
									onClick={() =>
										handleSSLOrderPayLater(order?.id, (loading) =>
											dispatch(setGlobalLoader(loading))
										)
									}
									className="bg-primary py-3 px-6 text-white rounded-lg text-center active:scale-95"
								>
									{translations["make-payment"] || "Make Payment"}
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default PaymentFail;
