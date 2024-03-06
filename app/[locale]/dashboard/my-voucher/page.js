"use client";
import { useSelector } from "react-redux";
import NestedPageTitle from "../_components/NestedPageTitle";

export default function Voucher() {
	const { translations } = useSelector((state) => state.common);

	return (
		<div className="mb-4 lg:mb-14">
			<NestedPageTitle
				title={translations["voucher"] || "Voucher"}
				href={"/dashboard"}
			/>
		</div>
	);
}
