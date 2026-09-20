import type { Metadata } from "next";
import { Countries } from "@/components/Countries";

export const metadata: Metadata = {
  title: "Destinations — Thamara Foreign Employment Agency",
  description:
    "Explore the Gulf destination countries where Thamara Foreign Employment Agency currently places candidates: Kuwait, UAE, Oman, Qatar, and Bahrain.",
};

export default function CountriesPage() {
  return <Countries />;
}
