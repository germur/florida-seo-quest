import { useState } from "react";
import { ArrowRight, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: ""
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
    const subject = `SEO Consultation Request from ${formData.name}`;
    const body = `
Hello,

My name is ${formData.name} and I'm interested in SEO services.

Company: ${formData.company || 'Not specified'}
Service of Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

Please contact me at: ${formData.email}

Best regards,
${formData.name}
    `;
    
    const mailtoLink = `mailto:rogermur1990@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      service: ""
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "rogermur1990@gmail.com",
      description: "General inquiries and proposals",
      action: "Send Email",
      color: "teal"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+57 304 680 7443",
      description: "Direct calls Monday through Friday",
      action: "Schedule Now",
      color: "electric-blue"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+57 304 680 7443",
      description: "Quick questions and urgent matters",
      action: "Message Now",
      color: "bright-orange"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="contact" 
        customCanonical="/contact"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Ready to grow your business with SEO? 
              Schedule a free consultation and let's define the perfect strategy for your company.
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-teal/10 via-electric-blue/10 to-bright-orange/10 rounded-2xl p-6 border border-border">
              <Clock className="h-6 w-6 text-muted-foreground mr-3" />
              <span className="text-muted-foreground">
                Response guaranteed within 24 hours
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
                Contact Methods
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred method. All inquiries receive priority response.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-${method.color}/5 to-${method.color}/10 border border-${method.color}/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${method.color}/10 rounded-2xl mb-6 group-hover:bg-${method.color}/20 transition-colors`}>
                    <div className={`text-${method.color}`}>
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {method.title}
                  </h3>
                  
                  <div className={`text-lg font-bold text-${method.color} mb-4`}>
                    {method.value}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <Button variant="outline" className={`w-full group ${
                    method.color === 'teal' ? 'group-hover:bg-teal group-hover:text-white group-hover:border-teal' :
                    method.color === 'electric-blue' ? 'group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue' :
                    'group-hover:bg-bright-orange group-hover:text-white group-hover:border-bright-orange'
                  }`} asChild>
                    <a href={
                      method.action === 'Schedule Now' ? 'tel:+573046807443' : 
                      method.action === 'Send Email' ? 'mailto:rogermur1990@gmail.com' : 
                      'https://wa.me/573046807443?text=Hi! I\'m interested in your SEO services.'
                    }>
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">
                  Request Free Consultation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Company
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                        placeholder="Company name"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Service Interest
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                    >
                      <option value="">Select a service</option>
                      <option value="strategic-seo">Strategic SEO Consulting</option>
                      <option value="digital-storytelling">Digital Storytelling</option>
                      <option value="seo-automation">SEO Automation</option>
                      <option value="personal-branding">Personal Branding</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Tell us about your project *
                    </label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal resize-none"
                      placeholder="Describe your current situation, goals, and any relevant information..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group">
                    Request Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * By submitting this form, you'll receive a personalized response within 24 hours.
                  </p>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    What to expect?
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Initial analysis of your current website
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Identification of top 3 opportunities
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Preliminary roadmap for next 6 months
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-teal mt-1 mr-3 flex-shrink-0" />
                      Detailed proposal if we decide to work together
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-teal/20 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Fast Response Guaranteed
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    I understand time is valuable. That's why I guarantee:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-teal mr-2" />
                      <span className="text-muted-foreground">Initial response: &lt; 4 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-teal mr-2" />
                      <span className="text-muted-foreground">Consultation scheduled: &lt; 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait. Every day without a solid SEO strategy is a missed opportunity to grow.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:+573046807443">
              Schedule Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Contact;