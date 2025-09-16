import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import DiceRoller from "./DiceRoller";

const CaseStudies = () => {
  const cases = [
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
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses across Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseStudy, index) => (
              <Link 
                key={index}
                to={`/case-studies/${caseStudy.slug}`}
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
              <Link to="/case-studies/paramount-property-restoration" className="text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Property Restoration:</strong> +250% Traffic Growth
              </Link>
              <Link to="/case-studies/craftd-london" className="text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>E-commerce:</strong> 50+ Keywords Top 10
              </Link>
              <Link to="/case-studies/edu1st-preschools" className="text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Education:</strong> +80% Local Actions
              </Link>
            </div>
            
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-foreground hover:text-primary transition-colors font-medium"
            >
              View all case studies & results
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;