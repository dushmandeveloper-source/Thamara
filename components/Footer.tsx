import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, countries, nav, siteInfo } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center justify-center rounded-2xl bg-white p-3">
              <Image
                src="/images/logo.jpg"
                alt="Thamara Foreign Employment Agency logo"
                width={150}
                height={150}
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {siteInfo.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Destinations
            </p>
            <ul className="mt-4 space-y-3">
              {countries.map((country) => (
                <li key={country.code}>
                  <Link
                    href="/countries"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{contact.address.join(" ")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="shrink-0 text-accent" />
                <span>{contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteInfo.legalName} All rights
            reserved.
          </span>
          <span>{contact.website}</span>
        </div>
      </div>
    </footer>
  );
}
