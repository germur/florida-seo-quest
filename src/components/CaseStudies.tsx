import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import DiceRoller from "./DiceRoller";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudies = () => {
  const { language, getLocalizedPath } = useLanguage();
  
  const cases = language === 'es' ? [
    {
      company: "Paramount",
      industry: "Restauración de Propiedades",
      result: "+180% leads calificados en 6 meses",
      metrics: ["180% leads", "250% tráfico", "420% ROI"],
      slug: "paramount-property-restoration"
    },
    {
      company: "1GC Construction", 
      industry: "Construcción Comercial",
      result: "+95% visibilidad orgánica en 4 meses",
      metrics: ["95% visibilidad", "150% tráfico", "280% ROI"],
      slug: "1gc-construction"
    },
    {
      company: "Pura Piel",
      industry: "Estética y Belleza", 
      result: "120+ errores técnicos arreglados, +40% indexación",
      metrics: ["120+ arreglos", "40% indexación", "190% ROI"],
      slug: "pura-piel-aesthetics"
    }
  ] : [
    {
      company: "Paramount",
      industry: "Property Restoration",
      result: "+180% qualified leads in 6 months",
      metrics: ["180% leads", "250% traffic", "420% ROI"],
      slug: "paramount-property-restoration"
    },
    {
      company: "1GC Construction", 
      industry: "Commercial Construction",
      result: "+95% organic visibility in 4 months",
      metrics: ["95% visibility", "150% traffic", "280% ROI"],
      slug: "1gc-construction"
    },
    {
      company: "Pura Piel",
      industry: "Aesthetics & Beauty", 
      result: "120+ technical errors fixed, +40% indexation",
      metrics: ["120+ fixes", "40% indexation", "190% ROI"],
      slug: "pura-piel-aesthetics"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {language === 'es' ? 'Casos de Éxito' : 'Case Studies'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Resultados reales de empresas reales en toda Florida'
                : 'Real results from real businesses across Florida'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseStudy, index) => (
              <Link 
                key={index}
                to={getLocalizedPath(`/case-studies/${caseStudy.slug}`)}
                className="block bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {caseStudy.industry}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {caseStudy.company}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {caseStudy.result}
                </p>
                
                <div className="flex gap-4 text-sm">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-muted-foreground">
                      {metric}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="mb-8">
              <DiceRoller />
            </div>
            
            {/* Strategic case study navigation */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <Link to={getLocalizedPath('/case-studies/paramount-property-restoration')} className="text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>{language === 'es' ? 'Restauración:' : 'Property Restoration:'}</strong> {language === 'es' ? '+250% Crecimiento Tráfico' : '+250% Traffic Growth'}
              </Link>
              <Link to={getLocalizedPath('/case-studies/craftd-london')} className="text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>{language === 'es' ? 'E-commerce:' : 'E-commerce:'}</strong> {language === 'es' ? '50+ Keywords Top 10' : '50+ Keywords Top 10'}
              </Link>
              <Link to={getLocalizedPath('/case-studies/edu1st-preschools')} className="text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>{language === 'es' ? 'Educación:' : 'Education:'}</strong> {language === 'es' ? '+80% Acciones Locales' : '+80% Local Actions'}
              </Link>
            </div>
            
            <Link 
              to={getLocalizedPath('/case-studies')} 
              className="inline-flex items-center text-foreground hover:text-primary transition-colors font-medium"
            >
              {language === 'es' 
                ? 'Ver todos los casos de éxito y resultados'
                : 'View all case studies & results'
              }
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;