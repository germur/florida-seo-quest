import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

type Status = "idle" | "loading" | "success" | "error";

const services = ["Strategic SEO Consulting", "Digital Storytelling Services", "SEO Automation", "Personal Branding Consulting"];
const budgets = ["Not sure yet", "Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+"];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: services[0],
    budget: budgets[0],
    message: "",
    botField: "",
  });

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    return form.name.trim().length > 1 && emailOk && form.message.trim().length > 2;
  }, [form]);

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    if (!isValid) {
      setErrorMsg("Please complete name, a valid email and a short project description.");
      return;
    }
    try {
      setStatus("loading");
      const payload: Record<string, string> = {
        "form-name": "contact",
        "bot-field": form.botField,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        budget: form.budget,
        message: form.message,
      };
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error(`Netlify returned ${res.status}`);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: services[0],
        budget: budgets[0],
        message: "",
        botField: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again.");
      console.error("Contact form error:", err);
    }
  };

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="contact"
        customTitle="Contact Calvo Creativo | Get Your Free SEO Consultation"
        customDescription="Ready to dominate search results? Contact our Florida SEO experts for strategic consulting, automation, and digital growth solutions. Free consultation available."
      />
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Let's Build Your Growth Strategy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Book a free consultation and discover how AI-driven SEO can transform your Florida business
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <Clock className="h-8 w-8 text-teal mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">We'll reply within 24-48 hours</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">15-20 min strategy call</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-bright-orange mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Custom Strategy</h3>
                <p className="text-sm text-muted-foreground">Tailored to your business goals</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+573046807443">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +57 304 680 7443
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Available in English & Spanish • Serving Florida businesses statewide
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Ready to dominate search results? Share your project details and we'll create a custom growth strategy for your business.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone & WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">Prefer to talk directly?</p>
                      <a 
                        href="tel:+573046807443" 
                        className="text-primary font-medium hover:text-teal transition-colors"
                      >
                        +57 304 680 7443
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-electric-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email Response</h3>
                      <p className="text-muted-foreground mb-2">We'll reply with next steps and available time slots</p>
                      <span className="text-primary font-medium">24-48 hours typical response</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-bright-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-bright-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">What Happens Next?</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>1. We review your project details</li>
                        <li>2. Schedule a 15-20 min strategy call</li>
                        <li>3. Create your custom growth plan</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-primary mb-3">Free Resources</h3>
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/case-studies" 
                      className="text-sm text-primary hover:text-teal transition-colors"
                    >
                      → View our Florida success stories
                    </Link>
                    <Link 
                      to="/blog" 
                      className="text-sm text-primary hover:text-teal transition-colors"
                    >
                      → Read SEO strategy insights
                    </Link>
                    <Link 
                      to="/services" 
                      className="text-sm text-primary hover:text-teal transition-colors"
                    >
                      → Explore our services
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-teal mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We'll get back to you within 24-48 hours with next steps.
                    </p>
                    <Button 
                      onClick={() => setStatus("idle")} 
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-primary mb-6">Tell Us About Your Project</h3>
                    
                    {status === "error" && errorMsg && (
                      <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-4 mb-6">
                        {errorMsg}
                      </div>
                    )}

                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={onSubmit}
                      className="space-y-6"
                      noValidate
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="hidden">
                        <label>
                          Don't fill this out:
                          <input name="bot-field" value={form.botField} onChange={onChange("botField")} />
                        </label>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange("name")}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange("email")}
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone (Optional)
                          </label>
                          <input
                            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={onChange("phone")}
                            placeholder="+1 (305) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company (Optional)
                          </label>
                          <input
                            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={onChange("company")}
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Service Interest
                          </label>
                          <select
                            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                            name="service"
                            value={form.service}
                            onChange={onChange("service")}
                          >
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Budget Range (Optional)
                          </label>
                          <select
                            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                            name="budget"
                            value={form.budget}
                            onChange={onChange("budget")}
                          >
                            {budgets.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Project Details *
                        </label>
                        <textarea
                          className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-vertical"
                          name="message"
                          placeholder="Tell us about your goals, current challenges, timeline, and any specific requirements..."
                          value={form.message}
                          onChange={onChange("message")}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === "loading" || !isValid}
                        size="lg"
                        className="w-full"
                        variant="hero"
                      >
                        {status === "loading" ? (
                          "Sending Message..."
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join Florida businesses that have transformed their growth with our AI-driven SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+573046807443">
                <Phone className="mr-2 h-5 w-5" />
                Call for Immediate Help
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;