import { fetchData } from "@/lib/fetch-data";
import dynamic from "next/dynamic";

// Components
import Intro from "./_components/intro";
import Brands from "./_components/brands";
import BestSell from "./_components/best-sale";
import VideoBanner from "./_components/VideoBanner";
import FeaturedBanner from "./_components/FeaturedBanner";
import HomeAllProducts from "./_components/HomeAllProducts";
import SectionTitle from "@/components/elements/SectionTitle";
const FlashSale = dynamic(() => import("./_components/flash-sale"), {
  ssr: false,
});

// ** Import Iocns
import { SeeAll } from "@/components/elements/buttons";
import HomeCategoryProducts from "./_components/HomeCategoryProducts";
import { HiArrowLongRight } from "react-icons/hi2";
import PopularCategories from "./_components/popular-categories";
import { Link } from "@/navigation";

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
        <div className="container lg:px-10  2xl:px-0">
          <FeaturedBanner />
        </div>
      </section>

      {/*             <section className="service-features mt-3 lg:mt-5">
        <ServiceFeatures />
      </section> */}

      <section className="lg:pb-14 mt-6 lg:mt-12 relative">
        <div
          className="all-category py-4 lg:py-14 bg-primary"
          style={{
            // backgroundImage: "linear-gradient(90deg, #ffffff 0%, #EE2761 100%)",
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
              <div className="md:hidden">
              <SeeAll
              href="/products"
              buttonText={translations["see-all"]}
              invert={true}
            />
              </div>
          </div>
        </div>
      </section>

      <section className="all-products mt-6 lg:mt-14">
        <div className="container lg:px-10 2xl:px-0">
          <SectionTitle
            title={translations["new-in-shop"]}
            buttonText={translations["see-all"]}
          />
          <HomeAllProducts home={true} translations={translations} />
          {/* <SeeAll href="/products" buttonText={translations["see-all"]} /> */}
        </div>
      </section>
      <section className="mt-6 lg:mt-14">
        <FlashSale translations={translations} />
      </section>

      <section className="best-sell mt-8 lg:mt-0 py-4 lg:pb-14">
        <BestSell translations={translations} />
      </section>

      {/*       <section className="new-products pt-6 lg:pt-14">
                <div className="container">
          <SectionTitle
            title={translations["new-in-shop"]}
            href="/products"
            buttonText={translations["see-all"]}
          />
        </div>
        <NewArrival />
                <div className="container">
          <SeeAll href="/products" buttonText={translations["see-all"]} />
        </div>
      </section> */}

      <section className="mt-6 lg:mt-14">
        <VideoBanner translations={translations} />
      </section>
      <section className="home-category-products mb-10">
        <HomeCategoryProducts />
      </section>

      <section className="all-brands pt-6 pb-8 lg:py-14">
        <div className="lg:container lg:px-10 2xl:px-0">
          <SectionTitle title={translations["our-brands"]} />

          <div className="brands-slider mt-1 lg:mt-6  relative">
            <Brands />
          </div>
        </div>
      </section>
    </>
  );
}
