import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";

export function CtaBand() {
  return (
    <section className="relative m-3 overflow-hidden rounded-[1.5rem] bg-ink">
      <Image
        src="/images/landing-images/futuristic-dubai-landscape.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/35" />
      <Reveal
        variant="zoom-in"
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 sm:py-20 text-center"
      >
        <span className="tag-label tag-label--on-dark">Ready when you are</span>
        <h2 className="headline max-w-2xl text-3xl text-white sm:text-4xl md:text-5xl">
          Start your journey{" "}
          <span className="glow-accent-text text-accent">towards a better future.</span>
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
          Share your details and our team will get in touch with suitable
          opportunities matched to your qualifications.
        </p>
        <Link
          href="/contact"
          className="glow-accent group mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-accent/90"
        >
          Apply Now
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>
    </section>
  );
}
