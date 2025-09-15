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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Floating Brand Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <div className="absolute top-20 right-20">
          <svg className="h-24 w-24 text-electric-blue" viewBox="0 0 48 48" fill="none">
            <path d="M8 12c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H16l-8 6V12z" fill="currentColor" opacity="0.1"/>
            <path d="M20 20c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H28l-8 6V20z" fill="hsl(var(--teal))" opacity="0.15"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-16">
          <svg className="h-16 w-16 text-bright-orange" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
            <ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="2" opacity="0.15"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                <div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color}/10 rounded-2xl mb-6 group-hover:bg-${service.color}/20 transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Brand Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 4px,
                        hsl(var(--${service.color})) 0.15,
                        hsl(var(--${service.color})) 0.15 6px
                      )`
                    }}
                  />
                  <div className={`text-${service.color} relative z-10`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-primary mb-4 font-poppins">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-inter">{service.description}</p>
                
                <Button variant="outline" className="group w-full justify-between" asChild>
                  <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}>
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