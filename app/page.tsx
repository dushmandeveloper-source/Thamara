import { Hero } from "@/components/Hero";
import { HomeAboutStats } from "@/components/HomeAboutStats";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutStats />
      <Services />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
