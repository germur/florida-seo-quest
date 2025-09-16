import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Users, TrendingUp, Star, Building, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SILO_STRUCTURE, getCityDataBySlug, generateSILOSchema } from "@/lib/silo-structure";
import { addSchema } from "@/lib/seo";
import { useEffect } from "react";

const ServiceCityDetail = () => {
  const { service, city } = useParams();
  
  const cityData = getCityDataBySlug(city || '');
  const nodeId = `${service}-${city}`;
  const serviceNode = SILO_STRUCTURE[nodeId];
  const parentService = SILO_STRUCTURE[service || ''];
  
  if (!serviceNode || !cityData || !parentService) {
    return <Navigate to="/services" replace />;
  }

  useEffect(() => {
    // Add city-specific schema
    addSchema(generateSILOSchema(serviceNode, cityData), 'city-service-schema');
  }, [serviceNode, cityData]);

  const cityServiceDetails = {
    'strategic-seo': {
      title: 'Strategic SEO Consulting',
      description: 'AI-driven SEO strategies tailored for local market dynamics',
      benefits: [
        'Dominate local search results',
        'Outrank competitors in your area',
        'Capture high-intent local traffic',
        'Build location-based authority'
      ]
    },
    'digital-storytelling': {
      title: 'Digital Storytelling Services',
      description: 'Craft compelling narratives that resonate with local audiences',
      benefits: [
        'Connect with local community values',
        'Build emotional brand connections',
        'Increase local engagement rates',
        'Establish regional thought leadership'
      ]
    },
    'seo-automation': {
      title: 'SEO Automation Solutions',
      description: 'Scale your local SEO efforts with AI-powered automation',
      benefits: [
        'Automate local keyword tracking',
        'Streamline multi-location SEO',
        'Monitor local competition automatically',
        'Scale content for multiple locations'
      ]
    },
    'personal-branding-consulting': {
      title: 'Personal Branding Consulting',
      description: 'Build your professional reputation in the local market',
      benefits: [
        'Establish local industry authority',
        'Network effectively in your region',
        'Attract local high-value clients',
        'Build regional thought leadership'
      ]
    }
  };

  const currentServiceDetail = cityServiceDetails[service as keyof typeof cityServiceDetails];

  const localStats = [
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Local Businesses',
      value: cityData.businessCount,
      color: 'teal'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Population',
      value: cityData.population,
      color: 'electric-blue'
    },
    {
      icon: <Building className="h-6 w-6" />,
      label: 'Key Industries',
      value: cityData.keyIndustries.length + '+ sectors',
      color: 'bright-orange'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: 'Market Growth',
      value: 'Expanding',
      color: 'purple'
    }
  ];

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
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8">
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li>/</li>
                <li><Link to={`/services/${service}`} className="hover:text-primary">{parentService.title}</Link></li>
                <li>/</li>
                <li className="text-primary">{cityData.name}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Serving {cityData.name}, {cityData.region}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              {currentServiceDetail.title} in {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {currentServiceDetail.description} in the thriving {cityData.name} market
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Deep local expertise combined with AI-driven SEO strategies. We understand the {cityData.name} business landscape and help you dominate your local market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+573046807443">
                  Get Local SEO Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Local Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary text-center mb-12">
              {cityData.name} Market Overview
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {localStats.map((stat, index) => (
                <div key={index} className="text-center bg-background border border-border rounded-xl p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.color}/10 rounded-xl mb-3`}>
                    <div className={`text-${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Why Choose Local SEO Expertise in {cityData.name}?
                </h2>
                <div className="space-y-4">
                  {currentServiceDetail.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Local Market Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Primary Industries:</span>
                    <div className="text-right">
                      {cityData.keyIndustries.slice(0, 2).map((industry, index) => (
                        <div key={index} className="text-sm font-medium text-primary">
                          {industry}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Ecosystem:</span>
                    <span className="font-medium text-primary">{cityData.businessCount} companies</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Region:</span>
                    <span className="font-medium text-primary">{cityData.region}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Industries Focus */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Industry Expertise in {cityData.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand the unique challenges and opportunities in {cityData.name}'s key business sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityData.keyIndustries.map((industry, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <Building className="h-8 w-8 text-teal mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">{industry}</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized SEO strategies for {industry.toLowerCase()} businesses
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonial/Case Study Tease */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Success Stories in {cityData.region}
            </h2>
            <div className="bg-gradient-to-br from-electric-blue/5 to-teal/5 border border-border rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-bright-orange fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-6">
                "The local market knowledge combined with AI-driven SEO strategies helped us dominate search results in {cityData.name}. Our leads increased by 250% in just 6 months."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Local {cityData.keyIndustries[0]} Business Owner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Dominate {cityData.name} Search Results?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free SEO consultation tailored specifically for your {cityData.name} business. 
            Let's discuss how to capture more local market share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+573046807443">
                <Phone className="mr-2 h-5 w-5" />
                Call for Free {cityData.name} SEO Audit
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/case-studies">View {cityData.region} Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceCityDetail;