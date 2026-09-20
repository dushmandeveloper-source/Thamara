import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import {
  Counter,
  Marquee,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-primitives";
import { siteInfo, skillTags, stats } from "@/lib/content";

const statCards = [
  { value: stats.candidatesPlaced, label: "Candidates placed abroad" },
  { value: stats.successRate, label: "Application success rate" },
  { value: stats.yearsOfService, label: "Years of trusted service" },
];

export function HomeAboutStats() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>About Us</SectionLabel>
        <h2 className="headline mt-6 text-3xl text-ink sm:text-5xl">
          Built on trust,{" "}
          <span className="text-accent-strong">guided by purpose,</span>{" "}
          <span className="text-muted">focused on your future abroad.</span>
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          {siteInfo.introSecondary}
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem className="card-lift relative col-span-1 overflow-hidden rounded-2xl border border-black/5 bg-ink p-7 text-white sm:col-span-2 lg:col-span-1">
          <span className="tag-label tag-label--on-dark">Coverage</span>
          <p className="headline mt-5 text-4xl">
            <Counter value={stats.countriesServed} />
          </p>
          <p className="mt-2 text-sm text-white/60">Destination countries</p>
          <div className="mt-6 -mx-2">
            <Marquee speed={18} className="[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </Marquee>
          </div>
        </StaggerItem>

        {statCards.map((card, i) => (
          <StaggerItem
            key={card.label}
            className={`card-lift relative overflow-hidden rounded-2xl border border-black/5 p-7 ${
              i === 1 ? "bg-cream" : "bg-white"
            }`}
          >
            {i === 2 && (
              <Image
                src="/images/about.jpg"
                alt=""
                fill
                aria-hidden
                className="object-cover opacity-10"
              />
            )}
            <div className="relative">
              <span className="tag-label">Since day one</span>
              <p className="headline mt-5 text-4xl text-ink">
                <Counter value={card.value} />
              </p>
              <p className="mt-2 text-sm text-muted">{card.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
