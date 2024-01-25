import { Link } from "@/navigation";
import Image from "next/image";
import { fetchData } from "@/lib/fetch-data";
import dynamic from "next/dynamic";

// Components
import Intro from "./_components/intro";
import Brands from "./_components/brands";
import BestSell from "./_components/best-sale";
import NewArrival from "./_components/new-arrival";
import VideoBanner from "./_components/VideoBanner";
import FeaturedBanner from "./_components/FeaturedBanner";
import HomeAllProducts from "./_components/HomeAllProducts";
import ServiceFeatures from "./_components/service-features";
import PopularCategories from "./_components/popular-categories";
import SectionTitle from "@/components/elements/SectionTitle";
const FlashSale = dynamic(() => import("./_components/flash-sale"), {
  ssr: false,
});

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";
import { SeeAll } from "@/components/elements/buttons";

export default async function Home() {
  const data = await fetchData({ api: "translations" });
  const translations = data?.data || {};
  // console.log(translations);

  return (
    <>
      <section className="banner">
        <div className="bg-white">
          <Intro />
        </div>
      </section>
      <section className="banners py-6 lg:py-14">
        <div className="container">
          <FeaturedBanner />
        </div>
      </section>

      {/*       <section className="service-features mt-3 lg:mt-5">
        <ServiceFeatures />
      </section> */}

      {/* 

          <section className="lg:pb-14 mt-6 lg:mt-12 relative">
        <div
          className="all-category py-4 lg:py-14"
          style={{
            backgroundImage: "linear-gradient(90deg, #00B7C9 0%, #00C999 100%)",
          }}
        >
          <div className="container">
            <div className="sec-heading w-full flex justify-between items-center">
              <h2 className="sec-title !text-white capitalize">
                {translations["popular-category"] || "জনপ্রিয় ক্যাটাগর‍ি"}
              </h2>
              <Link
                href="/categories"
                className="all-btn !text-white capitalize !hidden lg:!block"
              >
                {translations["see-all"] || "সবগুলো  দেখুন"}{" "}
                <HiArrowLongRight size={24} />{" "}
              </Link>
            </div>

            <div className="mt-6 lg:mt-10">
              <PopularCategories />
            </div>
            <SeeAll
              href="/products"
              buttonText={translations["see-all"]}
              invert={true}
            />
          </div>
        </div>
      </section>  */}

      <section className="all-products mt-6 lg:mt-14">
        <div className="container">
          {/*           <SectionTitle
            title={translations["new-in-shop"]}
            buttonText={translations["see-all"]}
          /> */}
          <HomeAllProducts translations={translations} />
          <SeeAll href="/products" buttonText={translations["see-all"]} />
        </div>
      </section>
      <section className="mt-6 lg:mt-14">
        <FlashSale translations={translations} />
      </section>

      <section className="best-sell bg-slate-50 mt-8 lg:mt-0 py-4 md:py-14 lg:pb-14">
        <BestSell translations={translations} />
      </section>

      <section className="new-products pt-6 lg:pt-14">
        {/*         <div className="container">
          <SectionTitle
            title={translations["new-in-shop"]}
            href="/products"
            buttonText={translations["see-all"]}
          />
        </div>
        <NewArrival /> */}
        <div className="container">
          <SeeAll href="/products" buttonText={translations["see-all"]} />
        </div>
      </section>

      <section className="mt-6 lg:mt-14">
        <VideoBanner translations={translations} />
      </section>

      <section className="all-brands pt-6 pb-8 lg:py-14">
        <div className="lg:container">
          <SectionTitle title={translations["our-brands"]} />
          <div className="brands-slider mt-1 lg:mt-6  relative">
            <Brands />
          </div>
        </div>
      </section>
    </>
  );
}
