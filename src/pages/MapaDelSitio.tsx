import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, MapPin, Building, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { FLORIDA_CITIES } from "@/lib/silo-structure";

const MapaDelSitio = () => {
  const mainPages = [
    { name: "Inicio", url: "/es", description: "Consultoría SEO Estratégica Florida" },
    { name: "Acerca de", url: "/es/acerca-de", description: "Conoce a Roger Murillo, Experto SEO Florida" },
    { name: "Servicios", url: "/es/servicios", description: "Servicios SEO con IA para Empresas de Florida" },
    { name: "Casos de Éxito", url: "/es/casos-de-exito", description: "Historias Reales de Éxito SEO" },
    { name: "Blog", url: "/es/blog", description: "Insights y Estrategias SEO" },
    { name: "Recursos", url: "/es/recursos", description: "Herramientas y Guías SEO Gratuitas" },
    { name: "Cómo Trabajamos", url: "/es/como-trabajamos", description: "Nuestro Proceso y Metodología SEO" },
    { name: "Contacto", url: "/es/contacto", description: "Obtén Tu Consultoría SEO Gratuita" }
  ];

  const services = [
    { 
      name: "Consultoría SEO Estratégica", 
      url: "/es/servicios/strategic-seo-consulting", 
      description: "Estrategias SEO impulsadas por IA para empresas de Florida" 
    },
    { 
      name: "Servicios de Storytelling Digital", 
      url: "/es/servicios/digital-storytelling-services", 
      description: "Transforma tu marca a través de narrativas convincentes" 
    },
    { 
      name: "Automatización SEO", 
      url: "/es/servicios/seo-automation", 
      description: "Escala tu SEO con automatización impulsada por IA" 
    },
    { 
      name: "Consultoría de Branding Personal", 
      url: "/es/servicios/personal-branding-consulting", 
      description: "Construye tu autoridad profesional" 
    }
  ];

  const caseStudies = [
    { name: "Paramount Property Restoration", url: "/es/casos-de-exito/paramount-property-restoration", description: "+250% crecimiento tráfico orgánico" },
    { name: "Flo Car Rental", url: "/es/casos-de-exito/flo-car-rental", description: "Dominación SEO local en Miami" },
    { name: "Puff Cleaning", url: "/es/casos-de-exito/puff-cleaning", description: "Éxito SEO servicios para el hogar" },
    { name: "Edu1st Preschools", url: "/es/casos-de-exito/edu1st-preschools", description: "Crecimiento SEO sector educativo" },
    { name: "Craftd London", url: "/es/casos-de-exito/craftd-london", description: "Optimización SEO e-commerce" },
    { name: "Legramme", url: "/es/casos-de-exito/legramme", description: "Expansión internacional de marca" }
  ];

  const blogPosts = [
    { 
      name: "WordPress: ¿Solución Asequible o Ancla de Problemas?", 
      url: "/es/blog/wordpress-solucion-asequible-o-ancla", 
      description: "Análisis crítico de pros y contras de WordPress" 
    },
    { 
      name: "SEO No Murió: Del Hype a la Estrategia que Funciona", 
      url: "/es/blog/seo-no-murio-hype-estrategia", 
      description: "Desmitificando tendencias y enfocándose en estrategias que funcionan" 
    }
  ];

  const legalPages = [
    { name: "Política de Privacidad", url: "/es/politica-de-privacidad", description: "Cómo protegemos tu información personal" },
    { name: "Términos de Servicio", url: "/es/terminos-de-servicio", description: "Términos de nuestro acuerdo de servicios" },
    { name: "Política de Cookies", url: "/es/politica-de-cookies", description: "Nuestra política de uso de cookies" }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="resources" 
        customTitle="Mapa del Sitio | Servicios SEO Calvo Creativo Florida"
        customDescription="Mapa completo de todas las páginas del sitio web de Calvo Creativo. Encuentra todos nuestros servicios SEO, casos de éxito, blog y recursos para empresas de Florida."
        customCanonical="https://calvocreativo.com/es/mapa-del-sitio"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Mapa del Sitio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Directorio completo de todas las páginas, servicios y recursos de nuestro sitio web. 
              Encuentra exactamente lo que buscas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Building className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Páginas Principales</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {mainPages.map((page, index) => (
                <Link 
                  key={index} 
                  to={page.url}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-teal transition-colors">
                      {page.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-teal transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="h-8 w-8 text-electric-blue" />
              <h2 className="text-3xl font-bold text-primary">Servicios SEO</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.url}
                  className="group bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border border-electric-blue/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-electric-blue transition-colors">
                      {service.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-electric-blue transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  
                  {/* City Sub-pages */}
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Disponible en:</span>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {FLORIDA_CITIES.slice(0, 4).map((city, cityIndex) => (
                        <span key={cityIndex} className="bg-electric-blue/10 text-electric-blue px-2 py-1 rounded">
                          {city.name}
                        </span>
                      ))}
                      {FLORIDA_CITIES.length > 4 && (
                        <span className="text-electric-blue">+{FLORIDA_CITIES.length - 4} más</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Local SEO Pages */}
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="h-8 w-8 text-teal" />
              <h2 className="text-3xl font-bold text-primary">Servicios SEO Locales por Ciudad</h2>
            </div>
            
            <div className="bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 rounded-2xl p-8 mb-16">
              <p className="text-muted-foreground text-center mb-6">
                Proporcionamos servicios especializados de SEO local en las principales ciudades de Florida:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {FLORIDA_CITIES.map((city, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-primary mb-2">{city.name}</h4>
                    <div className="space-y-1 text-xs">
                      <Link to={`/es/servicios/strategic-seo-consulting/${city.slug}`} className="block text-teal hover:underline">
                        SEO Estratégico
                      </Link>
                      <Link to={`/es/servicios/digital-storytelling-services/${city.slug}`} className="block text-teal hover:underline">
                        Storytelling Digital
                      </Link>
                      <Link to={`/es/servicios/seo-automation/${city.slug}`} className="block text-teal hover:underline">
                        Automatización SEO
                      </Link>
                      <Link to={`/es/servicios/personal-branding-consulting/${city.slug}`} className="block text-teal hover:underline">
                        Branding Personal
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-bright-orange" />
              <h2 className="text-3xl font-bold text-primary">Historias de Éxito</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {caseStudies.map((study, index) => (
                <Link 
                  key={index} 
                  to={study.url}
                  className="group bg-gradient-to-br from-bright-orange/5 to-bright-orange/10 border border-bright-orange/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-bright-orange transition-colors">
                      {study.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-bright-orange transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </Link>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-purple" />
              <h2 className="text-3xl font-bold text-primary">Últimos Artículos del Blog</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {blogPosts.map((post, index) => (
                <Link 
                  key={index} 
                  to={post.url}
                  className="group bg-gradient-to-br from-purple/5 to-purple/10 border border-purple/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-purple transition-colors">
                      {post.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-purple transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </Link>
              ))}
            </div>

            {/* Legal Pages */}
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-neutral-gray" />
              <h2 className="text-3xl font-bold text-primary">Legal y Políticas</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <Link 
                  key={index} 
                  to={page.url}
                  className="group bg-muted/30 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-neutral-gray transition-colors">
                      {page.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-neutral-gray transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Necesitas Ayuda para Encontrar Algo?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            ¿No encuentras lo que buscas? Contáctanos directamente y te ayudaremos a encontrar la solución correcta para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/es/contacto">
                Contactarnos
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="mailto:rogermur1990@gmail.com?subject=Consulta SEO">
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MapaDelSitio;