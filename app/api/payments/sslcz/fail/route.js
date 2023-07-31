import { redirect } from "next/navigation";

export async function POST(request) {
  // console.log(request);
  console.log("Fail working inside post");

  // const orderId = request.url.split("fail/")[1];
  // console.log(orderId);

  redirect(`/checkout/fail`);
}
