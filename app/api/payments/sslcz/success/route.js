import { postData } from "@/utils/postData";
import { redirect } from "next/navigation";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("order");
  const tranId = searchParams.get("tran");
  const paidAmount = searchParams.get("amount");
  const bearerToken = searchParams.get("auth");

  const paymentData = {
    order_id: orderId,
    status: "successful",
    amount: paidAmount,
    payment_method: "sslcommerz",
    transaction_id: tranId,
  };

  //Updating payment info of order
  const result = await postData(
    { api: "online-payment-status-change", authorization: bearerToken },
    paymentData
  );

  console.log(result, "from pay success update");

  redirect(`/checkout/success/${orderId}`);
}
