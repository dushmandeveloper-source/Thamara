"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Marquee } from "@/components/motion-primitives";
import { HeroSlider } from "@/components/HeroSlider";
import { gsap } from "@/lib/gsap";
import { siteInfo, ratingBlurb, stats } from "@/lib/content";

type MarqueeCard =
  | { type: "text"; text: string }
  | { type: "stat"; label: string; value: string }
  | { type: "photo"; image: string; label: string };

const marqueeCards: MarqueeCard[] = [
  { type: "text", text: "Trusted placement expertise across 5 Gulf countries" },
  { type: "stat", label: "Placement Success", value: stats.successRate },
  { type: "photo", image: "/images/country-kuwait.jpg", label: "Kuwait" },
  { type: "stat", label: "Candidates Placed", value: stats.candidatesPlaced },
  { type: "photo", image: "/images/country-dubai.jpg", label: "Dubai, UAE" },
  { type: "text", text: "Documentation, interviews & pre-departure done right" },
  { type: "photo", image: "/images/country-qatar.jpg", label: "Qatar" },
  { type: "stat", label: "Years of Trust", value: stats.yearsOfService },
  { type: "photo", image: "/images/country-oman.jpg", label: "Oman" },
  { type: "photo", image: "/images/country-bahrain.jpg", label: "Bahrain" },
];

function MarqueeCardView({ card }: { card: MarqueeCard }) {
  if (card.type === "text") {
    return (
      <div className="flex h-24 w-32 shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-ink-deep p-3 text-white sm:h-32 sm:w-44 sm:rounded-2xl sm:p-4 lg:h-44 lg:w-56 lg:p-5">
        <span className="glow-accent-sm h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
        <p className="text-[11px] font-semibold leading-snug sm:text-sm lg:text-base">{card.text}</p>
      </div>
    );
  }
  if (card.type === "stat") {
    return (
      <div className="flex h-24 w-32 shrink-0 flex-col justify-between rounded-xl border border-black/10 bg-white p-3 text-ink shadow-xl sm:h-32 sm:w-44 sm:rounded-2xl sm:p-4 lg:h-44 lg:w-56 lg:p-5">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-muted sm:text-xs">
          {card.label}
        </span>
        <span className="headline text-lg sm:text-2xl lg:text-4xl">{card.value}</span>
      </div>
    );
  }
  return (
    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-32 sm:w-44 sm:rounded-2xl lg:h-44 lg:w-56">
      <Image src={card.image} alt={card.label} fill sizes="224px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-transparent to-transparent" />
      <span className="absolute bottom-1.5 left-1.5 text-[9px] font-semibold text-white sm:bottom-3 sm:left-3 sm:text-xs">
        {card.label}
      </span>
    </div>
  );
}

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const stage = stageRef.current;
    if (!stage) return;
    const items = Array.from(stage.children) as HTMLElement[];
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(items, { opacity: 0, y: 26 }, { opacity: 1, y: 0, stagger: 0.13, duration: 0.7 });
  }, []);

  return (
    <section
      id="home"
      className="relative isolate mx-3 mb-3 mt-3 flex h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[1.5rem] bg-ink-deep text-white"
    >
      <HeroSlider />
      <div
        aria-hidden
        className="animate-floaty pointer-events-none absolute -left-24 top-24 z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div aria-hidden className="h-20 shrink-0 sm:h-24" />

      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 py-3 sm:py-4">
          <div ref={stageRef}>
            <h1 className="headline max-w-xl text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[1.05] text-white">
              Your Prosperity is{" "}
              <span className="text-accent drop-shadow-[0_0_18px_rgba(214,253,112,0.65)]">Our Responsibility.</span>
            </h1>

            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70 sm:mt-4 sm:text-base">
              {siteInfo.intro}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-6 sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center rounded-full bg-accent py-1 pl-5 pr-1 text-xs font-semibold text-ink shadow-[0_0_20px_rgba(214,253,112,0.55)] transition hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(214,253,112,0.75)] sm:pl-6 sm:text-sm"
              >
                <span className="pr-4 sm:pr-5">Apply Now</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-ink-deep sm:h-10 sm:w-10">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <Link
                href="/services"
                className="text-xs font-semibold text-white/70 underline-offset-4 transition hover:text-white hover:underline sm:text-sm"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-3 hidden items-center gap-3 sm:mt-6 sm:flex">
              <div className="flex text-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-white/60">
                {ratingBlurb.score}
                {ratingBlurb.suffix} — {ratingBlurb.note}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full shrink-0 pb-3 sm:pb-6">
        <Marquee speed={34}>
          {marqueeCards.map((card, i) => (
            <MarqueeCardView key={i} card={card} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
