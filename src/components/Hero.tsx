import { TypingEffect } from "./TypingEffect";
import heroBackground from "@/assets/hero-background.jpg";
import animationImg from "@/assets/animation.png";
import vfxImg from "@/assets/vfx.png";
import workAiImg from "@/assets/work-ai.jpg";
import { useEffect, useState } from "react";

const images = [
  { src: animationImg, label: "ANIMATION" },
  { src: vfxImg, label: "VFX" },
  { src: workAiImg, label: "AI" },
];

export const CircularImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <div className="relative w-80 h-80">
        {/* Orbital rings */}
        <div className="absolute inset-0 -m-8">
          <div className="w-full h-full border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
        </div>
        <div className="absolute inset-0 -m-16">
          <div className="w-full h-full border border-accent/20 rounded-full animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
        </div>
        
        {/* Images container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;
            
            let positionClass = "opacity-0 scale-50";
            if (isActive) {
              positionClass = "opacity-100 scale-100 z-30";
            } else if (isPrev) {
              positionClass = "opacity-40 scale-75 -translate-x-32 -translate-y-16 z-20";
            } else if (isNext) {
              positionClass = "opacity-40 scale-75 translate-x-32 translate-y-16 z-20";
            }
            
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${positionClass}`}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                  {isActive && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-foreground tracking-wider">{image.label}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-br from-primary via-accent to-primary animate-pulse" />
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in uppercase">
            <span className="bg-gradient-vibrant bg-clip-text text-transparent">
              southeastmedia
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 min-h-[120px] flex items-center md:justify-start justify-center animate-slide-up">
            <TypingEffect texts={heroTexts} typingSpeed={60} deletingSpeed={40} pauseDuration={2500} />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 md:justify-start justify-center animate-fade-in-slow">
            <button className="px-2 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(280_85%_65%/0.5)] transition-all duration-300 hover:scale-105">
              View Our Work
            </button>
            <button className="px-2 py-2 bg-transparent border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>
           {/* Left Column: Circular Image Carousel */}
        <div className="hidden md:flex justify-center items-center">
          <CircularImageCarousel />
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