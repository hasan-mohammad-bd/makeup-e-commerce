import ServiceFeatures from "./components/ServiceFeatures";
import Intro from "./elements/sliders/Intro";
import FlashSale from "./components/FlashSale";
import Link from "next/link";
import Timer from "./elements/Timer";

// ** Import Iocns
import { HiArrowLongRight } from "react-icons/hi2"

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

      <section className="flash-sale mt-28">
        <div className="container relative">

          <div className="sec-heading absolute top-[-30px] left-0 w-full flex justify-between items-center px-8">
            <div className="flex gap-4 bg-white">
              <div>
                <h2 className="sec-title">ফ্ল্যাশ সেল চলছে</h2>
                <p>অফার চলবে আর মাত্র</p>
              </div>
              <Timer targetDate="2023-5-20"/>
            </div>
            <Link href="/products" className="all-btn bg-white">সবগুলো  দেখুন <HiArrowLongRight size={24}/> </Link>
          </div>

          <div className="flashSale-slider border border-primary rounded-2xl p-6 pt-16">
            <FlashSale/>
          </div>

        </div>
      </section>

    </main>

  );
}
