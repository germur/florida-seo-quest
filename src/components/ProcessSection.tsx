import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Kick-off",
      description: "Understand your market and competitors.",
      color: "teal"
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
      description: "Scale and prioritize for growth.",
      color: "neutral-gray"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Brand Pattern Background */}
      <div className="absolute inset-0 opacity-6">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 80% 20%, hsl(var(--teal)) 6%, transparent 40%),
              radial-gradient(circle at 60% 60%, hsl(var(--bright-orange)) 4%, transparent 30%)
            `,
            backgroundSize: '300px 300px, 200px 200px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            How I Deliver SEO Results
          </h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-electric-blue via-bright-orange to-neutral-gray opacity-30"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${step.color} text-white rounded-full text-xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/how-we-work">
                <Play className="mr-2 h-5 w-5" />
                See the Full Process
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;