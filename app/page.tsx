"use client";

import React from "react";
import {
  Header,
  HeroSection,
  ProblemsSection,
  MethodSection,
  ModulesSection,
  BonusSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  CTASection,
  Footer,
} from "./components";
import { useHashNavigation } from "./hooks/useHashNavigation";

export default function Home() {
  useHashNavigation();

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <MethodSection />
        <ModulesSection />
        <BonusSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
