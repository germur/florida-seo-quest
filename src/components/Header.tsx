import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black text-primary">
              Calvo 
              <span className="bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                Creativo
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link to="/how-we-work" className="text-muted-foreground hover:text-primary transition-colors">
              How We Work
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">
              Book Consultation
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;