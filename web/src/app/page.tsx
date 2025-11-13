import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import ProofSection from "@/components/sections/ProofSection";
import BlueprintSection from "@/components/sections/BlueprintSection";
import PricingSection from "@/components/sections/PricingSection";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundImage: "url(/pageBg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#070C20",
      }}
    >
      <main className="relative">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <UseCasesSection />
        <ProofSection />
        <BlueprintSection />
        <PricingSection />
        
      </main>
    </div>
  );
}
