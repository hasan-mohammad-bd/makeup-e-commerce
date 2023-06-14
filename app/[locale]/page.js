import Image from "next/image";

import ServiceFeatures from "@/components/ServiceFeatures";
import Intro from "@/components/Intro";
import FlashSale from "@/components/FlashSale";
import BestSell from "@/components/BestSell";
import AllProducts from "@/components/AllProducts";
import NewArrival from "@/components/NewArrival";
import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Link from "next/link";
import Timer from "@/components/elements/Timer";
import VideoBanner from "@/components/elements/VideoBanner";
import Banner1 from "@/components/Banner1";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className="container">
          <Intro />
        </div>
      </section>

      <section className="service-features">
        <div className="container">
          <ServiceFeatures />
        </div>
      </section>

      <section className="flash-sale mt-28 mb-12">
        <div className="container relative">
          <div className="sec-heading absolute top-[-30px] left-0 w-full flex justify-between items-center px-8">
            <div className="flex gap-4 bg-white">
              <div>
                <h2 className="sec-title">ফ্ল্যাশ সেল চলছে</h2>
                <p>অফার চলবে আর মাত্র</p>
              </div>
              <Timer targetDate="2023-7-31" />
            </div>
            <Link href="/products/flash-sale" className="all-btn bg-white">
              সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
            </Link>
          </div>

          <div className="flashSale-slider border border-primary rounded-2xl p-6 pt-16">
            <FlashSale />
          </div>
        </div>
      </section>

      <section
        className="all-category py-14"
        style={{
          backgroundImage: "linear-gradient(90deg, #00B7C9 0%, #00C999 100%)",
        }}
      >
        <div className="container">
          <div className="sec-heading w-full flex justify-between items-center">
            <h2 className="sec-title !text-white">জনপ্রিয় ক্যাটাগর‍ি</h2>
            <Link href="/categories" className="all-btn !text-white">
              সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
            </Link>
          </div>

          <div className="category-slider mt-12  relative">
            <Category />
          </div>
        </div>
      </section>

      <section className="best-sell bg-slate-50 py-14">
        <div className="container">
          <div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
            <h2 className="sec-title">
              <Image
                src={`/assets/images/icons/fire-1.png`}
                alt="Fire"
                width={32}
                height={32}
                className="inline-block mr-1"
              />
              বেস্ট সেলিং প্রডাক্ট
            </h2>
            <Link href="/products" className="all-btn">
              সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
            </Link>
          </div>

          <div className="bestSell-slider mt-6 relative">
            <BestSell />
          </div>
        </div>
      </section>

      <section className="banners pt-14">
        <div className="container">
          <Banner1 />
        </div>
      </section>

      <section className="all-products py-14">
        <div className="container">
          <div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
            <h2 className="sec-title">সকল প্রডাক্ট</h2>
            <Link href="/products" className="all-btn">
              সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
            </Link>
          </div>

          <div className="bestSell-slider mt-6">
            <AllProducts />
          </div>
        </div>
      </section>

      <section className="new-products py-14">
        <div className="container">
          <div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
            <h2 className="sec-title">শপে নতুন এসেছে</h2>
            <Link href="/products" className="all-btn">
              সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
            </Link>
          </div>

          <div className="new-slider mt-6  relative">
            <NewArrival />
          </div>
        </div>
      </section>

      <VideoBanner />

      <section className="all-brands py-14">
        <div className="container">
          <div className="sec-heading border-b border-slate-200 pb-3">
            <h2 className="sec-title">আমাদের ব্র্যান্ড সমূহ</h2>
          </div>

          <div className="brands-slider mt-6  relative">
            <Brands />
          </div>
        </div>
      </section>
    </main>
  );
}
