import { Users, Award, Zap, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "200+", label: "Projects Completed" },
  { icon: Zap, value: "10+", label: "Years Experience" },
  { icon: Target, value: "98%", label: "Client Satisfaction" }
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 uppercase">
            Who We <span className="bg-gradient-vibrant bg-clip-text text-transparent">Are</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            We're a passionate team of artists, technologists, and storytellers dedicated to pushing the boundaries of visual media. 
            By combining traditional craftsmanship with cutting-edge AI technology, we create experiences that captivate and inspire.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
