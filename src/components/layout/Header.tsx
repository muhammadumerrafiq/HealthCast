"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation — adjusted during render rather than in an
  // effect, so the menus never paint open on the new page.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // The drawer is anchored at top-16, so the bar locks to its compact,
  // opaque state while the menu is open.
  const compact = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[var(--ease-expo)]",
        compact
          ? "bg-canvas/80 shadow-[0_1px_0_rgba(12,39,36,0.07)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-x">
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-500 ease-[var(--ease-expo)]",
            compact ? "h-16" : "h-20 md:h-24",
          )}
        >
          <Logo />

          {/* ---------- desktop nav ---------- */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setServicesOpen(false)}
          >
            {nav.map((item) =>
              item.hasMenu ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <Link
                    href={item.href}
                    aria-expanded={servicesOpen}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                      isActive(item.href)
                        ? "text-ink"
                        : "text-ink-400 hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.99 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-[0_24px_60px_-24px_rgba(12,39,36,0.28)]">
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group flex gap-3 rounded-xl p-3 transition-colors duration-300 hover:bg-sand"
                              >
                                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold-soft text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                                  <service.icon
                                    className="size-4.5"
                                    strokeWidth={1.8}
                                    aria-hidden
                                  />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-ink">
                                    {service.title}
                                  </span>
                                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                                    {service.tagline}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/services"
                            className="mt-1 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-ink-800"
                          >
                            All services
                            <span aria-hidden>&rarr;</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink-400 hover:text-ink",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-gold"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {/* wrapper does the hiding — the button sets its own `display` */}
            <span className="hidden sm:block">
              <ButtonLink href="/contact" size="sm" arrow>
                Start a project
              </ButtonLink>
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors duration-300 hover:bg-ink/[0.04] lg:hidden"
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={1.8} />
              ) : (
                <Menu className="size-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-canvas lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="container-x flex h-full flex-col overflow-y-auto pb-10 pt-6"
            >
              {nav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block border-b border-line py-4 text-2xl font-semibold tracking-tight transition-colors",
                      isActive(item.href) ? "text-ink" : "text-ink-400",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-400">
                  Services
                </p>
                <ul className="mt-3 space-y-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3 rounded-xl py-2.5 text-base text-ink-600"
                      >
                        <service.icon
                          className="size-4 text-gold-deep"
                          strokeWidth={1.8}
                          aria-hidden
                        />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <ButtonLink href="/contact" size="lg" className="w-full" arrow>
                    Start a project
                  </ButtonLink>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="block text-center text-sm text-muted"
                  >
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
