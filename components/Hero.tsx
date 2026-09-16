import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { siteInfo } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink text-white"
    >
      <Image
        src="/images/hero.jpg"
        alt="City skyline of a Gulf destination"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/75 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
      <div
        aria-hidden
        className="animate-floaty pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
        <div className="animate-in" style={{ animationDelay: "0.05s" }}>
          <SectionLabel onDark>Foreign Employment Agency</SectionLabel>
        </div>

        <h1
          className="headline animate-in mt-6 max-w-3xl text-5xl text-white sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          Your Prosperity is{" "}
          <span className="text-accent">Our Responsibility.</span>
        </h1>

        <p
          className="animate-in mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          style={{ animationDelay: "0.28s" }}
        >
          {siteInfo.intro}
        </p>

        <div
          className="animate-in mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Apply Now
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
          >
            Contact Us
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-white/30 pt-2">
          <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-white/70" />
        </span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
