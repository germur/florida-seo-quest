import { Button } from "@/components/ui/button";
import { Calculator, Target, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import ROICalculator from "@/components/ROICalculator";
import ClusterGenerator from "@/components/ClusterGenerator";
import TitleAnalyzer from "@/components/TitleAnalyzer";
import SEO from "@/components/SEO";

const Resources = () => {
  const tools = [
    {
      name: "SEO ROI Calculator",
      description: "Discover the real value of your SEO investment and project your potential earnings.",
      icon: <Calculator className="h-8 w-8" />,
      component: "calculator",
      color: "electric-blue"
    },
    {
      name: "Topic Cluster Generator",
      description: "Create content architecture that builds topical authority in Google.",
      icon: <Target className="h-8 w-8" />,
      component: "cluster",
      color: "bright-orange"
    },
    {
      name: "SEO Title Analyzer",
      description: "Optimize your titles to maximize CTR and rankings in Google.",
      icon: <Sparkles className="h-8 w-8" />,
      component: "title-analyzer",
      color: "neutral-gray"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO page="resources" />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-black text-5xl md:text-6xl text-foreground mb-6">
              SEO Resources & Tools
            </h1>
            <p className="font-subtitle text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Free tools, templates, and guides to implement professional SEO strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-3xl text-foreground text-center mb-12">
              Available Tools
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/30 rounded-2xl mb-6 group-hover:bg-secondary/50 transition-all duration-300">
                    <div className="text-foreground group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-4">{tool.name}</h3>
                  <p className="font-body text-muted-foreground">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-2xl mb-4">
                <Calculator className="h-8 w-8 text-electric-blue" />
              </div>
              <h2 className="font-black text-3xl text-foreground mb-4">
                SEO ROI Calculator
              </h2>
              <p className="font-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate the return on investment of your SEO strategies with precision and project your potential earnings.
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Cluster Generator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange/20 rounded-2xl mb-4">
                <Target className="h-8 w-8 text-bright-orange" />
              </div>
              <h2 className="font-black text-3xl text-foreground mb-4">
                Topic Cluster Generator
              </h2>
              <p className="font-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
                Create a content architecture that builds topical authority in Google and establishes your expertise.
              </p>
            </div>
            
            <ClusterGenerator />
          </div>
        </div>
      </section>

      {/* Title Analyzer Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-gray/20 rounded-2xl mb-4">
                <Sparkles className="h-8 w-8 text-neutral-gray" />
              </div>
              <h2 className="font-black text-3xl text-foreground mb-4">
                SEO Title Analyzer
              </h2>
              <p className="font-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
                Optimize your titles to maximize CTR and rankings in Google with advanced analysis and suggestions.
              </p>
            </div>
            
            <TitleAnalyzer />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground via-neutral-gray to-foreground text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6">
            Need More Help?
          </h2>
          <p className="font-subtitle text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get personalized guidance and advanced strategies with our SEO consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+573046807443">
                Schedule Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;