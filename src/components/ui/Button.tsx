import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight " +
  "transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-[var(--ease-expo)] " +
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_8px_20px_-8px_rgba(201,139,6,0.7)] hover:bg-gold-deep hover:text-white",
  dark: "bg-ink text-canvas hover:bg-ink-800 shadow-[0_10px_24px_-14px_rgba(12,39,36,0.9)]",
  outline:
    "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:bg-ink/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Adds the diagonal arrow that nudges on hover. */
  arrow?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  arrow,
  ...rest
}: Common & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  arrow,
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

function Arrow() {
  return (
    <ArrowUpRight
      className="size-4 transition-transform duration-300 ease-[var(--ease-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      strokeWidth={2}
      aria-hidden
    />
  );
}
