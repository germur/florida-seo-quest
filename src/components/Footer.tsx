import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

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
    { name: "LE GRAMME (Luxury)", href: "/case-studies/legramme" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src="/favicon.svg" 
                  alt="Calvo Creativo" 
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Strategic SEO consulting for Florida businesses. Helping companies achieve sustainable growth through data-driven optimization and content strategy.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+573046807443" 
                  className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <Phone className="h-4 w-4 mr-3 group-hover:text-electric-blue" />
                  +57 304 680 7443
                </a>
                <a 
                  href="mailto:rogermur1990@gmail.com" 
                  className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <Mail className="h-4 w-4 mr-3 group-hover:text-electric-blue" />
                  rogermur1990@gmail.com
                </a>
                <div className="flex items-center text-primary-foreground/80">
                  <MapPin className="h-4 w-4 mr-3" />
                  Florida, United States
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary-foreground">Navigation</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:text-electric-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary-foreground">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:text-electric-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Studies */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary-foreground">Success Stories</h3>
              <ul className="space-y-3">
                {caseStudyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:text-electric-blue transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary-foreground">Services</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <Link 
                    to="/services" 
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:text-electric-blue transition-colors"
                  >
                    SEO Strategy (MAES)
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:text-electric-blue transition-colors"
                  >
                    SEO Audit & Technical
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:text-electric-blue transition-colors"
                  >
                    SEO Consulting
                  </Link>
                </li>
              </ul>

              {/* CTA */}
              <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/20">
                <h4 className="font-semibold mb-2 text-primary-foreground">Ready to Start?</h4>
                <p className="text-sm text-primary-foreground/80 mb-3">
                  Get your free SEO consultation today
                </p>
                <a 
                  href="tel:+573046807443"
                  className="inline-flex items-center text-electric-blue hover:text-electric-blue/80 transition-colors text-sm font-medium"
                >
                  Call Now
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Calvo Creativo. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social/Professional Links */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/60 text-sm">Follow:</span>
              <a 
                href="https://linkedin.com/in/rogermur1990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-electric-blue transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://wa.me/573046807443" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-bright-orange transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;