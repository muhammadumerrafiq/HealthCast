import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-canvas md:py-32">
      <div
        className="pointer-events-none absolute inset-0 text-canvas/[0.055] bg-dotgrid [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-gold/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-teal/20 blur-[110px]"
        aria-hidden
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="dark" className="justify-center">
              Your vision, realised
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-6 text-headline font-semibold text-canvas text-balance">
              Let&rsquo;s build something your patients can{" "}
              <span className="accent-serif text-gold">trust</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-canvas/60 text-pretty">
              Tell us what you are working on. We will come back within two
              working days with an honest view of whether we are the right team
              for it.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/contact" size="lg" arrow>
                Start a project
              </ButtonLink>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-canvas/20 px-7 text-base font-medium text-canvas transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-expo)] hover:-translate-y-0.5 hover:border-canvas/45 hover:bg-canvas/5"
              >
                Chat on WhatsApp
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                  aria-hidden
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-canvas/10 pt-8 text-sm text-canvas/55">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="size-4" strokeWidth={1.7} aria-hidden />
                {site.email}
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone className="size-4" strokeWidth={1.7} aria-hidden />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
