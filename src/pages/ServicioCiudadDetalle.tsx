import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, MapPin, Users, TrendingUp, Target, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SILO_STRUCTURE, FLORIDA_CITIES, getSILONode, generateSILOSchema, getCityDataBySlug } from "@/lib/silo-structure";
import { addSchema } from "@/lib/seo";
import { useEffect } from "react";

const ServicioCiudadDetalle = () => {
  const { service, city } = useParams();
  
  const serviceNode = getSILONode(service || '');
  const cityData = getCityDataBySlug(city || '');
  
  if (!serviceNode || serviceNode.type !== 'service' || !cityData) {
    return <Navigate to="/es/servicios" replace />;
  }

  useEffect(() => {
    // Add service and local schema
    addSchema(generateSILOSchema(serviceNode), 'service-schema');
  }, [serviceNode]);

  const serviceNames = {
    'strategic-seo-consulting': 'Consultoría SEO Estratégica',
    'digital-storytelling-services': 'Servicios de Storytelling Digital',
    'seo-automation': 'Automatización SEO',
    'personal-branding-consulting': 'Consultoría de Branding Personal'
  };

  const serviceDescriptions = {
    'strategic-seo-consulting': 'Estrategias SEO personalizadas para empresas de',
    'digital-storytelling-services': 'Storytelling digital que conecta con la audiencia de',
    'seo-automation': 'Automatización SEO para hacer crecer negocios en',
    'personal-branding-consulting': 'Consultoría de marca personal para profesionales de'
  };

  const benefits = [
    `Dominar búsquedas locales en ${cityData.name}`,
    `Atraer más clientes en ${cityData.region}`,
    `Superar competidores locales de ${cityData.name}`,
    `Establecer autoridad en el mercado de ${cityData.name}`
  ];

  const localFeatures = [
    `Investigación específica del mercado de ${cityData.name}`,
    `Análisis de competencia local en ${cityData.region}`,
    `Optimización para búsquedas "${service} ${cityData.name}"`,
    `Estrategia de contenido local para ${cityData.name}`,
    `Construcción de autoridad en ${cityData.region}`
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="services" 
        customTitle={`${serviceNames[service as keyof typeof serviceNames]} en ${cityData.name} | Calvo Creativo`}
        customDescription={`${serviceDescriptions[service as keyof typeof serviceDescriptions]} ${cityData.name}, Florida. Expertos en SEO local con resultados comprobados.`}
        customCanonical={`https://calvocreativo.com/es/servicios/${service}/${city}`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-teal" />
              <span className="text-teal font-medium">{cityData.name}, {cityData.region}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              {serviceNames[service as keyof typeof serviceNames]} en {cityData.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {serviceDescriptions[service as keyof typeof serviceDescriptions]} {cityData.name}, Florida
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Experiencia local comprobada ayudando a más de {cityData.businessCount} empresas en {cityData.name} 
              a dominar sus mercados locales a través de estrategias SEO personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={`mailto:rogermur1990@gmail.com?subject=Consulta SEO ${cityData.name} - ${serviceNames[service as keyof typeof serviceNames]}`}>
                  Consulta Gratuita en {cityData.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/es/casos-de-exito">Ver Casos Locales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Insights */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Conocimiento Local de {cityData.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entendemos el mercado único de {cityData.name} y cómo hacer que tu negocio destaque
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 rounded-2xl p-8 text-center">
                <Users className="h-12 w-12 text-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Mercado Local</h3>
                <p className="text-muted-foreground">
                  {cityData.businessCount} empresas activas en {cityData.name} compitiendo por visibilidad online
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border border-electric-blue/20 rounded-2xl p-8 text-center">
                <TrendingUp className="h-12 w-12 text-electric-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Oportunidades</h3>
                <p className="text-muted-foreground">
                  Mercado en crecimiento en {cityData.region} con alto potencial para empresas locales
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-bright-orange/5 to-bright-orange/10 border border-bright-orange/20 rounded-2xl p-8 text-center">
                <Target className="h-12 w-12 text-bright-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Estrategia</h3>
                <p className="text-muted-foreground">
                  Enfoque localizado para dominar búsquedas específicas de {cityData.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Features */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Servicio Especializado para {cityData.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  No aplicamos estrategias genéricas. Cada plan se personaliza específicamente 
                  para el mercado de {cityData.name} y sus características únicas.
                </p>
                
                <div className="space-y-4">
                  {localFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-electric-blue/5 border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  ¿Por Qué Elegir Calvo Creativo para {cityData.name}?
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-bright-orange mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:rogermur1990@gmail.com?subject=Consulta SEO Local ${cityData.name}`}>
                      Consulta Local Gratuita
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Results */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Resultados Reales en {cityData.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Casos de éxito de empresas similares a la tuya en {cityData.region}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-teal mb-2">250%</div>
                <div className="text-sm text-muted-foreground">Aumento promedio en tráfico local</div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-electric-blue mb-2">#1-3</div>
                <div className="text-sm text-muted-foreground">Posiciones en Google para términos locales</div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-bright-orange mb-2">180%</div>
                <div className="text-sm text-muted-foreground">Incremento en leads calificados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                También Servimos Otras Ciudades de Florida
              </h2>
              <p className="text-lg text-muted-foreground">
                Experiencia local en los principales mercados de Florida
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {FLORIDA_CITIES.filter(c => c.slug !== city).slice(0, 8).map((otherCity, index) => (
                <Link
                  key={index}
                  to={`/es/servicios/${service}/${otherCity.slug}/`}
                  className="group bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <MapPin className="h-5 w-5 text-teal mx-auto mb-2 group-hover:text-electric-blue transition-colors" />
                  <h3 className="font-medium text-primary group-hover:text-teal transition-colors text-sm">
                    {otherCity.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{otherCity.region}</p>
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
            Domina el Mercado de {cityData.name}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos hacer crecer tu negocio específicamente en {cityData.name}, Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href={`mailto:rogermur1990@gmail.com?subject=Consulta SEO ${cityData.name} - ${serviceNames[service as keyof typeof serviceNames]}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contactar Ahora
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to={`/es/servicios/${service}`}>Ver Servicio Completo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicioCiudadDetalle;
