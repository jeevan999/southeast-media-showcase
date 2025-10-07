import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppSidebar } from "@/components/AppSidebar";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="South East Media Logo" className="h-8 sm:h-10 md:h-20 md:w-32 sm:w-14" />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[90vw] sm:w-[400px] md:w-[540px] overflow-y-auto">
              <AppSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
