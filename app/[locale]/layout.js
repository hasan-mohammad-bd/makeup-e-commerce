import "rc-slider/assets/index.css";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
// ** int18n
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

// ** Import Components
import Footer from "@/components/footer/Footer";
import CheckConnection from "@/components/CheckConnection";
import Header from "@/components/navbar/Header";
import NavItems from "@/components/navbar/NavItems";
import CartTray from "@/components/elements/CartTray";
import ReduxProvider from "@/store/ReduxProvider";

//** Swiper Slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Cart from "@/components/side-drawers/Cart";
import ProductSelect from "@/components/side-drawers/ProductSelect";
import PersistUser from "@/components/utility/PersistUser";
import GlobalLoader from "@/components/utility/GlobalLoader";
import ServerDataProvider from "@/components/utility/ServerDataProvider";

export const metadata = {
  title: "Sotota Stall",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ReduxProvider>
          <Header locale={locale}>
            <NavItems />
          </Header>
          <CheckConnection>{children}</CheckConnection>
          <Footer />
          <CartTray />
          <Cart />
          <ProductSelect />
          <PersistUser />
          <GlobalLoader />
          <ServerDataProvider />
        </ReduxProvider>
      </body>
    </html>
  );
}
