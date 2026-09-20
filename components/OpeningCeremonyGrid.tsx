"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function OpeningCeremonyGrid({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length
        );
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("preloader-lock");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("preloader-lock");
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left"
          >
            <Image
              src={src}
              alt={`Opening Ceremony photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="img-zoom object-cover"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-ink sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? null : (i - 1 + images.length) % images.length
              );
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-ink sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-ink sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative flex h-full max-h-[80vh] w-full max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full max-h-[80vh] w-full">
              <Image
                src={images[activeIndex]}
                alt={`Opening Ceremony photo ${activeIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white sm:bottom-8">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
