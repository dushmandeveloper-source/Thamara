"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

/** Adds `is-visible` once the element scrolls into view. Content is styled
 *  visible-by-default via CSS so it never stays hidden if JS is slow/off. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useReveal<HTMLDivElement>();
  const style = { "--reveal-delay": `${delay}s` } as CSSProperties;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function StaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`stagger ${className}`}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function Counter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef<HTMLSpanElement>(null);
  // Default to the final value so it's correct without JS / before animating.
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1400;
        let startTime: number | null = null;
        const tick = (now: number) => {
          if (startTime === null) startTime = now;
          const p = Math.min(1, (now - startTime) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        setDisplay(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match, target]);

  return <span ref={ref}>{match ? `${display}${suffix}` : value}</span>;
}
