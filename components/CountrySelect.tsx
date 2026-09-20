"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { countries } from "@/lib/content";

function flagEmoji(code: string) {
  return code
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

export function CountrySelect({
  name,
  id,
  placeholder = "Select a country",
}: {
  name: string;
  id?: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const selectedCountry = countries.find((c) => c.name === selected);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" id={id} name={name} value={selected ?? ""} />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-left text-sm outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
      >
        <span
          className={`flex items-center gap-2 ${
            selectedCountry ? "text-ink" : "text-muted"
          }`}
        >
          {selectedCountry && (
            <span className="text-base leading-none">
              {flagEmoji(selectedCountry.code)}
            </span>
          )}
          {selectedCountry ? selectedCountry.name : placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl">
          <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2">
            <Search size={15} className="shrink-0 text-muted" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-muted">
                No countries found.
              </li>
            )}
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(c.name);
                    setQuery("");
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition hover:bg-cream ${
                    selected === c.name ? "bg-accent/10 font-semibold text-accent-strong" : "text-ink"
                  }`}
                >
                  <span className="text-base leading-none">{flagEmoji(c.code)}</span>
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
