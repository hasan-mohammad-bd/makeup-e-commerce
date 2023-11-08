import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { postData } from "@/lib/post-data";
import { handleOrderSSLPay } from "./ssl-payment";

export async function POST(request) {
	const newOrder = await request.json();

	const headersList = headers();
	const bearerToken = headersList.get("authorization");
	// console.log(bearerToken);

	try {
		const order = await postData(
			{ api: "checkout", authorization: bearerToken },
			newOrder
		);
		if (order?.status === false) {
			console.log(order, "order creation response in ssl");
			return NextResponse.error(
				{ message: "Order Creation failed" },
				{ status: 500 }
			);
		}
		// console.log(order);
		//Initializing SSL payment using order data
		const sslResponse = await handleOrderSSLPay(order, bearerToken);

		return NextResponse.json(
			{
				GatewayPageURL: sslResponse.GatewayPageURL,
				status: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("An error occurred:", error);
		return NextResponse.error(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
