import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, CheckCircle, Phone, Mail } from "lucide-react";
import { SITE, schemaConfigs } from "@/lib/seo";
import { loadCaseStudy, getRelatedCaseStudies, type CaseStudy } from "@/lib/case-studies";

const CaseStudyDetail: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        const data = await loadCaseStudy(slug);
        
        if (data) {
          setCaseStudy(data);
          const related = await getRelatedCaseStudies(slug, data.industry);
          setRelatedCaseStudies(related);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading case study:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen pt-16">
        <Header />
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !caseStudy) {
    return (
      <main className="min-h-screen pt-16">
        <Header />
        <div className="container mx-auto px-6 py-24">
          <SEO
            page="caseStudies"
            customTitle="Case Study not found | Calvo Creativo"
            customDescription="The requested case study was not found."
            customCanonical={`${SITE}/case-studies/${slug}`}
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              The case study you're looking for doesn't exist or was moved.
            </p>
            <Button asChild>
              <Link to="/case-studies">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const canonical = `${SITE}/case-studies/${caseStudy.slug}`;
  const title = caseStudy.metaTitle || `Case Study: ${caseStudy.client} — ${caseStudy.title} | Calvo Creativo`;
  const description = caseStudy.metaDescription || 
    (caseStudy.summary.length > 155 ? caseStudy.summary.slice(0, 152) + "..." : caseStudy.summary);

  const breadcrumbsSchema = schemaConfigs.breadcrumbs([
    { name: "Home", item: `${SITE}/` },
    { name: "Case Studies", item: `${SITE}/case-studies` },
    { name: caseStudy.client, item: canonical },
  ]);

  return (
    <>
      <SEO
        page="caseStudies"
        customTitle={title}
        customDescription={description}
        customCanonical={canonical}
        additionalSchemas={[
          { schema: breadcrumbsSchema, id: "breadcrumbs-schema" },
          { schema: caseStudy.schema, id: "case-study-schema" },
        ]}
      />

      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              {/* Breadcrumbs */}
              <nav className="text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-background transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/case-studies" className="hover:text-background transition-colors">Case Studies</Link>
                <span className="mx-2">/</span>
                <span className="text-background">{caseStudy.client}</span>
              </nav>

              {/* Industry & Location */}
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-background/20 text-background border-background/30">
                  {caseStudy.industry}
                </Badge>
                <div className="w-1 h-1 bg-background/50 rounded-full"></div>
                <span className="text-background/80">{caseStudy.location}</span>
              </div>

              {/* Title & Summary */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {caseStudy.client}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-electric-blue mb-6">
                {caseStudy.title}
              </h2>
              <p className="text-lg md:text-xl text-background/90 leading-relaxed">
                {caseStudy.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-secondary/5 to-background border-b border-border">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Key Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Challenge */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-electric-blue/30">01</div>
                  <h3 className="text-3xl font-bold text-foreground">The Challenge</h3>
                </div>
                <div className="pl-16">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
              </div>

              {/* Strategy */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-bright-orange/30">02</div>
                  <h3 className="text-3xl font-bold text-foreground">Our Strategy</h3>
                </div>
                <div className="pl-16">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {caseStudy.strategy}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-teal/30">03</div>
                  <h3 className="text-3xl font-bold text-foreground">The Results</h3>
                </div>
                <div className="pl-16 space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground leading-relaxed">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Used */}
              {caseStudy.services && caseStudy.services.length > 0 && (
                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-border rounded-xl p-8">
                  <h4 className="text-xl font-bold text-foreground mb-6">Services Provided</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {caseStudy.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8">
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {caseStudy.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Strategic Internal Links Hub */}
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-border rounded-xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-6">Explore Our Strategic SEO Services</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Primary Services */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground text-sm uppercase tracking-wide">Core SEO Services</h5>
                    <div className="space-y-2">
                      <Link to="/services/strategic-seo-consulting" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        Strategic SEO Consulting & Audits
                      </Link>
                      <Link to="/services/seo-automation" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        SEO Automation & Programmatic SEO
                      </Link>
                      <Link to="/services/digital-storytelling-services" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        Digital Storytelling for Brands
                      </Link>
                    </div>
                  </div>
                  
                  {/* Industry-Specific Links */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground text-sm uppercase tracking-wide">Industry Expertise</h5>
                    <div className="space-y-2">
                      {caseStudy.industry.includes('Property') || caseStudy.industry.includes('Home') ? (
                        <Link to="/services/home-services-seo" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                          Home Services SEO Strategy
                        </Link>
                      ) : null}
                      {caseStudy.industry.includes('Car') || caseStudy.industry.includes('Local') ? (
                        <Link to="/services/local-seo-optimization" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                          Local SEO & Google Business Profile
                        </Link>
                      ) : null}
                      {caseStudy.industry.includes('E-commerce') || caseStudy.industry.includes('Jewelry') ? (
                        <Link to="/services/ecommerce-seo" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                          E-commerce SEO & Conversion
                        </Link>
                      ) : null}
                      {caseStudy.industry.includes('Education') ? (
                        <Link to="/services/education-seo" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                          Education & Multi-Location SEO
                        </Link>
                      ) : null}
                      <Link to="/services" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        View All SEO Services →
                      </Link>
                    </div>
                  </div>
                  
                  {/* Resources & Learning */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground text-sm uppercase tracking-wide">SEO Resources</h5>
                    <div className="space-y-2">
                      <Link to="/resources" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        Free SEO Tools & Resources
                      </Link>
                      <Link to="/blog" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        Latest SEO Strategies & Insights
                      </Link>
                      <Link to="/how-we-work" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        Our Proven SEO Process
                      </Link>
                      <Link to="/about" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                        Meet Your SEO Strategist
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Featured Case Study Cross-Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h5 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">Similar Success Stories</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {caseStudy.industry.includes('Property') ? (
                      <Link to="/case-studies/paramount-property-restoration" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        <strong>Property Restoration:</strong> How we generated +180% qualified leads
                      </Link>
                    ) : null}
                    {caseStudy.industry.includes('Car') || caseStudy.industry.includes('Local') ? (
                      <Link to="/case-studies/flo-car-rental" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        <strong>Car Rental:</strong> +120% Google Business Profile actions
                      </Link>
                    ) : null}
                    {caseStudy.industry.includes('Cleaning') ? (
                      <Link to="/case-studies/puff-cleaning" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        <strong>Cleaning Services:</strong> Zero to 2,000 monthly visitors
                      </Link>
                    ) : null}
                    {caseStudy.industry.includes('Education') ? (
                      <Link to="/case-studies/edu1st-preschools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        <strong>Preschools:</strong> Multi-campus digital strategy success
                      </Link>
                    ) : null}
                    {caseStudy.industry.includes('Jewelry') ? (
                      <>
                        <Link to="/case-studies/craftd-london" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          <strong>Men's Jewelry:</strong> 50+ keywords in top 10
                        </Link>
                        <Link to="/case-studies/le-gramme" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          <strong>Luxury Jewelry:</strong> International SEO success
                        </Link>
                      </>
                    ) : null}
                    <Link to="/case-studies" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                      Browse All Case Studies →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-secondary/5 to-background border-t border-border">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Related Case Studies
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {relatedCaseStudies.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/case-studies/${related.slug}`}
                      className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {related.industry}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {related.client}
                      </h4>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {related.summary}
                      </p>
                      <div className="flex items-center gap-2 text-primary">
                        <span className="text-sm font-medium">Read Case Study</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how we can help your business grow through strategic SEO. 
                Schedule a free consultation to explore your opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get Free Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+573046807443">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudyDetail;