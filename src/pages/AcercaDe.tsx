import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Heart, Target, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const AcercaDe = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Resultados Medibles", 
      description: "Cada estrategia se basa en datos y métricas reales. No hacemos SEO por hacer SEO, lo hacemos para generar crecimiento real en tu negocio.",
      color: "teal"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Transparencia Total",
      description: "Explicamos cada paso, compartimos nuestros procesos y te mantenemos informado. El SEO no debería ser una caja negra.",
      color: "electric-blue"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Enfoque Humano", 
      description: "Detrás de cada keyword hay personas reales con necesidades reales. Optimizamos para algoritmos, pero pensamos en humanos.",
      color: "bright-orange"
    }
  ];

  const stats = [
    {
      number: "7+",
      label: "Años en SEO",
      color: "teal"
    },
    {
      number: "50+", 
      label: "Proyectos Exitosos",
      color: "electric-blue"
    },
    {
      number: "+280%",
      label: "Crecimiento Promedio",
      color: "bright-orange"
    },
    {
      number: "100%",
      label: "Enfocado en Florida",
      color: "purple"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO page="acercaDe" />
      <Header />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Sobre Calvo Creativo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Ayudando a empresas de Florida a crecer con SEO desde 2017. 
              Especialista en autoridad tópica y estrategias basadas en intención de búsqueda.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Mi Historia en SEO
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Comencé en SEO en 2017, cuando las reglas del juego eran diferentes. 
                    Desde entonces, he visto cómo el SEO evolucionó de ser sobre "trucos" 
                    a convertirse en una disciplina estratégica centrada en la experiencia del usuario.
                  </p>
                  
                  <p>
                    Mi enfoque siempre ha sido entender profundamente el mercado local de Florida. 
                    Desde Miami hasta Jacksonville, cada ciudad tiene sus particularidades, 
                    su competencia única y sus oportunidades específicas.
                  </p>
                  
                  <p>
                    He desarrollado el Framework MAES después de años de prueba y error, 
                    estudiando qué funciona realmente en el mercado estadounidense y, 
                    específicamente, en el ecosistema empresarial de Florida.
                  </p>
                </div>
                
                <Button size="lg" className="mt-8 group">
                  Conocer el Framework MAES
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 border border-${stat.color}/20 rounded-2xl p-6 text-center`}
                  >
                    <div className={`text-4xl font-black text-${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Mis Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían cada proyecto y cada decisión estratégica
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${value.color}/10 rounded-2xl mb-6`}>
                    <div className={`text-${value.color}`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Mi Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Especializado en estrategias que funcionan específicamente para el mercado de Florida
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-teal mr-3" />
                    <h3 className="text-xl font-semibold text-primary">SEO Técnico Avanzado</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Core Web Vitals, arquitectura de sitios, indexación, crawling, 
                    y optimización de performance para sitios complejos.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-electric-blue mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Autoridad Tópica</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Construcción de autoridad através de topic clusters, 
                    arquitectura semántica y content hubs que posicionan.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-bright-orange mr-3" />
                    <h3 className="text-xl font-semibold text-primary">SEO Local Florida</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Estrategias específicas para mercados locales de Florida: 
                    Miami, Orlando, Tampa, Jacksonville y toda la región.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Growth SEO</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    SEO orientado a crecimiento empresarial: leads, conversiones, 
                    revenue y métricas que impactan directamente el negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Si tu empresa está lista para crecer con una estrategia SEO seria y basada en resultados, 
            conversemos sobre tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Agendar Consultoría
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

export default AcercaDe;