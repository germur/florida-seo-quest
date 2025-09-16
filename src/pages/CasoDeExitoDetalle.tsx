import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Star, CheckCircle, Calendar, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import RelatedArticles from "@/components/RelatedArticles";

const CasoDeExitoDetalle = () => {
  const { slug } = useParams();
  
  const caseStudies = {
    'paramount-property-restoration': {
      company: "Paramount Property Restoration",
      industry: "Servicios de Restauración",
      location: "Orlando, Florida",
      projectDate: "Marzo 2023 - Septiembre 2023",
      website: "https://paramountpropertyrestoration.com",
      challenge: "Paramount Property Restoration necesitaba incrementar su visibilidad online para competir en el mercado saturado de restauración de propiedades de Orlando.",
      solution: "Implementamos una estrategia SEO integral enfocada en búsquedas locales y palabras clave de alta intención comercial.",
      results: {
        trafficIncrease: "250%",
        rankingPositions: "15 palabras clave en Top 3",
        leadIncrease: "180%",
        revenueIncrease: "320%"
      },
      metrics: [
        { label: "Tráfico Orgánico", before: "2,400", after: "8,600", increase: "+258%" },
        { label: "Posiciones Top 10", before: "8", after: "47", increase: "+487%" },
        { label: "Leads Mensuales", before: "12", after: "34", increase: "+183%" },
        { label: "Ingresos Mensuales", before: "$18K", after: "$58K", increase: "+322%" }
      ],
      timeline: [
        { month: "Mes 1-2", task: "Auditoría técnica y análisis de competencia", result: "Identificamos 47 oportunidades críticas" },
        { month: "Mes 3-4", task: "Optimización técnica y arquitectura", result: "Mejoró velocidad del sitio en 65%" },
        { month: "Mes 5-6", task: "Creación de contenido y link building", result: "Publicamos 24 artículos optimizados" },
        { month: "Mes 7+", task: "Monitoreo y optimización continua", result: "Mantenimiento del crecimiento sostenido" }
      ],
      testimonial: {
        text: "El trabajo de Roger transformó completamente nuestro negocio. Pasamos de ser invisibles online a dominar las búsquedas locales en Orlando.",
        author: "Michael Thompson",
        position: "CEO, Paramount Property Restoration"
      }
    },
    'flo-car-rental': {
      company: "Flo Car Rental",
      industry: "Alquiler de Vehículos",
      location: "Miami, Florida", 
      projectDate: "Enero 2023 - Julio 2023",
      website: "https://flocarrental.com",
      challenge: "Flo Car Rental enfrentaba fuerte competencia de grandes marcas en Miami y necesitaba diferenciarse en el mercado local.",
      solution: "Desarrollamos una estrategia de SEO local agresiva combinada con contenido optimizado para turistas y residentes.",
      results: {
        trafficIncrease: "340%",
        rankingPositions: "22 palabras clave en Top 3",
        leadIncrease: "280%",
        revenueIncrease: "450%"
      },
      metrics: [
        { label: "Tráfico Orgánico", before: "1,800", after: "7,920", increase: "+340%" },
        { label: "Reservas Online", before: "15", after: "57", increase: "+280%" },
        { label: "Posiciones Top 5", before: "3", after: "28", increase: "+833%" },
        { label: "Revenue Mensual", before: "$22K", after: "$121K", increase: "+450%" }
      ],
      timeline: [
        { month: "Mes 1-2", task: "Investigación de mercado y palabras clave", result: "Mapeamos 180 términos de búsqueda relevantes" },
        { month: "Mes 3-4", task: "Optimización local y Google My Business", result: "Alcanzamos el pack local para 12 términos" },
        { month: "Mes 5-6", task: "Contenido para turistas y link building", result: "15 artículos sobre Miami y transporte" },
        { month: "Mes 7+", task: "Expansión a ciudades cercanas", result: "Dominio en Fort Lauderdale y Kendall" }
      ],
      testimonial: {
        text: "Roger entendió perfectamente nuestro mercado. Ahora aparecemos antes que Hertz y Enterprise en muchas búsquedas locales.",
        author: "Carlos Mendoza",
        position: "Fundador, Flo Car Rental"
      }
    }
  };

  const currentCase = caseStudies[slug as keyof typeof caseStudies];
  
  if (!currentCase) {
    return <Navigate to="/es/casos-de-exito" replace />;
  }

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="caseStudies" 
        customTitle={`Caso de Éxito: ${currentCase.company} | Calvo Creativo`}
        customDescription={`Cómo ayudamos a ${currentCase.company} a aumentar su tráfico orgánico en ${currentCase.results.trafficIncrease} y generar más leads en ${currentCase.location}.`}
        customCanonical={`https://calvocreativo.com/es/casos-de-exito/${slug}`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4" />
                Caso de Éxito
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
                {currentCase.company}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Cómo aumentamos el tráfico orgánico en <span className="text-teal font-bold">{currentCase.results.trafficIncrease}</span> 
                {' '}y generamos <span className="text-electric-blue font-bold">{currentCase.results.leadIncrease}</span> más leads
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-bright-orange" />
                  {currentCase.industry}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-teal" />
                  {currentCase.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-electric-blue" />
                  {currentCase.projectDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Resultados en Números</h2>
              <p className="text-lg text-muted-foreground">Métricas reales que demuestran el impacto de nuestra estrategia</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentCase.metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Antes: {metric.before}</span>
                    <span className="text-primary font-semibold">Después: {metric.after}</span>
                  </div>
                  <div className="text-2xl font-bold text-teal">{metric.increase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">El Desafío</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentCase.challenge}
                </p>
                
                <div className="bg-gradient-to-br from-bright-orange/5 to-bright-orange/10 border border-bright-orange/20 rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-3">Situación Inicial</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-bright-orange rounded-full mt-2 flex-shrink-0"></div>
                      Baja visibilidad en búsquedas locales
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-bright-orange rounded-full mt-2 flex-shrink-0"></div>
                      Competencia dominando primeras posiciones
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-bright-orange rounded-full mt-2 flex-shrink-0"></div>
                      Pocos leads orgánicos de calidad
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Nuestra Solución</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentCase.solution}
                </p>
                
                <div className="bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-3">Estrategia Implementada</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                      Auditoría técnica completa
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                      Optimización de contenido existente
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                      Estrategia de SEO local
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                      Link building estratégico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Cronología del Proyecto</h2>
              <p className="text-lg text-muted-foreground">Cómo ejecutamos la estrategia paso a paso</p>
            </div>
            
            <div className="space-y-8">
              {currentCase.timeline.map((phase, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal to-electric-blue text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-primary">{phase.month}</h3>
                        <span className="text-sm text-teal bg-teal/10 px-3 py-1 rounded-full">
                          {phase.task}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{phase.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
                "{currentCase.testimonial.text}"
              </blockquote>
              <div>
                <div className="font-semibold text-xl">{currentCase.testimonial.author}</div>
                <div className="text-white/70">{currentCase.testimonial.position}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              ¿Listo para Resultados Similares?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Podemos replicar este éxito en tu negocio. Hablemos sobre tu proyecto específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:rogermur1990@gmail.com?subject=Consulta sobre Caso de Éxito">
                  Solicitar Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/es/casos-de-exito">Ver Más Casos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentSlug={slug || ''} />
    </main>
  );
};

export default CasoDeExitoDetalle;