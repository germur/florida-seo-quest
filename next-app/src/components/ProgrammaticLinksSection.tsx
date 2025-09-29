import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import { FLORIDA_CITIES } from "@/lib/silo-structure";

const ProgrammaticLinksSection = () => {
  const linkCategories = [
    {
      title: "SEO Services",
      links: [
        { name: "Strategic SEO Consulting", href: "/services/strategic-seo-consulting" },
        { name: "Digital Storytelling Services", href: "/services/digital-storytelling-services" },
        { name: "SEO Automation", href: "/services/seo-automation" },
        { name: "Personal Branding Consulting", href: "/services/personal-branding-consulting" },
        { name: "All SEO Services", href: "/services" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "How We Work", href: "/how-we-work" },
      ]
    },
    {
      title: "Local SEO Services",
      links: [
        { name: "SEO Services Miami", href: "/services/strategic-seo-consulting/miami-fl" },
        { name: "SEO Services Orlando", href: "/services/strategic-seo-consulting/orlando-fl" },
        { name: "SEO Services Tampa", href: "/services/strategic-seo-consulting/tampa-fl" },
        { name: "SEO Services Jacksonville", href: "/services/strategic-seo-consulting/jacksonville-fl" },
        { name: "SEO Services Fort Lauderdale", href: "/services/strategic-seo-consulting/fort-lauderdale-fl" },
        { name: "SEO Services St. Petersburg", href: "/services/strategic-seo-consulting/st-petersburg-fl" },
        { name: "SEO Services Sarasota", href: "/services/strategic-seo-consulting/sarasota-fl" },
        { name: "SEO Services Gainesville", href: "/services/strategic-seo-consulting/gainesville-fl" },
      ]
    },
    {
      title: "Specialized Solutions",
      links: [
        { name: "AI SEO Automation Miami", href: "/services/seo-automation/miami-fl" },
        { name: "Digital Storytelling Tampa", href: "/services/digital-storytelling-services/tampa-fl" },
        { name: "Personal Branding Miami", href: "/services/personal-branding-consulting/miami-fl" },
        { name: "SEO Automation Orlando", href: "/services/seo-automation/orlando-fl" },
        { name: "Brand Storytelling Fort Lauderdale", href: "/services/digital-storytelling-services/fort-lauderdale-fl" },
        { name: "Professional Branding Tampa", href: "/services/personal-branding-consulting/tampa-fl" },
        { name: "AI SEO Jacksonville", href: "/services/seo-automation/jacksonville-fl" },
      ]
    },
    {
      title: "Resources & Company",
      links: [
        { name: "Free SEO Tools", href: "/resources" },
        { name: "SEO Blog", href: "/blog" },
        { name: "ROI Calculator", href: "/resources#roi-calculator" },
        { name: "Title Analyzer", href: "/resources#title-analyzer" },
        { name: "About Calvo Creativo", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-electric-blue/5 to-bright-orange/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Explore All SEO Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO services across Florida. From strategic consulting to AI automation, 
              find the perfect solution for your business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {linkCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-bold text-primary border-b-2 border-electric-blue/20 pb-3">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/50 backdrop-blur-sm border border-transparent hover:border-electric-blue/20"
                    >
                      <span className="text-sm md:text-base font-medium leading-relaxed">
                        {link.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-sm text-muted-foreground">
                Serving all of Florida with AI-powered SEO solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammaticLinksSection;