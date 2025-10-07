export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-vibrant bg-clip-text text-transparent uppercase">
            south east media
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-muted-foreground">
            <a href="/about" className="hover:text-foreground transition-colors">About</a>
            <a href="/careers" className="hover:text-foreground transition-colors">Careers</a>
          </div>
          
          <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
            © 2025 south east media. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
