import ServiceFeatures from "./components/ServiceFeatures";
import Intro from "./components/sliders/Intro";
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
          <ServiceFeatures/>
        </div>
      </section>
      
    </main>
  );
}
