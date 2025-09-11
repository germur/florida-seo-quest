import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Building, FileText, TrendingUp, CheckCircle } from "lucide-react";

const ComoTrabajamos = () => {
  const phases = [
    {
      id: "investigacion-inicial",
      phase: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Investigación Inicial",
      description: "Entendemos tu mercado, competencia y oportunidades únicas",
      activities: [
        "Análisis profundo de competencia directa e indirecta",
        "Research de palabras clave basado en intención real de búsqueda",
        "Estudio del customer journey y puntos de conversión",
        "Identificación de gaps y oportunidades de contenido",
        "Análisis técnico inicial del sitio web actual"
      ],
      deliverables: [
        "Documento de investigación competitiva",
        "Keyword research priorizado por oportunidad",
        "Mapa de customer journey SEO",
        "Audit técnico inicial"
      ],
      duration: "1-2 semanas",
      color: "teal"
    },
    {
      id: "arquitectura-semantica",
      phase: "02", 
      icon: <Building className="h-8 w-8" />,
      title: "Arquitectura Semántica",
      description: "Construimos estructuras que Google entiende y valora",
      activities: [
        "Diseño de arquitectura de información optimizada",
        "Creación de topic clusters y pillar pages",
        "Planificación de URL structure y navegación",
        "Definición de internal linking strategy",
        "Schema markup y datos estructurados"
      ],
      deliverables: [
        "Mapa de arquitectura semántica",
        "Estrategia de topic clusters",
        "Plan de URLs y navegación",
        "Guía de internal linking",
        "Implementación de schema markup"
      ],
      duration: "2-3 semanas",
      color: "electric-blue"
    },
    {
      id: "estrategia-contenido",
      phase: "03",
      icon: <FileText className="h-8 w-8" />,
      title: "Estrategia de Contenido",
      description: "Contenido que posiciona, convierte y genera autoridad",
      activities: [
        "Content gap analysis y oportunidades de contenido",
        "Creación de content calendar SEO-driven",
        "Optimización de contenido existente",
        "Desarrollo de pillar content y supporting content",
        "Estrategia de content promotion y link building"
      ],
      deliverables: [
        "Content strategy document",
        "Editorial calendar trimestral",
        "Content optimization guidelines",
        "Templates y frameworks de contenido",
        "Link building strategy"
      ],
      duration: "2-4 semanas",
      color: "bright-orange"
    },
    {
      id: "hoja-ruta-medicion",
      phase: "04",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Hoja de Ruta y Medición",
      description: "Prorizamos, ejecutamos y medimos para escalar resultados",
      activities: [
        "Roadmap de implementación priorizado por impacto/esfuerzo",
        "Setup de KPIs y métricas de seguimiento",
        "Implementación de tracking y analytics avanzados",
        "Procesos de monitoreo y optimización continua",
        "Reportes de performance y recomendaciones"
      ],
      deliverables: [
        "Roadmap detallado de 6-12 meses",
        "Dashboard de KPIs y métricas",
        "Setup completo de tracking",
        "Procesos de optimización continua",
        "Sistema de reporting mensual"
      ],
      duration: "1-2 semanas + ongoing",
      color: "purple"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Cómo Trabajamos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              El Framework MAES: Una metodología probada que combina investigación profunda, 
              arquitectura sólida y contenido que genera resultados medibles.
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-teal/10 via-electric-blue/10 to-bright-orange/10 rounded-2xl p-8 border border-border">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">MAES</div>
                <div className="text-sm text-muted-foreground">Framework</div>
              </div>
              <div className="mx-8 text-muted-foreground">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="font-semibold text-teal">M</span>arket Research</div>
                <div><span className="font-semibold text-electric-blue">A</span>rchitecture</div>
                <div><span className="font-semibold text-bright-orange">E</span>ngagement Content</div>
                <div><span className="font-semibold text-purple">S</span>cale & Measure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            {phases.map((phase, index) => (
              <article 
                key={phase.id}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                {/* Phase Number & Icon */}
                <div className="lg:col-span-2">
                  <div className="sticky top-24">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${phase.color}/10 rounded-2xl mb-4`}>
                      <div className={`text-${phase.color}`}>
                        {phase.icon}
                      </div>
                    </div>
                    <div className={`text-6xl font-black text-${phase.color}/20`}>
                      {phase.phase}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10 space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                      {phase.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                    <div className={`inline-block mt-4 px-4 py-2 bg-${phase.color}/10 text-${phase.color} rounded-full text-sm font-medium`}>
                      Duración: {phase.duration}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Activities */}
                    <div className="bg-card border border-border rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">¿Qué hacemos?</h3>
                      <ul className="space-y-3">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <CheckCircle className={`h-4 w-4 text-${phase.color} mt-1 mr-3 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Entregables</h3>
                      <ul className="space-y-3">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start">
                            <ArrowRight className={`h-4 w-4 text-${phase.color} mt-1 mr-3 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
              ¿Por qué funciona este proceso?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Basado en Datos</h3>
                <p className="text-muted-foreground">
                  Cada decisión se toma con base en datos reales, no suposiciones.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Escalable</h3>
                <p className="text-muted-foreground">
                  Construimos bases sólidas que crecen contigo a largo plazo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bright-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Medible</h3>
                <p className="text-muted-foreground">
                  Tracking completo para ver el impacto real en tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para implementar el Framework MAES?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto y cómo aplicar esta metodología a tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Empezar Ahora
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComoTrabajamos;