import { fetchData } from "@/utils/fetchData";
import MainNav from "./MainNav";

const Header = async () => {
	const data = await fetchData({ api: "info/basic" });
	const settings = data?.data || {};

	return (
		<header className="header">
			<MainNav settings={settings} />
		</header>
	);
};

export default Header;
