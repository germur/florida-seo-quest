import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CoreServices from "@/components/CoreServices";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import ProcessSection from "@/components/ProcessSection";
import BlogSection from "@/components/BlogSection";
import ProgrammaticLinksSection from "@/components/ProgrammaticLinksSection";
import FinalCTA from "@/components/FinalCTA";
import SEO from "@/components/SEO";

const Index = () => {
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
        <CaseStudiesPreview />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      
      {/* Programmatic Links Section */}
      <ProgrammaticLinksSection />
      
      <FinalCTA />
    </main>
  );
};

export default Index;
