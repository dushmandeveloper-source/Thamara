import Image from "next/image";
import { MapPin } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import {
  Marquee,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-primitives";
import { countries } from "@/lib/content";

export function Countries() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>Available Jobs</SectionLabel>
        <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
          Destinations we{" "}
          <span className="text-accent-strong">
            currently place candidates in.
          </span>
        </h2>
      </Reveal>

      <div className="mt-12">
        <Marquee speed={22}>
          {countries.map((country) => (
            <div
              key={country.code}
              className="relative h-28 w-40 shrink-0 overflow-hidden rounded-2xl"
            >
              <Image
                src={country.image}
                alt={country.name}
                fill
                sizes="160px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">
                {country.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <StaggerItem
            key={country.code}
            className="card-lift group overflow-hidden rounded-2xl border border-black/5 bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={country.image}
                alt={`${country.name} skyline`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="img-zoom object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/80">
                <MapPin size={12} className="text-accent" />
                Now hiring
              </span>
            </div>
            <div className="p-6">
              <p className="text-base font-semibold text-ink">
                {country.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {country.blurb}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
