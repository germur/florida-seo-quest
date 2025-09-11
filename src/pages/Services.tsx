import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "estrategia-seo",
      icon: <Search className="h-12 w-12" />,
      title: "Estrategia SEO (MAES Framework)",
      subtitle: "Investigación Inicial + Arquitectura Semántica + Estrategia de Contenido + Hoja de Ruta y Medición",
      description: "Una hoja de ruta completa basada en investigación profunda, arquitectura semántica sólida y contenido que convierte.",
      features: [
        "Investigación de palabras clave y competencia",
        "Arquitectura de información semántica", 
        "Estrategia de contenido basada en intención de búsqueda",
        "Roadmap de implementación priorizado",
        "KPIs y métricas de seguimiento"
      ],
      color: "teal",
      price: "Desde $2,500",
      duration: "4-6 semanas"
    },
    {
      id: "auditoria-seo",
      icon: <Settings className="h-12 w-12" />,
      title: "Auditoría SEO & Fixes Técnicos",
      subtitle: "On-Page + Técnica + Indexación",
      description: "Identificamos y solucionamos problemas on-page, técnicos y de indexación con un plan de acción claro.",
      features: [
        "Análisis técnico completo (Core Web Vitals, crawling, indexación)",
        "Auditoría on-page exhaustiva",
        "Revisión de arquitectura de URLs y enlaces internos",
        "Plan de fixes priorizados por impacto",
        "Seguimiento post-implementación"
      ],
      color: "electric-blue", 
      price: "Desde $1,500",
      duration: "2-3 semanas"
    },
    {
      id: "consultoria-seo",
      icon: <Users className="h-12 w-12" />,
      title: "Consultoría SEO & Advisory",
      subtitle: "Para Equipos + Fundadores",
      description: "Asesoría continua para fundadores y equipos internos listos para escalar su estrategia SEO.",
      features: [
        "Sesiones estratégicas mensuales",
        "Revisión de contenido y optimizaciones",
        "Training para equipos internos",
        "Soporte en decisiones de producto/tech que afecten SEO",
        "Acceso directo para consultas urgentes"
      ],
      color: "bright-orange",
      price: "Desde $3,000/mes",
      duration: "Retainer mensual"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Servicios SEO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Estrategias SEO probadas para empresas que buscan resultados reales y medibles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${service.color}/10 rounded-2xl mb-6`}>
                    <div className={`text-${service.color}`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  
                  <p className={`text-lg text-${service.color} font-medium mb-4`}>
                    {service.subtitle}
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">Inversión</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{service.duration}</div>
                      <div className="text-sm text-muted-foreground">Duración</div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="group">
                    Solicitar Propuesta
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-primary mb-6">¿Qué incluye?</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 text-${service.color} mt-0.5 mr-3 flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para crecer?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto y definamos la estrategia SEO que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Agendar Consultoría
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/casos-estudio">Ver Casos de Éxito</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;