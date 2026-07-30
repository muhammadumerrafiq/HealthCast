"use client";

import { motion } from "motion/react";
import { Activity, ShieldCheck, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-32 lg:pt-44">
      <Backdrop />

      <div className="container-x relative">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09 }}
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          {/* ---------------- copy ---------------- */}
          <div className="max-w-2xl">
            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-surface/70 py-1.5 pl-2.5 pr-4 text-[0.78rem] font-medium text-ink-600 backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-2 rounded-full bg-gold animate-ring" />
                <span className="relative inline-flex size-2 rounded-full bg-gold-deep" />
              </span>
              Research &middot; Communication &middot; Technology
            </motion.div>

            <motion.h1
              variants={rise}
              transition={{ duration: 0.85, ease }}
              className="mt-7 text-display font-semibold text-ink text-balance"
            >
              The growth partner for{" "}
              <span className="accent-serif text-gold-deep">
                modern healthcare
              </span>
              .
            </motion.h1>

            <motion.p
              variants={rise}
              transition={{ duration: 0.8, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty md:text-xl"
            >
              HealthCast brings medical research, digital marketing, media
              production and engineering under one roof — so healthcare
              organisations can communicate with clarity, prove impact with
              evidence, and grow with confidence.
            </motion.p>

            <motion.div
              variants={rise}
              transition={{ duration: 0.8, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contact" size="lg" arrow>
                Start a project
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="outline">
                Explore our services
              </ButtonLink>
            </motion.div>

            <motion.dl
              variants={rise}
              transition={{ duration: 0.8, ease }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
            >
              {[
                { k: "12+", v: "Healthcare partners" },
                { k: "4", v: "Disciplines in-house" },
                { k: "100%", v: "Responsive design" },
              ].map((item) => (
                <div key={item.v}>
                  <dt className="text-2xl font-semibold tracking-tight text-ink">
                    {item.k}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {item.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---------------- visual ---------------- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <VitalsCard />

            {/* offsets keep these clear of the card's own header and stat row */}
            <FloatingCard
              className="-left-5 top-28 md:-left-10"
              delay={0.85}
              icon={<TrendingUp className="size-4" strokeWidth={2} />}
              label="Campaign reach"
              value="+214%"
            />
            <FloatingCard
              className="-bottom-8 -right-4 md:-right-8"
              delay={1.05}
              icon={<ShieldCheck className="size-4" strokeWidth={2} />}
              label="Performance"
              value="Optimized"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */

function VitalsCard() {
  return (
    // extra bottom padding keeps the stat row clear of the floating card
    <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-6 pb-11 text-canvas shadow-[0_40px_90px_-40px_rgba(12,39,36,0.75)] md:p-8 md:pb-16">
      <div
        className="pointer-events-none absolute inset-0 text-canvas/[0.07] bg-dotgrid"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Activity className="size-4 text-gold" strokeWidth={2} aria-hidden />
          <span className="text-sm font-medium">Impact monitor</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-canvas/70">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden />
          Live
        </span>
      </div>

      <PulseLine />

      <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-canvas/10 pt-6">
        {[
          { label: "Studies", value: "18" },
          { label: "Campaigns", value: "40+" },
          { label: "Uptime", value: "99.9%" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-xl font-semibold tracking-tight text-canvas">
              {stat.value}
            </p>
            <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.12em] text-canvas/45">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Vitals-monitor trace: a dim baseline with a bright pulse travelling it. */
function PulseLine() {
  const d =
    "M0 80 H50 l12 -10 l12 10 H95 l8 8 l10 -58 l10 70 l8 -20 H180 l16 -14 l16 14 H300 " +
    "H350 l12 -10 l12 10 H395 l8 8 l10 -58 l10 70 l8 -20 H480 l16 -14 l16 14 H600";

  return (
    <div className="relative mt-6 h-32 md:h-36">
      <svg
        viewBox="0 0 600 160"
        fill="none"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        <path
          d={d}
          stroke="currentColor"
          className="text-canvas/20"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={d}
          stroke="var(--color-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-trace [filter:drop-shadow(0_0_6px_rgba(240,180,41,0.55))]"
        />
      </svg>
    </div>
  );
}

function FloatingCard({
  className,
  icon,
  label,
  value,
  delay,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease, delay }}
      className={`absolute z-10 hidden sm:block ${className ?? ""}`}
    >
      <div className="animate-float rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-[0_20px_44px_-24px_rgba(12,39,36,0.4)] backdrop-blur">
        <div className="flex items-center gap-2 text-gold-deep">
          {icon}
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
            {label}
          </span>
        </div>
        <p className="mt-1.5 text-lg font-semibold tracking-tight text-ink">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-[38rem] text-ink/[0.055] bg-dotgrid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-gold/12 blur-[110px]" />
      <div className="absolute -left-52 top-40 size-[30rem] rounded-full bg-teal/8 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
