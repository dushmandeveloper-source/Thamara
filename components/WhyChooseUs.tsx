import Image from "next/image";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="headline mt-6 max-w-md text-3xl text-ink sm:text-4xl">
              Reasons candidates{" "}
              <span className="text-muted">trust Thamara Foreign.</span>
            </h2>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-3">
            {whyChooseUs.map((reason) => (
              <StaggerItem
                key={reason}
                className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 transition hover:border-accent/30 hover:bg-accent/[0.02]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check size={16} />
                </span>
                <span className="text-sm font-medium text-ink">{reason}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal
          delay={0.1}
          className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/apply.jpg"
            alt="Interview preparation session"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="img-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
