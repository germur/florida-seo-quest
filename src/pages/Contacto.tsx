import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Solicitud de Consultoría SEO de ${formData.name}`;
    const body = `
Hola,

Mi nombre es ${formData.name} y estoy interesado en servicios de SEO.

Empresa: ${formData.company || 'No especificada'}
Sitio Web: ${formData.website || 'No especificado'}
Tipo de Ayuda: ${formData.service || 'No especificado'}

Mensaje:
${formData.message}

Por favor contáctame en: ${formData.email}

Saludos,
${formData.name}
    `.trim();
    
    const mailtoLink = `mailto:rogermur1990@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      service: "",
      message: ""
    });
    
    // Show success message
    alert("¡Gracias! Tu mensaje ha sido preparado. Por favor envía el correo que se acaba de abrir.");
  };
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "rogermur1990@gmail.com",
      description: "Para consultas generales y propuestas",
      color: "teal"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Consultoría",
      value: "Solicitar consulta gratuita", 
      description: "Análisis inicial sin compromiso",
      color: "electric-blue"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      value: "Florida, Estados Unidos",
      description: "Atendemos todo el estado de Florida",
      color: "bright-orange"
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Los primeros resultados técnicos se ven en 4-6 semanas. Resultados significativos en rankings y tráfico usualmente toman 3-6 meses, dependiendo de la competencia y el estado inicial del sitio."
    },
    {
      question: "¿Trabajas solo con empresas de Florida?",
      answer: "Mi especialidad es Florida, pero trabajo con empresas de todo Estados Unidos. La ventaja con clientes de Florida es el conocimiento profundo del mercado local."
    },
    {
      question: "¿Qué incluye una consultoría inicial?",
      answer: "Análisis de tu situación actual, identificación de oportunidades principales, roadmap preliminar y propuesta de trabajo. Es una sesión de 60-90 minutos completamente personalizada."
    },
    {
      question: "¿Ofreces servicios de implementación?",
      answer: "Sí, ofrezco tanto consultoría estratégica como implementación completa, dependiendo de las necesidades y recursos internos de cada cliente."
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
              Conversemos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              ¿Listo para hacer crecer tu negocio con SEO? 
              Agenda una consultoría gratuita y definamos la estrategia perfecta para tu empresa.
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-teal/10 via-electric-blue/10 to-bright-orange/10 rounded-2xl p-6 border border-border">
              <Clock className="h-6 w-6 text-muted-foreground mr-3" />
              <span className="text-muted-foreground">
                Respuesta garantizada en menos de 24 horas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Formas de Contacto
              </h2>
              <p className="text-lg text-muted-foreground">
                Elige el método que prefieras. Todas las consultas reciben respuesta prioritaria.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-${method.color}/5 to-${method.color}/10 border border-${method.color}/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${method.color}/10 rounded-xl mb-4 group-hover:bg-${method.color}/20 transition-colors`}>
                    <div className={`text-${method.color}`}>
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-primary mb-2">
                    {method.title}
                  </h3>
                  
                  <div className={`text-lg font-bold text-${method.color} mb-2`}>
                    {method.value}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">
                  Solicitar Consultoría Gratuita
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Nombre *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Empresa
                      </label>
                      <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Sitio Web
                    </label>
                    <input 
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                      placeholder="https://tuempresa.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      ¿Qué tipo de ayuda necesitas?
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="estrategia">Estrategia SEO Completa</option>
                      <option value="auditoria">Auditoría SEO</option>
                      <option value="consultoria">Consultoría y Advisory</option>
                      <option value="otro">Otro / No estoy seguro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Cuéntame sobre tu proyecto *
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal resize-none"
                      placeholder="Describe tu situación actual, objetivos y cualquier información relevante..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group">
                    Solicitar Consultoría Gratuita
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Al enviar este formulario, recibirás una respuesta personalizada en menos de 24 horas.
                  </p>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    ¿Qué esperar de la consultoría?
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Análisis inicial de tu sitio web actual
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Identificación de las 3 oportunidades principales
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Roadmap preliminar para los próximos 6 meses
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Propuesta detallada si decidimos trabajar juntos
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-teal/20 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Respuesta Rápida Garantizada
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Entiendo que el tiempo es valioso. Por eso garantizo:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-teal mr-2" />
                      <span className="text-muted-foreground">Respuesta inicial: &lt; 4 horas</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-teal mr-2" />
                      <span className="text-muted-foreground">Consultoría agendada: &lt; 48 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Resuelve las dudas más comunes antes de nuestra consultoría
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Hablamos hoy?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            No esperes más. Cada día sin una estrategia SEO sólida es una oportunidad perdida de crecer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:rogermur1990@gmail.com">
                Consultoría Gratuita
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;