'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, Phone, CheckCircle, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const CaseStudies = () => {
  const cases = [
    {
      id: "paramount-property-restoration",
      company: "Paramount Property Restoration",
      industry: "Property Restoration",
      location: "Florida, USA",
      challenge: "Invisible in a saturated Florida restoration market. No rankings for 'service + city' searches. No emergency leads.",
      solution: "Designed a programmatic SEO SILO with city + service landing pages. Optimized Core Web Vitals, LocalBusiness schema, and internal linking. Added high-converting content: 24/7 CTAs, trust signals, before/after visuals.",
      results: [
        "Multi-city coverage for emergency keywords",
        "Organic leads flowing within months",
        "200+ optimized pages live",
        "Dozens of local keywords in top 3",
        "First emergency leads from SEO in <6 months"
      ],
      metrics: {
        duration: "<6 months",
        pages: "200+",
        keywords: "Dozens in top 3"
      },
      website: "paramountpropertyrestoration.com"
    },
    {
      id: "flo-car-rental",
      company: "Flo Car Rental",
      industry: "Car Rental",
      location: "Miami, USA",
      challenge: "Competing with global giants. Needed a website that made booking effortless — and stronger visibility on Google Maps.",
      solution: "Built a frictionless booking flow: minimal steps, mobile-first, trust elements. Optimized Google Business Profile with reviews, photos, Q&A, and updates. Targeted long-tail local queries: Miami airport car rental no deposit, luxury SUV rental.",
      results: [
        "More calls, directions, and visits from Google",
        "Higher conversion rates on the booking funnel",
        "+120% growth in GBP actions (calls, directions)",
        "CTR boost on high-value rental queries"
      ],
      metrics: {
        duration: "6 months",
        gbp_growth: "+120%",
        ctr: "Significant boost"
      },
      website: "flocarrental.com"
    },
    {
      id: "puff-cleaning",
      company: "Puff Cleaning",
      industry: "Cleaning Services",
      location: "Bogotá, Colombia",
      challenge: "Zero digital presence in a highly competitive local cleaning market.",
      solution: "Built a local SEO authority map with optimized service pages and FAQs. Strengthened Google Business Profile with verified reviews. Designed for conversion: WhatsApp button, CTAs, testimonials.",
      results: [
        "Strong presence in local pack",
        "Leads through both WhatsApp and forms",
        "From 0 to ~2,000 monthly organic visits in year one",
        "Top 3 rankings for sofa cleaning Bogotá, mattress cleaning Bogotá"
      ],
      metrics: {
        duration: "1 year",
        traffic: "~2,000 monthly visits",
        rankings: "Top 3 local keywords"
      },
      website: "puffcleaning.com"
    },
    {
      id: "edu1st-preschools",
      company: "Edu1st Preschools",
      industry: "Education",
      location: "Florida, USA",
      challenge: "Multiple campuses, scattered online presence. Needed more parent engagement and admissions.",
      solution: "Created a parent-focused blog with practical guides and bilingual resources. Designed printable coloring pages as lead magnets. Local SEO for each campus: optimized pages, schema, NAP consistency.",
      results: [
        "Parents spent more time engaging with blog content",
        "More tour bookings and admissions inquiries",
        "Significant growth in blog traffic and downloads",
        "+80% increase in calls and actions from Google Maps"
      ],
      metrics: {
        duration: "8 months",
        gmb_actions: "+80%",
        engagement: "Significant growth"
      },
      website: "edu1stvess.com"
    },
    {
      id: "craftd-london",
      company: "CRAFTD London",
      industry: "Men's Jewelry",
      location: "UK & US",
      challenge: "Men's jewelry brand in a crowded market. Needed to scale SEO without losing brand identity.",
      solution: "Built a full-funnel content strategy: TOFU: style guides & trends. MOFU: size guides & product comparisons. BOFU: optimized product & category pages with Product schema. Reinforced internal linking across product families.",
      results: [
        "Higher visibility for core product categories",
        "Content that educates and converts",
        "50+ keywords in top 10 within 4 months",
        "CTR lift thanks to rich snippets"
      ],
      metrics: {
        duration: "4 months",
        keywords: "50+ in top 10",
        ctr: "Significant lift"
      },
      website: "craftdlondon.com"
    },
    {
      id: "le-gramme",
      company: "LE GRAMME",
      industry: "Luxury Jewelry",
      location: "France & Global",
      challenge: "Luxury minimalist jewelry brand. Needed to expand internationally without compromising design-first identity.",
      solution: "Crafted a luxury content strategy: heritage, craftsmanship, buying guides. Implemented international SEO: hreflang, taxonomy, Product schema. Strengthened PR and editorial links in design/lifestyle outlets.",
      results: [
        "Increased organic visibility in English and French markets",
        "SEO aligned seamlessly with luxury branding",
        "+40% impressions on flagship collections",
        "Multiple transactional luxury keywords in top 10"
      ],
      metrics: {
        duration: "6 months",
        impressions: "+40%",
        keywords: "Multiple in top 10"
      },
      website: "legramme.com"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO page="caseStudies" />
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
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-background/70">Success Stories</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-background/70">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-background/70">Keywords in Top 10</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cases Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-32">
            {cases.map((caseStudy, index) => (
              <article key={caseStudy.id} className="space-y-16 group">
                {/* Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {caseStudy.industry}
                    </div>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                    <div className="text-sm text-muted-foreground">
                      {caseStudy.location}
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                    {caseStudy.company}
                  </h2>
                </div>

                {/* Phase 01 - The Challenge */}
                <div className="space-y-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-muted-foreground/30 group-hover:text-electric-blue/50 transition-colors duration-300">01</div>
                    <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed pl-16 group-hover:text-foreground/80 transition-colors duration-300">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Phase 02 - The Solution */}
                <div className="space-y-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-muted-foreground/30 group-hover:text-bright-orange/50 transition-colors duration-300">02</div>
                    <h3 className="text-2xl font-bold text-foreground">The Solution</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed pl-16 group-hover:text-foreground/80 transition-colors duration-300">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Phase 03 - The Results */}
                <div className="space-y-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-muted-foreground/30 group-hover:text-teal/50 transition-colors duration-300">03</div>
                    <h3 className="text-2xl font-bold text-foreground">The Results</h3>
                  </div>
                  <div className="pl-16 space-y-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${resultIndex * 100}ms` }}>
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <div className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase 04 - By the Numbers */}
                <div className="space-y-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-muted-foreground/30 group-hover:text-electric-blue/50 transition-colors duration-300">04</div>
                    <h3 className="text-2xl font-bold text-foreground">By the Numbers</h3>
                  </div>
                  <div className="pl-16 grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-background to-secondary/10 border border-border rounded-xl p-6 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {caseStudy.metrics.duration}
                      </div>
                      <div className="text-muted-foreground">Timeline</div>
                    </div>
                    <div className="bg-gradient-to-br from-background to-secondary/10 border border-border rounded-xl p-6 hover:border-bright-orange/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {Object.values(caseStudy.metrics)[1]}
                      </div>
                      <div className="text-muted-foreground">{Object.keys(caseStudy.metrics)[1].replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                    </div>
                    <div className="bg-gradient-to-br from-background to-secondary/10 border border-border rounded-xl p-6 hover:border-teal/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {Object.values(caseStudy.metrics)[2]}
                      </div>
                      <div className="text-muted-foreground">{Object.keys(caseStudy.metrics)[2].replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                    </div>
                  </div>
                  
                  <div className="pl-16 mt-6">
                    <a 
                      href={`https://${caseStudy.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-electric-blue transition-colors group"
                    >
                      <span>Visit: <span className="font-medium">{caseStudy.website}</span></span>
                      <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Enhanced Strategic Internal Links Section */}
                <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-background border border-border/50 rounded-2xl p-8 mb-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Services Used in This Case Study
                    </h4>
                  </div>
                  
                  {/* Industry-Specific Service Links with enhanced UX */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {/* Dynamic service links based on case study industry */}
                    {caseStudy.industry.includes('Property') && (
                      <>
                        <Link href="/services/home-services-seo" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Home Services SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#EmergencyLeads</Badge>
                          </div>
                        </Link>
                        <Link href="/services/local-seo-optimization" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Local SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#LocalPack</Badge>
                          </div>
                        </Link>
                        <Link href="/services/seo-automation" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Programmatic SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ScalableSEO</Badge>
                          </div>
                        </Link>
                      </>
                    )}
                    {caseStudy.industry.includes('Car Rental') && (
                      <>
                        <Link href="/services/local-seo-optimization" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Google Business Profile</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#GBPOptimization</Badge>
                          </div>
                        </Link>
                        <Link href="/services/conversion-optimization" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Conversion Optimization</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#BookingFunnel</Badge>
                          </div>
                        </Link>
                        <Link href="/services/mobile-seo" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Mobile-First SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#MobileSEO</Badge>
                          </div>
                        </Link>
                      </>
                    )}
                    {caseStudy.industry.includes('Cleaning') && (
                      <>
                        <Link href="/services/local-seo-optimization" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Local SEO Authority</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#LocalAuthority</Badge>
                          </div>
                        </Link>
                        <Link href="/services/content-marketing" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Service Page Optimization</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ServicePages</Badge>
                          </div>
                        </Link>
                        <Link href="/services/google-business-profile" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Review Management</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ReviewManagement</Badge>
                          </div>
                        </Link>
                      </>
                    )}
                    {caseStudy.industry.includes('Education') && (
                      <>
                        <Link href="/services/multi-location-seo" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Multi-Campus SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#MultiLocation</Badge>
                          </div>
                        </Link>
                        <Link href="/services/content-marketing" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Parent-Focused Content</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ContentStrategy</Badge>
                          </div>
                        </Link>
                        <Link href="/services/local-seo-optimization" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Education Local SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#EducationSEO</Badge>
                          </div>
                        </Link>
                      </>
                    )}
                    {caseStudy.industry.includes('Jewelry') && (
                      <>
                        <Link href="/services/ecommerce-seo" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">E-commerce SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ProductSEO</Badge>
                          </div>
                        </Link>
                        <Link href="/services/international-seo" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">International SEO</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#GlobalSEO</Badge>
                          </div>
                        </Link>
                        <Link href="/services/content-marketing" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Luxury Content Strategy</div>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#LuxuryBranding</Badge>
                          </div>
                        </Link>
                      </>
                    )}
                    
                    {/* Universal Core Service */}
                    <Link href="/services/strategic-seo-consulting" className="group flex items-center gap-3 p-4 rounded-xl hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-200">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">Strategic SEO Consulting</div>
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#SEOStrategy</Badge>
                      </div>
                    </Link>
                    
                    {/* View All Services CTA */}
                    <Button variant="outline" size="sm" asChild className="h-auto p-4 justify-start">
                      <Link href="/services" className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/20 rounded-lg">
                          <ArrowRight className="h-4 w-4 text-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground text-sm">View All Services</div>
                          <div className="text-xs text-muted-foreground">Complete SEO Solutions</div>
                        </div>
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Enhanced Cross-case study links */}
                  <div className="pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-bright-orange/10 text-bright-orange border-bright-orange/20">
                        #SimilarSuccess
                      </Badge>
                      <p className="font-semibold text-foreground">Related Case Studies</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {caseStudy.id !== 'paramount-property-restoration' && (
                        <Link href="/case-studies/paramount-property-restoration" className="group flex items-center gap-2 p-3 rounded-lg hover:bg-bright-orange/10 border border-transparent hover:border-bright-orange/20 transition-all duration-200">
                          <div className="p-1.5 bg-bright-orange/10 rounded">
                            <Phone className="h-3 w-3 text-bright-orange" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground group-hover:text-bright-orange transition-colors">Property Restoration</div>
                            <div className="text-xs text-muted-foreground">+180% leads</div>
                          </div>
                        </Link>
                      )}
                      {caseStudy.id !== 'flo-car-rental' && (
                        <Link href="/case-studies/flo-car-rental" className="group flex items-center gap-2 p-3 rounded-lg hover:bg-bright-orange/10 border border-transparent hover:border-bright-orange/20 transition-all duration-200">
                          <div className="p-1.5 bg-bright-orange/10 rounded">
                            <ArrowUpRight className="h-3 w-3 text-bright-orange" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground group-hover:text-bright-orange transition-colors">Car Rental</div>
                            <div className="text-xs text-muted-foreground">+120% GBP actions</div>
                          </div>
                        </Link>
                      )}
                      {caseStudy.id !== 'puff-cleaning' && (
                        <Link href="/case-studies/puff-cleaning" className="group flex items-center gap-2 p-3 rounded-lg hover:bg-bright-orange/10 border border-transparent hover:border-bright-orange/20 transition-all duration-200">
                          <div className="p-1.5 bg-bright-orange/10 rounded">
                            <CheckCircle className="h-3 w-3 text-bright-orange" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground group-hover:text-bright-orange transition-colors">Cleaning Services</div>
                            <div className="text-xs text-muted-foreground">0 to 2K visitors</div>
                          </div>
                        </Link>
                      )}
                      {caseStudy.id !== 'edu1st-preschools' && (
                        <Link href="/case-studies/edu1st-preschools" className="group flex items-center gap-2 p-3 rounded-lg hover:bg-bright-orange/10 border border-transparent hover:border-bright-orange/20 transition-all duration-200">
                          <div className="p-1.5 bg-bright-orange/10 rounded">
                            <ExternalLink className="h-3 w-3 text-bright-orange" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground group-hover:text-bright-orange transition-colors">Preschools</div>
                            <div className="text-xs text-muted-foreground">Multi-campus success</div>
                          </div>
                        </Link>
                      )}
                      {caseStudy.id !== 'craftd-london' && (
                        <Link href="/case-studies/craftd-london" className="group flex items-center gap-2 p-3 rounded-lg hover:bg-bright-orange/10 border border-transparent hover:border-bright-orange/20 transition-all duration-200">
                          <div className="p-1.5 bg-bright-orange/10 rounded">
                            <ArrowUpRight className="h-3 w-3 text-bright-orange" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground group-hover:text-bright-orange transition-colors">Men's Jewelry</div>
                            <div className="text-xs text-muted-foreground">50+ top 10 keywords</div>
                          </div>
                        </Link>
                      )}
                      {caseStudy.id !== 'le-gramme' && (
                        <Link href="/case-studies/le-gramme" className="group flex items-center gap-2 p-3 rounded-lg hover:bg-bright-orange/10 border border-transparent hover:border-bright-orange/20 transition-all duration-200">
                          <div className="p-1.5 bg-bright-orange/10 rounded">
                            <ExternalLink className="h-3 w-3 text-bright-orange" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-foreground group-hover:text-bright-orange transition-colors">Luxury Jewelry</div>
                            <div className="text-xs text-muted-foreground">International SEO</div>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t border-border hover:border-electric-blue/30 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Want similar results for your business?
                  </h4>
                  <Button size="lg" asChild className="hover-scale">
                    <a href="tel:+573046807443">
                      Schedule Your Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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
              <a href="tel:+573046807443">
                Schedule a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;