import Image from "next/image";
import { clientLogos } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function ClientMarquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const track = [...clientLogos, ...clientLogos];

  return (
    <section className="relative border-y border-line bg-canvas py-14">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink-400">
            Trusted by leading healthcare organisations
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        {/* overflow-hidden is load-bearing: the track is ~3900px wide.
            The supplied logo files have inconsistent backgrounds, so each one
            sits in an identical white tile rather than floating on the canvas. */}
        <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
            {track.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="group relative h-24 w-44 shrink-0 overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-500 ease-[var(--ease-expo)] hover:-translate-y-1 hover:border-gold/50"
              >
                <Image
                  src={logo.src}
                  alt={index < clientLogos.length ? logo.alt : ""}
                  aria-hidden={index >= clientLogos.length}
                  fill
                  sizes="176px"
                  className="scale-110 object-contain p-3 opacity-75 grayscale transition-[filter,opacity] duration-500 ease-[var(--ease-expo)] group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
