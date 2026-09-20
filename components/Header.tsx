"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isHome ? "mx-3 mt-3 overflow-hidden rounded-t-[1.5rem]" : ""
      } ${
        transparent
          ? "border-transparent bg-transparent"
          : scrolled
          ? "border-black/5 bg-white/90 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.25)] backdrop-blur"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={`flex items-center justify-center rounded-xl transition ${
              transparent ? "bg-white/95 p-1.5 shadow-sm" : ""
            }`}
          >
            <Image
              src="/images/logo-mark.png"
              alt="Thamara Foreign Employment Agency logo"
              width={100}
              height={106}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`text-sm font-extrabold tracking-tight sm:text-base transition ${
                transparent ? "text-white" : "text-ink"
              }`}
            >
              Thamara
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                transparent ? "text-white/70" : "text-accent-strong"
              }`}
            >
              Foreign Employment Agency
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                transparent
                  ? pathname === item.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  : pathname === item.href
                  ? "text-ink"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_0_16px_rgba(214,253,112,0.5)] transition hover:shadow-[0_0_26px_rgba(214,253,112,0.7)] md:inline-block ${
            transparent
              ? "bg-accent text-ink hover:bg-accent/90"
              : "bg-ink text-white hover:bg-accent hover:text-ink"
          }`}
        >
          Apply Now
        </Link>

        <button
          className={`md:hidden transition ${transparent ? "text-white" : "text-ink"}`}
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
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
