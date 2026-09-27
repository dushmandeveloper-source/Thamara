import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery — THAMARA Foreign Employment Agency",
  description:
    "A look inside THAMARA Foreign Employment Agency — our office, events, and team.",
};

export default function GalleryPage() {
  return <Gallery />;
}
