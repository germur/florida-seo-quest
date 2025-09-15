import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const cases = [
    {
      company: "Paramount",
      industry: "Property Restoration",
      result: "+180% qualified leads in 6 months",
      metrics: ["180% leads", "250% traffic", "420% ROI"]
    },
    {
      company: "1GC Construction", 
      industry: "Commercial Construction",
      result: "+95% organic visibility in 4 months",
      metrics: ["95% visibility", "150% traffic", "280% ROI"]
    },
    {
      company: "Pura Piel",
      industry: "Aesthetics & Beauty", 
      result: "120+ technical errors fixed, +40% indexation",
      metrics: ["120+ fixes", "40% indexation", "190% ROI"]
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
                to="/case-studies"
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
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-foreground hover:text-primary transition-colors"
            >
              View all case studies
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;