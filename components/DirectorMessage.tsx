import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-primitives";
import { directorMessage } from "@/lib/content";

export function DirectorMessage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr] md:items-center">
        <Reveal className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-3xl md:w-full">
          <Image
            src="/images/director.jpg"
            alt="Managing Director"
            fill
            sizes="(max-width: 768px) 224px, 280px"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionLabel>Managing Director&apos;s Message</SectionLabel>
          <Quote className="mt-6 text-accent" size={32} />
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-ink sm:text-2xl">
            {directorMessage.quote}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <div>
              <p className="text-sm font-semibold text-ink">
                {directorMessage.name}
              </p>
              <p className="text-sm text-muted">{directorMessage.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
