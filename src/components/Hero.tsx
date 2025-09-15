import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DiceRoller from "./DiceRoller";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-bright-orange/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Signals Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
              +250% Organic Traffic
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
              +120% Qualified Leads
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-bright-orange rounded-full"></div>
              7+ Years in Florida Market
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight font-space-grotesk">
            SEO Strategy & Consulting{" "}
            <span className="bg-gradient-to-r from-electric-blue to-bright-orange bg-clip-text text-transparent">
              for Florida Businesses
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-poppins font-semibold">
            Helping Florida companies grow for 7+ years with search intent, topical authority, 
            and content that converts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <DiceRoller />
          </div>

          {/* Floating Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-electric-blue mb-2">+250%</div>
              <div className="text-sm text-muted-foreground">Traffic Growth</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-electric-blue mb-2">+120%</div>
              <div className="text-sm text-muted-foreground">Qualified Leads</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-bright-orange/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-bright-orange mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;