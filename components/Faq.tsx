"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-primitives";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
          Frequently asked{" "}
          <span className="text-accent-strong">questions.</span>
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.question}
              className="card-lift overflow-hidden rounded-2xl border border-black/5 bg-white"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-ink sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-accent-strong transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="animate__animated animate__fadeIn px-6 pb-5 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
