import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

/** Shared masthead for every inner page. */
export function PageHero({
  eyebrow,
  title,
  body,
  breadcrumbs,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-canvas pb-16 pt-32 md:pb-20 md:pt-40 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-96 text-ink/[0.05] bg-dotgrid [mask-image:radial-gradient(65%_70%_at_50%_0%,black,transparent)]" />
        <div className="absolute -right-40 -top-52 size-[30rem] rounded-full bg-gold/12 blur-[110px]" />
      </div>

      <div className="container-x relative">
        {breadcrumbs && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 && (
                      <ChevronRight
                        className="size-3 text-ink/25"
                        strokeWidth={2}
                        aria-hidden
                      />
                    )}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="link-underline transition-colors hover:text-ink"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-ink">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 text-headline font-semibold text-ink text-balance md:text-display">
                {title}
              </h1>
            </Reveal>
          </div>

          {(body || aside) && (
            <Reveal delay={0.14} className="lg:pb-2">
              {body && (
                <p className="text-lg leading-relaxed text-muted text-pretty">
                  {body}
                </p>
              )}
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
