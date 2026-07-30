import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Process } from "@/components/home/Process";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, medical research, IT solutions and media production — four healthcare disciplines delivered by one in-house team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={
          <>
            Comprehensive{" "}
            <span className="accent-serif text-gold-deep">
              healthcare solutions
            </span>
            .
          </>
        }
        body="A full spectrum of services designed to help healthcare organisations thrive in the digital age — commissioned individually, or run together as one programme."
      />

      <section className="bg-canvas pb-8 pt-6 md:pb-12">
        <div className="container-x">
          <div className="divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative grid gap-8 py-12 transition-colors duration-500 md:py-16 lg:grid-cols-[auto_1fr_1.15fr] lg:items-start lg:gap-12"
                >
                  {/* hover wash bleeding past the container edges */}
                  <span
                    className="pointer-events-none absolute -inset-x-6 inset-y-0 -z-10 rounded-3xl bg-sand opacity-0 transition-opacity duration-500 ease-[var(--ease-expo)] group-hover:opacity-100"
                    aria-hidden
                  />

                  <div className="flex items-center gap-5 lg:block">
                    <span className="font-display text-5xl leading-none text-ink/15 transition-colors duration-500 group-hover:text-gold lg:text-6xl">
                      {service.index}
                    </span>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-ink text-gold transition-[background-color,color,transform] duration-500 ease-[var(--ease-expo)] group-hover:scale-105 group-hover:bg-gold group-hover:text-ink lg:mt-6">
                      <service.icon
                        className="size-5"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    </span>
                  </div>

                  <div>
                    <h2 className="text-title font-semibold text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted text-pretty">
                      {service.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                      View service
                      <ArrowUpRight
                        className="size-4 transition-transform duration-400 ease-[var(--ease-expo)] group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>
                  </div>

                  <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2.5 text-sm text-ink-600"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-gold-deep"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTABand />
    </>
  );
}
