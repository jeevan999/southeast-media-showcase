import { Wand2, Sparkles, Brain, Play, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { title: "About", link: "/about", icon: Users },
  { title: "Careers", link: "/careers", icon: Briefcase },
];

export const AppSidebar = () => {
  const handleMailClick = () => {
    const email = "Kollirohit@gmail.com"; // 📨 your email here
    const subject = encodeURIComponent("Inquiry from South East Media Website");
    const body = encodeURIComponent("Hello South East Media team,\n\nI would like to know more about your services.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col h-full py-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-gradient-vibrant bg-clip-text text-transparent mb-2">
          south east media
        </h2>
        <p className="text-sm text-muted-foreground">
          Crafting immersive visuals
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
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
        <Button
          className="w-full bg-primary hover:bg-primary/90"
          onClick={handleMailClick}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
