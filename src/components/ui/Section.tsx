import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

/** Small uppercase label that sits above every section heading. */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em]",
        tone === "light" ? "text-ink-400" : "text-gold",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "light" ? "bg-ink/25" : "bg-gold/50",
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow
            tone={tone}
            className={align === "center" ? "justify-center" : undefined}
          >
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "mt-5 text-headline font-semibold text-balance",
            tone === "light" ? "text-ink" : "text-canvas",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed text-pretty",
              tone === "light" ? "text-muted" : "text-canvas/65",
            )}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "canvas",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "canvas" | "sand" | "ink" | "none";
}) {
  const tones = {
    canvas: "bg-canvas",
    sand: "bg-sand",
    ink: "bg-ink text-canvas",
    none: "",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-32",
        tones[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}
