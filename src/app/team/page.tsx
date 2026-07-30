import type { Metadata } from "next";
import { team } from "@/lib/team";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { MemberCard } from "@/components/team/MemberCard";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the researchers, marketers, film-makers and engineers behind HealthCast.",
};

export default function TeamPage() {
  const leadership = team.filter((member) => member.leadership);
  const specialists = team.filter((member) => !member.leadership);

  return (
    <>
      <PageHero
        eyebrow="Our team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
        title={
          <>
            Meet the{" "}
            <span className="accent-serif text-gold-deep">experts</span>.
          </>
        }
        body="Researchers, marketers, film-makers and engineers who have chosen to spend their careers on healthcare. The people you meet first are the people who do the work."
      />

      <section className="bg-canvas pb-16 pt-4 md:pb-20 md:pt-6">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Direction and delivery" />

          <Stagger
            className="mt-12 grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4"
            delay={0.08}
          >
            {leadership.map((member) => (
              <StaggerItem key={member.name}>
                <MemberCard member={member} showBio />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Operations & craft"
            title="The people who ship it"
          />

          <Stagger
            className="mt-12 grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4"
            delay={0.08}
          >
            {specialists.map((member) => (
              <StaggerItem key={member.name}>
                <MemberCard member={member} showBio />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </>
  );
}
