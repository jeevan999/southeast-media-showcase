import { Sparkles, Wand2, Brain } from "lucide-react";
import Tdcarou from "./TDcarousel";

const services = [
  {
    icon: Wand2,
    title: "Animation",
    description: "Breathe life into your ideas with stunning 2D and 3D animations that captivate and engage audiences."
  },
  {
    icon: Sparkles,
    title: "VFX",
    description: "Transform reality with cutting-edge visual effects that blur the line between imagination and reality."
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Harness the power of artificial intelligence to create smarter, faster, and more innovative content."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="bg-gradient-vibrant bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          We combine cutting-edge technology with artistic excellence to deliver exceptional media experiences
        </p>
        <Tdcarou/>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(280_85%_65%/0.2)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-vibrant flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
