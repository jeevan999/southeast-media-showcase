import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, Wand2, Sparkles, Brain, Play } from "lucide-react";
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
  { title: "Animation Projects", description: "Character & story work", link: "#work" },
  { title: "VFX Showreel", description: "Latest visual effects", link: "#work" },
  { title: "Client Case Studies", description: "Success stories", link: "#work" }
];

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-vibrant bg-clip-text text-transparent">
            southeastmedia
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeMenu === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    {servicesMenu.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="group flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300"
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
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
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Work Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("work")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
                Work
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeMenu === "work" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl animate-fade-in">
                  {workMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
