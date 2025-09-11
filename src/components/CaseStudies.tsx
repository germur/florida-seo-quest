import { Button } from "@/components/ui/button";
import { Dice1, ArrowUpRight } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      company: "Paramount",
      result: "+180% qualified leads in 6 months",
      color: "from-teal/20 to-teal/10",
      accent: "teal"
    },
    {
      company: "1GC Construction",
      result: "+95% organic visibility in 4 months",
      color: "from-electric-blue/20 to-electric-blue/10",
      accent: "electric-blue"
    },
    {
      company: "Pura Piel",
      result: "120+ technical errors fixed, +40% indexation",
      color: "from-bright-orange/20 to-bright-orange/10",
      accent: "bright-orange"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            Real Results, Real Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseStudy, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${caseStudy.color} border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary">{caseStudy.company}</h3>
                  <ArrowUpRight className={`h-6 w-6 text-${caseStudy.accent} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  {caseStudy.result}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="dice" size="lg" className="group">
              <Dice1 className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
              Roll the Dice – Discover Another Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;