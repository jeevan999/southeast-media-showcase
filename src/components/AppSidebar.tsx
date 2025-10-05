import { Wand2, Sparkles, Brain, Play, Briefcase, Users, FolderOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import menuAnimation from "@/assets/menu-animation.jpg";
import menuVfx from "@/assets/menu-vfx.jpg";
import menuAi from "@/assets/menu-ai.jpg";
import menuMotion from "@/assets/menu-motion.jpg";

const servicesMenu = [
  {
    icon: Wand2,
    title: "2D/3D Animation",
    description: "Character animation, motion design, and storytelling",
    image: menuAnimation,
    link: "#animation"
  },
  {
    icon: Sparkles,
    title: "Visual Effects",
    description: "Cinematic VFX, compositing, and CGI integration",
    image: menuVfx,
    link: "#vfx"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "AI-powered production and automation",
    image: menuAi,
    link: "#ai"
  },
  {
    icon: Play,
    title: "Motion Graphics",
    description: "Dynamic graphics and brand animations",
    image: menuMotion,
    link: "#motion"
  }
];

const workMenu = [
  { title: "Animation Projects", description: "Character & story work", link: "#work", icon: Wand2 },
  { title: "VFX Showreel", description: "Latest visual effects", link: "#work", icon: Sparkles },
  { title: "Client Case Studies", description: "Success stories", link: "#work", icon: Briefcase }
];

const quickLinks = [
  { title: "About", link: "#about", icon: Users },
  { title: "Careers", link: "#about", icon: Briefcase },
  { title: "Portfolio", link: "#about", icon: FolderOpen }
];

export const AppSidebar = () => {
  return (
    <div className="flex flex-col h-full py-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-gradient-vibrant bg-clip-text text-transparent mb-2">
          southeastmedia
        </h2>
        <p className="text-sm text-muted-foreground">
          Crafting immersive visuals
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services" className="border-border">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              Services
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {servicesMenu.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-4 h-4 text-primary" />
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="work" className="border-border">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              Work
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1">
                {workMenu.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 space-y-1">
          {quickLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
