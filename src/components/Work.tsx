import workAnimation from "@/assets/work-animation.jpg";
import workVfx from "@/assets/work-vfx.jpg";
import workAi from "@/assets/work-ai.jpg";

const projects = [
  {
    title: "Character Animation",
    description: "Bringing beloved characters to life with fluid, expressive animations that tell compelling stories. Our team crafts every movement with precision and artistic flair.",
    image: workAnimation,
    tags: ["3D Animation", "Character Design", "Motion Capture"]
  },
  {
    title: "Cinematic VFX",
    description: "Creating stunning visual effects that seamlessly blend with live-action footage. From explosive action sequences to subtle environmental enhancements.",
    image: workVfx,
    tags: ["Visual Effects", "Compositing", "CGI"]
  },
  {
    title: "AI-Powered Production",
    description: "Leveraging cutting-edge AI technology to streamline workflows, enhance creativity, and deliver unprecedented results in record time.",
    image: workAi,
    tags: ["AI Integration", "Machine Learning", "Automation"]
  }
];

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="bg-gradient-vibrant bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          A showcase of our latest projects where creativity meets technology
        </p>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 group">
                <div className="relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 rounded-full bg-muted/50 text-sm text-foreground/80 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_20px_hsl(280_85%_65%/0.4)] transition-all duration-300 hover:scale-105">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
