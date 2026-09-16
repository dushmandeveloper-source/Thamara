import Image from "next/image";
import { MapPin } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { countries } from "@/lib/content";

export function Countries() {
  return (
    <section id="countries" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionLabel>Available Jobs</SectionLabel>
        <h2 className="headline mt-6 max-w-2xl text-3xl text-ink sm:text-4xl">
          Destinations we{" "}
          <span className="text-muted">currently place candidates in.</span>
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {countries.map((country) => (
          <StaggerItem
            key={country.code}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <Image
              src={country.image}
              alt={`${country.name} skyline`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="img-zoom object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="flex items-center gap-1.5 text-xs text-white/70">
                <MapPin size={12} className="text-accent" />
                Now hiring
              </span>
              <p className="mt-1 text-base font-semibold text-white">
                {country.name}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
