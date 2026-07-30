import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to HealthCast about research, marketing, production or IT. Email ${site.email} or call ${site.phone}.`,
};

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.country}`,
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={
          <>
            Tell us what you are{" "}
            <span className="accent-serif text-gold-deep">working on</span>.
          </>
        }
        body="Send a brief, a rough idea, or a question. We will come back within two working days with an honest view of whether we are the right team for it."
      />

      <section className="bg-canvas pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="space-y-4">
              <ContactCard
                icon={<Mail className="size-5" strokeWidth={1.7} />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactCard
                icon={<Phone className="size-5" strokeWidth={1.7} />}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phoneHref}`}
              />
              <ContactCard
                icon={<MessageCircle className="size-5" strokeWidth={1.7} />}
                label="WhatsApp"
                value="Message us directly"
                href={whatsappLink}
                external
              />

              <div className="rounded-3xl border border-line bg-surface p-7">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sand text-ink">
                    <MapPin className="size-5" strokeWidth={1.7} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      Office
                    </p>
                    <address className="mt-2 not-italic leading-relaxed text-ink">
                      {site.legalName}
                      <br />
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.country}
                    </address>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5 text-sm text-muted">
                  <Clock className="size-4 text-gold-deep" strokeWidth={1.7} aria-hidden />
                  Monday to Saturday, 9:00&ndash;18:00 PKT
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-line bg-sand">
                <iframe
                  title="HealthCast office location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full grayscale-[0.35] transition-[filter] duration-700 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-center gap-4 rounded-3xl border border-line bg-surface p-6 transition-[transform,border-color,box-shadow] duration-500 ease-[var(--ease-expo)] hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-40px_rgba(12,39,36,0.5)]"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sand text-ink transition-colors duration-500 group-hover:bg-gold">
        {icon}
      </span>
      <span>
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
          {label}
        </span>
        <span className="mt-1 block font-medium text-ink">{value}</span>
      </span>
    </a>
  );
}
