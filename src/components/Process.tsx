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
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 uppercase">
          Our <span className="bg-gradient-vibrant bg-clip-text text-transparent">Process</span>
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto px-4">
          A streamlined workflow designed to deliver exceptional results
        </p>

        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card/50 border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-2 sm:mt-4">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
