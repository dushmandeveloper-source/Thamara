import type { Metadata } from "next";
import { About } from "@/components/About";
import { DirectorMessage } from "@/components/DirectorMessage";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us — Thamara Foreign Employment Agency",
  description:
    "Learn about Thamara Foreign Employment Agency's mission, vision, and the team helping Sri Lankan candidates find trusted overseas employment.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <DirectorMessage />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
