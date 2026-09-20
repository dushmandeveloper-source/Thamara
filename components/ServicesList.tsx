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

export function ServicesList() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>Our Services</SectionLabel>
        <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
          Support at every step{" "}
          <span className="text-accent-strong">of the journey.</span>
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem
              key={service.title}
              className="group card-lift rounded-2xl border border-black/5 bg-white p-8 hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent-strong transition group-hover:bg-accent group-hover:text-ink group-hover:shadow-[0_0_16px_rgba(214,253,112,0.5)]">
                  <Icon size={22} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink/20 transition group-hover:text-accent-strong"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-ink">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
