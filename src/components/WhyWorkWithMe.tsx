import { MapPin, Target, Building, FileText } from "lucide-react";

const WhyWorkWithMe = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Expertise",
      description: "I know Miami, Orlando, Fort Lauderdale, Boca Raton, and beyond."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Intent-Driven",
      description: "Every strategy starts with what your customers are really searching for."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Authority at Scale",
      description: "Semantic architecture and SILOs that position you as the go-to brand."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Content That Works",
      description: "Not filler, but content designed to rank and bring leads."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Diagonal Brand Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 8px,
              hsl(var(--teal)) 0.4,
              hsl(var(--teal)) 0.4 12px,
              transparent 12px,
              transparent 20px,
              hsl(var(--bright-orange)) 0.3,
              hsl(var(--bright-orange)) 0.3 24px
            )`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Decorative Brand Elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <svg className="h-12 w-12 text-teal" viewBox="0 0 48 48" fill="none">
              <path d="M24 6c-6 0-10 4-10 10v16c0 6 4 10 10 10 6 0 10-4 10-10V16c0-6-4-10-10-10z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="18" cy="28" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="28" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16 font-space-grotesk">
            Why Florida Businesses Choose Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Brand Icon Integration */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl mb-6 group-hover:from-teal/30 group-hover:to-electric-blue/30 transition-all duration-300 relative overflow-hidden">
                  {/* Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, hsl(var(--teal)) 20%, transparent 60%)`
                    }}
                  />
                  <div className="text-teal group-hover:text-electric-blue transition-colors duration-300 relative z-10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-poppins">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-inter">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;