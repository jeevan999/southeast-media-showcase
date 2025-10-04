import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-vibrant bg-clip-text text-transparent">
            southeastmedia
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#work" className="text-foreground/80 hover:text-foreground transition-colors">
              Work
            </a>
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
