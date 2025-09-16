import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, MapPin, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SILO_STRUCTURE, FLORIDA_CITIES, getSILONode, generateSILOSchema, getCityDataBySlug } from "@/lib/silo-structure";
import { addSchema } from "@/lib/seo";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { service } = useParams();
  
  const serviceNode = getSILONode(service || '');
  
  if (!serviceNode || serviceNode.type !== 'service') {
    return <Navigate to="/services" replace />;
  }

  useEffect(() => {
    // Add service-specific schema
    addSchema(generateSILOSchema(serviceNode), 'service-schema');
  }, [serviceNode]);

  const serviceDetails = {
    'strategic-seo': {
      hero: {
        subtitle: "AI-Driven SEO Strategy & Implementation",
        description: "Complete roadmap based on deep research, solid semantic architecture, and content that converts. Our MAES framework delivers measurable growth.",
        features: ["Market research & competitive analysis", "Semantic information architecture", "Content strategy based on search intent", "Prioritized implementation roadmap", "KPIs and tracking metrics"],
        price: "From $2,500",
        duration: "4-6 weeks"
      },
      process: [
        { phase: "Market Research", description: "Deep analysis of your market, competitors, and opportunities", weeks: "1-2" },
        { phase: "Architecture Planning", description: "Design semantic architecture and information structure", weeks: "3-4" },
        { phase: "Execution Strategy", description: "Content strategy and implementation planning", weeks: "5-6" },
        { phase: "Scaling & Optimization", description: "Ongoing optimization and growth strategies", weeks: "Ongoing" }
      ],
      benefits: [
        "Increase organic traffic by 200-400%",
        "Improve search rankings for target keywords",
        "Build sustainable competitive advantage",
        "Establish topical authority in your niche"
      ]
    },
    'digital-storytelling': {
      hero: {
        subtitle: "Transform Your Brand Through Compelling Narratives",
        description: "We craft digital stories that resonate with your audience, build emotional connections, and drive conversions through strategic narrative design.",
        features: ["Brand story development", "Content narrative strategy", "Emotional connection mapping", "Multi-platform storytelling", "Performance measurement"],
        price: "From $1,800",
        duration: "3-4 weeks"
      },
      process: [
        { phase: "Brand Discovery", description: "Uncover your unique brand story and values", weeks: "1" },
        { phase: "Narrative Design", description: "Craft compelling story frameworks and messaging", weeks: "2-3" },
        { phase: "Content Creation", description: "Develop multi-platform narrative content", weeks: "4" },
        { phase: "Story Optimization", description: "Refine and optimize based on performance", weeks: "Ongoing" }
      ],
      benefits: [
        "Increase brand engagement by 150%",
        "Build stronger emotional connections",
        "Improve content conversion rates",
        "Create memorable brand experiences"
      ]
    },
    'seo-automation': {
      hero: {
        subtitle: "Scale Your SEO with AI-Powered Automation",
        description: "Leverage cutting-edge AI tools and automation to streamline keyword research, content optimization, and performance tracking at scale.",
        features: ["AI-powered keyword research", "Automated content optimization", "Performance monitoring dashboards", "Competitive intelligence", "Scalable reporting systems"],
        price: "From $3,200",
        duration: "2-3 weeks setup"
      },
      process: [
        { phase: "Automation Setup", description: "Configure AI tools and automation workflows", weeks: "1" },
        { phase: "Data Integration", description: "Connect analytics, search console, and tracking", weeks: "2" },
        { phase: "Optimization Launch", description: "Deploy automated optimization systems", weeks: "3" },
        { phase: "Continuous Learning", description: "AI learns and improves performance over time", weeks: "Ongoing" }
      ],
      benefits: [
        "Reduce manual SEO tasks by 80%",
        "Scale content optimization efforts",
        "Get real-time performance insights",
        "Automate competitive analysis"
      ]
    },
    'personal-branding-consulting': {
      hero: {
        subtitle: "Build Your Professional Authority & Online Presence",
        description: "Establish yourself as a thought leader in your industry through strategic personal branding and SEO-optimized digital presence.",
        features: ["Personal brand strategy development", "Professional profile optimization", "Content & thought leadership strategy", "Online reputation management", "Industry authority building"],
        price: "From $2,200",
        duration: "4-5 weeks"
      },
      process: [
        { phase: "Brand Assessment", description: "Analyze current presence and reputation", weeks: "1" },
        { phase: "Strategy Development", description: "Create comprehensive branding strategy", weeks: "2-3" },
        { phase: "Profile Optimization", description: "Optimize all digital touchpoints and profiles", weeks: "4" },
        { phase: "Authority Building", description: "Implement thought leadership content strategy", weeks: "5+" }
      ],
      benefits: [
        "Increase professional visibility by 300%",
        "Generate more qualified leads",
        "Build industry recognition",
        "Command higher consulting fees"
      ]
    }
  };

  const currentService = serviceDetails[service as keyof typeof serviceDetails];
  
  if (!currentService) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="services" 
        customTitle={serviceNode.metaTitle}
        customDescription={serviceNode.metaDescription}
        customCanonical={`https://calvocreativo.com${serviceNode.path}`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              {serviceNode.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {currentService.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              {currentService.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+573046807443">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  What's Included
                </h2>
                <div className="space-y-4">
                  {currentService.hero.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Investment</span>
                    <span className="text-2xl font-bold text-primary">{currentService.hero.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-semibold text-primary">{currentService.hero.duration}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+573046807443">
                        Schedule Free Consultation
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers results through structured implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentService.process.map((phase, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-electric-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{phase.phase}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                  <span className="text-xs font-medium text-teal bg-teal/10 px-2 py-1 rounded">
                    Week {phase.weeks}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Expected Results</h2>
              <p className="text-lg text-muted-foreground">
                What you can expect when working with our proven methodology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-bright-orange mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Florida Cities Coverage */}
      <section className="py-24 bg-gradient-to-br from-teal/5 to-electric-blue/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Serving Florida Businesses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Local expertise with deep understanding of Florida markets and business ecosystems
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FLORIDA_CITIES.map((city, index) => (
                <Link
                  key={index}
                  to={`/services/${service}/${city.slug}`}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <MapPin className="h-6 w-6 text-teal mx-auto mb-2 group-hover:text-electric-blue transition-colors" />
                    <h3 className="font-semibold text-primary group-hover:text-teal transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{city.region}</p>
                    <p className="text-xs text-muted-foreground mt-1">{city.businessCount} businesses</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how this service can transform your business growth in Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+573046807443">
                Schedule Free Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;