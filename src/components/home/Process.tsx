import { process } from "@/lib/services";
import { SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="relative bg-canvas py-20 md:py-28 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process that keeps everyone{" "}
              <span className="accent-serif text-gold-deep">honest</span>.
            </>
          }
          body="No black boxes and no surprise invoices. Four stages, each with a written output you sign off before the next one starts."
        />

        <Stagger className="relative mt-16" delay={0.1}>
          {/* connecting rail on desktop */}
          <span
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-line via-gold/45 to-line lg:block"
            aria-hidden
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((stage) => (
              <StaggerItem key={stage.step}>
                <div className="group relative">
                  <div className="relative flex size-14 items-center justify-center rounded-full border border-line bg-canvas text-sm font-semibold text-ink-400 transition-[background-color,color,border-color,transform] duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-1 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    {stage.step}
                  </div>
                  <h3 className="mt-6 text-title font-semibold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted text-pretty">
                    {stage.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
