import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { language, getLocalizedPath } = useLanguage();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  
  const steps = language === 'es' ? [
    {
      number: "1",
      title: "Inicio",
      description: "Entender tu mercado y competidores.",
      color: "electric-blue"
    },
    {
      number: "2",
      title: "Arquitectura", 
      description: "Construir estructuras en las que Google confía.",
      color: "electric-blue"
    },
    {
      number: "3",
      title: "Contenido",
      description: "Planificar y publicar según intención de búsqueda.",
      color: "bright-orange"
    },
    {
      number: "4",
      title: "Hoja de Ruta",
      description: "Escalar con base en resultados.",
      color: "bright-orange"
    }
  ] : [
    {
      number: "1",
      title: "Kick-off",
      description: "Understand your market and competitors.",
      color: "electric-blue"
    },
    {
      number: "2",
      title: "Architecture", 
      description: "Build structures Google trusts.",
      color: "electric-blue"
    },
    {
      number: "3",
      title: "Content",
      description: "Plan and publish for search intent.",
      color: "bright-orange"
    },
    {
      number: "4",
      title: "Roadmap",
      description: "Scale based on results.",
      color: "bright-orange"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            {language === 'es' ? 'Cómo Entrego Resultados SEO' : 'How I Deliver SEO Results'}
          </h2>
          
          <div className="relative">
            {/* Connection Line - Progressive Animation */}
            <div className={`hidden lg:block absolute top-16 left-0 h-0.5 bg-gradient-to-r from-electric-blue via-bright-orange to-neutral-gray opacity-30 transition-all duration-2000 ${
              visibleSteps.length > 0 ? 'right-0' : 'right-full'
            }`}
            style={{
              width: `${(visibleSteps.length / steps.length) * 100}%`,
              transition: 'width 2s ease-out'
            }}></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const isVisible = visibleSteps.includes(index);
                
                return (
                  <div 
                    key={index} 
                    className={`relative group transition-all duration-500 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 animate-fade-in animate-scale-in' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative z-10">
                      
                      {/* Step Number */}
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color === 'electric-blue' ? 'teal' : 'neutral-gray'} text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                      
                      {/* Step Title */}
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-electric-blue transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* Step Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-bright-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;