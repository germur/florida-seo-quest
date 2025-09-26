import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import calvoCreativoLogo from "@/assets/calvo-creativo-logo.svg";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={calvoCreativoLogo} 
                alt="Calvo Creativo" 
                className="h-12 w-auto md:h-14 lg:h-16 xl:h-18 transition-transform group-hover:scale-105"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <div className="relative group">
              <Link to="/services" className="inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
                Services
                <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-72 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                <div className="p-4 space-y-2">
                  <Link to="/services/strategic-seo-consulting" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Strategic SEO Consulting
                  </Link>
                  <Link to="/services/digital-storytelling-services" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Digital Storytelling Services
                  </Link>
                  <Link to="/services/seo-automation" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    SEO Automation
                  </Link>
                  <Link to="/services/personal-branding-consulting" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Personal Branding Consulting
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/case-studies" className="inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
                Case Studies
                <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-72 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                <div className="p-4 space-y-2">
                  <Link to="/case-studies/paramount-property-restoration" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Paramount Property Restoration
                  </Link>
                  <Link to="/case-studies/craftd-london" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Craftd London
                  </Link>
                  <Link to="/case-studies/flo-car-rental" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Flo Car Rental
                  </Link>
                  <Link to="/case-studies/puff-cleaning" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Puff Cleaning
                  </Link>
                  <Link to="/case-studies/edu1st-preschools" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Edu1st Preschools
                  </Link>
                  <Link to="/case-studies/le-gramme" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                    Le Gramme
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/how-we-work" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              How We Work
            </Link>
            <Link to="/blog" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              Blog
            </Link>
            <Link to="/resources" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              Resources
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              About
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200">
              Contact
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <SearchButton />
            <ThemeToggle />
            <div className="h-4 w-px bg-border mx-2" />
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+573046807443">
                Book Consultation
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <SearchButton />
            <ThemeToggle />
            <button
              className="p-2 hover:bg-accent/50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-popover/98 backdrop-blur-lg border-b border-border shadow-lg z-40">
            <nav className="container mx-auto px-4 md:px-6 py-6 space-y-2">
              <Link 
                to="/services" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/how-we-work" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How We Work
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/resources" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <Button variant="hero" size="sm" asChild className="w-full mt-2">
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