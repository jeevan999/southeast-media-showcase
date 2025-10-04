import { TypingEffect } from "./TypingEffect";
import heroBackground from "@/assets/hero-background.jpg";

import { useEffect, useState } from "react";

interface IconProps {
  className?: string;
}

const CameraIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
  >
    <rect x="40" y="60" width="120" height="80" rx="10" strokeWidth="4" />
    <circle cx="100" cy="100" r="25" strokeWidth="4" />
    <circle cx="100" cy="100" r="15" strokeWidth="3" />
    <rect x="70" y="45" width="60" height="15" rx="5" strokeWidth="3" />
    <circle cx="140" cy="75" r="5" fill="currentColor" />
  </svg>
);

const ReelIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
  >
    <circle cx="70" cy="100" r="40" strokeWidth="4" />
    <circle cx="70" cy="100" r="15" strokeWidth="3" />
    <line x1="70" y1="60" x2="70" y2="75" strokeWidth="3" />
    <line x1="70" y1="125" x2="70" y2="140" strokeWidth="3" />
    <line x1="30" y1="100" x2="45" y2="100" strokeWidth="3" />
    <line x1="95" y1="100" x2="110" y2="100" strokeWidth="3" />
    
    <circle cx="130" cy="100" r="40" strokeWidth="4" />
    <circle cx="130" cy="100" r="15" strokeWidth="3" />
    <line x1="130" y1="60" x2="130" y2="75" strokeWidth="3" />
    <line x1="130" y1="125" x2="130" y2="140" strokeWidth="3" />
    <line x1="90" y1="100" x2="105" y2="100" strokeWidth="3" />
    <line x1="155" y1="100" x2="170" y2="100" strokeWidth="3" />
    
    <rect x="25" y="50" width="150" height="10" rx="2" strokeWidth="3" />
  </svg>
);

const AIIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
  >
    <circle cx="100" cy="100" r="50" strokeWidth="4" />
    <circle cx="100" cy="100" r="8" fill="currentColor" />
    
    <circle cx="75" cy="75" r="8" fill="currentColor" />
    <circle cx="125" cy="75" r="8" fill="currentColor" />
    <circle cx="75" cy="125" r="8" fill="currentColor" />
    <circle cx="125" cy="125" r="8" fill="currentColor" />
    
    <line x1="100" y1="100" x2="75" y2="75" strokeWidth="3" />
    <line x1="100" y1="100" x2="125" y2="75" strokeWidth="3" />
    <line x1="100" y1="100" x2="75" y2="125" strokeWidth="3" />
    <line x1="100" y1="100" x2="125" y2="125" strokeWidth="3" />
    
    <path d="M 60 50 L 100 30 L 140 50" strokeWidth="3" strokeLinecap="round" />
    <path d="M 150 60 L 170 100 L 150 140" strokeWidth="3" strokeLinecap="round" />
    <path d="M 140 150 L 100 170 L 60 150" strokeWidth="3" strokeLinecap="round" />
    <path d="M 50 140 L 30 100 L 50 60" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const VFXIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
  >
    <path d="M 50 100 L 80 60 L 110 100 L 80 140 Z" strokeWidth="4" />
    <path d="M 90 100 L 120 60 L 150 100 L 120 140 Z" strokeWidth="4" />
    
    <circle cx="80" cy="60" r="6" fill="currentColor" />
    <circle cx="120" cy="60" r="6" fill="currentColor" />
    <circle cx="100" cy="100" r="6" fill="currentColor" />
    <circle cx="80" cy="140" r="6" fill="currentColor" />
    <circle cx="120" cy="140" r="6" fill="currentColor" />
    
    <line x1="60" y1="50" x2="70" y2="40" strokeWidth="3" strokeLinecap="round" />
    <line x1="140" y1="50" x2="150" y2="40" strokeWidth="3" strokeLinecap="round" />
    <line x1="60" y1="150" x2="70" y2="160" strokeWidth="3" strokeLinecap="round" />
    <line x1="140" y1="150" x2="150" y2="160" strokeWidth="3" strokeLinecap="round" />
    
    <circle cx="100" cy="100" r="60" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
  </svg>
);

const icons = [
  { Component: CameraIcon, label: "CAMERA" },
  { Component: ReelIcon, label: "REEL" },
  { Component: AIIcon, label: "AI" },
  { Component: VFXIcon, label: "VFX" },
];

export const SVGEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % icons.length);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIndex].Component;

  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
      <div className="relative">
        {/* Glow background */}
        <div className="absolute inset-0 blur-3xl opacity-50 rounded-full bg-white/20 animate-glow-pulse" />
        
        {/* Shine effect overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
        </div>
        
        {/* Main icon container */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <CurrentIcon className="w-full h-full text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
        
        {/* Orbital rings */}
        <div className="absolute inset-0 -m-12">
          <div className="w-full h-full border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
        </div>
        <div className="absolute inset-0 -m-16">
          <div className="w-full h-full border border-white/5 rounded-full animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
        </div>
      </div>
    </div>
  );
};


export const Hero = () => {
  const heroTexts = [
    "Crafting immersive visuals. Intelligent media experiences.",
    "Animation. VFX. AI. All under one roof.",
    "Transforming stories with tech, art, and intelligence."
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Animated Gradient Accents - Keeping these as part of the background effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content Container - Use a grid or flex for two columns */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-screen pt-20 pb-12">

        {/* Right Column: Hero Text and Buttons */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-vibrant bg-clip-text text-transparent">
              southeastmedia
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 min-h-[120px] flex items-center md:justify-start justify-center animate-slide-up">
            <TypingEffect texts={heroTexts} typingSpeed={60} deletingSpeed={40} pauseDuration={2500} />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 md:justify-start justify-center animate-fade-in-slow">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(280_85%_65%/0.5)] transition-all duration-300 hover:scale-105">
              View Our Work
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>
           {/* Left Column: SVG Animation */}
        <div className="hidden md:flex justify-center items-center">
          <SVGEffect />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};