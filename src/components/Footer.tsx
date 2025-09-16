import { ArrowUpRight, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import calvoCreativoLogo from "@/assets/calvo-creativo-logo.svg";

const Footer = () => {
  const { language, getLocalizedPath } = useLanguage();

  const serviceLinks = language === 'es' ? [
    { name: "Consultoría SEO Estratégica", href: "/servicios/strategic-seo-consulting" },
    { name: "Servicios de Storytelling Digital", href: "/servicios/digital-storytelling-services" },
    { name: "Automatización SEO", href: "/servicios/seo-automation" },
    { name: "Consultoría de Marca Personal", href: "/servicios/personal-branding-consulting" }
  ] : [
    { name: "Strategic SEO Consulting", href: "/services/strategic-seo-consulting" },
    { name: "Digital Storytelling Services", href: "/services/digital-storytelling-services" },
    { name: "SEO Automation", href: "/services/seo-automation" },
    { name: "Personal Branding Consulting", href: "/services/personal-branding-consulting" }
  ];

  const companyLinks = language === 'es' ? [
    { name: "Acerca de", href: "/acerca-de" },
    { name: "Casos de Éxito", href: "/casos-de-exito" },
    { name: "Cómo Trabajamos", href: "/como-trabajamos" },
    { name: "Contacto", href: "/contacto" }
  ] : [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Contact", href: "/contact" }
  ];

  const resourceLinks = language === 'es' ? [
    { name: "Blog", href: "/blog" },
    { name: "Herramientas SEO", href: "/recursos" },
    { name: "Calculadora ROI", href: "/recursos#roi-calculator" },
    { name: "Analizador de Títulos", href: "/recursos#title-analyzer" }
  ] : [
    { name: "Blog", href: "/blog" },
    { name: "SEO Tools", href: "/resources" },
    { name: "ROI Calculator", href: "/resources#roi-calculator" },
    { name: "Title Analyzer", href: "/resources#title-analyzer" }
  ];

  const legalLinks = language === 'es' ? [
    { name: "Política de Privacidad", href: "/politica-de-privacidad" },
    { name: "Términos de Servicio", href: "/terminos-de-servicio" },
    { name: "Política de Cookies", href: "/politica-de-cookies" },
    { name: "Mapa del Sitio", href: "/mapa-del-sitio" }
  ] : [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-neutral-gray text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to={getLocalizedPath('/')} className="inline-block mb-6">
              <img 
                src={calvoCreativoLogo} 
                alt="Calvo Creativo" 
                className="h-16 w-auto"
              />
            </Link>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-lg">
              {language === 'es' 
                ? 'SEO estratégico y growth hacking para empresas de Florida. Resultados medibles, estrategias basadas en datos.'
                : 'Strategic SEO and growth hacking for Florida businesses. Measurable results, data-driven strategies.'
              }
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              
              <a 
                href="mailto:rogermur1990@gmail.com" 
                className="group flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal/20 group-hover:bg-teal/30 transition-colors mr-4">
                  <Mail className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">rogermur1990@gmail.com</div>
                  <div className="text-sm text-primary-foreground/70">
                    {language === 'es' ? 'Respuesta en 24 horas' : '24-hour response'}
                  </div>
                </div>
              </a>

              <div className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-bright-orange/20 mr-4">
                  <MapPin className="h-5 w-5 text-bright-orange" />
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">Miami, Florida</div>
                  <div className="text-sm text-primary-foreground/70">
                    {language === 'es' ? 'Atendemos todo Florida' : 'Serving all Florida'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-6">
              {language === 'es' ? 'Servicios' : 'Services'}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.href)}
                    className="text-primary-foreground/70 hover:text-electric-blue transition-colors text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-6">
              {language === 'es' ? 'Empresa' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={getLocalizedPath(link.href)}
                    className="text-primary-foreground/70 hover:text-electric-blue transition-colors text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-bright-orange/10 backdrop-blur-sm border border-white/20">
              <h4 className="font-bold text-primary-foreground mb-2">
                {language === 'es' ? '¿Listo para crecer?' : 'Ready to grow?'}
              </h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                {language === 'es' 
                  ? 'Consultoría SEO gratuita y sesión de estrategia'
                  : 'Free SEO consultation & strategy session'
                }
              </p>
              <a 
                href="mailto:rogermur1990@gmail.com?subject=Consultoría SEO Gratuita"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue hover:text-white border border-electric-blue/40 hover:border-electric-blue rounded-xl font-semibold transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                {language === 'es' ? 'Contactar Ahora' : 'Contact Now'}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Resources Row */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-4">
                {language === 'es' ? 'Recursos' : 'Resources'}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {resourceLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={getLocalizedPath(link.href)}
                    className="text-primary-foreground/70 hover:text-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & WhatsApp */}
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-4">
                {language === 'es' ? 'Conecta con nosotros' : 'Connect with us'}
              </h4>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://wa.me/573046807443" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-bright-orange/20 border border-white/10 hover:border-bright-orange/40 rounded-xl transition-all duration-300"
                >
                  <span className="text-xs font-bold text-primary-foreground/70 hover:text-bright-orange">Wa</span>
                </a>
                <a 
                  href="https://linkedin.com/company/calvocreativo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-electric-blue/20 border border-white/10 hover:border-electric-blue/40 rounded-xl transition-all duration-300"
                >
                  <span className="text-xs font-bold text-primary-foreground/70 hover:text-electric-blue">Li</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm mb-4">
              {language === 'es' 
                ? '© 2024 Calvo Creativo. Todos los derechos reservados.'
                : '© 2024 Calvo Creativo. All rights reserved.'
              }
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-primary-foreground/50">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={getLocalizedPath(link.href)}
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;