'use client';

import Link from 'next/link';
import { useParams, redirect } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Users, TrendingUp, Star, Building, Phone } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SILO_STRUCTURE, getCityDataBySlug, generateSILOSchema } from "@/lib/silo-structure";
import { addSchema } from "@/lib/seo";
import { useEffect } from "react";

const ServiceCityDetail = () => {
  const params = useParams();
  const service = typeof params.service === 'string' ? params.service : params.service?.[0];
  const city = typeof params.city === 'string' ? params.city : params.city?.[0];
  
  const cityData = getCityDataBySlug(city || '');
  const nodeId = `${service}-${city}`;
  const serviceNode = SILO_STRUCTURE[nodeId];
  const parentService = SILO_STRUCTURE[service || ''];
  
  if (!serviceNode || !cityData || !parentService) {
    redirect('/services');
  }

  useEffect(() => {
    // Add city-specific schema
    addSchema(generateSILOSchema(serviceNode, cityData), 'city-service-schema');
  }, [serviceNode, cityData]);

  // Custom content for each service-city combination
  const cityServiceContent = {
    'strategic-seo-consulting': {
      'miami-fl': {
        h1: "Strategic SEO Consulting in Miami, FL",
        intro_paragraph: "Miami's competitive business landscape demands sophisticated SEO strategies that cut through the digital noise. Our strategic SEO consulting services combine AI-driven insights with deep understanding of South Florida's market dynamics. We help Miami businesses—from Brickell startups to Coral Gables enterprises—dominate local search results and capture high-intent customers. With over 470,000 residents and 50,000+ businesses, Miami presents unique opportunities for strategic growth through targeted SEO campaigns that understand cultural diversity and local search behavior.",
        key_benefits: [
          "AI-powered keyword research targeting Miami's multilingual market segments",
          "Local SEO optimization for high-competition South Florida keywords",
          "Strategic content planning aligned with Miami's tourism and finance industries",
          "Competitive analysis of Miami-Dade's top-performing businesses",
          "ROI-focused implementation with measurable growth metrics"
        ],
        cta: "Transform your Miami business into a local search authority. Schedule your strategic SEO consultation today."
      },
      'orlando-fl': {
        h1: "Strategic SEO Consulting for Businesses in Orlando, FL",
        intro_paragraph: "Orlando's thriving economy extends far beyond theme parks—it's a hub for technology, healthcare, and aerospace innovation. Our strategic SEO consulting empowers Central Florida businesses to capture this diverse market through data-driven optimization strategies. We specialize in helping Orlando companies leverage their unique positioning in tourism, tech corridors, and research institutions to dominate search results. With 280,000+ residents and explosive business growth, Orlando requires SEO strategies that balance local relevance with broader market appeal.",
        key_benefits: [
          "Tourism-aware SEO strategies that capitalize on Orlando's visitor traffic",
          "Technology sector optimization for Orlando's growing tech community",
          "Healthcare and aerospace industry-specific keyword targeting",
          "Central Florida market analysis and competitor intelligence",
          "Scalable SEO frameworks designed for rapid business growth"
        ],
        cta: "Unlock Orlando's digital potential for your business. Book your strategic SEO assessment now."
      }
    },
    'digital-storytelling-services': {
      'tampa-fl': {
        h1: "Digital Storytelling Services in Tampa, FL",
        intro_paragraph: "Tampa Bay's dynamic business community thrives on authentic connections and compelling narratives. Our digital storytelling services transform your brand into a memorable presence that resonates with West Florida audiences. We craft data-driven stories that showcase your unique value while optimizing for search visibility across Tampa's diverse industries—from healthcare giants to innovative fintech startups. With 380,000+ residents and a booming business ecosystem, Tampa demands storytelling that captures both local authenticity and professional excellence.",
        key_benefits: [
          "Healthcare industry narrative expertise for Tampa's medical corridor",
          "Financial services storytelling aligned with Tampa Bay's business culture",
          "Multi-platform content strategies for diverse West Florida demographics",
          "Local market insights integrated into brand storytelling frameworks",
          "SEO-optimized content that drives engagement and conversions"
        ],
        cta: "Transform your Tampa brand story into a competitive advantage. Start your digital storytelling journey today."
      },
      'fort-lauderdale-fl': {
        h1: "Digital Storytelling Solutions in Fort Lauderdale, FL",
        intro_paragraph: "Fort Lauderdale's sophisticated business environment—spanning marine industries, luxury real estate, and cutting-edge technology—requires storytelling that matches its premium market positioning. Our digital storytelling solutions elevate your brand narrative to connect with South Florida's affluent and discerning audiences. We specialize in crafting compelling stories that highlight innovation, luxury, and expertise while ensuring maximum search visibility. With 180,000+ residents and 25,000+ businesses, Fort Lauderdale presents unique opportunities for brands that can tell their story with distinction and search optimization.",
        key_benefits: [
          "Luxury market storytelling expertise for Fort Lauderdale's premium businesses",
          "Marine industry narrative development with technical authority",
          "Real estate and technology sector content optimization",
          "High-net-worth audience engagement strategies",
          "Premium brand positioning through strategic digital narratives"
        ],
        cta: "Elevate your Fort Lauderdale brand with premium digital storytelling. Discover your competitive narrative advantage."
      }
    },
    'seo-automation': {
      'jacksonville-fl': {
        h1: "SEO Automation in Jacksonville, FL",
        intro_paragraph: "Jacksonville's massive market—Florida's largest city with 950,000+ residents—demands SEO efficiency at scale. Our AI-driven SEO automation solutions streamline your digital marketing efforts while maximizing results across Northeast Florida's diverse business landscape. From logistics giants to healthcare systems, we deploy advanced automation tools that handle keyword research, content optimization, and performance tracking. Jacksonville's 60,000+ businesses need SEO strategies that work as efficiently as their operations, delivering consistent growth without constant manual intervention.",
        key_benefits: [
          "Automated keyword tracking for Jacksonville's massive market segments",
          "Logistics and healthcare industry-specific optimization algorithms",
          "Scalable SEO processes designed for large-market penetration",
          "AI-powered content creation and optimization workflows",
          "Real-time performance monitoring with automated reporting dashboards"
        ],
        cta: "Scale your Jacksonville SEO efforts with intelligent automation. Maximize efficiency and results today."
      },
      'orlando-fl': {
        h1: "AI-Driven SEO Automation in Orlando, FL",
        intro_paragraph: "Orlando's fast-paced business environment—fueled by tourism, technology, and innovation—requires SEO solutions that keep up with rapid market changes. Our AI-driven SEO automation harnesses machine learning and advanced algorithms to optimize your digital presence across Central Florida's competitive landscape. We automate the complex, time-consuming aspects of SEO while maintaining the strategic oversight that drives real growth. With Orlando's tech-savvy market and 30,000+ businesses, automation isn't just efficient—it's essential for staying competitive in this dynamic ecosystem.",
        key_benefits: [
          "AI-powered optimization for Orlando's tourism and technology sectors",
          "Automated competitor monitoring in high-velocity markets",
          "Machine learning algorithms for predictive keyword trends",
          "Tourism industry seasonal optimization with automated adjustments",
          "Tech sector content automation with innovation-focused targeting"
        ],
        cta: "Harness AI-powered SEO automation for your Orlando business. Experience intelligent growth optimization."
      }
    },
    'personal-branding-consulting': {
      'miami-fl': {
        h1: "Personal Branding Consulting in Miami, FL",
        intro_paragraph: "Miami's vibrant professional ecosystem—where international business meets creative innovation—demands personal brands that command attention and respect. Our personal branding consulting transforms ambitious professionals into recognized thought leaders across South Florida's influential networks. We specialize in building authentic authority for executives, consultants, and entrepreneurs who want to leverage Miami's unique position as a gateway to Latin America and global business. In a city of 470,000+ residents where relationships drive success, your personal brand becomes your most valuable business asset.",
        key_benefits: [
          "Executive presence development for Miami's international business community",
          "Multilingual personal branding strategies for diverse South Florida markets",
          "Finance and real estate industry authority building",
          "Social media optimization for Miami's influential professional networks",
          "Thought leadership positioning in Latin American business corridors"
        ],
        cta: "Establish your authority in Miami's competitive professional landscape. Build your influential personal brand now."
      },
      'tampa-fl': {
        h1: "Personal Branding SEO Consulting in Tampa, FL",
        intro_paragraph: "Tampa Bay's thriving professional community values authentic expertise and measurable results—qualities that define successful personal brands in West Florida's competitive market. Our personal branding SEO consulting combines reputation management with strategic search optimization, ensuring your professional presence dominates relevant searches across Tampa's key industries. We help healthcare leaders, financial executives, and technology innovators build digital authority that translates into business opportunities. With 380,000+ residents and a growing professional network, Tampa rewards personal brands that demonstrate both local engagement and industry leadership.",
        key_benefits: [
          "Healthcare industry thought leadership development and optimization",
          "Financial services personal branding with compliance-aware strategies",
          "Technology sector authority building for Tampa's innovation community",
          "SEO-optimized professional profiles for maximum search visibility",
          "Local market networking integration with digital brand presence"
        ],
        cta: "Dominate Tampa's professional search results with strategic personal branding. Amplify your industry authority today."
      }
    }
  };

  // Get the custom content for this service-city combination
  const serviceKey = service?.replace('-consulting', '').replace('-services', '') as string;
  const cityKey = city as string;
  
  const customContent = serviceKey && cityKey && cityServiceContent[serviceKey as keyof typeof cityServiceContent]
    ? (cityServiceContent[serviceKey as keyof typeof cityServiceContent] as any)[cityKey]
    : null;

  // Fallback content structure for cities not in the custom content
  const fallbackContent = {
    h1: serviceNode.title,
    intro_paragraph: `Enhance your ${cityData.name} business with our professional ${parentService.title.toLowerCase()} services. We combine local market expertise with cutting-edge SEO strategies to help businesses in ${cityData.region} achieve measurable growth and market dominance.`,
    key_benefits: [
      `Dominate local search results in ${cityData.name}`,
      `Outrank competitors in ${cityData.region}`,
      `Capture high-intent local traffic`,
      `Build location-based authority`
    ],
    cta: `Ready to grow your ${cityData.name} business? Get your free consultation today.`
  };

  const content = customContent || fallbackContent;

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
                <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                <li>/</li>
                <li><Link href={`/services/${service}`} className="hover:text-primary">{parentService.title}</Link></li>
                <li>/</li>
                <li className="text-primary">{cityData.name}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Serving {cityData.name}, {cityData.region}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              {content.h1}
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {content.intro_paragraph}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+573046807443">
                  Get Local SEO Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Local Success Stories</Link>
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
                  {content.key_benefits.map((benefit, index) => (
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
      <section className="py-24 bg-card border-t">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-electric-blue to-bright-orange rounded-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              {content.cta.includes('?') ? content.cta.split('?')[0] + '?' : 'Ready to Dominate ' + cityData.name + ' Search Results?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {content.cta.includes('?') ? content.cta.split('.')[1] || 'Get a free SEO consultation tailored specifically for your ' + cityData.name + ' business.' : content.cta}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+573046807443">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Free {cityData.name} SEO Audit
                </a>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/case-studies">View {cityData.region} Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceCityDetail;