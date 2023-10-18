import { fetchData } from "@/utils/fetchData";
import MainNav from "./MainNav";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = async () => {
	const [settingsRes] = await Promise.allSettled([
		fetchData({ api: `info/basic` }),
	]);

	const settings =
		settingsRes.status === "fulfilled" ? settingsRes.value?.data || {} : {};

	return (
		<header className="header mb-16 lg:mb-0">
			<MainNav>
				<ResponsiveMenu settings={settings} />
			</MainNav>
		</header>
	);
};

export default Header;
