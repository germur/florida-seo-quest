import { Button } from "@/components/ui/button";
import { Calculator, Target, FileText } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import ROICalculator from "@/components/ROICalculator";
import ClusterGenerator from "@/components/ClusterGenerator";

const Resources = () => {
  const tools = [
    {
      name: "Calculadora ROI de SEO",
      description: "Descubre el valor real de tu inversión en SEO y proyecta tus ganancias potenciales.",
      icon: <Calculator className="h-8 w-8" />,
      component: "calculator",
      color: "electric-blue"
    },
    {
      name: "Generador de Clusters Temáticos",
      description: "Crea una arquitectura de contenido que construya autoridad temática en Google.",
      icon: <Target className="h-8 w-8" />,
      component: "cluster",
      color: "bright-orange"
    },
    {
      name: "Plantilla de Investigación de Keywords",
      description: "Plantilla avanzada de Excel para investigación de palabras clave con fórmulas automatizadas.",
      icon: <FileText className="h-8 w-8" />,
      component: "template",
      color: "neutral-gray"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-black text-5xl md:text-6xl text-foreground mb-6">
              Recursos y Herramientas SEO
            </h1>
            <p className="font-subtitle text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Herramientas gratuitas, plantillas y guías para implementar estrategias SEO profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-3xl text-foreground text-center mb-12">
              Herramientas Disponibles
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-${tool.color}/10 to-${tool.color}/5 border border-${tool.color}/20 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${tool.color}/20 rounded-2xl mb-6 group-hover:bg-${tool.color}/30 transition-all duration-300`}>
                    <div className={`text-${tool.color}`}>
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-4">{tool.name}</h3>
                  <p className="font-body text-muted-foreground">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl text-foreground mb-4">
                Calculadora ROI de SEO
              </h2>
              <p className="font-subtitle text-lg text-muted-foreground">
                Calcula el retorno de inversión de tus estrategias SEO de manera precisa
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Cluster Generator Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl text-foreground mb-4">
                Generador de Clusters Temáticos SEO
              </h2>
              <p className="font-subtitle text-lg text-muted-foreground">
                Crea una arquitectura de contenido que construya autoridad temática en Google
              </p>
            </div>
            
            <ClusterGenerator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground via-neutral-gray to-foreground text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6">
            ¿Necesitas Más Ayuda?
          </h2>
          <p className="font-subtitle text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Obtén orientación personalizada y estrategias avanzadas con nuestros servicios de consultoría SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Agendar Consultoría
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/services">
                Ver Servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;