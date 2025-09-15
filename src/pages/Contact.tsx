import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar, MessageSquare, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

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
    `.trim();
    
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
    
    // Show success message (you could add a toast here)
    alert("Thank you! Your message has been prepared. Please send the email that just opened.");
  };

  const contactMethods = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation to discuss your SEO needs",
      action: "Schedule Now",
      color: "teal"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Direct",
      description: "Send us a message and we'll respond within 24 hours",
      action: "Send Email",
      color: "electric-blue"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick questions? Chat with us on WhatsApp",
      action: "Chat Now",
      color: "bright-orange"
    }
  ];

  const services = [
    "SEO Strategy (MAES Framework)",
    "SEO Audit & Technical Fixes", 
    "SEO Consulting & Advisory",
    "Local SEO for Florida",
    "Other - I'll explain in the message"
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "Typically, you'll start seeing improvements in 3-4 months, with significant results in 6-8 months. However, this depends on your industry competitiveness and current site condition."
    },
    {
      question: "Do you work with businesses outside of Florida?",
      answer: "While we specialize in the Florida market, we also work with businesses in other US states. Our local expertise in Florida gives us deep insights into US market dynamics."
    },
    {
      question: "What's included in the MAES Framework?",
      answer: "The MAES Framework includes Market research, Architecture planning, Execution strategy, and Scaling optimization. It's our comprehensive approach to sustainable SEO growth."
    },
    {
      question: "Do you offer ongoing SEO management?",
      answer: "Yes, we offer monthly consulting and ongoing optimization services. Many clients start with our strategy or audit services and then continue with ongoing support."
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
              Let's Talk About Your SEO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Ready to grow your Florida business with strategic SEO? Let's discuss how we can help you achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Choose Your Preferred Contact Method</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-${method.color}/10 to-${method.color}/5 border border-${method.color}/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
                >
                  <Button 
                    className={`inline-flex items-center justify-center w-20 h-20 bg-${method.color}/20 rounded-2xl mb-6 group-hover:bg-${method.color}/30 transition-all duration-300 text-${method.color}`}
                    asChild
                  >
                    <Link to="/contact">
                      {method.icon}
                    </Link>
                  </Button>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-4">{method.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                  
                  <Button variant="outline" className={`w-full group-hover:bg-${method.color} group-hover:text-white group-hover:border-${method.color} transition-all`} asChild>
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tell us about your business and SEO goals. The more details you provide, 
                  the better we can prepare for our conversation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-teal mr-3" />
                    <span className="text-muted-foreground">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-electric-blue mr-3" />
                    <span className="text-muted-foreground">Free consultation call</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-bright-orange mr-3" />
                    <span className="text-muted-foreground">Serving all of Florida</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal resize-none"
                      placeholder="Tell us about your business, current challenges, and SEO goals..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Don't see your question answered?</p>
              <Button variant="outline" size="lg">
                Ask Your Question
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the Florida businesses that have already transformed their online presence with strategic SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Free Consultation
              </Link>
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

export default Contact;