import { Counter, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { trustBadges } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-b border-black/5 bg-white">
      <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
        {trustBadges.map((badge) => (
          <StaggerItem key={badge.label}>
            <p className="headline text-4xl text-ink sm:text-5xl">
              <Counter value={badge.value} />
            </p>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-accent" />
            <p className="mt-3 text-xs text-muted sm:text-sm">{badge.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
