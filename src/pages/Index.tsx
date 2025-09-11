import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
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
      <FinalCTA />
    </main>
  );
};

export default Index;
