import { ArrowUpRight } from "lucide-react";
import DiceRoller from "./DiceRoller";

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
  <section className="py-24 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
    {/* Brand Pattern Background */}
    <div className="absolute inset-0 opacity-8">
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--teal)) 8%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--bright-orange)) 6%, transparent 40%)
          `,
          backgroundSize: '200px 200px'
        }}
      />
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
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
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Discover Another Case Study
              </h3>
              <p className="text-muted-foreground text-sm">
                Roll the dice to see a random success story
              </p>
            </div>
            <DiceRoller />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;