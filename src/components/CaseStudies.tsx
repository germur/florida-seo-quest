'use client';

import { ArrowUpRight, Phone, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
                href={`/case-studies/${caseStudy.slug}`}
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
            
            {/* Enhanced Strategic Case Study Navigation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
              <Link href="/case-studies/paramount-property-restoration" className="group p-6 rounded-2xl hover:bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">Property Restoration SEO</h4>
                    <p className="text-sm text-muted-foreground">+250% Traffic & Emergency Leads</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#HomeServices</Badge>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#LocalSEO</Badge>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ProgrammaticSEO</Badge>
                </div>
              </Link>

              <Link href="/case-studies/craftd-london" className="group p-6 rounded-2xl hover:bg-card/50 border border-border hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                    <ArrowUpRight className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-electric-blue transition-colors mb-1">E-commerce Jewelry SEO</h4>
                    <p className="text-sm text-muted-foreground">50+ Keywords Top 10</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-electric-blue/10 text-electric-blue/80">#ProductSEO</Badge>
                  <Badge variant="secondary" className="text-xs bg-electric-blue/10 text-electric-blue/80">#ContentStrategy</Badge>
                  <Badge variant="secondary" className="text-xs bg-electric-blue/10 text-electric-blue/80">#RichSnippets</Badge>
                </div>
              </Link>

              <Link href="/case-studies/edu1st-preschools" className="group p-6 rounded-2xl hover:bg-card/50 border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-teal/10 rounded-lg group-hover:bg-teal/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-teal" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-teal transition-colors mb-1">Multi-Location Education SEO</h4>
                    <p className="text-sm text-muted-foreground">+80% Google Actions</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-teal/10 text-teal/80">#MultiLocation</Badge>
                  <Badge variant="secondary" className="text-xs bg-teal/10 text-teal/80">#ContentMarketing</Badge>
                  <Badge variant="secondary" className="text-xs bg-teal/10 text-teal/80">#LeadGeneration</Badge>
                </div>
              </Link>

              <Link href="/case-studies/flo-car-rental" className="group p-6 rounded-2xl hover:bg-card/50 border border-border hover:border-bright-orange/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-bright-orange/10 rounded-lg group-hover:bg-bright-orange/20 transition-colors">
                    <ExternalLink className="h-5 w-5 text-bright-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-bright-orange transition-colors mb-1">Local Car Rental SEO</h4>
                    <p className="text-sm text-muted-foreground">+120% GBP Actions</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-bright-orange/10 text-bright-orange/80">#LocalSEO</Badge>
                  <Badge variant="secondary" className="text-xs bg-bright-orange/10 text-bright-orange/80">#ConversionOptimization</Badge>
                  <Badge variant="secondary" className="text-xs bg-bright-orange/10 text-bright-orange/80">#MobileFirst</Badge>
                </div>
              </Link>

              <Link href="/case-studies/puff-cleaning" className="group p-6 rounded-2xl hover:bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">Cleaning Services SEO</h4>
                    <p className="text-sm text-muted-foreground">0 to 2K Monthly Visitors</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#LocalAuthority</Badge>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ServicePages</Badge>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary/80">#ReviewManagement</Badge>
                </div>
              </Link>

              <Link href="/case-studies/le-gramme" className="group p-6 rounded-2xl hover:bg-card/50 border border-border hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                    <ExternalLink className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-electric-blue transition-colors mb-1">Luxury Jewelry International SEO</h4>
                    <p className="text-sm text-muted-foreground">+40% Impressions</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-electric-blue/10 text-electric-blue/80">#InternationalSEO</Badge>
                  <Badge variant="secondary" className="text-xs bg-electric-blue/10 text-electric-blue/80">#LuxuryBranding</Badge>
                  <Badge variant="secondary" className="text-xs bg-electric-blue/10 text-electric-blue/80">#Hreflang</Badge>
                </div>
              </Link>
            </div>
            
            {/* Enhanced SEO Services Cross-Links */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-background border border-border/50 rounded-2xl p-8 mb-8 max-w-5xl mx-auto shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Proven SEO Strategies Behind These Results</h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/services/local-seo-optimization" className="group p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-background/80 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary/80 border-primary/20">#LocalSEO</Badge>
                  </div>
                  <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">Local SEO</h5>
                  <p className="text-xs text-muted-foreground">Google Business Profile & Local Pack Domination</p>
                </Link>

                <Link href="/services/seo-automation" className="group p-6 rounded-xl border border-border hover:border-electric-blue/30 hover:bg-background/80 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                      <ExternalLink className="h-4 w-4 text-electric-blue" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-electric-blue/10 text-electric-blue/80 border-electric-blue/20">#Automation</Badge>
                  </div>
                  <h5 className="font-semibold text-foreground group-hover:text-electric-blue transition-colors mb-2">SEO Automation</h5>
                  <p className="text-xs text-muted-foreground">Programmatic & Scalable SEO Solutions</p>
                </Link>

                <Link href="/services/ecommerce-seo" className="group p-6 rounded-xl border border-border hover:border-teal/30 hover:bg-background/80 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal/10 rounded-lg group-hover:bg-teal/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-teal" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-teal/10 text-teal/80 border-teal/20">#Ecommerce</Badge>
                  </div>
                  <h5 className="font-semibold text-foreground group-hover:text-teal transition-colors mb-2">E-commerce SEO</h5>
                  <p className="text-xs text-muted-foreground">Product & Category Optimization</p>
                </Link>

                <Link href="/services/strategic-seo-consulting" className="group p-6 rounded-xl border border-border hover:border-bright-orange/30 hover:bg-background/80 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-bright-orange/10 rounded-lg group-hover:bg-bright-orange/20 transition-colors">
                      <Phone className="h-4 w-4 text-bright-orange" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-bright-orange/10 text-bright-orange/80 border-bright-orange/20">#Strategy</Badge>
                  </div>
                  <h5 className="font-semibold text-foreground group-hover:text-bright-orange transition-colors mb-2">SEO Strategy</h5>
                  <p className="text-xs text-muted-foreground">Custom SEO Consulting & Audits</p>
                </Link>
              </div>
            </div>
            
            <Link 
              href="/case-studies" 
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