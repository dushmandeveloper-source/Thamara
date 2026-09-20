import type { Metadata } from "next";
import { ServicesList } from "@/components/ServicesList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Services — Thamara Foreign Employment Agency",
  description:
    "Documentation assistance, interview preparation, pre-departure guidance, and full foreign employment support for candidates seeking work overseas.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesList />
      <ProcessSteps />
      <Faq />
    </>
  );
}
