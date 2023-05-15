import ServiceFeatures from "./components/ServiceFeatures";
import Intro from "./elements/sliders/Intro";
import FlashSale from "./components/FlashSale";
import Link from "next/link";

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

      <section className="flash-sale">
        <div className="container">

          <div className="sec-heading">
            <div>
              <h2 className="sec-title">ফ্ল্যাশ সেল চলছে</h2>
              <p>অফার চলবে আর মাত্র</p>
            </div>
            <Link href="/products" className="all-btn">সবগুলো  দেখুন</Link>
          </div>

          <div className="flashSale-slider">
            <FlashSale/>
          </div>

        </div>
      </section>

    </main>

  );
}
