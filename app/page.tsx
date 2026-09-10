"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel, { Drink, DRINKS } from "@/components/HeroCarousel";
import PopularSection from "@/components/PopularSection";
import CraftSection from "@/components/CraftSection";
import MenuSection from "@/components/MenuSection";
import ComparisonSection from "@/components/ComparisonSection";
import FactsSection from "@/components/FactsSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentDrink, setCurrentDrink] = useState<Drink>(DRINKS[0]);

  return (
    <main id="top" className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Sticky Header with Dynamic Text Color coordinated with active hero slide */}
      <Navbar currentTextColor={currentDrink.textColor} />

      {/* 1. Full-Viewport Hero Carousel */}
      <HeroCarousel onActiveDrinkChange={setCurrentDrink} />

      {/* 2. Four Most Popular Section */}
      <PopularSection />

      {/* 3. What Makes Our Matcha Special */}
      <CraftSection />

      {/* 4. Tabbed Menu Section */}
      <MenuSection />

      {/* 5. Why Our Matcha Is Superior (Inverted Full-Black Section) */}
      <ComparisonSection />

      {/* 6. Matcha Facts & Botanical Stats */}
      <FactsSection />

      {/* 7. Google Reviews (4.6★ / 298 Reviews) */}
      <ReviewsSection />

      {/* 8. Location & Visiting Hours */}
      <LocationSection />

      {/* 9. Minimal Footer */}
      <Footer />
    </main>
  );
}
