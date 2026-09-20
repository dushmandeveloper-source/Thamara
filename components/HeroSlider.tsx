"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/landing-images/abu-dhabi-seascape-with-skyscrapers.jpg", alt: "Abu Dhabi seascape with skyscrapers" },
  { src: "/images/landing-images/futuristic-dubai-landscape.jpg", alt: "Futuristic Dubai landscape" },
  { src: "/images/landing-images/bridge-with-city.jpg", alt: "Bridge with city skyline" },
  { src: "/images/landing-images/aerial-view-old-town-buildings-near-water-valletta-malta.jpg", alt: "Aerial view of old town buildings near water, Valletta, Malta" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="scale-105 object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-ink-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/55 via-transparent to-ink-deep/20" />
    </div>
  );
}
