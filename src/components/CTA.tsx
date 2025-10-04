import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-cosmic relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to Create Something{" "}
            <span className="bg-gradient-vibrant bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. From concept to completion, 
            we're here to make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(240_5%_96%/0.3)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-transparent border-2 border-foreground/30 text-foreground rounded-lg font-semibold hover:border-foreground hover:bg-foreground/10 transition-all duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-foreground/20">
            <p className="text-foreground/60 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              <div className="text-foreground/80 font-semibold">Brand A</div>
              <div className="text-foreground/80 font-semibold">Brand B</div>
              <div className="text-foreground/80 font-semibold">Brand C</div>
              <div className="text-foreground/80 font-semibold">Brand D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
