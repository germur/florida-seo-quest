import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronRight, ArrowUpRight } from "lucide-react";
import calvoCreativoLogo from "@/assets/calvo-creativo-logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "SEO Tools", href: "/resources" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "How We Work", href: "/how-we-work" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-bright-orange/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Company Info - Compact */}
            <div className="space-y-4">
              <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue/30 transition-all duration-300">
                  <img 
                    src={calvoCreativoLogo} 
                    alt="Calvo Creativo Logo" 
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <div className="font-bold text-lg text-primary-foreground">Calvo Creativo</div>
                    <div className="text-xs text-primary-foreground/70">SEO Strategy & Consulting</div>
                  </div>
                </div>
              </Link>
              
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
                Strategic SEO consulting for Florida businesses. 
                <span className="text-electric-blue"> Data-driven growth strategies</span> that deliver results.
              </p>
              
              <a 
                href="mailto:rogermur1990@gmail.com" 
                className="group inline-flex items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-electric-blue mr-2" />
                <span className="text-sm text-primary-foreground group-hover:text-electric-blue transition-colors">
                  rogermur1990@gmail.com
                </span>
                <ChevronRight className="ml-2 h-4 w-4 text-primary-foreground/50 group-hover:text-electric-blue group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Resources - Secondary URLs */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground flex items-center">
                <div className="w-1 h-6 bg-electric-blue rounded-full mr-2"></div>
                Resources
              </h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 py-1 px-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">{link.name}</span>
                      <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:text-electric-blue transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground flex items-center">
                <div className="w-1 h-6 bg-bright-orange rounded-full mr-2"></div>
                Legal
              </h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 py-1 px-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">{link.name}</span>
                      <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:text-bright-orange transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Quick Contact CTA */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-electric-blue/10 to-bright-orange/10 backdrop-blur-sm border border-white/20">
                <h4 className="font-semibold text-primary-foreground text-sm mb-2">Ready to Grow?</h4>
                <p className="text-xs text-primary-foreground/70 mb-3">
                  Get a free consultation
                </p>
                <a 
                  href="mailto:rogermur1990@gmail.com"
                  className="inline-flex items-center justify-center w-full px-3 py-2 bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue hover:text-white border border-electric-blue/40 hover:border-electric-blue rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <Mail className="mr-2 h-3 w-3" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Calvo Creativo. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/50 text-xs">Made in Florida</span>
              <div className="flex gap-2">
                <a 
                  href="https://linkedin.com/in/rogermur1990" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-white/5 hover:bg-electric-blue/20 border border-white/10 hover:border-electric-blue/40 rounded-lg transition-all duration-300"
                >
                  <span className="text-xs font-bold text-primary-foreground/70">Li</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;