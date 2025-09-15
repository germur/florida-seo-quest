import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CoreServices = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Strategy (MAES Framework)",
      description: "A complete roadmap: research, semantic architecture, content, and a growth plan.",
      cta: "Explore SEO Strategy",
      color: "teal"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "SEO Audit & Technical Fixes",
      description: "Spot and solve on-page, technical, and indexing issues with a clear action plan.",
      cta: "See Audit Details",
      color: "electric-blue"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "SEO Consulting & Advisory",
      description: "Ongoing guidance for founders and in-house teams ready to scale.",
      cta: "Start Consulting",
      color: "bright-orange"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16 font-space-grotesk">
            What I Do
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  service.color === 'teal' ? 'bg-teal/10 group-hover:bg-teal/20' :
                  service.color === 'electric-blue' ? 'bg-electric-blue/10 group-hover:bg-electric-blue/20' :
                  'bg-bright-orange/10 group-hover:bg-bright-orange/20'
                }`}>
                  <div className={`${
                    service.color === 'teal' ? 'text-teal' :
                    service.color === 'electric-blue' ? 'text-electric-blue' :
                    'text-bright-orange'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-primary mb-4 font-poppins">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-inter">{service.description}</p>
                
                <Button variant="outline" className="group w-full justify-between" asChild>
                  <Link to="/services">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;