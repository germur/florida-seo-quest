import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Users, Target, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  const methodology = {
    title: "MAES Framework",
    subtitle: "Our proven methodology for sustainable SEO growth",
    phases: [
      {
        letter: "M",
        name: "Market Research",
        description: "Deep analysis of your market, competitors, and opportunities",
        duration: "Week 1-2",
        deliverables: [
          "Comprehensive competitive analysis",
          "Target audience research",
          "Keyword opportunity mapping",
          "Market positioning strategy"
        ],
        color: "teal"
      },
      {
        letter: "A",
        name: "Architecture Planning", 
        description: "Design semantic architecture and information structure",
        duration: "Week 3-4",
        deliverables: [
          "Site architecture blueprint",
          "URL structure optimization",
          "Internal linking strategy",
          "Technical SEO roadmap"
        ],
        color: "electric-blue"
      },
      {
        letter: "E",
        name: "Execution Strategy",
        description: "Content strategy and implementation planning",
        duration: "Week 5-6",
        deliverables: [
          "Content calendar and strategy",
          "On-page optimization guide",
          "Content cluster planning",
          "Implementation timeline"
        ],
        color: "bright-orange"
      },
      {
        letter: "S",
        name: "Scaling & Optimization",
        description: "Ongoing optimization and growth strategies",
        duration: "Ongoing",
        deliverables: [
          "Performance monitoring dashboard",
          "Monthly optimization reports",
          "Scaling recommendations",
          "Continuous improvement plan"
        ],
        color: "purple"
      }
    ]
  };

  const principles = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Focused",
      description: "Every strategy is based on data and real metrics. We don't do SEO for SEO's sake, we do it to generate real business growth.",
      color: "teal"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Complete Transparency",
      description: "We explain every step, share our processes, and keep you informed. SEO shouldn't be a black box.",
      color: "electric-blue"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human-Centered",
      description: "Behind every keyword are real people with real needs. We optimize for algorithms, but think about humans.",
      color: "bright-orange"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Discovery",
      description: "We start with an in-depth analysis of your business, goals, and current situation.",
      details: [
        "Business goals alignment",
        "Current performance audit",
        "Competitive landscape analysis",
        "Technical infrastructure review"
      ]
    },
    {
      step: "02", 
      title: "Strategic Planning",
      description: "We develop a customized strategy based on our findings and your specific needs.",
      details: [
        "Custom SEO strategy development",
        "Keyword research and mapping",
        "Content architecture planning",
        "Implementation roadmap creation"
      ]
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, monitoring every detail.",
      details: [
        "Technical optimization implementation",
        "Content creation and optimization",
        "On-page optimization execution",
        "Performance tracking setup"
      ]
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "We continuously optimize based on data and scale successful strategies.",
      details: [
        "Performance analysis and reporting",
        "Strategy refinement based on data",
        "Scaling successful tactics",
        "Ongoing optimization recommendations"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              How We Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              A proven methodology that generates sustainable results through strategic planning and meticulous execution.
            </p>
          </div>
        </div>
      </section>

      {/* MAES Framework */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                {methodology.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {methodology.subtitle}
              </p>
            </div>

            <div className="space-y-16">
              {methodology.phases.map((phase, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-${phase.color} text-white rounded-2xl flex items-center justify-center text-2xl font-black mr-6`}>
                        {phase.letter}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{phase.name}</h3>
                        <p className="text-muted-foreground">{phase.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-3">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center">
                          <CheckCircle className={`h-5 w-5 text-${phase.color} mr-3 flex-shrink-0`} />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className={`bg-gradient-to-br from-${phase.color}/10 to-${phase.color}/5 border border-${phase.color}/20 rounded-2xl p-8 text-center`}>
                      <div className={`text-6xl font-black text-${phase.color} mb-4`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-3">{phase.name}</h4>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Principles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The values that guide every project and strategic decision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${principle.color}/10 rounded-2xl mb-6`}>
                    <div className={`text-${principle.color}`}>
                      {principle.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {principle.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Step by Step Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A detailed look at how we implement each phase of our methodology
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((process, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal to-electric-blue text-white rounded-xl flex items-center justify-center font-bold mr-4">
                          {process.step}
                        </div>
                        <h3 className="text-xl font-bold text-primary">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-2 gap-4">
                        {process.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Typical Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                What to expect during the first 6 months of working together
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-electric-blue to-bright-orange"></div>
              
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm mr-8 flex-shrink-0">
                    Month<br/>1-2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Foundation & Research</h3>
                    <p className="text-muted-foreground">Complete market analysis, technical audit, and strategy development.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-8 flex-shrink-0">
                    Month<br/>3-4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Implementation & Optimization</h3>
                    <p className="text-muted-foreground">Technical fixes implementation and content strategy execution.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-bright-orange text-white rounded-full flex items-center justify-center font-bold text-sm mr-8 flex-shrink-0">
                    Month<br/>5-6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Growth & Scaling</h3>
                    <p className="text-muted-foreground">Results measurement, strategy refinement, and scaling successful tactics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven methodology can help your business grow with SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/case-studies">View Our Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;