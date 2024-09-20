import CTA from "./components/cta";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto px-5 lg:container lg:px-20">
        <Features />
        <FAQ />
        <Pricing />
        <CTA />
      </div>
    </>
  );
}
