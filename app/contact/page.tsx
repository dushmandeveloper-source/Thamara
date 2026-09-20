import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ApplyForm } from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Contact Us — Thamara Foreign Employment Agency",
  description:
    "Get in touch with Thamara Foreign Employment Agency or apply now to start your journey towards employment abroad.",
};

export default function ContactPage() {
  return (
    <>
      <ApplyForm />
      <Contact />
    </>
  );
}
