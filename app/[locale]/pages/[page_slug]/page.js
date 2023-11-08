import Link from "next/link";
import { fetchData } from "@/lib/fetch-data";

// ** Imoprt icons
import ViewHTML from "@/components/elements/ViewHTML";
import { notFound } from "next/navigation";
import CallInquiry from "@/components/elements/CallInquiry";

export const metadata = {
	title: "Sotota Stall || Booking Policy",
};

const DynamicPage = async ({ params }) => {
	const { page_slug } = params;

	const [pageRes, translationRes] = await Promise.allSettled([
		fetchData({ api: `pages/${page_slug}` }),
		fetchData({ api: `translations` }),
	]);

	const page = pageRes.status === "fulfilled" ? pageRes.value?.data || {} : {};
	const translations =
		translationRes.status === "fulfilled"
			? translationRes.value?.data || {}
			: {};
	if (!page.slug) return notFound();

	// console.log(page);

	return (
		<>
			<div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200 hidden lg:block">
				<div className="container">
					<div>
						<Link
							href={`/`}
							className="text-base text-slate-600 hover:text-primary"
						>
							{translations["home"] || "হোম"}
						</Link>
						<Link
							href={`pages/${page.slug}`}
							className="text-base text-slate-900 hover:text-primary"
						>
							{page.title}
						</Link>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="mb-4">
					<ViewHTML htmlText={page.description} />
				</div>
				<div className="contact border-t border-slate-200 py-8 hidden lg:block">
					<CallInquiry />
				</div>
			</div>
		</>
	);
};

export default DynamicPage;
