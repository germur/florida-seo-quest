import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CasosEstudio = () => {
  const cases = [
    {
      id: "paramount",
      company: "Paramount Property Restoration",
      industry: "Restauración de Propiedades",
      location: "Miami, FL",
      challenge: "Baja visibilidad en búsquedas locales de servicios de emergencia y restauración",
      solution: "Estrategia de SEO local + contenido de autoridad + optimización técnica",
      results: [
        "+180% leads calificados en 6 meses",
        "+250% tráfico orgánico",
        "Top 3 en 15+ keywords objetivo",
        "+85% mejora en conversiones"
      ],
      metrics: {
        duration: "6 meses",
        investment: "$4,500",
        roi: "420%"
      },
      color: "teal",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "1gc",
      company: "1GC Construction",
      industry: "Construcción Comercial",
      location: "Orlando, FL", 
      challenge: "Competencia feroz en construcción comercial, necesitaban diferenciarse",
      solution: "Arquitectura semántica + contenido técnico + link building estratégico",
      results: [
        "+95% visibilidad orgánica en 4 meses",
        "+150% tráfico de calidad",
        "Dominancia en 'construcción comercial Orlando'",
        "+60% aumento en RFPs calificados"
      ],
      metrics: {
        duration: "4 meses",
        investment: "$3,200", 
        roi: "280%"
      },
      color: "electric-blue",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "pura-piel",
      company: "Pura Piel",
      industry: "Estética y Belleza",
      location: "Fort Lauderdale, FL",
      challenge: "Sitio web con múltiples problemas técnicos afectando indexación",
      solution: "Auditoría técnica completa + fixes de indexación + nueva arquitectura",
      results: [
        "120+ errores técnicos solucionados",
        "+40% mejora en indexación",
        "+75% aumento en sesiones orgánicas", 
        "Reducción del 60% en bounce rate"
      ],
      metrics: {
        duration: "3 meses",
        investment: "$2,800",
        roi: "190%"
      },
      color: "bright-orange",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "quintana",
      company: "Quintana",
      industry: "Servicios Profesionales",
      location: "Boca Raton, FL",
      challenge: "Necesitaban posicionarse como autoridad en su sector",
      solution: "Estrategia de autoridad tópica + contenido evergreen + PR digital",
      results: [
        "+200% menciones de marca",
        "Top 5 en keywords de alta competencia",
        "+90% tráfico orgánico cualificado",
        "+45% leads desde búsqueda orgánica"
      ],
      metrics: {
        duration: "5 meses", 
        investment: "$3,800",
        roi: "350%"
      },
      color: "purple",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "roger-murillo",
      company: "Roger Murillo Asesoría de Imagen",
      industry: "Consultoría de Imagen",
      location: "Miami, FL",
      challenge: "Mercado muy competitivo en servicios de imagen personal",
      solution: "SEO local + personal branding + contenido de valor + link building",
      results: [
        "+300% búsquedas de marca",
        "Líder en 'asesor de imagen Miami'",
        "+120% consultas calificadas",
        "+80% aumento en bookings premium"
      ],
      metrics: {
        duration: "4 meses",
        investment: "$2,900",
        roi: "240%"
      },
      color: "green",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Resultados reales de empresas reales. Descubre cómo hemos ayudado a negocios de Florida a crecer con SEO.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">+250%</div>
                <div className="text-sm text-muted-foreground">Tráfico Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bright-orange mb-2">ROI 280%</div>
                <div className="text-sm text-muted-foreground">Retorno Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {cases.map((caseStudy, index) => (
              <article 
                key={caseStudy.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-${caseStudy.color}/10 text-${caseStudy.color} text-sm font-medium rounded-full`}>
                      {caseStudy.industry}
                    </span>
                    <span className="ml-2 text-sm text-muted-foreground">{caseStudy.location}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {caseStudy.company}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">El Desafío</h3>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-2">La Solución</h3>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Resultados</h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <TrendingUp className={`h-4 w-4 text-${caseStudy.color} mr-2`} />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button size="lg" className="mt-8 group">
                    Ver Caso Completo
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <Clock className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <div className="font-bold text-primary">{caseStudy.metrics.duration}</div>
                      <div className="text-xs text-muted-foreground">Duración</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <Users className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <div className="font-bold text-primary">{caseStudy.metrics.investment}</div>
                      <div className="text-xs text-muted-foreground">Inversión</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <TrendingUp className={`h-6 w-6 text-${caseStudy.color} mx-auto mb-2`} />
                      <div className={`font-bold text-${caseStudy.color}`}>{caseStudy.metrics.roi}</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8 text-center">
                    <div className="text-lg text-muted-foreground mb-4">
                      "Los resultados han superado nuestras expectativas. El equipo de Calvo Creativo entendió perfectamente nuestro negocio y mercado local."
                    </div>
                    <div className="font-semibold text-primary">
                      — Equipo {caseStudy.company}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Tu empresa será la próxima?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto y cómo podemos ayudarte a lograr resultados similares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Agendar Consultoría Gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/servicios">Ver Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CasosEstudio;