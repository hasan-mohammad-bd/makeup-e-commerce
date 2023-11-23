import ViewHTML from "@/components/elements/ViewHTML";
import { fetchData } from "@/lib/fetch-data";
import { BiPlus } from "react-icons/bi";

const Specifications = async ({ params }) => {
	const { slug } = params;
	const [productRes, tranRes] = await Promise.allSettled([
		fetchData({ api: `products/${slug}` }),
		fetchData({ api: `translations` }),
	]);

	const product =
		productRes.status === "fulfilled" ? productRes.value?.data || [] : [];
	const translations =
		tranRes.status === "fulfilled" ? tranRes.value?.data || {} : {};
	return (
		<div className="question-answer">
			<h4 className="text-2xl font-bold font-title text-slate-900">
				{translations["specifications"] || "স্পেসিফিকেশন"}:
			</h4>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 mt-3 overflow-x-auto">
				<ViewHTML htmlText={product?.specification} />
			</div>
		</div>
	);
};

export default Specifications;
