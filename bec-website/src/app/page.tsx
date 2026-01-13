import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { AboutSection } from "@/components/sections/about-section";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <AboutSection />
      <Services />
      <WhyUs />
      <CTA />
    </>
  );
}

