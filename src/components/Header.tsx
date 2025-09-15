import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import calvoCreativoLogo from "@/assets/calvo-creativo-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={calvoCreativoLogo} 
                alt="Calvo Creativo" 
                className="h-20 w-auto md:h-24 lg:h-28 xl:h-32"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Services
            </Link>
            <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Case Studies
            </Link>
            <Link to="/how-we-work" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              How We Work
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Blog
            </Link>
            <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Resources
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+573046807443">
                Book Consultation
              </a>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="container mx-auto px-6 py-4 space-y-4">
              <Link 
                to="/services" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/how-we-work" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How We Work
              </Link>
              <Link 
                to="/blog" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/resources" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Button variant="hero" size="sm" asChild className="w-full">
                  <a href="tel:+573046807443" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;