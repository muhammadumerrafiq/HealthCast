import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function ServicesGrid() {
  return (
    <section id="services" className="relative bg-sand py-20 md:py-28 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Four disciplines.{" "}
              <span className="accent-serif text-gold-deep">One team.</span>
            </>
          }
          body="Most healthcare organisations juggle an agency, a dev shop, a film crew and a research consultant. We run all four in-house, which is why the work actually joins up."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-2" delay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-expo)] hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_36px_80px_-48px_rgba(12,39,36,0.5)] md:p-10"
              >
                {/* warm wash that fades in on hover */}
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-soft/60 via-transparent to-transparent opacity-0 transition-opacity duration-600 ease-[var(--ease-expo)] group-hover:opacity-100"
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-6">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-ink text-gold transition-[background-color,transform] duration-500 ease-[var(--ease-expo)] group-hover:scale-105 group-hover:bg-gold group-hover:text-ink">
                    <service.icon className="size-6" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="font-display text-4xl leading-none text-ink/12 transition-colors duration-500 group-hover:text-ink/25">
                    {service.index}
                  </span>
                </div>

                <h3 className="relative mt-8 text-title font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-muted text-pretty">
                  {service.summary}
                </p>

                <ul className="relative mt-6 flex flex-wrap gap-1.5">
                  {service.capabilities.slice(0, 4).map((capability) => (
                    <li
                      key={capability}
                      className="rounded-full border border-ink/8 bg-canvas/70 px-3 py-1 text-xs text-ink-600"
                    >
                      {capability}
                    </li>
                  ))}
                  <li className="rounded-full px-2 py-1 text-xs text-muted">
                    +{service.capabilities.length - 4} more
                  </li>
                </ul>

                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  Explore {service.title.toLowerCase()}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-400 ease-[var(--ease-expo)] group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
