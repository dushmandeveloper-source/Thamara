"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "@/lib/gsap";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const VARIANT_FROM: Record<
  "fade-up" | "zoom-in" | "zoom-out",
  gsap.TweenVars
> = {
  "fade-up": { opacity: 0, y: 32 },
  "zoom-in": { opacity: 0, scale: 0.85 },
  "zoom-out": { opacity: 0, scale: 1.15 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: "fade-up" | "zoom-in" | "zoom-out";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, clearProps: "transform" });
      return;
    }
    const tween = gsap.fromTo(
      el,
      VARIANT_FROM[variant],
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export function StaggerGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, clearProps: "transform" });
      return;
    }

    const tween = gsap.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function Counter({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      return;
    }

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: target,
      duration: 1.4,
      ease: "power3.out",
      onStart: () => setDisplay(0),
      onUpdate: () => setDisplay(Math.round(counter.val)),
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return <span ref={ref}>{match ? `${display}${suffix}` : value}</span>;
}

export function Marquee({
  children,
  direction = "left",
  speed = 40,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (prefersReducedMotion()) return;

    gsap.set(track, { xPercent: direction === "left" ? 0 : -50 });
    const tween = gsap.to(track, {
      xPercent: direction === "left" ? -50 : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    tweenRef.current = tween;
    return () => {
      tween.kill();
    };
  }, [direction, speed]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max shrink-0 gap-4">
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export type TabbedShowcaseTab = {
  label: string;
  icon?: ElementType;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function TabbedShowcase({ tabs }: { tabs: TabbedShowcaseTab[] }) {
  const [active, setActive] = useState(0);
  const paneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pane = paneRef.current;
    if (!pane) return;

    pane.classList.remove("animate__animated", "animate__fadeIn");
    if (prefersReducedMotion()) return;

    gsap.fromTo(
      pane,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    );
    // Trigger animate.css fade alongside the GSAP opacity tween.
    requestAnimationFrame(() => {
      pane.classList.add("animate__animated", "animate__fadeIn");
    });
  }, [active]);

  const tab = tabs[active];
  const Icon = tab.icon;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              i === active
                ? "bg-accent text-ink"
                : "bg-white/[0.06] text-white/60 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        ref={paneRef}
        className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center"
      >
        <div>
          {Icon && (
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Icon size={22} />
            </span>
          )}
          <h3 className="headline mt-5 text-2xl text-white sm:text-3xl">
            {tab.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            {tab.description}
          </p>
          {tab.ctaLabel && tab.ctaHref && (
            <a
              href={tab.ctaHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              {tab.ctaLabel} →
            </a>
          )}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tab.image}
            alt={tab.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
