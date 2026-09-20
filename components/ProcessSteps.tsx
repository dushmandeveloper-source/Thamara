import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { process } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
            From registration{" "}
            <span className="text-accent-strong">to departure.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-5">
          {process.map((step) => (
            <StaggerItem
              key={step.step}
              className="card-lift rounded-2xl border border-black/5 bg-white p-6"
            >
              <span className="tag-label">{step.step}</span>
              <p className="mt-4 text-base font-semibold text-ink">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
