import type { Metadata } from "next";
import {
  BadgeCheck,
  HeartPulse,
  Layers,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Impact } from "@/components/home/Impact";
import { Process } from "@/components/home/Process";
import { CTABand } from "@/components/home/CTABand";
import { ClientMarquee } from "@/components/home/ClientMarquee";

export const metadata: Metadata = {
  title: "About",
  description:
    "HealthCast is a multidisciplinary practice improving health outcomes through digital innovation, strategic communication and scientific research.",
};

const values = [
  {
    icon: ScrollText,
    title: "Evidence over assertion",
    body: "If we cannot show you the data behind a recommendation, we do not make it. Sources travel with the work.",
  },
  {
    icon: HeartPulse,
    title: "Patients before impressions",
    body: "Reach means nothing if the message misleads. Clinical accuracy is checked before anything is published.",
  },
  {
    icon: Layers,
    title: "One accountable team",
    body: "Research, creative and engineering share a brief and a deadline. No finger-pointing between vendors.",
  },
  {
    icon: BadgeCheck,
    title: "Standards, not shortcuts",
    body: "Accessibility, consent and data protection are treated as requirements — never as a post-launch backlog.",
  },
  {
    icon: Users,
    title: "Senior people, start to finish",
    body: "The team in your first meeting is the team on your project. Nothing gets quietly handed down.",
  },
  {
    icon: Sparkles,
    title: "Craft that earns trust",
    body: "In healthcare, how something looks and reads is part of whether people believe it. We take that seriously.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HealthCast"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={
          <>
            Transforming healthcare through{" "}
            <span className="accent-serif text-gold-deep">
              digital innovation
            </span>
            .
          </>
        }
        body="We are a multidisciplinary team dedicated to improving health outcomes — combining medical expertise, production capability and engineering so healthcare organisations can communicate more effectively, build trust and accelerate impact."
      />

      <ClientMarquee />

      {/* ---------------- story ---------------- */}
      <section className="bg-canvas py-20 md:py-28 lg:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    Built because the{" "}
                    <span className="accent-serif text-gold-deep">gap</span> was
                    obvious.
                  </>
                }
              />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted text-pretty">
              <Reveal>
                <p>
                  Healthcare organisations were being asked to choose between
                  agencies that understood marketing but not medicine, and
                  specialists who understood medicine but could not communicate
                  it. Neither served the patient at the end of the chain.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p>
                  HealthCast was founded to close that gap. We brought
                  researchers, marketers, film-makers and engineers into one
                  practice, so a clinical finding could travel from protocol to
                  publication to public campaign without losing its accuracy on
                  the way.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  Today we work with hospitals, clinics, health startups and
                  research groups across Pakistan and beyond — designing studies,
                  running campaigns, producing films and building the platforms
                  that hold it all together.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <blockquote className="mt-10 border-l-2 border-gold pl-6 text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
                  Our approach is collaborative and evidence-driven — we tailor
                  solutions to each client&rsquo;s needs, from research and
                  production through to digital strategy and IT.
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- mission / vision ---------------- */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                label: "Mission",
                title: "Make good health information impossible to ignore.",
                body: "To give healthcare organisations research they can defend, communication people actually understand, and technology that holds up under real clinical load.",
              },
              {
                label: "Vision",
                title: "A sector where evidence and clarity travel together.",
                body: "A healthcare landscape where the most trustworthy voice is also the most compelling one — and where patients never have to choose between the two.",
              },
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-11">
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gold/10 blur-3xl"
                    aria-hidden
                  />
                  <p className="relative text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    {item.label}
                  </p>
                  <h3 className="relative mt-5 text-title font-semibold text-ink text-balance">
                    {item.title}
                  </h3>
                  <p className="relative mt-4 leading-relaxed text-muted text-pretty">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- values ---------------- */}
      <section className="bg-canvas py-20 md:py-28 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we hold to"
            title={
              <>
                Six commitments we{" "}
                <span className="accent-serif text-gold-deep">
                  do not trade away
                </span>
                .
              </>
            }
            align="center"
          />

          <Stagger
            className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
            delay={0.08}
          >
            {values.map((value) => (
              <StaggerItem key={value.title} className="bg-canvas">
                <div className="group h-full p-8 transition-colors duration-500 hover:bg-surface md:p-9">
                  <value.icon
                    className="size-6 text-gold-deep transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted text-pretty">
                    {value.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Impact />
      <Process />
      <CTABand />
    </>
  );
}
