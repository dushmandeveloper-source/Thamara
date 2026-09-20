import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
            What our candidates{" "}
            <span className="text-accent-strong">say about us.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="card-lift flex flex-col rounded-2xl border border-black/5 bg-white p-7"
            >
              <Quote className="text-accent-strong" size={26} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill sizes="40px" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
