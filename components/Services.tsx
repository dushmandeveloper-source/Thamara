import {
  FileText,
  MessagesSquare,
  PlaneTakeoff,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { services } from "@/lib/content";

const icons = [FileText, MessagesSquare, PlaneTakeoff, ShieldCheck];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionLabel onDark>Our Services</SectionLabel>
          <h2 className="headline mt-6 max-w-2xl text-3xl text-white sm:text-4xl">
            Support at every step{" "}
            <span className="text-white/40">of the journey.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                key={service.title}
                className="group card-lift rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-ink">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 transition group-hover:text-accent"
                  />
                </div>
                <p className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
