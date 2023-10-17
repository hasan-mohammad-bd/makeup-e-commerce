import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import MegaMenu from "./MegaMenu";

const ResponsiveMenu = async ({ settings }) => {
	// const { data: settings = {} } = await fetchData({ api: "info/basic" });
	// const { data: categories = [] } = await fetchData({ api: "categories" });

	const [categoriesRes] = await Promise.allSettled([
		fetchData({ api: "categories?no_child=1" }),
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
					className="h-full max-h-[48px] py-2 object-contain object-left lg:w-auto"
				/>
			</Link>
			<MegaMenu categories={categories} settings={settings} />
		</div>
	);
};

export default ResponsiveMenu;
