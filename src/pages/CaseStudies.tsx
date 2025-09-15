import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const CaseStudies = () => {
  const cases = [
    {
      id: "paramount",
      company: "Paramount Property Restoration",
      industry: "Property Restoration",
      location: "Miami, FL",
      challenge: "Low visibility in local searches for emergency and restoration services",
      solution: "Local SEO strategy + authority content + technical optimization",
      results: [
        "+180% qualified leads in 6 months",
        "+250% organic traffic",
        "Top 3 in 15+ target keywords",
        "+85% conversion improvement"
      ],
      metrics: {
        duration: "6 months",
        investment: "$4,500",
        roi: "420%"
      },
      color: "teal",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "1gc",
      company: "1GC Construction",
      industry: "Commercial Construction",
      location: "Orlando, FL", 
      challenge: "Fierce competition in commercial construction, needed differentiation",
      solution: "Semantic architecture + technical content + strategic link building",
      results: [
        "+95% organic visibility in 4 months",
        "+150% quality traffic",
        "Dominance in 'commercial construction Orlando'",
        "+60% increase in qualified RFPs"
      ],
      metrics: {
        duration: "4 months",
        investment: "$3,200", 
        roi: "280%"
      },
      color: "electric-blue",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "pura-piel",
      company: "Pura Piel",
      industry: "Aesthetics & Beauty",
      location: "Fort Lauderdale, FL",
      challenge: "Website with multiple technical issues affecting indexation",
      solution: "Complete technical audit + indexation fixes + new architecture",
      results: [
        "120+ technical errors solved",
        "+40% indexation improvement",
        "+75% increase in organic sessions", 
        "60% reduction in bounce rate"
      ],
      metrics: {
        duration: "3 months",
        investment: "$2,800",
        roi: "190%"
      },
      color: "bright-orange",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "quintana",
      company: "Quintana",
      industry: "Professional Services",
      location: "Boca Raton, FL",
      challenge: "Needed to position themselves as authority in their sector",
      solution: "Topical authority strategy + evergreen content + digital PR",
      results: [
        "+200% brand mentions",
        "Top 5 in high-competition keywords",
        "+90% qualified organic traffic",
        "+45% leads from organic search"
      ],
      metrics: {
        duration: "5 months", 
        investment: "$3,800",
        roi: "350%"
      },
      color: "purple",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    },
    {
      id: "roger-murillo",
      company: "Roger Murillo Image Consulting",
      industry: "Image Consulting",
      location: "Miami, FL",
      challenge: "Very competitive market in personal image services",
      solution: "Local SEO + personal branding + valuable content + link building",
      results: [
        "+300% brand searches",
        "Leader in 'image consultant Miami'",
        "+120% qualified consultations",
        "+80% increase in premium bookings"
      ],
      metrics: {
        duration: "4 months",
        investment: "$2,900",
        roi: "240%"
      },
      color: "green",
      image: "/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-background/80 mb-12 leading-relaxed max-w-3xl">
              Real results from real businesses. Here's how we've helped Florida companies achieve measurable growth through strategic SEO.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">+250%</div>
                <div className="text-background/70">Average traffic increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-background/70">Successful projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">280%</div>
                <div className="text-background/70">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            {cases.map((caseStudy, index) => (
              <article key={caseStudy.id} className="space-y-8">
                <div className="border-b border-border pb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {caseStudy.industry}
                    </div>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                    <div className="text-sm text-muted-foreground">
                      {caseStudy.location}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {caseStudy.company}
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {caseStudy.metrics.duration}
                      </div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {caseStudy.metrics.investment}
                      </div>
                      <div className="text-sm text-muted-foreground">Investment</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {caseStudy.metrics.roi}
                      </div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-6">Results</h3>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                          <div className="text-muted-foreground leading-relaxed">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to achieve similar results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and create a custom strategy for your business.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Schedule a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;