import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DiceRoller from "./DiceRoller";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden">
      {/* Brand Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, hsl(var(--teal)) 15%, transparent 50%),
                radial-gradient(circle at 60% 60%, hsl(var(--bright-orange)) 12%, transparent 40%),
                radial-gradient(circle at 80% 20%, hsl(var(--electric-blue)) 10%, transparent 35%)
              `,
              backgroundSize: '60px 60px, 80px 80px, 100px 100px'
            }}
          />
        </div>
        <div className="absolute bottom-20 right-20 w-96 h-96">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 12px,
                hsl(var(--teal)) 0.8,
                hsl(var(--teal)) 0.8 16px,
                transparent 16px,
                transparent 28px,
                hsl(var(--bright-orange)) 0.6,
                hsl(var(--bright-orange)) 0.6 32px
              )`
            }}
          />
        </div>
      </div>

      {/* Floating Brand Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16">
          <svg className="h-20 w-20 text-teal/10" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 24h36M24 6v36" stroke="currentColor" strokeWidth="1.5"/>
            <ellipse cx="24" cy="24" rx="8" ry="18" stroke="hsl(var(--bright-orange))" strokeWidth="2" fill="none" opacity="0.6"/>
            <circle cx="8" cy="16" r="2" fill="hsl(var(--teal))"/>
            <circle cx="38" cy="8" r="3" fill="hsl(var(--bright-orange))"/>
          </svg>
        </div>
        
        <div className="absolute top-20 right-32">
          <svg className="h-16 w-16 text-electric-blue/15" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="3" fill="currentColor"/>
            <circle cx="12" cy="12" r="3" fill="hsl(var(--teal))"/>
            <circle cx="36" cy="12" r="3" fill="hsl(var(--bright-orange))"/>
            <circle cx="12" cy="36" r="3" fill="hsl(var(--bright-orange))"/>
            <circle cx="36" cy="36" r="3" fill="hsl(var(--teal))"/>
            <path d="M24 24L12 12M24 24L36 12M24 24L12 36M24 24L36 36" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>

        <div className="absolute bottom-40 left-1/4">
          <svg className="h-18 w-18 text-bright-orange/12" viewBox="0 0 48 48" fill="none">
            <path d="M8 32l8-8 6 6 12-12 6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="absolute bottom-32 right-20">
          <svg className="h-14 w-14 text-teal/10" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="32" width="6" height="8" fill="currentColor"/>
            <rect x="18" y="20" width="6" height="20" fill="hsl(var(--bright-orange))"/>
            <rect x="28" y="16" width="6" height="24" fill="hsl(var(--teal))"/>
            <rect x="38" y="8" width="6" height="32" fill="hsl(var(--electric-blue))"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Signals Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal rounded-full"></div>
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
            <span className="bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
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
            <div className="bg-card/80 backdrop-blur-sm border border-teal/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Brand Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 70% 30%, hsl(var(--teal)) 30%, transparent 70%)`
                }}
              />
              <div className="text-3xl font-bold text-teal mb-2 relative z-10">+250%</div>
              <div className="text-sm text-muted-foreground relative z-10">Traffic Growth</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Brand Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 6px,
                    hsl(var(--electric-blue)) 0.3,
                    hsl(var(--electric-blue)) 0.3 8px
                  )`
                }}
              />
              <div className="text-3xl font-bold text-electric-blue mb-2 relative z-10">+120%</div>
              <div className="text-sm text-muted-foreground relative z-10">Qualified Leads</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-bright-orange/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Brand Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 70%, hsl(var(--bright-orange)) 25%, transparent 60%),
                    radial-gradient(circle at 80% 20%, hsl(var(--bright-orange)) 15%, transparent 50%)
                  `
                }}
              />
              <div className="text-3xl font-bold text-bright-orange mb-2 relative z-10">7+</div>
              <div className="text-sm text-muted-foreground relative z-10">Years Experience</div>
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