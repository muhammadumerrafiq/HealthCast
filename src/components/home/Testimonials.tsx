"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const active = testimonials[index];

  return (
    <section
      className="bg-canvas py-20 md:py-28 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Client words</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-10 max-w-3xl text-center">
            <Quote
              className="mx-auto size-8 text-gold"
              strokeWidth={1.5}
              aria-hidden
            />

            <div className="relative mt-8 min-h-52 sm:min-h-44">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 34 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -34 }}
                  transition={{ duration: 0.5, ease }}
                  className="absolute inset-0"
                >
                  <blockquote className="text-2xl font-medium leading-snug tracking-[-0.02em] text-ink text-balance md:text-[2rem]">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center justify-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-sand font-display text-lg text-ink-600">
                      {active.name.charAt(0)}
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-semibold text-ink">
                        {active.name}
                      </span>
                      <span className="block text-xs text-muted">
                        {active.role}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5">
              <NavButton
                label="Previous testimonial"
                onClick={() => go(index - 1, -1)}
              >
                <ArrowLeft className="size-4" strokeWidth={2} aria-hidden />
              </NavButton>

              <div className="flex items-center gap-2">
                {testimonials.map((item, dot) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Go to testimonial ${dot + 1}`}
                    aria-current={dot === index}
                    onClick={() => go(dot, dot > index ? 1 : -1)}
                    className={cn(
                      "h-1.5 rounded-full transition-[width,background-color] duration-500 ease-[var(--ease-expo)]",
                      dot === index
                        ? "w-7 bg-gold"
                        : "w-1.5 bg-ink/15 hover:bg-ink/30",
                    )}
                  />
                ))}
              </div>

              <NavButton
                label="Next testimonial"
                onClick={() => go(index + 1, 1)}
              >
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
              </NavButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NavButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink transition-[background-color,border-color,transform] duration-400 ease-[var(--ease-expo)] hover:-translate-y-0.5 hover:border-ink/30 hover:bg-surface"
    >
      {children}
    </button>
  );
}
