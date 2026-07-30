"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp button — appears once the hero is out of the way. */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with HealthCast on WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-0 overflow-hidden rounded-full bg-ink py-3.5 pl-4 pr-4 text-canvas shadow-[0_16px_34px_-16px_rgba(12,39,36,0.9)] transition-[padding,background-color] duration-400 ease-[var(--ease-expo)] hover:bg-teal md:bottom-8 md:right-8"
        >
          <span className="relative flex size-6 shrink-0 items-center justify-center">
            <span
              className="absolute inset-0 rounded-full bg-gold/40 animate-ring"
              aria-hidden
            />
            <WhatsAppGlyph />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-[max-width,margin] duration-500 ease-[var(--ease-expo)] group-hover:ml-2.5 group-hover:max-w-40">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function WhatsAppGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative size-5 fill-current"
      aria-hidden
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.93.96-3.47-.23-.36a9.36 9.36 0 0 1-1.44-5.01c0-5.18 4.23-9.4 9.43-9.4a9.36 9.36 0 0 1 6.66 2.76 9.32 9.32 0 0 1 2.76 6.65c0 5.18-4.23 9.4-9.42 9.4zM20.5 3.49A11.75 11.75 0 0 0 12.05 0C5.55 0 .26 5.28.26 11.77c0 2.07.54 4.1 1.57 5.88L.16 24l6.5-1.7a11.78 11.78 0 0 0 5.39 1.37h.01c6.5 0 11.79-5.28 11.79-11.77 0-3.14-1.23-6.1-3.45-8.32z" />
    </svg>
  );
}
