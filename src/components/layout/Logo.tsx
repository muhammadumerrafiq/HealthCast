import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex size-9 shrink-0 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full bg-gold/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <Image
          src="/brand/healthcast-mark.png"
          alt=""
          width={72}
          height={72}
          priority
          className="size-9 rounded-full object-contain transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-105"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.05rem] font-semibold tracking-[-0.02em]",
            tone === "light" ? "text-ink" : "text-canvas",
          )}
        >
          Health<span className="text-gold-deep">Cast</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-medium uppercase tracking-[0.22em]",
            tone === "light" ? "text-ink-400" : "text-canvas/50",
          )}
        >
          SMC Pvt Ltd
        </span>
      </span>
    </Link>
  );
}
