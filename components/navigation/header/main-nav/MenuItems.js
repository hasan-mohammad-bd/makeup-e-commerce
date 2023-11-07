import { useMediaQuery } from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
const MegaMenu = dynamic(() => import("./MegaMenu"), {
	ssr: false,
});

const MenuItems = ({ settings }) => {
	const matches = useMediaQuery("(max-width: 768px)");
	return <> {!matches && <MegaMenu settings={settings} />}</>;
};

export default MenuItems;
