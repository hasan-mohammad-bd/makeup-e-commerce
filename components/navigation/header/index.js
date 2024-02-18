import { fetchData } from "@/lib/fetch-data";
import dynamic from "next/dynamic";
import MainNav from "./main-nav";

const MobileSubMenu = dynamic(() => import("./MobileSubMenu"), {
	ssr: false,
});

const Header = async () => {
	const data = await fetchData({ api: "info/basic" });
	const settings = data?.data || {};
	console.log(settings)

	return (
		<header className="header">
			<MainNav settings={settings} />
			<MobileSubMenu settings={settings} />
		</header>
	);
};

export default Header;
