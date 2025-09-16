import Header from "@/components/Header";
import SILONavigation from "@/components/SILONavigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const ServiciosEs = () => {
  const services = [
    {
      id: "strategic-seo-consulting",
      icon: <Target className="h-8 w-8" />,
      title: "Consultoría SEO Estratégica",
      description: "Estrategia SEO completa basada en nuestro Framework MAES. Desde la auditoría inicial hasta la implementación y seguimiento de resultados.",
      features: [
        "Auditoría SEO técnica completa",
        "Investigación de palabras clave avanzada",
        "Estrategia de contenidos SEO",
        "Optimización técnica del sitio"
      ],
      cta: "Solicitar Consultoría",
      href: "/es/servicios/strategic-seo-consulting",
      color: "teal"
    },
    {
      id: "digital-storytelling-services",
      icon: <Users className="h-8 w-8" />,
      title: "Servicios de Storytelling Digital",
      description: "Narrativas digitales que conectan con tu audiencia y convierten visitantes en clientes. Contenido optimizado para SEO y conversiones.",
      features: [
        "Estrategia de narrativa de marca",
        "Creación de contenido optimizado",
        "Storytelling para diferentes canales",
        "Métricas de engagement y conversión"
      ],
      cta: "Conocer Servicios",
      href: "/es/servicios/digital-storytelling-services",
      color: "electric-blue"
    },
    {
      id: "seo-automation",
      icon: <Zap className="h-8 w-8" />,
      title: "Automatización SEO",
      description: "Herramientas y procesos automatizados para optimizar tu SEO. Ahorra tiempo mientras mejoras los resultados de forma consistente.",
      features: [
        "Configuración de herramientas SEO",
        "Automatización de reportes",
        "Monitoreo automático de rankings",
        "Alertas y notificaciones personalizadas"
      ],
      cta: "Automatizar SEO",
      href: "/es/servicios/seo-automation",
      color: "bright-orange"
    },
    {
      id: "personal-branding-consulting",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Consultoría de Marca Personal",
      description: "Construye tu autoridad online con una estrategia de marca personal sólida. SEO personal que te posiciona como líder en tu industria.",
      features: [
        "Estrategia de marca personal",
        "Optimización de perfiles profesionales",
        "Content marketing personal",
        "Construcción de autoridad temática"
      ],
      cta: "Construir Marca",
      href: "/es/servicios/personal-branding-consulting",
      color: "purple"
    }
  ];

  const breadcrumbs = [
    { label: "Servicios", href: "/es/servicios", current: true }
  ];

  return (
    <main className="min-h-screen">
      <SEO 
        page="servicesEs" 
        customCanonical="/es/servicios"
      />
      <Header />
      <SILONavigation breadcrumbs={breadcrumbs} currentPage="" />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Servicios SEO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Servicios especializados de SEO y marketing digital para empresas de Florida. 
              Resultados medibles con nuestro Framework MAES comprobado.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-teal/10 via-electric-blue/10 to-bright-orange/10 rounded-2xl p-6 border border-border">
              <span className="text-muted-foreground text-lg">
                <strong className="text-primary">+280%</strong> de crecimiento promedio en tráfico orgánico
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`bg-gradient-to-br from-${service.color}/5 to-${service.color}/10 border border-${service.color}/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color}/10 rounded-2xl mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                    <div className={`text-${service.color}`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className={`h-4 w-4 text-${service.color} mt-1 mr-3 flex-shrink-0`} />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild size="lg" className="w-full group">
                    <Link to={service.href}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              ¿Por qué elegir nuestros servicios?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Más de 7 años especializados en el mercado de Florida
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="text-3xl font-black text-teal mb-4">7+</div>
                <h3 className="font-semibold text-primary mb-2">Años de Experiencia</h3>
                <p className="text-sm text-muted-foreground">Especializados exclusivamente en SEO y marketing digital</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="text-3xl font-black text-electric-blue mb-4">50+</div>
                <h3 className="font-semibold text-primary mb-2">Proyectos Exitosos</h3>
                <p className="text-sm text-muted-foreground">Empresas de Florida que han crecido con nuestras estrategias</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="text-3xl font-black text-bright-orange mb-4">280%</div>
                <h3 className="font-semibold text-primary mb-2">Crecimiento Promedio</h3>
                <p className="text-sm text-muted-foreground">Aumento en tráfico orgánico de nuestros clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a conseguir más clientes con SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/es/contacto">
                Solicitar Consultoría Gratuita
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/es/casos-de-exito">
                Ver Casos de Éxito
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiciosEs;