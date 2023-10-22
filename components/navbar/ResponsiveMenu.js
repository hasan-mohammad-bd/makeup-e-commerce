import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import dynamic from "next/dynamic";
const MegaMenu = dynamic(() => import("./MegaMenu"), {
	ssr: false,
	// loading: () => (
	// 	<p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
	// ),
});

const ResponsiveMenu = async ({ settings }) => {
	// const { data: settings = {} } = await fetchData({ api: "info/basic" });
	// const { data: categories = [] } = await fetchData({ api: "categories" });

	const [categoriesRes] = await Promise.allSettled([
		fetchData({ api: "popular-categories?no_child=1" }),
	]);

	const categories =
		categoriesRes.status === "fulfilled" ? categoriesRes.value?.data || [] : [];

	return (
		<div className="header-left flex items-center gap-4">
			<Link href="/" className="logo">
				<Image
					src={settings?.logo}
					alt={settings?.name}
					width={200}
					height={48}
					className="h-[48px] min-h-[48px] py-2 object-contain object-left"
				/>
			</Link>
			<MegaMenu categories={categories} settings={settings} />
		</div>
	);
};

export default ResponsiveMenu;
