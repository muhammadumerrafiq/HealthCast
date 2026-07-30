import Image from "next/image";
import { initials, type Member } from "@/lib/team";
import { cn } from "@/lib/cn";

/**
 * No photography was supplied with the brief, so members are represented by
 * a serif monogram. Swap the monogram block for an <Image> when portraits
 * are available — the card layout does not need to change.
 */
export function MemberCard({
  member,
  showBio = false,
  className,
}: {
  member: Member;
  showBio?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-line bg-sand transition-[border-color,transform] duration-600 ease-[var(--ease-expo)] group-hover:-translate-y-1.5 group-hover:border-gold/50">
        <div
          className="absolute inset-0 text-ink/[0.06] bg-dotgrid"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gold-soft/70 to-transparent opacity-0 transition-opacity duration-600 ease-[var(--ease-expo)] group-hover:opacity-100"
          aria-hidden
        />
        {/* monogram, sitting inside a thin ring that warms up on hover */}
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span
            className={cn(
              "relative flex items-center justify-center overflow-hidden rounded-full border border-ink/12 bg-canvas/50 font-display text-3xl text-ink/55 transition-[transform,border-color,color,background-color] duration-600 ease-[var(--ease-expo)] group-hover:scale-105 group-hover:border-gold group-hover:bg-canvas group-hover:text-ink md:text-4xl",
              member.image ? "size-32 md:size-38" : "size-24 md:size-28"
            )}
          >
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 128px, 152px"
                className={cn(
                  "object-cover",
                  member.imagePosition ?? "object-center",
                  member.imageScale ?? ""
                )}
              />
            ) : (
              initials(member.name)
            )}
          </span>
        </span>

        {/* corner rule that draws in on hover */}
        <span
          className="absolute bottom-5 left-5 h-px w-0 bg-ink/40 transition-[width] duration-600 ease-[var(--ease-expo)] group-hover:w-10"
          aria-hidden
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-gold-deep">{member.role}</p>
      {showBio && (
        <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
          {member.bio}
        </p>
      )}
    </article>
  );
}
