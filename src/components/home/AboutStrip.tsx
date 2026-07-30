import { FlaskConical, Radio, Code2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: FlaskConical,
    title: "Evidence first",
    body: "Every recommendation traces back to data — a study, a search trend, an analytics readout.",
  },
  {
    icon: Radio,
    title: "Clarity always",
    body: "Complex clinical material, translated for the audience that has to act on it.",
  },
  {
    icon: Code2,
    title: "Built to last",
    body: "Accessible, secure, maintainable — standards applied from the first line, not bolted on.",
  },
];

export function AboutStrip() {
  return (
    <section className="relative bg-canvas py-20 md:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* left — heading + CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>About HealthCast</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-headline font-semibold text-ink text-balance">
                A multidisciplinary team, built around{" "}
                <span className="accent-serif text-gold-deep">
                  health outcomes
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted text-pretty">
                <p>
                  HealthCast is a multidisciplinary practice improving health
                  outcomes through digital innovation, strategic communication
                  and scientific research. We combine medical expertise,
                  production capability and engineering so healthcare
                  organisations can communicate effectively, build trust and
                  accelerate impact.
                </p>
                <p>
                  Our approach is collaborative and evidence-driven — solutions
                  are tailored to each client, from research and production
                  through to digital strategy and IT.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <ButtonLink
                href="/about"
                variant="outline"
                size="lg"
                className="mt-9"
                arrow
              >
                Our story
              </ButtonLink>
            </Reveal>
          </div>

          {/* right — pillars */}
          <Stagger className="space-y-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <article className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-[border-color,box-shadow,transform] duration-500 ease-[var(--ease-expo)] hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_28px_60px_-40px_rgba(12,39,36,0.45)] md:p-9">
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-start gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sand text-ink transition-colors duration-500 group-hover:bg-gold">
                      <pillar.icon className="size-5" strokeWidth={1.7} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-title font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 leading-relaxed text-muted">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
