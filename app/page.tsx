import HeroSection from "@/components/HeroSection";
import MetricsStrip from "@/components/MetricsStrip";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import WhyUsSection from "@/components/WhyUsSection";
import SocialProofSection from "@/components/SocialProofSection";
import PlatformSection from "@/components/PlatformSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import OurPromiseSection from "@/components/OurPromiseSection";
import ScarcitySection from "@/components/ScarcitySection";
import CTASection from "@/components/CTASection";
import TLDRSection from "@/components/TLDRSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MetricsStrip />
      <PainSection />
      <SolutionSection />
      <WhyUsSection />
      <SocialProofSection />
      <PlatformSection />
      <WhoIsItForSection />
      <OurPromiseSection />
      <ScarcitySection />
      <CTASection />
      <TLDRSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
