import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Users } from "lucide-react";

const CoreServices = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Strategic SEO Consulting",
      description: "AI-driven SEO strategy and implementation with the MAES framework for measurable growth.",
      cta: "Explore Strategic SEO",
      href: "/services/strategic-seo-consulting",
      color: "teal"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Digital Storytelling Services",
      description: "Transform your brand through compelling narratives that drive engagement and conversions.",
      cta: "See Storytelling Services",
      href: "/services/digital-storytelling-services",
      color: "electric-blue"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "SEO Automation & Data",
      description: "Scale your SEO efforts with AI-powered automation and advanced data analytics.",
      cta: "Discover Automation",
      href: "/services/seo-automation",
      color: "bright-orange"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Branding Consulting",
      description: "Build your professional authority and online presence in your industry niche.",
      cta: "Build Your Brand",
      href: "/services/personal-branding-consulting",
      color: "purple"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16 font-space-grotesk">
            What I Do
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  service.color === 'teal' ? 'bg-teal/10 group-hover:bg-teal/20' :
                  service.color === 'electric-blue' ? 'bg-electric-blue/10 group-hover:bg-electric-blue/20' :
                  service.color === 'bright-orange' ? 'bg-bright-orange/10 group-hover:bg-bright-orange/20' :
                  'bg-purple/10 group-hover:bg-purple/20'
                }`}>
                  <div className={`${
                    service.color === 'teal' ? 'text-teal' :
                    service.color === 'electric-blue' ? 'text-electric-blue' :
                    service.color === 'bright-orange' ? 'text-bright-orange' :
                    'text-purple'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-primary mb-4 font-poppins">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-inter">{service.description}</p>
                
                <div className="space-y-3">
                  <Button variant="outline" className="group w-full justify-between" asChild>
                    <Link href={service.href}>
                      {service.cta}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  {/* Contextual links based on service */}
                  <div className="text-sm text-center">
                    {index === 0 && (
                      <Link href="/case-studies/paramount-property-restoration" className="text-muted-foreground hover:text-primary transition-colors underline decoration-dotted">
                        See Strategic SEO Results →
                      </Link>
                    )}
                    {index === 1 && (
                      <Link href="/services/digital-storytelling-services/miami-fl/" className="text-muted-foreground hover:text-primary transition-colors underline decoration-dotted">
                        View Miami Storytelling →
                      </Link>
                    )}
                    {index === 2 && (
                      <Link href="/services/seo-automation/orlando-fl/" className="text-muted-foreground hover:text-primary transition-colors underline decoration-dotted">
                        See Orlando Automation →
                      </Link>
                    )}
                    {index === 3 && (
                      <Link href="/services/personal-branding-consulting/tampa-fl/" className="text-muted-foreground hover:text-primary transition-colors underline decoration-dotted">
                        See Tampa Branding →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;