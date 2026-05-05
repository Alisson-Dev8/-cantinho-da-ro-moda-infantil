import {
  AboutSection,
  BenefitsSection,
  CollectionsSection,
  Footer,
  Header,
  HeroSection,
  TestimonialsSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <CollectionsSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
