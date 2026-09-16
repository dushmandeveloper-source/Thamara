import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { contact } from "@/lib/content";

const rows = [
  {
    icon: MapPin,
    label: "Address",
    value: contact.address.join(" "),
    href: undefined as string | undefined,
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
];

export function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
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
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
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
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-xl px-2 py-2 transition hover:bg-accent/[0.04]"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 px-2 py-2">{Inner}</div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal
            delay={0.1}
            className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-3xl border border-black/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ink to-ink/70" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(192,137,43,0.55), transparent 45%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15), transparent 40%)",
              }}
            />
            <div className="relative text-center text-white">
              <span className="animate-floaty inline-flex">
                <MapPin className="text-accent" size={32} />
              </span>
              <p className="mt-3 text-base font-semibold">Kurunegala, Sri Lanka</p>
              <p className="mt-1 text-sm text-white/60">
                Visit our office for a free consultation
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
