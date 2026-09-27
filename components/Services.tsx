"use client";

import {
  FileText,
  MessagesSquare,
  PlaneTakeoff,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { services, trustBadges } from "@/lib/content";

const icons = [FileText, MessagesSquare, PlaneTakeoff, ShieldCheck];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl md:text-5xl">
              Support at every step{" "}
              <span className="text-accent-strong">of the journey.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              From your first consultation to settling into your new role
              abroad, our team handles the details so you can focus on your
              future.
            </p>
          </div>
          <div className="flex shrink-0 gap-8 md:gap-10">
            {trustBadges.slice(0, 2).map((badge) => (
              <div key={badge.label}>
                <p className="headline text-3xl text-ink sm:text-4xl">
                  {badge.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                key={service.title}
                className="group card-lift relative overflow-hidden rounded-2xl border border-black/10 bg-cream p-8 transition hover:border-accent/50 hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.25)]"
              >
                <span className="headline absolute -right-2 -top-4 text-7xl text-ink/[0.04] transition group-hover:text-accent/10">
                  0{i + 1}
                </span>
                <div className="relative flex items-start justify-between">
                  <span className="glow-accent flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-ink transition group-hover:scale-105">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 text-ink/20 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-strong"
                  />
                </div>
                <h3 className="headline relative mt-6 text-xl text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
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
