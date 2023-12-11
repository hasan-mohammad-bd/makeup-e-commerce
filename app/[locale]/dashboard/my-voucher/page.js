"use client";
import { useSelector } from "react-redux";

export default function Voucher() {
	const { translations } = useSelector((state) => state.common);

	return (
		<div className="px-10 py-6">
			<div className="mb-6">
				<h2 className="text-slate-900 font-title font-bold text-2xl">
					{translations["voucher"] || "ভাউচার"}
				</h2>
			</div>
		</div>
	);
}
