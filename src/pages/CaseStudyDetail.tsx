import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft, TrendingUp, Users, Search, Target, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudies = {
    "paramount-property-restoration": {
      company: "Paramount Property Restoration",
      industry: "Property Restoration",
      location: "Florida, USA",
      duration: "<6 months",
      website: "paramountpropertyrestoration.com",
      hero: {
        challenge: "Invisible in a saturated Florida restoration market. No rankings for 'service + city' searches. No emergency leads.",
        result: "Multi-city coverage for emergency keywords with organic leads flowing within months"
      },
      challenge: [
        "Invisible in saturated Florida restoration market",
        "No rankings for 'service + city' searches",
        "No emergency leads from organic search",
        "Limited multi-city presence online"
      ],
      solution: [
        "Designed programmatic SEO SILO with city + service landing pages",
        "Optimized Core Web Vitals for better user experience",
        "Implemented LocalBusiness schema markup",
        "Enhanced internal linking structure",
        "Added high-converting content with 24/7 CTAs, trust signals, before/after visuals"
      ],
      results: {
        metrics: [
          { label: "Optimized Pages", value: "200+", icon: Target },
          { label: "Top 3 Keywords", value: "Dozens", icon: Search },
          { label: "Time to Results", value: "<6 months", icon: TrendingUp },
          { label: "Coverage", value: "Multi-city", icon: Users }
        ],
        details: [
          "200+ optimized pages live",
          "Dozens of local keywords in top 3",
          "First emergency leads from SEO in <6 months",
          "Multi-city coverage for emergency keywords achieved"
        ]
      }
    },
    "flo-car-rental": {
      company: "Flo Car Rental",
      industry: "Car Rental",
      location: "Miami, USA",
      duration: "6 months",
      website: "flocarrental.com",
      hero: {
        challenge: "Competing with global giants while needing effortless booking experience and stronger Google Maps visibility.",
        result: "+120% growth in Google Business Profile actions with improved booking conversions"
      },
      challenge: [
        "Competing with global car rental giants",
        "Complex booking process deterring customers",
        "Weak visibility on Google Maps",
        "Limited local search presence"
      ],
      solution: [
        "Built frictionless booking flow with minimal steps",
        "Implemented mobile-first design with trust elements",
        "Optimized Google Business Profile with reviews, photos, Q&A, and updates",
        "Targeted long-tail local queries like 'Miami airport car rental no deposit'",
        "Focused on luxury SUV rental keywords"
      ],
      results: {
        metrics: [
          { label: "GBP Actions", value: "+120%", icon: TrendingUp },
          { label: "Conversion Rate", value: "Higher", icon: Target },
          { label: "CTR Boost", value: "Significant", icon: Search },
          { label: "User Experience", value: "Enhanced", icon: Users }
        ],
        details: [
          "+120% growth in GBP actions (calls, directions)",
          "Higher conversion rates on booking funnel",
          "CTR boost on high-value rental queries",
          "More calls, directions, and visits from Google"
        ]
      }
    },
    "puff-cleaning": {
      company: "Puff Cleaning",
      industry: "Cleaning Services",
      location: "Bogotá, Colombia",
      duration: "1 year",
      website: "puffcleaning.com",
      hero: {
        challenge: "Zero digital presence in highly competitive local cleaning market.",
        result: "From 0 to ~2,000 monthly organic visits with top 3 local rankings"
      },
      challenge: [
        "Zero digital presence initially",
        "Highly competitive local cleaning market",
        "No established online authority",
        "Limited brand recognition"
      ],
      solution: [
        "Built local SEO authority map with optimized service pages",
        "Created comprehensive FAQ sections",
        "Strengthened Google Business Profile with verified reviews",
        "Designed for conversion with WhatsApp integration",
        "Added compelling CTAs and customer testimonials"
      ],
      results: {
        metrics: [
          { label: "Monthly Visits", value: "~2,000", icon: TrendingUp },
          { label: "Local Rankings", value: "Top 3", icon: Search },
          { label: "Lead Sources", value: "Multiple", icon: Target },
          { label: "Market Position", value: "Strong", icon: Users }
        ],
        details: [
          "From 0 to ~2,000 monthly organic visits in year one",
          "Top 3 rankings for sofa cleaning Bogotá",
          "Top 3 rankings for mattress cleaning Bogotá",
          "Strong presence in local pack with leads through WhatsApp and forms"
        ]
      }
    },
    "edu1st-preschools": {
      company: "Edu1st Preschools",
      industry: "Education",
      location: "Florida, USA",
      duration: "8 months",
      website: "edu1stvess.com",
      hero: {
        challenge: "Multiple campuses with scattered online presence needed more parent engagement and admissions.",
        result: "+80% increase in Google Maps actions with significant blog engagement growth"
      },
      challenge: [
        "Multiple campuses with scattered online presence",
        "Limited parent engagement online",
        "Insufficient admissions inquiries",
        "Lack of cohesive digital strategy"
      ],
      solution: [
        "Created parent-focused blog with practical guides",
        "Developed bilingual resources for diverse community",
        "Designed printable coloring pages as lead magnets",
        "Implemented local SEO for each campus",
        "Ensured NAP consistency across all locations"
      ],
      results: {
        metrics: [
          { label: "GMB Actions", value: "+80%", icon: TrendingUp },
          { label: "Blog Traffic", value: "Significant Growth", icon: Search },
          { label: "Engagement", value: "Enhanced", icon: Target },
          { label: "Admissions", value: "Increased", icon: Users }
        ],
        details: [
          "+80% increase in calls and actions from Google Maps",
          "Significant growth in blog traffic and downloads",
          "Parents spent more time engaging with blog content",
          "More tour bookings and admissions inquiries"
        ]
      }
    },
    "craftd-london": {
      company: "CRAFTD London",
      industry: "Men's Jewelry",
      location: "UK & US",
      duration: "4 months",
      website: "craftdlondon.com",
      hero: {
        challenge: "Men's jewelry brand needed to scale SEO in crowded market without losing brand identity.",
        result: "50+ keywords in top 10 within 4 months with significant CTR improvements"
      },
      challenge: [
        "Crowded men's jewelry market",
        "Need to scale SEO without losing brand identity",
        "Limited content strategy",
        "Poor product page optimization"
      ],
      solution: [
        "Built full-funnel content strategy",
        "Created TOFU content: style guides & trends",
        "Developed MOFU content: size guides & product comparisons",
        "Optimized BOFU: product & category pages with Product schema",
        "Reinforced internal linking across product families"
      ],
      results: {
        metrics: [
          { label: "Top 10 Keywords", value: "50+", icon: Search },
          { label: "Timeline", value: "4 months", icon: TrendingUp },
          { label: "CTR Improvement", value: "Significant", icon: Target },
          { label: "Rich Snippets", value: "Active", icon: Users }
        ],
        details: [
          "50+ keywords in top 10 within 4 months",
          "Higher visibility for core product categories",
          "CTR lift thanks to rich snippets",
          "Content that educates and converts effectively"
        ]
      }
    },
    "le-gramme": {
      company: "LE GRAMME",
      industry: "Luxury Jewelry",
      location: "France & Global",
      duration: "6 months",
      website: "legramme.com",
      hero: {
        challenge: "Luxury minimalist jewelry brand needed international expansion without compromising design-first identity.",
        result: "+40% impressions on flagship collections with multiple luxury keywords in top 10"
      },
      challenge: [
        "International expansion while maintaining luxury brand identity",
        "Design-first approach limiting SEO opportunities",
        "Multiple market and language requirements",
        "Competition in luxury jewelry space"
      ],
      solution: [
        "Crafted luxury content strategy focusing on heritage and craftsmanship",
        "Created compelling buying guides for luxury audience",
        "Implemented international SEO with hreflang and proper taxonomy",
        "Added Product schema for better visibility",
        "Strengthened PR and editorial links in design/lifestyle outlets"
      ],
      results: {
        metrics: [
          { label: "Impressions", value: "+40%", icon: TrendingUp },
          { label: "Top 10 Keywords", value: "Multiple", icon: Search },
          { label: "Market Reach", value: "International", icon: Target },
          { label: "Brand Alignment", value: "Seamless", icon: Users }
        ],
        details: [
          "+40% impressions on flagship collections",
          "Multiple transactional luxury keywords in top 10",
          "Increased organic visibility in English and French markets",
          "SEO aligned seamlessly with luxury branding"
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
            <div className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
              Project Duration: <span className="font-medium text-foreground">{caseStudy.duration}</span>
              <span className="mx-2">•</span>
              <a 
                href={`https://${caseStudy.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-electric-blue hover:text-electric-blue/80 transition-colors group"
              >
                Visit {caseStudy.website}
                <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
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