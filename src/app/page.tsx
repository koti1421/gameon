import { HeroSection } from "@/components/sections/HeroSection";
import { SportsGrid } from "@/components/sections/SportsGrid";
import { HowItWorks, FeaturesGrid } from "@/components/sections/FeaturesSection";
import { StatsBanner, CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SportsGrid />
      <HowItWorks />
      <FeaturesGrid />
      <StatsBanner />
      <CTASection />
    </div>
  );
}
