import { Clock, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { contact, openingHours } from "@/lib/content";

const rows = [
  {
    icon: MapPin,
    label: "Address",
    value: contact.address.join(" "),
    href: contact.mapLink,
  },
  {
    icon: Phone,
    label: contact.phoneLabel,
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsapp,
    href: `https://wa.me/94${contact.whatsapp.replace(/\s/g, "").replace(/^0/, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: contact.website,
    href: `https://${contact.website}`,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "THAMARA Foreign Employment Agency",
    href: contact.facebook,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="headline mt-6 max-w-2xl text-3xl text-ink sm:text-4xl">
            Get in touch <span className="text-muted">with our team.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <StaggerGroup className="space-y-3 rounded-3xl border border-black/5 bg-white p-8">
            {rows.map((row) => {
              const Inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-strong">
                    <row.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {row.value}
                    </p>
                  </div>
                </>
              );
              return (
                <StaggerItem key={row.label}>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl px-2 py-2 transition hover:bg-accent/[0.04]"
                  >
                    {Inner}
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <div className="flex flex-col gap-6">
            <Reveal
              delay={0.1}
              className="relative min-h-[220px] overflow-hidden rounded-3xl border border-black/5"
            >
              <iframe
                title="THAMARA Foreign Employment Agency location"
                src={contact.mapEmbedSrc}
                className="h-full min-h-[220px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-lg transition hover:bg-accent"
              >
                Open in Google Maps
              </a>
            </Reveal>

            <Reveal
              delay={0.15}
              className="rounded-3xl border border-black/5 bg-white p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-strong">
                  <Clock size={18} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Opening Hours
                </p>
              </div>
              <ul className="mt-5 space-y-2">
                {openingHours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-ink">{row.day}</span>
                    <span className="text-muted">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
