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
            
            {/* Strategic case study navigation with enhanced internal linking */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <Link to="/case-studies/paramount-property-restoration" className="text-sm text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Property Restoration SEO:</strong> +250% Traffic & Emergency Leads
                <div className="text-xs text-muted-foreground/70 mt-1">Home Services • Local SEO • Programmatic Pages</div>
              </Link>
              <Link to="/case-studies/craftd-london" className="text-sm text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>E-commerce Jewelry SEO:</strong> 50+ Keywords Top 10
                <div className="text-xs text-muted-foreground/70 mt-1">Product SEO • Content Strategy • Rich Snippets</div>
              </Link>
              <Link to="/case-studies/edu1st-preschools" className="text-sm text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Multi-Location Education SEO:</strong> +80% Google Actions
                <div className="text-xs text-muted-foreground/70 mt-1">Local SEO • Content Marketing • Lead Generation</div>
              </Link>
              <Link to="/case-studies/flo-car-rental" className="text-sm text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Local Car Rental SEO:</strong> +120% GBP Actions
                <div className="text-xs text-muted-foreground/70 mt-1">Local SEO • Conversion Optimization • Mobile-First</div>
              </Link>
              <Link to="/case-studies/puff-cleaning" className="text-sm text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Cleaning Services SEO:</strong> 0 to 2K Monthly Visitors
                <div className="text-xs text-muted-foreground/70 mt-1">Local Authority • Service Pages • Review Management</div>
              </Link>
              <Link to="/case-studies/le-gramme" className="text-sm text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-card/50 border border-transparent hover:border-border/30">
                <strong>Luxury Jewelry International SEO:</strong> +40% Impressions
                <div className="text-xs text-muted-foreground/70 mt-1">International SEO • Luxury Branding • Hreflang</div>
              </Link>
            </div>
            
            {/* SEO Services Cross-Links */}
            <div className="bg-secondary/10 border border-border/50 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">Proven SEO Strategies Behind These Results</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <Link to="/services/local-seo-optimization" className="text-center p-3 rounded-lg hover:bg-background/50 transition-colors group">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Local SEO</div>
                  <div className="text-xs text-muted-foreground">Google Business Profile & Local Pack</div>
                </Link>
                <Link to="/services/seo-automation" className="text-center p-3 rounded-lg hover:bg-background/50 transition-colors group">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">SEO Automation</div>
                  <div className="text-xs text-muted-foreground">Programmatic & Scalable SEO</div>
                </Link>
                <Link to="/services/ecommerce-seo" className="text-center p-3 rounded-lg hover:bg-background/50 transition-colors group">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">E-commerce SEO</div>
                  <div className="text-xs text-muted-foreground">Product & Category Optimization</div>
                </Link>
                <Link to="/services/strategic-seo-consulting" className="text-center p-3 rounded-lg hover:bg-background/50 transition-colors group">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">SEO Strategy</div>
                  <div className="text-xs text-muted-foreground">Custom SEO Consulting</div>
                </Link>
              </div>
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