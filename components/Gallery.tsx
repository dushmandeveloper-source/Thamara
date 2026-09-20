import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal variant="zoom-in" className="mx-auto max-w-2xl text-center">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="headline mt-6 text-3xl text-ink sm:text-4xl">
            A look inside{" "}
            <span className="text-accent-strong">Thamara Foreign.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((item) => {
            const content = (
              <>
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
              </>
            );

            return (
              <StaggerItem
                key={item.label}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                {item.label === "Opening Ceremony" ? (
                  <Link href="/gallery/opening-ceremony" className="block h-full w-full">
                    {content}
                  </Link>
                ) : (
                  <div className="block h-full w-full">{content}</div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
