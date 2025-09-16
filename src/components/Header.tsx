import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import calvoCreativoLogo from "@/assets/calvo-creativo-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, getLocalizedPath } = useLanguage();

  const navItems = [
    { key: 'services', path: language === 'es' ? '/servicios' : '/services', hasDropdown: true },
    { key: 'caseStudies', path: language === 'es' ? '/casos-de-exito' : '/case-studies' },
    { key: 'howWeWork', path: language === 'es' ? '/como-trabajamos' : '/how-we-work' },
    { key: 'blog', path: '/blog' },
    { key: 'resources', path: language === 'es' ? '/recursos' : '/resources' },
    { key: 'about', path: language === 'es' ? '/acerca-de' : '/about' },
    { key: 'contact', path: language === 'es' ? '/contacto' : '/contact' },
  ];

  const serviceDropdownItems = language === 'es' ? [
    { path: '/servicios/strategic-seo-consulting', label: 'Consultoría SEO Estratégica' },
    { path: '/servicios/digital-storytelling-services', label: 'Servicios de Storytelling Digital' },
    { path: '/servicios/seo-automation', label: 'Automatización SEO' },
    { path: '/servicios/personal-branding-consulting', label: 'Consultoría de Marca Personal' },
  ] : [
    { path: '/services/strategic-seo-consulting', label: 'Strategic SEO Consulting' },
    { path: '/services/digital-storytelling-services', label: 'Digital Storytelling Services' },
    { path: '/services/seo-automation', label: 'SEO Automation' },
    { path: '/services/personal-branding-consulting', label: 'Personal Branding Consulting' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <Link to={getLocalizedPath('/')} className="flex items-center">
              <img 
                src={calvoCreativoLogo} 
                alt="Calvo Creativo" 
                className="h-20 w-auto md:h-24 lg:h-28 xl:h-32"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.key} className={item.hasDropdown ? "relative group" : ""}>
                <Link 
                  to={getLocalizedPath(item.path)} 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base flex items-center"
                >
                  {t(`nav.${item.key}`)}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 space-y-2">
                      {serviceDropdownItems.map((service) => (
                        <Link 
                          key={service.path}
                          to={getLocalizedPath(service.path)} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
                <Globe className="h-4 w-4 mr-1" />
                {language === 'es' ? 'ES' : 'EN'}
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      language === 'en' 
                        ? 'text-primary bg-secondary/50' 
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('es')}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      language === 'es' 
                        ? 'text-primary bg-secondary/50' 
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+573046807443">
                {language === 'es' ? 'Agendar Consultoría' : 'Book Consultation'}
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
              {navItems.map((item) => (
                <Link 
                  key={item.key}
                  to={getLocalizedPath(item.path)} 
                  className="block text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                      language === 'en' 
                        ? 'text-primary bg-secondary/50' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                      language === 'es' 
                        ? 'text-primary bg-secondary/50' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Español
                  </button>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="hero" size="sm" asChild className="w-full">
                  <a href="tel:+573046807443" onClick={() => setIsMenuOpen(false)}>
                    {language === 'es' ? 'Agendar Consultoría' : 'Book Consultation'}
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