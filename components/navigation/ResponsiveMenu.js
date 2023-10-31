import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const MegaMenu = dynamic(() => import("./MegaMenu"), {
	ssr: false,
	// loading: () => (
	// 	<p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
	// ),
});

const ResponsiveMenu = ({ settings }) => {
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
			<MegaMenu settings={settings} />
		</div>
	);
};

export default ResponsiveMenu;
