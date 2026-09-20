import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { OpeningCeremonyGrid } from "@/components/OpeningCeremonyGrid";
import { openingCeremonyGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Opening Ceremony — Thamara Foreign Employment Agency",
  description:
    "Photos from the opening ceremony of Thamara Foreign Employment Agency.",
};

export default function OpeningCeremonyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink"
      >
        <ArrowLeft size={16} />
        Back to Gallery
      </Link>

      <div className="mt-6 max-w-2xl">
        <SectionLabel>Gallery</SectionLabel>
        <h1 className="headline mt-6 text-3xl text-ink sm:text-4xl">
          Opening Ceremony{" "}
          <span className="text-accent-strong">at Thamara Foreign.</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A look back at the day we opened our doors to serve Sri Lankan job
          seekers pursuing opportunities abroad.
        </p>
      </div>

      <OpeningCeremonyGrid images={openingCeremonyGallery} />
    </section>
  );
}
