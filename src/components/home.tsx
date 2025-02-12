import React from "react";
import HeroSection from "./HeroSection";
import StatisticsBanner from "./StatisticsBanner";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Header from "./Header";
import PricingPlans from "./PricingPlans";
import Footer from "./Footer";
import ExamCategories from "./ExamCategories";
import Features from "./Features";
import ExamAlerts from "./ExamAlerts";

const HomePage = () => {
  const handleExplore = () => {
    // Handle explore courses action
    console.log("Explore courses clicked");
  };

  const handleStartTrial = () => {
    // Handle start trial action
    console.log("Start trial clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onExplore={handleExplore} onStartTrial={handleStartTrial} />
      <StatisticsBanner />
      <ExamCategories />
      <Features />
      <ExamAlerts />
      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <TestimonialsCarousel />
      </div>
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default HomePage;
