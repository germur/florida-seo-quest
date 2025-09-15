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
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Real results from real businesses. Discover how we've helped Florida companies grow with SEO.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">+250%</div>
                <div className="text-sm text-muted-foreground">Average Traffic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bright-orange mb-2">280% ROI</div>
                <div className="text-sm text-muted-foreground">Average Return</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {cases.map((caseStudy, index) => (
              <article 
                key={caseStudy.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-${caseStudy.color}/10 text-${caseStudy.color} text-sm font-medium rounded-full`}>
                      {caseStudy.industry}
                    </span>
                    <span className="ml-2 text-sm text-muted-foreground">{caseStudy.location}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {caseStudy.company}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">The Challenge</h3>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-2">The Solution</h3>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Results</h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <TrendingUp className={`h-4 w-4 text-${caseStudy.color} mr-2`} />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button size="lg" className="mt-8 group">
                    View Complete Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <Clock className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <div className="font-bold text-primary">{caseStudy.metrics.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <Users className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <div className="font-bold text-primary">{caseStudy.metrics.investment}</div>
                      <div className="text-xs text-muted-foreground">Investment</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <TrendingUp className={`h-6 w-6 text-${caseStudy.color} mx-auto mb-2`} />
                      <div className={`font-bold text-${caseStudy.color}`}>{caseStudy.metrics.roi}</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8 text-center">
                    <div className="text-lg text-muted-foreground mb-4">
                      "The results have exceeded our expectations. The Calvo Creativo team perfectly understood our business and local market."
                    </div>
                    <div className="font-semibold text-primary">
                      — {caseStudy.company} Team
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Will Your Company Be Next?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's talk about your project and how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;