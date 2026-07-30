import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { getService, services } from "@/lib/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Process } from "@/components/home/Process";
import { CTABand } from "@/components/home/CTABand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    openGraph: { title: service.title, description: service.summary },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        body={service.intro}
        aside={
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" arrow>
              Discuss a brief
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              All services
            </ButtonLink>
          </div>
        }
      />

      {/* ---------------- capabilities ---------------- */}
      <section className="bg-canvas py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Capabilities"
                title={
                  <>
                    Everything included under{" "}
                    <span className="accent-serif text-gold-deep">
                      {service.title.toLowerCase()}
                    </span>
                    .
                  </>
                }
              />
            </div>

            <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {service.capabilities.map((capability, index) => (
                <StaggerItem key={capability} className="bg-canvas">
                  <div className="group flex h-full items-start gap-4 p-6 transition-colors duration-500 hover:bg-surface md:p-7">
                    <span className="font-display text-sm text-ink/30 transition-colors duration-500 group-hover:text-gold-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-medium leading-snug text-ink">
                      {capability}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------------- why us ---------------- */}
      <section className="relative overflow-hidden bg-ink py-20 text-canvas md:py-28">
        <div
          className="pointer-events-none absolute inset-0 text-canvas/[0.055] bg-dotgrid"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 size-[28rem] rounded-full bg-gold/12 blur-[110px]"
          aria-hidden
        />

        <div className="container-x relative">
          <SectionHeading
            tone="dark"
            eyebrow="Why HealthCast"
            title={
              <>
                What you get that you{" "}
                <span className="accent-serif text-gold">
                  would not elsewhere
                </span>
                .
              </>
            }
          />

          <Stagger className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10" delay={0.08}>
            {service.outcomes.map((outcome, index) => (
              <StaggerItem key={outcome.title}>
                <div className="border-t border-canvas/15 pt-7">
                  <span className="font-display text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-canvas">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-canvas/60 text-pretty">
                    {outcome.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- deliverables ---------------- */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Deliverables"
              title={
                <>
                  What lands in your{" "}
                  <span className="accent-serif text-gold-deep">inbox</span>.
                </>
              }
              body="Concrete outputs, agreed in the brief and priced before work starts."
            />

            <Stagger className="space-y-3">
              {service.deliverables.map((deliverable) => (
                <StaggerItem key={deliverable}>
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-6 py-5 transition-[transform,border-color] duration-500 ease-[var(--ease-expo)] hover:translate-x-1 hover:border-gold/50">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                      <Check className="size-4" strokeWidth={2.5} aria-hidden />
                    </span>
                    <p className="font-medium text-ink">{deliverable}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <Process />

      {/* ---------------- other services ---------------- */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="text-title font-semibold text-ink">
              Other services
            </h2>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-3" delay={0.06}>
            {others.map((other) => (
              <StaggerItem key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-surface p-7 transition-[transform,border-color,box-shadow] duration-500 ease-[var(--ease-expo)] hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_30px_60px_-45px_rgba(12,39,36,0.5)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-sand text-ink transition-colors duration-500 group-hover:bg-gold">
                    <other.icon className="size-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">
                      {other.title}
                    </span>
                    <span className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                      {other.tagline}
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-400 ease-[var(--ease-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </>
  );
}
