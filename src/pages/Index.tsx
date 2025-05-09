import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0b1f]">
      {/* Stars background */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          opacity: 0.5,
        }}
      />

      {/* Large stars - fewer and brighter */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          opacity: 0.7,
        }}
      />

      {/* Nebula effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]"></div>
        <div className="absolute bottom-[30%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-800/20 blur-[120px]"></div>
        <div className="absolute top-[60%] right-[20%] w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[80px]"></div>
      </div>

      <Navbar />
      <HeroSection scrollY={scrollY} />
      <FeatureSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
