import Image from "next/image";
import {
  Award,
  ArrowUpRight,
  FileCheck2,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { whyChooseUs } from "@/lib/content";

const icons = [Award, ShieldCheck, HeartHandshake, FileCheck2, Users];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal variant="fade-up">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="headline mt-6 text-4xl text-ink sm:text-5xl">
            Reasons candidates{" "}
            <span className="text-accent-strong">trust Thamara Foreign.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            A decade of guiding Sri Lankan job seekers into safe, well-matched
            careers abroad — with honest support at every step.
          </p>

          <div className="relative mt-10 hidden sm:block">
            <div
              aria-hidden
              className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about.jpg"
                alt="Thamara team supporting a candidate"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="divide-y divide-black/5">
          {whyChooseUs.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem
                key={reason}
                className="group flex items-center gap-5 py-5 pl-4 -ml-4 border-l-4 border-transparent transition-all duration-300 hover:border-accent hover:bg-cream/60 sm:gap-6 sm:py-6"
              >
                <span className="headline w-9 shrink-0 text-2xl text-accent-strong/40 transition-colors duration-300 group-hover:text-accent-strong sm:w-12 sm:text-3xl">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-strong transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-ink">
                  <Icon size={20} />
                </span>
                <span className="flex-1 text-lg font-bold text-ink sm:text-xl">
                  {reason}
                </span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
