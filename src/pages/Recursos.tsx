import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink, Wrench, FileText, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Recursos = () => {
  const resourceCategories = [
    {
      id: "herramientas",
      title: "Herramientas",
      description: "Tools y recursos técnicos para SEO",
      icon: <Wrench className="h-6 w-6" />,
      color: "teal"
    },
    {
      id: "plantillas", 
      title: "Plantillas",
      description: "Templates y frameworks listos para usar",
      icon: <FileText className="h-6 w-6" />,
      color: "electric-blue"
    },
    {
      id: "glosario",
      title: "Glosario",
      description: "Términos y conceptos de SEO explicados",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bright-orange"
    }
  ];

  const tools = [
    {
      name: "SEO Audit Checklist",
      description: "Lista completa para auditar cualquier sitio web. Incluye aspectos técnicos, on-page y UX.",
      type: "PDF Checklist",
      category: "herramientas",
      downloadCount: "2.3k",
      size: "2.1 MB"
    },
    {
      name: "Keyword Research Spreadsheet",
      description: "Plantilla avanzada de Excel para investigación de palabras clave con fórmulas automatizadas.",
      type: "Excel Template",
      category: "plantillas", 
      downloadCount: "1.8k",
      size: "1.5 MB"
    },
    {
      name: "Content Calendar Template",
      description: "Calendario editorial SEO-optimizado con planning de temas y keywords.",
      type: "Google Sheets",
      category: "plantillas",
      downloadCount: "1.5k",
      size: "Google Sheets"
    },
    {
      name: "Technical SEO Toolkit", 
      description: "Conjunto de scripts y herramientas para análisis técnico avanzado.",
      type: "Scripts Collection",
      category: "herramientas",
      downloadCount: "950",
      size: "5.2 MB"
    },
    {
      name: "Schema Markup Generator",
      description: "Generador de código de datos estructurados para diferentes tipos de contenido.",
      type: "Web Tool",
      category: "herramientas",
      downloadCount: "3.1k",
      size: "Online Tool"
    },
    {
      name: "Content Brief Template",
      description: "Plantilla para crear briefs de contenido SEO-optimizado que convierte.",
      type: "Word Template",
      category: "plantillas",
      downloadCount: "2.7k", 
      size: "850 KB"
    }
  ];

  const glossaryTerms = [
    {
      term: "Topical Authority",
      definition: "La autoridad que Google percibe sobre tu sitio en un tema específico, basada en la profundidad y calidad del contenido.",
      category: "Core Concepts"
    },
    {
      term: "Core Web Vitals",
      definition: "Métricas de experiencia de usuario que Google usa como factor de ranking: LCP, FID y CLS.",
      category: "Technical SEO"
    },
    {
      term: "Search Intent",
      definition: "La intención real del usuario detrás de una búsqueda: informacional, navegacional, transaccional o comercial.",
      category: "Content Strategy"
    },
    {
      term: "Topic Clusters",
      definition: "Arquitectura de contenido donde una página pillar conecta con múltiples páginas de soporte sobre subtemas relacionados.",
      category: "Content Strategy"
    },
    {
      term: "E-A-T",
      definition: "Expertise, Authoritativeness, Trustworthiness - Los criterios que Google usa para evaluar la calidad del contenido.",
      category: "Quality Guidelines"
    },
    {
      term: "SERP Features",
      definition: "Elementos especiales en los resultados de búsqueda como featured snippets, knowledge panels, local pack, etc.",
      category: "SERP Analysis"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="resourcesEs" 
        customCanonical="/es/recursos"
      />
      <Header />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Recursos SEO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Herramientas, plantillas y recursos gratuitos para potenciar tu estrategia SEO. 
              Todo lo que necesitas en un solo lugar.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {resourceCategories.map((category) => (
                <div key={category.id} className={`text-center bg-${category.color}/5 border border-${category.color}/20 rounded-2xl p-6`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${category.color}/10 rounded-xl mb-3`}>
                    <div className={`text-${category.color}`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Herramientas & Plantillas
              </h2>
              <p className="text-lg text-muted-foreground">
                Recursos probados que uso diariamente en mis proyectos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => {
                const category = resourceCategories.find(cat => cat.id === tool.category);
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-${category?.color}/10 rounded-xl`}>
                        <div className={`text-${category?.color}`}>
                          {category?.icon}
                        </div>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <div>{tool.downloadCount} descargas</div>
                        <div className="mt-1">{tool.size}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {tool.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <div className={`inline-block px-3 py-1 bg-${category?.color}/10 text-${category?.color} text-xs font-medium rounded-full mb-4`}>
                      {tool.type}
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                      Descargar Gratis
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Glosario SEO
              </h2>
              <p className="text-lg text-muted-foreground">
                Los términos más importantes explicados de forma simple
              </p>
            </div>
            
            <div className="space-y-6">
              {glossaryTerms.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/3">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {item.term}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-bright-orange/10 text-bright-orange text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Ver Glosario Completo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Más recursos cada mes
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Suscríbete y recibe recursos exclusivos, plantillas nuevas y herramientas avanzadas directamente en tu email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Tu email..." 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
            />
            <Button variant="secondary" size="lg">
              Acceder Gratis
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-white/70">
            <div>✓ Recursos mensuales exclusivos</div>
            <div>✓ Templates premium gratuitas</div>
            <div>✓ Acceso anticipado a herramientas</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Recursos;