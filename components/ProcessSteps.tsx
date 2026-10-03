"use client";

import { useState } from "react";
import {
  ClipboardList,
  Megaphone,
  Inbox,
  Users,
  Stethoscope,
  FileCheck2,
  BadgeCheck,
  Plane,
  BookOpenCheck,
  PlaneTakeoff,
  Plus,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-primitives";
import { process } from "@/lib/content";

const icons = [
  ClipboardList,
  Megaphone,
  Inbox,
  Users,
  Stethoscope,
  FileCheck2,
  BadgeCheck,
  Plane,
  BookOpenCheck,
  PlaneTakeoff,
];

export function ProcessSteps() {
  const [active, setActive] = useState(0);
  const current = process[active];
  const CurrentIcon = icons[active];
  const progress = ((active + 1) / process.length) * 100;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
            From job order{" "}
            <span className="text-accent-strong">to departure.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Sticky summary panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-3xl bg-ink p-10 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
              />
              <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Step {active + 1} of {process.length}
              </p>
              <p
                key={current.step}
                className="headline relative mt-4 text-8xl text-accent animate-[fadeUp_.4s_ease-out]"
              >
                {current.step}
              </p>
              <div className="relative mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink">
                  <CurrentIcon size={20} />
                </span>
                <p className="headline text-2xl">{current.title}</p>
              </div>
              <div className="relative mt-10 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="relative mt-6 flex gap-1.5">
                {process.map((s, i) => (
                  <button
                    key={s.step}
                    type="button"
                    aria-label={`Go to step ${s.step}`}
                    onClick={() => setActive(i)}
                    className={`h-2 flex-1 rounded-full transition ${
                      i <= active ? "bg-accent" : "bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Accordion */}
          <ol className="relative space-y-3">
            {process.map((step, i) => {
              const Icon = icons[i];
              const open = i === active;
              return (
                <li
                  key={step.step}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    open
                      ? "border-accent/60 bg-white shadow-[0_20px_45px_-25px_rgba(0,0,0,0.3)]"
                      : "border-black/5 bg-white/60 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span
                      className={`headline w-8 shrink-0 text-lg transition-colors ${
                        open ? "text-accent-strong" : "text-ink/25"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        open ? "bg-accent text-ink scale-105" : "bg-ink/5 text-ink/60"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="flex-1 text-base font-semibold text-ink sm:text-lg">
                      {step.title}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-ink bg-ink text-white"
                          : "border-black/10 text-ink/50"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pl-[4.75rem] pr-6 text-sm leading-relaxed text-muted sm:pl-[5.25rem] sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
