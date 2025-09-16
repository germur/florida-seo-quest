import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronRight, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Strategic SEO Consulting", href: "/services/strategic-seo-consulting" },
    { name: "Digital Storytelling Services", href: "/services/digital-storytelling-services" },
    { name: "SEO Automation", href: "/services/seo-automation" },
    { name: "Personal Branding Consulting", href: "/services/personal-branding-consulting" },
  ];

  const cityLinks = [
    { name: "SEO Miami, FL", href: "/services/strategic-seo-consulting/miami-fl/" },
    { name: "SEO Orlando, FL", href: "/services/strategic-seo-consulting/orlando-fl/" },
    { name: "SEO Tampa, FL", href: "/services/digital-storytelling-services/tampa-fl/" },
    { name: "SEO Jacksonville, FL", href: "/services/seo-automation/jacksonville-fl/" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "SEO Tools", href: "/resources" },
    { name: "ROI Calculator", href: "/resources#roi-calculator" },
    { name: "Title Analyzer", href: "/resources#title-analyzer" },
    { name: "Cluster Generator", href: "/resources#cluster-generator" },
  ];

  const caseStudyLinks = [
    { name: "Paramount (Property)", href: "/case-studies/paramount-property-restoration" },
    { name: "CRAFTD London (E-comm)", href: "/case-studies/craftd-london" },
    { name: "Flo Car Rental (Miami)", href: "/case-studies/flo-car-rental" },
    { name: "Puff Cleaning (Local)", href: "/case-studies/puff-cleaning" },
    { name: "Edu1st (Education)", href: "/case-studies/edu1st-preschools" },
    { name: "LE GRAMME (Luxury)", href: "/case-studies/le-gramme" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-bright-orange/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-2 space-y-8">
              <div className="group">
                <Link to="/" className="inline-block mb-8 transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue/30 transition-all duration-300">
                    <img 
                      src="/favicon.svg" 
                      alt="Calvo Creativo" 
                      className="h-12 w-12"
                    />
                    <div>
                      <div className="font-bold text-xl text-primary-foreground">Calvo Creativo</div>
                      <div className="text-sm text-primary-foreground/70">SEO Strategy & Consulting</div>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="space-y-6">
                <p className="text-primary-foreground/90 leading-relaxed text-lg font-medium max-w-md">
                  Strategic SEO consulting for Florida businesses. 
                  <span className="text-electric-blue"> Helping companies achieve sustainable growth</span> through data-driven optimization.
                </p>
                
                {/* Contact Info - Modern Cards */}
                <div className="space-y-4">
                  <a 
                    href="tel:+573046807443" 
                    className="group flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-electric-blue/20 group-hover:bg-electric-blue/30 transition-colors mr-4">
                      <Phone className="h-5 w-5 text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Call Direct</div>
                      <div className="font-semibold text-primary-foreground group-hover:text-electric-blue transition-colors">
                        +57 304 680 7443
                      </div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-primary-foreground/50 group-hover:text-electric-blue group-hover:translate-x-1 transition-all" />
                  </a>
                  
                  <a 
                    href="mailto:rogermur1990@gmail.com" 
                    className="group flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-electric-blue/20 group-hover:bg-electric-blue/30 transition-colors mr-4">
                      <Mail className="h-5 w-5 text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Email Us</div>
                      <div className="font-semibold text-primary-foreground group-hover:text-electric-blue transition-colors">
                        rogermur1990@gmail.com
                      </div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-primary-foreground/50 group-hover:text-electric-blue group-hover:translate-x-1 transition-all" />
                  </a>

                  <div className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-bright-orange/20 mr-4">
                      <MapPin className="h-5 w-5 text-bright-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Based in</div>
                      <div className="font-semibold text-primary-foreground">Florida, United States</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Modern */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary-foreground mb-8 flex items-center">
                <div className="w-1 h-8 bg-electric-blue rounded-full mr-3"></div>
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:text-electric-blue transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Modern */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary-foreground mb-8 flex items-center">
                <div className="w-1 h-8 bg-bright-orange rounded-full mr-3"></div>
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:text-bright-orange transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Stories - Modern */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary-foreground mb-8 flex items-center">
                <div className="w-1 h-8 bg-teal rounded-full mr-3"></div>
                Success Stories
              </h3>
              <ul className="space-y-3">
                {caseStudyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">{link.name}</span>
                      <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:text-teal transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Modern CTA Card */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-bright-orange/10 backdrop-blur-sm border border-white/20 hover:border-electric-blue/40 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-2 animate-pulse"></div>
                  <h4 className="font-bold text-primary-foreground">Ready to Grow?</h4>
                </div>
                <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
                  Free SEO consultation & strategy session
                </p>
                <a 
                  href="tel:+573046807443"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue hover:text-white border border-electric-blue/40 hover:border-electric-blue rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Modern */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright - Enhanced */}
              <div className="flex items-center space-x-4">
                <div className="text-primary-foreground/60 text-sm font-medium">
                  © {currentYear} Calvo Creativo. All rights reserved.
                </div>
                <div className="hidden md:block w-px h-4 bg-white/20"></div>
                <div className="hidden md:block text-xs text-primary-foreground/50">
                  Made with ❤️ in Florida
                </div>
              </div>

              {/* Legal Links - Modern Pills */}
              <div className="flex flex-wrap gap-2">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.href} 
                    className="px-4 py-2 text-sm text-primary-foreground/60 hover:text-primary-foreground bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Social Links - Modern Cards */}
              <div className="flex items-center gap-3">
                <span className="text-primary-foreground/60 text-sm font-medium">Connect:</span>
                <div className="flex gap-2">
                  <a 
                    href="https://linkedin.com/in/rogermur1990" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-electric-blue/20 border border-white/10 hover:border-electric-blue/40 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-bold text-primary-foreground/70 group-hover:text-electric-blue">Li</span>
                  </a>
                  <a 
                    href="https://wa.me/573046807443" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-bright-orange/20 border border-white/10 hover:border-bright-orange/40 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-bold text-primary-foreground/70 group-hover:text-bright-orange">Wa</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;