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
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16 font-space-grotesk">
            Why Florida Businesses Choose Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-bright-orange/20 rounded-2xl mb-6 group-hover:from-electric-blue/30 group-hover:to-bright-orange/30 transition-all duration-300">
                  <div className="text-electric-blue group-hover:text-bright-orange transition-colors duration-300">
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