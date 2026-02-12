"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import SubscriptionSection from "@/components/sections/subscription-section";
import DashboardSection from "@/components/sections/dashboard-section";

export default function Home() {
  return (
    <main className="relative w-screen min-h-screen flex flex-col items-center bg-background">
      <Navbar />

      <HeroSection />
      <FeaturesSection variant="main" />
      <SubscriptionSection />
      <FeaturesSection variant="secondary" />
      <DashboardSection />

      <Footer />
    </main>
  );
}
