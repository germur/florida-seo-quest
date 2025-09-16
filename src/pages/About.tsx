import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Heart, Target, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Measurable Results", 
      description: "Every strategy is based on real data and metrics. We don't do SEO for SEO's sake, we do it to generate real business growth.",
      color: "teal"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Total Transparency",
      description: "We explain every step, share our processes, and keep you informed. SEO shouldn't be a black box.",
      color: "electric-blue"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered Approach", 
      description: "Behind every keyword are real people with real needs. We optimize for algorithms, but think about humans.",
      color: "bright-orange"
    }
  ];

  const stats = [
    {
      number: "7+",
      label: "Years in SEO",
      color: "teal"
    },
    {
      number: "50+", 
      label: "Successful Projects",
      color: "electric-blue"
    },
    {
      number: "+280%",
      label: "Average Growth",
      color: "bright-orange"
    },
    {
      number: "100%",
      label: "Focused on Florida",
      color: "purple"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO page="about" />
      <Header />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              About Calvo Creativo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Helping Florida businesses grow with SEO since 2017. 
              Specialist in topical authority and search intent-based strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  My SEO Journey
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I started in SEO in 2017, when the rules of the game were different. 
                    Since then, I've seen how SEO evolved from being about "tricks" 
                    to becoming a strategic discipline centered on user experience.
                  </p>
                  
                  <p>
                    My approach has always been to deeply understand the Florida local market. 
                    From Miami to Jacksonville, each city has its particularities, 
                    its unique competition, and its specific opportunities.
                  </p>
                  
                  <p>
                    I developed the MAES Framework after years of trial and error, 
                    studying what really works in the US market and, 
                    specifically, in Florida's business ecosystem.
                  </p>
                </div>
                
            <Button size="lg" className="mt-8 group" asChild>
              <Link to="/how-we-work">
                Learn About the MAES Framework
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 border border-${stat.color}/20 rounded-2xl p-6 text-center`}
                  >
                    <div className={`text-4xl font-black text-${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                My Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every project and strategic decision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${value.color}/10 rounded-2xl mb-6`}>
                    <div className={`text-${value.color}`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                My Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized in strategies that work specifically for the Florida market
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-teal mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Advanced Technical SEO</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Core Web Vitals, site architecture, indexation, crawling, 
                    and performance optimization for complex sites.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-electric-blue mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Topical Authority</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Authority building through topic clusters, 
                    semantic architecture, and content hubs that rank.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-bright-orange mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Florida Local SEO</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specific strategies for Florida local markets: 
                    Miami, Orlando, Tampa, Jacksonville, and the entire region.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Growth SEO</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    SEO focused on business growth: leads, conversions, 
                    revenue, and metrics that directly impact the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                What I Listen to While Working
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Music fuels creativity and focus. Here's my go-to playlist for deep SEO work and strategic thinking sessions.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video max-w-2xl mx-auto">
                <iframe 
                  data-testid="embed-iframe" 
                  style={{borderRadius: "12px"}} 
                  src="https://open.spotify.com/embed/playlist/0TgYKz1vLPy1NjUnzdgiOG?utm_source=generator" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Perfect background music for analyzing data, building strategies, and crafting SEO solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Shall We Work Together?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            If your company is ready to grow with a serious, results-based SEO strategy, 
            let's talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:rogermur1990@gmail.com">
                Get Free Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/case-studies">
                View Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;