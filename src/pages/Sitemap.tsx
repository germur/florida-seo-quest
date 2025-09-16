import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, MapPin, Building, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { FLORIDA_CITIES } from "@/lib/silo-structure";

const Sitemap = () => {
  const mainPages = [
    { name: "Home", url: "/", description: "Strategic SEO Consulting Florida" },
    { name: "About", url: "/about", description: "Meet Roger Murillo, Florida SEO Expert" },
    { name: "Services", url: "/services", description: "AI SEO Services for Florida Businesses" },
    { name: "Case Studies", url: "/case-studies", description: "Real SEO Success Stories" },
    { name: "Blog", url: "/blog", description: "SEO Insights & Strategies" },
    { name: "Resources", url: "/resources", description: "Free SEO Tools & Guides" },
    { name: "How We Work", url: "/how-we-work", description: "Our SEO Process & Methodology" },
    { name: "Contact", url: "/contact", description: "Get Your Free SEO Consultation" }
  ];

  const services = [
    { 
      name: "Strategic SEO Consulting", 
      url: "/services/strategic-seo-consulting", 
      description: "AI-driven SEO strategies for Florida businesses" 
    },
    { 
      name: "Digital Storytelling Services", 
      url: "/services/digital-storytelling-services", 
      description: "Transform your brand through compelling narratives" 
    },
    { 
      name: "SEO Automation", 
      url: "/services/seo-automation", 
      description: "Scale your SEO with AI-powered automation" 
    },
    { 
      name: "Personal Branding Consulting", 
      url: "/services/personal-branding-consulting", 
      description: "Build your professional authority" 
    }
  ];

  const caseStudies = [
    { name: "Paramount Property Restoration", url: "/case-studies/paramount-property-restoration", description: "+250% organic traffic growth" },
    { name: "Flo Car Rental", url: "/case-studies/flo-car-rental", description: "Local SEO domination in Miami" },
    { name: "Puff Cleaning", url: "/case-studies/puff-cleaning", description: "Home services SEO success" },
    { name: "Edu1st Preschools", url: "/case-studies/edu1st-preschools", description: "Educational sector SEO growth" },
    { name: "Craftd London", url: "/case-studies/craftd-london", description: "E-commerce SEO optimization" },
    { name: "Legramme", url: "/case-studies/legramme", description: "International brand expansion" }
  ];

  const blogPosts = [
    { 
      name: "WordPress: Affordable Solution or Anchor of Problems?", 
      url: "/blog/wordpress-affordable-solution-or-anchor", 
      description: "Critical analysis of WordPress pros and cons" 
    },
    { 
      name: "SEO Didn't Die: From Hype to Strategy That Works", 
      url: "/blog/seo-no-murio-hype-estrategia", 
      description: "Debunking digital marketing myths and trends" 
    }
  ];

  const legalPages = [
    { name: "Privacy Policy", url: "/privacy-policy", description: "How we protect your personal information" },
    { name: "Terms of Service", url: "/terms-of-service", description: "Our service agreement terms" },
    { name: "Cookie Policy", url: "/cookie-policy", description: "Our cookie usage policy" }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="resources" 
        customTitle="Sitemap | Calvo Creativo Florida SEO Services"
        customDescription="Complete sitemap of all pages on Calvo Creativo website. Find all our SEO services, case studies, blog posts, and resources for Florida businesses."
        customCanonical="https://calvocreativo.com/sitemap"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Complete directory of all pages, services, and resources on our website. 
              Find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Building className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Main Pages</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {mainPages.map((page, index) => (
                <Link 
                  key={index} 
                  to={page.url}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-teal transition-colors">
                      {page.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-teal transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="h-8 w-8 text-electric-blue" />
              <h2 className="text-3xl font-bold text-primary">SEO Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.url}
                  className="group bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border border-electric-blue/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-electric-blue transition-colors">
                      {service.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-electric-blue transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  
                  {/* City Sub-pages */}
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Available in:</span>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {FLORIDA_CITIES.slice(0, 4).map((city, cityIndex) => (
                        <span key={cityIndex} className="bg-electric-blue/10 text-electric-blue px-2 py-1 rounded">
                          {city.name}
                        </span>
                      ))}
                      {FLORIDA_CITIES.length > 4 && (
                        <span className="text-electric-blue">+{FLORIDA_CITIES.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Local SEO Pages */}
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="h-8 w-8 text-teal" />
              <h2 className="text-3xl font-bold text-primary">Local SEO Services by City</h2>
            </div>
            
            <div className="bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 rounded-2xl p-8 mb-16">
              <p className="text-muted-foreground text-center mb-6">
                We provide specialized local SEO services across Florida's major cities:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {FLORIDA_CITIES.map((city, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-primary mb-2">{city.name}</h4>
                    <div className="space-y-1 text-xs">
                      <Link to={`/services/strategic-seo-consulting/${city.slug}`} className="block text-teal hover:underline">
                        Strategic SEO
                      </Link>
                      <Link to={`/services/digital-storytelling-services/${city.slug}`} className="block text-teal hover:underline">
                        Digital Storytelling
                      </Link>
                      <Link to={`/services/seo-automation/${city.slug}`} className="block text-teal hover:underline">
                        SEO Automation
                      </Link>
                      <Link to={`/services/personal-branding-consulting/${city.slug}`} className="block text-teal hover:underline">
                        Personal Branding
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-bright-orange" />
              <h2 className="text-3xl font-bold text-primary">Success Stories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {caseStudies.map((study, index) => (
                <Link 
                  key={index} 
                  to={study.url}
                  className="group bg-gradient-to-br from-bright-orange/5 to-bright-orange/10 border border-bright-orange/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-bright-orange transition-colors">
                      {study.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-bright-orange transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </Link>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-purple" />
              <h2 className="text-3xl font-bold text-primary">Latest Blog Posts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {blogPosts.map((post, index) => (
                <Link 
                  key={index} 
                  to={post.url}
                  className="group bg-gradient-to-br from-purple/5 to-purple/10 border border-purple/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-purple transition-colors">
                      {post.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-purple transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </Link>
              ))}
            </div>

            {/* Legal Pages */}
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-neutral-gray" />
              <h2 className="text-3xl font-bold text-primary">Legal & Policies</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <Link 
                  key={index} 
                  to={page.url}
                  className="group bg-muted/30 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-neutral-gray transition-colors">
                      {page.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-neutral-gray transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us directly and we'll help you find the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="tel:+573046807443">
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sitemap;