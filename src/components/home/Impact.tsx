import { stats } from "@/lib/site";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Impact() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-canvas md:py-24">
      <div
        className="pointer-events-none absolute inset-0 text-canvas/[0.06] bg-dotgrid"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-gold/12 blur-[100px]"
        aria-hidden
      />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow tone="dark">By the numbers</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-headline font-semibold text-canvas text-balance">
                Work that holds up to{" "}
                <span className="accent-serif text-gold">scrutiny</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-canvas/60 leading-relaxed">
              We report against outcomes agreed at the start of an engagement —
              and publish the method alongside the result.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-canvas/10 lg:grid-cols-4"
          delay={0.1}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-ink">
              <div className="group h-full px-6 py-9 transition-colors duration-500 hover:bg-ink-800 md:px-8 md:py-11">
                <p className="text-5xl font-semibold tracking-[-0.04em] text-gold md:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-snug text-canvas/55">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
