import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section className="bg-[#f7f6f4]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="headline mt-6 max-w-2xl text-3xl text-ink sm:text-4xl">
            A look inside{" "}
            <span className="text-muted">Thamara Foreign.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((item) => (
            <StaggerItem
              key={item.label}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="img-zoom object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                {item.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
