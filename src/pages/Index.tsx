import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import BlogSection from "@/components/BlogSection";
import ProgrammaticLinksSection from "@/components/ProgrammaticLinksSection";
import FinalCTA from "@/components/FinalCTA";
import InternalLinkHub from "@/components/InternalLinkHub";
import SEO from "@/components/SEO";

const Index = () => {
  // Strategic link groups for internal linking
  const linkGroups = [
    {
      title: "SEO Services",
      links: [
        { name: "Strategic SEO Consulting", href: "/services/strategic-seo-consulting", description: "AI-driven SEO strategy & implementation" },
        { name: "Digital Storytelling Services", href: "/services/digital-storytelling-services", description: "Transform your brand through compelling narratives" },
        { name: "SEO Automation", href: "/services/seo-automation", description: "Scale your SEO with AI-powered automation" },
        { name: "Personal Branding Consulting", href: "/services/personal-branding-consulting", description: "Build your professional authority" },
      ]
    },
    {
      title: "Success Stories",
      links: [
        { name: "Property Restoration (+250%)", href: "/case-studies/paramount-property-restoration" },
        { name: "E-commerce (50+ Keywords)", href: "/case-studies/craftd-london" },
        { name: "Local Business (+80%)", href: "/case-studies/edu1st-preschools" },
      ]
    },
    {
      title: "Free Resources",
      links: [
        { name: "SEO ROI Calculator", href: "/resources#roi-calculator" },
        { name: "Title Analyzer Tool", href: "/resources#title-analyzer" },
        { name: "Keyword Cluster Generator", href: "/resources#cluster-generator" },
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO page="home" />
      <Header />
      <Hero />
      <WhyWorkWithMe />
      <section id="services">
        <CoreServices />
      </section>
      <section id="results">
        <CaseStudies />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      
      {/* Strategic Internal Link Hub */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <InternalLinkHub 
              groups={linkGroups}
              title="Explore SEO Solutions & Success Stories"
            />
          </div>
        </div>
      </section>
      
      {/* Programmatic Links Section */}
      <ProgrammaticLinksSection />
      
      <FinalCTA />
    </main>
  );
};

export default Index;
