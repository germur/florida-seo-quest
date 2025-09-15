import { Button } from "@/components/ui/button";
import { ArrowRight, Dice1 } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white relative overflow-hidden">
      {/* Brand Pattern Background */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute top-10 right-10 w-64 h-64"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, hsl(var(--teal)) 20%, transparent 60%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 8px,
                hsl(var(--bright-orange)) 0.3,
                hsl(var(--bright-orange)) 0.3 12px
              )
            `
          }}
        />
        <div 
          className="absolute bottom-10 left-10 w-80 h-80"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, hsl(var(--bright-orange)) 25%, transparent 70%)`
          }}
        />
      </div>

      {/* Floating Brand Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-20">
          <svg className="h-24 w-24 text-white" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="3" fill="currentColor"/>
            <circle cx="12" cy="12" r="3" fill="hsl(var(--teal))"/>
            <circle cx="36" cy="12" r="3" fill="hsl(var(--bright-orange))"/>
            <circle cx="12" cy="36" r="3" fill="hsl(var(--bright-orange))"/>
            <circle cx="36" cy="36" r="3" fill="hsl(var(--teal))"/>
            <path d="M24 24L12 12M24 24L36 12M24 24L12 36M24 24L36 36" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-32">
          <svg className="h-16 w-16 text-white" viewBox="0 0 48 48" fill="none">
            <path d="M8 32l8-8 6 6 12-12 6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Grow?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            Let's build an SEO strategy that works for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              asChild
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 group"
              asChild
            >
              <Link to="/case-studies">
                <Dice1 className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
                See Case Studies
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center relative">
              <div className="absolute -top-2 -right-2 opacity-40">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 24h36M24 6v36" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-teal mb-2">Florida</div>
              <div className="text-sm text-white/70">Local Expertise</div>
            </div>
            <div className="text-center relative">
              <div className="absolute -top-2 -right-2 opacity-40">
                <svg className="h-8 w-8 text-bright-orange" viewBox="0 0 48 48" fill="none">
                  <path d="M8 32l8-8 6 6 12-12 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-bright-orange mb-2">7+ Years</div>
              <div className="text-sm text-white/70">Experience</div>
            </div>
            <div className="text-center relative">
              <div className="absolute -top-2 -right-2 opacity-40">
                <svg className="h-8 w-8 text-white" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="32" width="4" height="6" fill="currentColor"/>
                  <rect x="18" y="20" width="4" height="18" fill="currentColor"/>
                  <rect x="28" y="16" width="4" height="22" fill="currentColor"/>
                  <rect x="38" y="8" width="4" height="30" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">Results</div>
              <div className="text-sm text-white/70">Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;