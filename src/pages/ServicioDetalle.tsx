import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, MapPin, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SILO_STRUCTURE, FLORIDA_CITIES, getSILONode, generateSILOSchema, getCityDataBySlug } from "@/lib/silo-structure";
import { addSchema } from "@/lib/seo";
import { useEffect } from "react";

const ServicioDetalle = () => {
  const { service } = useParams();
  
  const serviceNode = getSILONode(service || '');
  
  if (!serviceNode || serviceNode.type !== 'service') {
    return <Navigate to="/es/servicios" replace />;
  }

  useEffect(() => {
    // Add service-specific schema
    addSchema(generateSILOSchema(serviceNode), 'service-schema');
  }, [serviceNode]);

  const serviceDetails = {
    'strategic-seo-consulting': {
      hero: {
        subtitle: "Estrategia SEO Impulsada por IA e Implementación",
        description: "Hoja de ruta completa basada en investigación profunda, arquitectura semántica sólida y contenido que convierte. Nuestro framework MAES entrega crecimiento medible.",
        features: ["Investigación de mercado y análisis competitivo con IA", "Arquitectura de información semántica", "Estrategia de contenido basada en intención de búsqueda", "Hoja de ruta de implementación priorizada", "KPIs y métricas de seguimiento"],
        price: "Desde $2,500",
        duration: "4-6 semanas"
      },
      process: [
        { phase: "Investigación de Mercado", description: "Análisis profundo de tu mercado, competidores y oportunidades", weeks: "1-2" },
        { phase: "Planificación de Arquitectura", description: "Diseño de arquitectura semántica y estructura de información", weeks: "3-4" },
        { phase: "Estrategia de Ejecución", description: "Estrategia de contenido y planificación de implementación", weeks: "5-6" },
        { phase: "Escalado y Optimización", description: "Optimización continua y estrategias de crecimiento", weeks: "Continuo" }
      ],
      benefits: [
        "Aumentar tráfico orgánico en 200-400%",
        "Mejorar rankings de búsqueda para palabras clave objetivo",
        "Construir ventaja competitiva sostenible",
        "Establecer autoridad temática en tu nicho"
      ]
    },
    'digital-storytelling-services': {
      hero: {
        subtitle: "Transforma Tu Marca a Través de Narrativas Convincentes",
        description: "Creamos historias digitales que resuenan con tu audiencia, construyen conexiones emocionales y impulsan conversiones a través del diseño narrativo estratégico.",
        features: ["Desarrollo y posicionamiento de historia de marca", "Estrategia narrativa de contenido", "Mapeo de conexiones emocionales", "Enfoque de storytelling multiplataforma", "Medición y optimización del rendimiento"],
        price: "Desde $1,800",
        duration: "3-4 semanas"
      },
      process: [
        { phase: "Descubrimiento de Marca", description: "Descubrir tu historia única de marca y valores", weeks: "1" },
        { phase: "Diseño Narrativo", description: "Crear marcos de historia convincentes y mensajes", weeks: "2-3" },
        { phase: "Creación de Contenido", description: "Desarrollar contenido narrativo multiplataforma", weeks: "4" },
        { phase: "Optimización de Historia", description: "Refinar y optimizar basado en rendimiento", weeks: "Continuo" }
      ],
      benefits: [
        "Aumentar engagement de marca en 150%",
        "Construir conexiones emocionales más fuertes",
        "Mejorar tasas de conversión de contenido",
        "Crear experiencias de marca memorables"
      ]
    },
    'seo-automation': {
      hero: {
        subtitle: "Escala Tu SEO con Automatización Impulsada por IA",
        description: "Aprovecha herramientas de IA de vanguardia y automatización para agilizar investigación de palabras clave, optimización de contenido y seguimiento de rendimiento a escala.",
        features: ["Investigación y seguimiento de palabras clave con IA", "Optimización de contenido automatizada", "Dashboards de monitoreo de rendimiento", "Automatización de inteligencia competitiva", "Sistemas de reportes escalables"],
        price: "Desde $2,200",
        duration: "2-3 semanas configuración"
      },
      process: [
        { phase: "Configuración de Automatización", description: "Configurar herramientas de IA y flujos de automatización", weeks: "1" },
        { phase: "Integración de Datos", description: "Conectar analytics, search console y seguimiento", weeks: "2" },
        { phase: "Lanzamiento de Optimización", description: "Desplegar sistemas de optimización automatizados", weeks: "3" },
        { phase: "Aprendizaje Continuo", description: "IA aprende y mejora rendimiento con el tiempo", weeks: "Continuo" }
      ],
      benefits: [
        "Reducir tareas SEO manuales en 80%",
        "Escalar esfuerzos de optimización de contenido",
        "Obtener insights de rendimiento en tiempo real",
        "Automatizar análisis competitivo"
      ]
    },
    'personal-branding-consulting': {
      hero: {
        subtitle: "Construye Tu Autoridad Profesional y Presencia Online",
        description: "Establécete como líder de pensamiento en tu industria a través de branding personal estratégico y presencia digital optimizada para SEO.",
        features: ["Desarrollo de estrategia de marca personal", "Optimización de perfil profesional", "Estrategia de contenido y liderazgo de pensamiento", "Gestión de reputación online", "Campañas de construcción de autoridad en la industria"],
        price: "Desde $1,500",
        duration: "4-5 semanas"
      },
      process: [
        { phase: "Evaluación de Marca", description: "Analizar presencia actual y reputación", weeks: "1" },
        { phase: "Desarrollo de Estrategia", description: "Crear estrategia integral de branding", weeks: "2-3" },
        { phase: "Optimización de Perfil", description: "Optimizar todos los puntos de contacto digitales y perfiles", weeks: "4" },
        { phase: "Construcción de Autoridad", description: "Implementar estrategia de contenido de liderazgo de pensamiento", weeks: "5+" }
      ],
      benefits: [
        "Aumentar visibilidad profesional en 300%",
        "Generar más leads calificados",
        "Construir reconocimiento en la industria",
        "Comandar tarifas de consultoría más altas"
      ]
    }
  };

  const currentService = serviceDetails[service as keyof typeof serviceDetails];
  
  if (!currentService) {
    return <Navigate to="/es/servicios" replace />;
  }

  const serviceNames = {
    'strategic-seo-consulting': 'Consultoría SEO Estratégica',
    'digital-storytelling-services': 'Servicios de Storytelling Digital',
    'seo-automation': 'Automatización SEO',
    'personal-branding-consulting': 'Consultoría de Branding Personal'
  };

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="services" 
        customTitle={`${serviceNames[service as keyof typeof serviceNames]} | Calvo Creativo Florida SEO`}
        customDescription={currentService.hero.description}
        customCanonical={`https://calvocreativo.com/es/servicios/${service}`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              {serviceNames[service as keyof typeof serviceNames]}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {currentService.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              {currentService.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:rogermur1990@gmail.com?subject=Consultoría SEO Gratuita">
                  Empezar Hoy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/es/casos-de-exito">Ver Casos de Éxito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Qué Está Incluido
                </h2>
                <div className="space-y-4">
                  {currentService.hero.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Inversión</span>
                    <span className="text-2xl font-bold text-primary">{currentService.hero.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cronograma</span>
                    <span className="font-semibold text-primary">{currentService.hero.duration}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:rogermur1990@gmail.com?subject=Consulta Gratuita SEO">
                        Agendar Consulta Gratuita
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Nuestro Proceso</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Una metodología probada que entrega resultados a través de implementación estructurada
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentService.process.map((phase, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-electric-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{phase.phase}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                  <span className="text-xs font-medium text-teal bg-teal/10 px-2 py-1 rounded">
                    Semana {phase.weeks}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Resultados Esperados</h2>
              <p className="text-lg text-muted-foreground">
                Lo que puedes esperar al trabajar con nuestra metodología probada
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-bright-orange mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Florida Cities Coverage */}
      <section className="py-24 bg-gradient-to-br from-teal/5 to-electric-blue/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Sirviendo Empresas de Florida
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experiencia local con comprensión profunda de mercados y ecosistemas empresariales de Florida
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FLORIDA_CITIES.map((city, index) => (
                <Link
                  key={index}
                  to={`/es/servicios/${service}/${city.slug}/`}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <MapPin className="h-6 w-6 text-teal mx-auto mb-2 group-hover:text-electric-blue transition-colors" />
                    <h3 className="font-semibold text-primary group-hover:text-teal transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{city.region}</p>
                    <p className="text-xs text-muted-foreground mt-1">{city.businessCount} empresas</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Hablemos sobre cómo este servicio puede transformar el crecimiento de tu negocio en Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:rogermur1990@gmail.com?subject=Consulta Gratuita SEO">
                Agendar Consulta Gratuita
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/es/casos-de-exito">Ver Casos de Éxito</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicioDetalle;