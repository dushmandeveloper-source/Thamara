"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/90 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.25)] backdrop-blur"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt="Thamara Foreign Employment Agency logo"
            width={100}
            height={106}
            priority
            className="h-10 w-auto sm:h-11"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold tracking-tight text-ink sm:text-base">
              Thamara
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
              Foreign Employment Agency
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent hover:text-ink md:inline-block"
        >
          Apply Now
        </a>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apply"
              className="rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
