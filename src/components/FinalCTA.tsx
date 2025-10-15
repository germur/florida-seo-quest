'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Dice1 } from "lucide-react";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-card border-t relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-electric-blue to-bright-orange rounded-2xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Ready to Grow?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Let's build an SEO strategy that works for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                asChild
              >
                <a href="tel:+573046807443">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline-white" 
                size="lg" 
                className="group"
                asChild
              >
                <Link to="/case-studies">
                  <Dice1 className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
                  See Case Studies
                </Link>
              </Button>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Florida</div>
                <div className="text-sm text-white/70">Local Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">7+ Years</div>
                <div className="text-sm text-white/70">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Results</div>
                <div className="text-sm text-white/70">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;