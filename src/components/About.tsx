import { Users, Award, Zap, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "200+", label: "Projects Completed" },
  { icon: Zap, value: "10+", label: "Years Experience" },
  { icon: Target, value: "98%", label: "Client Satisfaction" }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We <span className="bg-gradient-vibrant bg-clip-text text-transparent">Are</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of artists, technologists, and storytellers dedicated to pushing the boundaries of visual media. 
            By combining traditional craftsmanship with cutting-edge AI technology, we create experiences that captivate and inspire.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
