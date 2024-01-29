import "rc-slider/assets/index.css";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
// ** int18n
// import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

// ** Import Components
// import Footer from "@/components/footer/Footer";
import CheckConnection from "@/components/CheckConnection";
import CartTray from "@/components/elements/CartTray";
import ReduxProvider from "@/store/ReduxProvider";

//** Swiper Slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/grid";

import Cart from "@/components/side-drawers/Cart";
import ProductSelect from "@/components/side-drawers/ProductSelect";
import SizeChangeModal from "@/components/modals/SizeChangeModal";
import PersistUser from "@/components/utility/PersistUser";
import GlobalLoader from "@/components/utility/GlobalLoader";
import ServerDataProvider from "@/components/utility/ServerDataProvider";
import BottomNavigation from "@/components/navigation/bottom-navigation";
import Header from "@/components/navigation/header";
import Footer from "@/components/footer";
import VideoPlayerModal from "@/components/modals/VideoPlayerModal";
import AuthProvider from "@/provider/AuthProvider";
import { Jost } from "next/font/google";
import { fetchData } from "@/lib/fetch-data";

export const generateMetadata = async ({ params }) => {
	let settings = {};
	let appName = "E-commerce app";
	let favicon = "/favicon.ico";
	try {
		settings = await fetchData({ api: `info/basic`, locale: params?.locale });
		appName = settings?.data?.name;
		// favicon = settings?.data?.favicon;
	} catch (error) {
		console.log(error);
		return {
			title: appName,
			applicationName: appName,
		};
	}

	return {
		title: {
			default: `${appName}`,
			template: `%s || ${appName}`,
		},
		description: {
			default: `${settings?.data?.motto}`,
			template: `%s of ${appName}`,
		},
		applicationName: appName,
		// icons: {
		// 	icon: [
		// 		{
		// 			type: "image/x-icon",
		// 			sizes: "64x73",
		// 			url: favicon || `/favicon.ico`,
		// 		},
		// 	],
		// 	// apple: [],
		// },
	};
};

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const locales = ["bn", "en"];
// export function generateStaticParams() {
// 	return locales.map((locale) => ({ locale }));
// }

export default function RootLayout({ children, params }) {
	// const locale = useLocale();
	// // Show a 404 error if the user requests an unknown locale
	// if (params.locale !== locale) {
	// 	notFound();
	// }

	const isValidLocale = locales.some((cur) => cur === params.locale);
	if (!isValidLocale) notFound();

  // unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={jost.variable}>
        <AuthProvider>
          <ReduxProvider>
            <Header />
            <CheckConnection>
              <main>{children}</main>
            </CheckConnection>
            <Footer />
            <BottomNavigation />
            <CartTray />
            <Cart />
            <ProductSelect />
            <SizeChangeModal />
            <VideoPlayerModal />
            <PersistUser />
            <GlobalLoader />
            <ServerDataProvider />
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
