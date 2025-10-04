import { TypingEffect } from "./TypingEffect";
import heroBackground from "@/assets/hero-background.jpg";

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
      
      {/* Animated Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
          <span className="bg-gradient-vibrant bg-clip-text text-transparent">
            southeastmedia
          </span>
        </h1>
        
        <div className="text-xl md:text-3xl lg:text-4xl font-light text-foreground/90 min-h-[120px] flex items-center justify-center animate-slide-up">
          <TypingEffect texts={heroTexts} typingSpeed={60} deletingSpeed={40} pauseDuration={2500} />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(280_85%_65%/0.5)] transition-all duration-300 hover:scale-105">
            View Our Work
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105">
            Start a Project
          </button>
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
