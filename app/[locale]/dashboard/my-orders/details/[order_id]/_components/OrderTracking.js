import React from "react";
import OrderStep from "./OrderStep";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

export default function OrderTracking({ orderData, isLoading, translations }) {
	const { saleStatus } = orderData || {};
	return (
		<div className="bg-white rounded-lg min-h-[300px] p-5">
			<h3 className="text-base/[22px] lg:text-lg/[26px] font-semibold font-title capitalize">
				{translations["parcel-tracking"] || "Parcel Tracking"}
			</h3>
			<div className="pl-2 pt-4">
				{isLoading ? (
					<ItemsListLoader numItems={3} noImage={true} viewBoxWidth={900} />
				) : (
					<ol class="relative text-slate-600 capitalize">
						<OrderStep
							date={saleStatus?.Complete?.created_at}
							title={translations["done"] || "Done"}
							message={
								translations["received-product"] ||
								"You have received your product"
							}
							isComplete={saleStatus?.Complete}
						/>
						<OrderStep
							date={saleStatus?.Delivery?.created_at}
							title={translations["on-delivery"] || "On Delivery"}
							message={
								translations["product-for-delivery"] ||
								"Your product is on delivery"
							}
							isComplete={saleStatus?.Delivery}
						/>
						<OrderStep
							date={saleStatus?.PackingCompleat?.created_at}
							title={translations["packing-done"] || "Packing Done"}
							message={
								translations["packing-done"] ||
								"Your product has been packed"
							}
							isComplete={saleStatus?.PackingCompleat}
						/>
						<OrderStep
							date={saleStatus?.Packing?.created_at}
							title={translations["packing"] || "Packing"}
							message={
								translations["product-packing"] ||
								"Your product is being packed"
							}
							isComplete={saleStatus?.Packing}
						/>
						<OrderStep
							date={saleStatus?.Confirm?.created_at}
							title={translations["confirmed"] || "Confirmed"}
							message={
								translations["order-confirmed"] ||
								"Your order has been confirmed"
							}
							isComplete={saleStatus?.Confirm}
						/>
						<OrderStep
							date={saleStatus?.Processing?.created_at}
							title={translations["processing"] || "Processing"}
							message={
								translations["order-received"] ||
								"We received your order"
							}
							isComplete={saleStatus?.Processing}
						/>
						<OrderStep
							date={saleStatus?.Pending?.created_at}
							title={translations["order-placed"] || "Order Placed"}
							message={`${
								translations["order-successfully-placed"] ||
								"Your order has been successfully placed, your invoice number is"
							} #${orderData?.sale?.invoice_no}`}
							isComplete={saleStatus?.Pending}
						/>
					</ol>
				)}
			</div>
		</div>
	);
}
