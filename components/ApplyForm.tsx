"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-primitives";
import { applyFormFields } from "@/lib/content";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="apply" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionLabel>Apply Now</SectionLabel>
          <h2 className="headline mt-6 max-w-md text-3xl text-ink sm:text-4xl">
            Start your journey{" "}
            <span className="text-muted">towards a better future.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Share your details and our team will get in touch with suitable
            opportunities matched to your qualifications.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Free consultation & guidance",
              "Complete documentation support",
              "Trusted overseas employers",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-ink">
                <CheckCircle2 size={18} className="text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="rounded-3xl border border-black/5 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {applyFormFields.map((field) => (
                <div
                  key={field.name}
                  className={field.type === "textarea" ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={3}
                      className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-white transition hover:bg-accent hover:text-ink sm:w-auto sm:px-10"
            >
              Submit Application
            </button>

            {submitted && (
              <p className="mt-4 flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 size={16} />
                Thanks! Online submissions go live soon — please contact us
                directly in the meantime.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
