import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { AboutStrip } from "@/components/home/AboutStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Impact } from "@/components/home/Impact";
import { Process } from "@/components/home/Process";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <AboutStrip />
      <ServicesGrid />
      <Impact />
      <Process />
      <TeamPreview />
      <Testimonials />
      <CTABand />
    </>
  );
}
