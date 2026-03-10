import { HeroSection } from "./components/hero-section";
import { PainPointsSection } from "./components/pain-points-section";
import { BenefitsSection } from "./components/benefits-section";
import { PropertyTypesSection } from "./components/property-types-section";
import { PricingSection } from "./components/pricing-section";
import { FlowSection } from "./components/flow-section";
import { FAQSection } from "./components/faq-section";
import { FooterSection } from "./components/footer-section";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <PropertyTypesSection />
      <PricingSection />
      <FlowSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
