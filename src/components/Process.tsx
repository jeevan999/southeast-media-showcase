import { Lightbulb, Palette, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Concept",
    description: "We dive deep into your vision, exploring ideas and crafting the perfect creative strategy."
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our artists bring concepts to life with stunning visuals and detailed storyboards."
  },
  {
    icon: Cog,
    title: "Production",
    description: "Using state-of-the-art tools and AI, we execute with precision and efficiency."
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "Final polish, quality checks, and seamless delivery of your project."
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="bg-gradient-vibrant bg-clip-text text-transparent">Process</span>
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          A streamlined workflow designed to deliver exceptional results
        </p>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-vibrant flex items-center justify-center text-background font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
