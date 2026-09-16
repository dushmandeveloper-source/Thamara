import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, nav, siteInfo } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-ink">
                T
              </span>
              <span className="text-sm font-bold">{siteInfo.name}</span>
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
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </a>
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

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {siteInfo.legalName} All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
