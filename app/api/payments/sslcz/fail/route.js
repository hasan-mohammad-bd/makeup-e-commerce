import { redirect } from "next/navigation";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("order");
  redirect(`/checkout/fail/${orderId}`);
}
