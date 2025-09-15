import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft, TrendingUp, Users, Search, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudies = {
    "paramount-property-restoration": {
      company: "Paramount Property Restoration",
      industry: "Property Restoration",
      location: "Miami, Florida",
      duration: "6 months",
      hero: {
        challenge: "Paramount needed to dominate local search results for emergency property restoration services in Miami's competitive market.",
        result: "+180% qualified leads and +250% organic traffic in 6 months"
      },
      challenge: [
        "Low visibility for high-intent restoration keywords",
        "Poor local SEO performance despite prime service area",
        "Website technical issues affecting mobile performance",
        "Limited content strategy for emergency services"
      ],
      solution: [
        "Comprehensive technical SEO audit and optimization",
        "Local SEO strategy targeting Miami neighborhoods",
        "Emergency services content strategy development",
        "Mobile-first website optimization",
        "Review management and local citation building"
      ],
      results: {
        metrics: [
          { label: "Qualified Leads", value: "+180%", icon: Users },
          { label: "Organic Traffic", value: "+250%", icon: TrendingUp },
          { label: "Local Rankings", value: "+85%", icon: Search },
          { label: "ROI", value: "+420%", icon: Target }
        ],
        details: [
          "Ranked #1 for 'Miami water damage restoration'",
          "Increased emergency call volume by 180%",
          "Expanded service area coverage by 40%",
          "Improved mobile conversion rate by 65%"
        ]
      }
    },
    "1gc-construction": {
      company: "1GC Construction",
      industry: "Commercial Construction",
      location: "Orlando, Florida",
      duration: "4 months", 
      hero: {
        challenge: "1GC Construction needed to establish authority in Orlando's commercial construction market and attract high-value projects.",
        result: "+95% organic visibility and +150% traffic in 4 months"
      },
      challenge: [
        "Limited online presence for commercial construction services",
        "Competition from established construction companies",
        "Lack of content showcasing expertise and capabilities",
        "Poor performance for commercial project keywords"
      ],
      solution: [
        "Industry-specific keyword research and content strategy",
        "Technical SEO optimization for construction portfolio",
        "Local authority building through strategic partnerships",
        "Commercial project showcase development",
        "B2B lead generation optimization"
      ],
      results: {
        metrics: [
          { label: "Organic Visibility", value: "+95%", icon: Search },
          { label: "Website Traffic", value: "+150%", icon: TrendingUp },
          { label: "Lead Quality", value: "+200%", icon: Target },
          { label: "ROI", value: "+280%", icon: Users }
        ],
        details: [
          "Ranked top 3 for 'Orlando commercial construction'",
          "Secured 5 major commercial projects worth $2M+",
          "Increased project inquiry volume by 200%",
          "Established thought leadership in construction industry"
        ]
      }
    },
    "pura-piel-aesthetics": {
      company: "Pura Piel Aesthetics",
      industry: "Aesthetics & Beauty",
      location: "Tampa, Florida",
      duration: "5 months",
      hero: {
        challenge: "Pura Piel needed to fix critical technical issues and improve search visibility for aesthetic treatments in Tampa's beauty market.",
        result: "120+ technical errors fixed and +40% indexation improvement"
      },
      challenge: [
        "120+ critical technical SEO errors affecting performance",
        "Poor search indexation limiting visibility",
        "Competition from established aesthetic clinics",
        "Limited content for specific treatment keywords"
      ],
      solution: [
        "Comprehensive technical SEO audit and remediation",
        "Site architecture optimization for beauty services",
        "Treatment-specific content strategy development", 
        "Local SEO optimization for aesthetic clinics",
        "Mobile performance enhancement"
      ],
      results: {
        metrics: [
          { label: "Technical Fixes", value: "120+", icon: Target },
          { label: "Indexation", value: "+40%", icon: Search },
          { label: "Local Rankings", value: "+75%", icon: TrendingUp },
          { label: "ROI", value: "+190%", icon: Users }
        ],
        details: [
          "Fixed all critical technical SEO errors",
          "Improved page load speed by 60%",
          "Ranked top 5 for 'Tampa aesthetic treatments'",
          "Increased consultation bookings by 85%"
        ]
      }
    }
  };

  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {caseStudy.industry} • {caseStudy.location}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
                {caseStudy.company}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {caseStudy.hero.challenge}
              </p>
              <div className="bg-gradient-to-r from-electric-blue/10 to-bright-orange/10 border border-electric-blue/20 rounded-2xl p-6">
                <div className="text-2xl font-bold text-foreground mb-2">Key Result</div>
                <div className="text-lg text-muted-foreground">{caseStudy.hero.result}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {caseStudy.results.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center bg-background border border-border rounded-xl p-6">
                    <Icon className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
                <div className="space-y-4">
                  {caseStudy.challenge.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
                <div className="space-y-4">
                  {caseStudy.solution.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Detailed Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.details.map((detail, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <p className="text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-electric-blue/10 to-bright-orange/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your Florida business achieve exceptional growth through strategic SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+573046807443">
                  Book Your Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyDetail;