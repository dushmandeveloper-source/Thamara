import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { About } from "@/components/About";
import { DirectorMessage } from "@/components/DirectorMessage";
import { Countries } from "@/components/Countries";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { ApplyForm } from "@/components/ApplyForm";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <DirectorMessage />
      <Countries />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ApplyForm />
      <Contact />
    </>
  );
}
