import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site, socials } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-canvas">
      {/* oversized wordmark bleeding off the bottom edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 select-none text-center text-[22vw] font-bold leading-none tracking-[-0.05em] text-canvas/[0.035] md:text-[15rem]"
      >
        HealthCast
      </span>

      <div className="container-x relative">
        <div className="grid gap-14 py-20 md:py-24 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-6 text-[0.95rem] leading-relaxed text-canvas/60">
              Research, communication and technology for healthcare
              organisations — under one roof, held to one standard.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-canvas/15 px-3.5 py-1.5 text-xs font-medium text-canvas/70 transition-colors duration-300 hover:border-gold/60 hover:text-gold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((service) => (
              <FooterLink
                key={service.slug}
                href={`/services/${service.slug}`}
              >
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <li className="flex gap-3 text-sm leading-relaxed text-canvas/60">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-gold"
                strokeWidth={1.7}
                aria-hidden
              />
              <span>
                {site.legalName}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail
                className="mt-0.5 size-4 shrink-0 text-gold"
                strokeWidth={1.7}
                aria-hidden
              />
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-sm text-canvas/60 transition-colors hover:text-canvas"
              >
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone
                className="mt-0.5 size-4 shrink-0 text-gold"
                strokeWidth={1.7}
                aria-hidden
              />
              <a
                href={`tel:${site.phoneHref}`}
                className="link-underline text-sm text-canvas/60 transition-colors hover:text-canvas"
              >
                {site.phone}
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 border-t border-canvas/10 py-7 text-xs text-canvas/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName} All rights reserved.
          </p>
          <p>Registered in Pakistan &middot; Wah Cantt</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-canvas/40">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="link-underline text-sm text-canvas/60 transition-colors duration-300 hover:text-canvas"
      >
        {children}
      </Link>
    </li>
  );
}
