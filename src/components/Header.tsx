import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-black text-primary">
              Calvo 
              <span className="bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                Creativo
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#results" className="text-muted-foreground hover:text-primary transition-colors">
              Results
            </a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
              Process
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </nav>
          
          <Button variant="hero" size="sm">
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;