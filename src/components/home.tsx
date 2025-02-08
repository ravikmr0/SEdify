import React from "react";
import HeroSection from "./HeroSection";
import FeaturedCourses from "./FeaturedCourses";
import StatisticsBanner from "./StatisticsBanner";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Header from "./Header";
import PricingPlans from "./PricingPlans";
import EducatorPartnerships from "./EducatorPartnerships";
import Footer from "./Footer";

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

      <div className="max-w-[1200px] mx-auto">
        <FeaturedCourses />
      </div>

      <StatisticsBanner />

      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <TestimonialsCarousel />
      </div>

      <PricingPlans />
      <EducatorPartnerships />
      <Footer />
    </div>
  );
};

export default HomePage;
