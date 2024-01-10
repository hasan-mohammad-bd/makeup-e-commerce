import React from "react";
import OrderStep from "./OrderStep";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

export default function OrderTracking({ orderData, isLoading, translations }) {
  const { saleStatus: saleStatus } = orderData || {};
  return (
    <div className="bg-white rounded-lg min-h-[300px] p-5">
      <h3 className="text-base/[22px] lg:text-lg/[26px] font-semibold font-title capitalize">
        {translations["parcel-tracking"] || "পার্সেল ট্র্যাকিং"}
      </h3>
      <div className="pl-2 pt-4">
        {isLoading ? (
          <ItemsListLoader numItems={3} noImage={true} viewBoxWidth={900} />
        ) : (
          <ol class="relative text-slate-600 capitalize">
            <OrderStep
              date={saleStatus?.Complete?.created_at}
              title={translations["done"] || "সম্পন্ন হয়েছে"}
              message={
                translations["received-product"] ||
                "You have received your product"
              }
              isComplete={saleStatus?.Complete}
            />
            <OrderStep
              date={saleStatus?.Delivery?.created_at}
              title={translations["on-delivery"] || "ডেলিভারিতে"}
              message={
                translations["product-for-delivery"] ||
                "আপনার পণ্য ডেলিভারির জন্য দেওয়া হয়েছে"
              }
              isComplete={saleStatus?.Delivery}
            />
            <OrderStep
              date={saleStatus?.PackingCompleat?.created_at}
              title={translations["packing-done"] || "প্যাকিং সম্পন্ন"}
              message={
                translations["packing-done"] ||
                "আপনার প্রডাক্টি প্যাক করা হয়েছে"
              }
              isComplete={saleStatus?.PackingCompleat}
            />
            <OrderStep
              date={saleStatus?.Packing?.created_at}
              title={translations["packing"] || "প্যাকিং"}
              message={
                translations["product-packing"] ||
                "আমরা আপনার প্রডাক্টি প্যাক করছি"
              }
              isComplete={saleStatus?.Packing}
            />
            <OrderStep
              date={saleStatus?.Confirm?.created_at}
              title={translations["confirmed"] || "নিশ্চিত"}
              message={
                translations["order-confirmed"] ||
                "আপনার অর্ডার নিশ্চিত করা হয়েছে"
              }
              isComplete={saleStatus?.Confirm}
            />
            <OrderStep
              date={saleStatus?.Processing?.created_at}
              title={translations["processing"] || "প্রসেসিং"}
              message={
                translations["order-received"] ||
                "আপনার অর্ডার পেয়েছি, আমাদের প্রতিনিধি শীঘ্রই অর্ডার নিশ্চিত করবে"
              }
              isComplete={saleStatus?.Processing}
            />
            <OrderStep
              date={saleStatus?.Pending?.created_at}
              title={translations["order-placed"] || "অর্ডার প্লেসড"}
              message={`${
                translations["order-successfully-placed"] ||
                "আপনার অর্ডার সফলভাবে সততা স্টোরে এ প্লেসড হয়েছে৷ আপনার অর্ডার আইডি"
              } #${orderData?.sale?.invoice_no}`}
              isComplete={saleStatus?.Pending}
            />
          </ol>
        )}
      </div>
    </div>
  );
}
