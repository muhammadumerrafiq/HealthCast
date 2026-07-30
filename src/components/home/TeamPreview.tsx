import { team } from "@/lib/team";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { MemberCard } from "@/components/team/MemberCard";

export function TeamPreview() {
  const leaders = team.filter((member) => member.leadership);

  return (
    <section className="bg-sand py-20 md:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>The people</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-headline font-semibold text-ink text-balance">
                Small team,{" "}
                <span className="accent-serif text-gold-deep">
                  senior people
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">
                The people you meet in the first conversation are the people who
                do the work. No handover to a junior team after signing.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <ButtonLink href="/team" variant="outline" arrow>
              Meet the team
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid grid-cols-2 gap-5 md:gap-6 lg:grid-cols-4"
          delay={0.1}
        >
          {leaders.map((member) => (
            <StaggerItem key={member.name}>
              <MemberCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
