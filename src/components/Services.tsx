import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      id: "strategic-seo-consulting",
      icon: <Search className="h-12 w-12" />,
      title: "Strategic SEO Consulting",
      subtitle: "AI-Driven Growth Strategies for Florida Businesses",
      description: "Comprehensive SEO strategy development with advanced AI tools and local market expertise.",
      features: [
        "AI-powered keyword research and competitive analysis",
        "Semantic information architecture", 
        "Content strategy based on search intent",
        "Prioritized implementation roadmap",
        "KPIs and tracking metrics"
      ],
      color: "teal",
      price: "From $2,500",
      duration: "4-6 weeks"
    },
    {
      id: "digital-storytelling-services",
      icon: <Settings className="h-12 w-12" />,
      title: "Digital Storytelling Services",
      subtitle: "Brand Narrative & Content Marketing",
      description: "Transform your brand narrative with compelling digital storytelling that connects with audiences.",
      features: [
        "Brand story development and positioning",
        "Content marketing strategy",
        "Narrative-driven SEO content",
        "Multi-platform storytelling approach",
        "Audience engagement optimization"
      ],
      color: "electric-blue", 
      price: "From $1,800",
      duration: "3-4 weeks"
    },
    {
      id: "seo-automation",
      icon: <Users className="h-12 w-12" />,
      title: "SEO Automation & Data",
      subtitle: "AI-Powered Efficiency Tools",
      description: "Streamline your SEO processes with advanced automation tools and data-driven insights.",
      features: [
        "Automated keyword research and tracking",
        "AI-powered content optimization",
        "Automated reporting and analytics",
        "Technical SEO monitoring",
        "Performance tracking dashboards"
      ],
      color: "bright-orange",
      price: "From $2,200",
      duration: "2-3 weeks"
    },
    {
      id: "personal-branding-consulting",
      icon: <Users className="h-12 w-12" />,
      title: "Personal Branding Consulting",
      subtitle: "Build Your Professional Authority",
      description: "Establish thought leadership and professional authority with strategic personal branding.",
      features: [
        "Personal brand strategy development",
        "Professional profile optimization",
        "Thought leadership content planning",
        "Online reputation management",
        "Authority building campaigns"
      ],
      color: "bright-orange",
      price: "From $1,500",
      duration: "4-5 weeks"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep analysis of your business, market, and current situation."
    },
    {
      number: "02", 
      title: "Strategy",
      description: "Custom strategy development based on your specific needs."
    },
    {
      number: "03",
      title: "Implementation", 
      description: "Execution of the strategy with constant monitoring."
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous adjustments based on results and data."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO page="services" />
      <Header />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              SEO Services for Florida Businesses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Strategic SEO services designed to generate real, measurable growth for your business.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-16">
              {services.map((service, index) => (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                        service.color === 'teal' ? 'bg-teal/10' :
                        service.color === 'electric-blue' ? 'bg-electric-blue/10' :
                        'bg-bright-orange/10'
                      }`}>
                        <div className={`${
                          service.color === 'teal' ? 'text-teal' :
                          service.color === 'electric-blue' ? 'text-electric-blue' :
                          'text-bright-orange'
                        }`}>
                          {service.icon}
                        </div>
                      </div>
                      
                      <h2 className="text-4xl font-bold text-primary mb-3">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                            service.color === 'teal' ? 'text-teal' :
                            service.color === 'electric-blue' ? 'text-electric-blue' :
                            'text-bright-orange'
                          }`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="hero" size="lg" asChild>
                        <Link href={`/services/${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:+573046807443">
                          Get Quote
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Investment</span>
                          <span className="text-2xl font-bold text-primary">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-semibold text-primary">{service.duration}</span>
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
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that guarantees results through structured implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-teal to-electric-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-card border-t">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-electric-blue to-bright-orange rounded-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start Growing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help you achieve sustainable SEO growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+573046807443">
                  Schedule Free Consultation
                </a>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/case-studies">See Our Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;