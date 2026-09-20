"use client";

import {
  FileText,
  MessagesSquare,
  PlaneTakeoff,
  ShieldCheck,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-primitives";
import { services } from "@/lib/content";

const icons = [FileText, MessagesSquare, PlaneTakeoff, ShieldCheck];

function DocumentVisual() {
  return (
    <div className="relative flex h-64 items-center justify-center sm:h-72">
      <div className="w-56 -rotate-3 rounded-2xl border border-black/5 bg-white p-5 text-ink shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Document Checklist
          </span>
          <FileText size={16} className="text-accent-strong" />
        </div>
        <div className="mt-4 flex flex-col gap-2.5">
          {["Passport", "Medical Report", "Employment Contract"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 size={16} className="shrink-0 text-accent-strong" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="glow-accent absolute bottom-2 right-2 rotate-6 rounded-xl bg-accent px-4 py-3 text-ink sm:right-6">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          <span className="text-xs font-semibold">100% Verified</span>
        </div>
      </div>
    </div>
  );
}

function InterviewVisual() {
  return (
    <div className="relative flex h-64 items-center justify-center sm:h-72">
      <div className="w-56 rotate-3 rounded-2xl border border-black/5 bg-white p-5 text-ink shadow-xl">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent-strong">
            NK
          </span>
          <div>
            <p className="text-sm font-semibold">Mock Interview</p>
            <p className="text-xs text-muted">Session in progress</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Confidence</span>
            <span className="font-semibold text-accent-strong">92%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-cream">
            <div className="h-full w-[92%] rounded-full bg-accent" />
          </div>
        </div>
      </div>
      <div className="glow-accent absolute left-1 top-2 -rotate-6 rounded-xl bg-accent px-4 py-3 text-ink sm:left-4">
        <div className="flex items-center gap-1.5">
          <div className="flex text-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={11} fill="currentColor" stroke="black" strokeWidth={1} />
            ))}
          </div>
          <span className="text-xs font-semibold">4.9/5 Score</span>
        </div>
      </div>
    </div>
  );
}

function DepartureVisual() {
  return (
    <div className="relative flex h-64 items-center justify-center sm:h-72">
      <div className="w-56 -rotate-2 rounded-2xl border border-black/5 bg-white p-5 text-ink shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Pre-Departure Briefing
          </span>
          <PlaneTakeoff size={16} className="text-accent-strong" />
        </div>
        <div className="mt-4 flex flex-col gap-2.5">
          {["Flight Details", "Accommodation", "Orientation Session"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 size={16} className="shrink-0 text-accent-strong" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="glow-accent absolute bottom-2 left-1 rotate-6 rounded-xl bg-accent px-4 py-3 text-ink sm:left-4">
        <span className="text-xs font-semibold">Departure in 5 days</span>
      </div>
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="relative flex h-64 items-center justify-center sm:h-72">
      <div className="w-56 rotate-2 rounded-2xl border border-black/5 bg-white p-5 text-ink shadow-xl">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-accent-strong" />
          <span className="text-sm font-semibold">24/7 Candidate Support</span>
        </div>
        <div className="mt-4 flex gap-4">
          <div>
            <p className="headline text-2xl text-accent-strong">5+</p>
            <p className="text-xs text-muted">Countries</p>
          </div>
          <div>
            <p className="headline text-2xl text-accent-strong">1,200+</p>
            <p className="text-xs text-muted">Candidates</p>
          </div>
        </div>
      </div>
      <div className="glow-accent absolute -top-1 right-1 -rotate-6 rounded-full bg-accent px-4 py-2.5 text-ink sm:right-4">
        <div className="flex items-center gap-2">
          <Users size={14} />
          <span className="text-xs font-semibold">+5,000 supported</span>
        </div>
      </div>
    </div>
  );
}

const visuals = [DocumentVisual, InterviewVisual, DepartureVisual, SupportVisual];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-xl text-center">
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
        </Reveal>

        <Reveal className="mt-16 rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.18)] sm:p-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            {services.map((service, i) => {
              const Icon = icons[i];
              const Visual = visuals[i];
              const reversed = i % 2 === 1;
              return (
                <div
                  key={service.title}
                  className="grid items-stretch md:grid-cols-2"
                >
                  <div
                    className={`flex flex-col justify-center p-6 sm:p-8 md:p-12 ${
                      reversed ? "md:order-2" : ""
                    }`}
                  >
                    <span className="glow-accent flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink">
                      <Icon size={20} />
                    </span>
                    <h3 className="headline mt-6 text-2xl text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`m-1 rounded-[1.5rem] bg-cream sm:m-2 ${
                      reversed ? "md:order-1" : ""
                    }`}
                  >
                    <Visual />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
