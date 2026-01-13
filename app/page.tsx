import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatIsAguuSection } from "@/components/what-is-aguu-section"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ManualMethodSection } from "@/components/manual-method-section"
import { FounderStorySection } from "@/components/founder-story-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsAguuSection />
      <ValueProposition />
      <ServicesSection />
      <BenefitsSection />
      <ManualMethodSection />
      <FounderStorySection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
