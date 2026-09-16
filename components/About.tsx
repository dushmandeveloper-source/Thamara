import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="group relative order-last aspect-[4/5] overflow-hidden rounded-3xl lg:order-first">
          <Image
            src="/images/about.jpg"
            alt="Consultants supporting a candidate"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="img-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-ink">
              A trusted and professional service
            </p>
            <p className="mt-1 text-xs text-muted">
              Helping our candidates achieve their career goals abroad.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="headline mt-6 max-w-md text-3xl text-ink sm:text-4xl">
              Built on trust,{" "}
              <span className="text-muted">guided by purpose.</span>
            </h2>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-5">
            {[about.vision, about.mission].map((item) => (
              <StaggerItem
                key={item.label}
                className="card-lift rounded-2xl border border-black/5 bg-white p-7"
              >
                <span className="tag-label">{item.label}</span>
                <p className="mt-4 text-base leading-relaxed text-ink/80">
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
