import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-canvas py-40 md:py-56">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 text-ink/[0.05] bg-dotgrid [mask-image:radial-gradient(55%_55%_at_50%_40%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/3 size-[26rem] -translate-x-1/2 rounded-full bg-gold/12 blur-[110px]" />
      </div>

      <div className="container-x relative text-center">
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <h1 className="mt-6 text-display font-semibold text-ink">
          Page not <span className="accent-serif text-gold-deep">found</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
          The page you were looking for has moved or never existed. Let&rsquo;s
          get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/" size="lg" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="outline">
            Browse services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
