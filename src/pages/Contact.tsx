import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { addSchema, SITE } from "@/lib/seo";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] || "")}`)
    .join("&");

const Contact: React.FC = () => {
  // ======= Schemas (Breadcrumbs + ContactPage) =======
  const breadcrumbs = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE}/contact` },
      ],
    }),
    []
  );

  const contactPageSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact – Calvo Creativo",
      url: `${SITE}/contact`,
      publisher: {
        "@type": "Organization",
        name: "Calvo Creativo",
        url: `${SITE}/`,
        logo: `${SITE}/calvo_creativo_logo.svg`,
      },
    }),
    []
  );

  useEffect(() => {
    addSchema(breadcrumbs, "breadcrumbs-contact");
    addSchema(contactPageSchema, "contactpage-schema");
  }, [breadcrumbs, contactPageSchema]);

  // ======= Form (Netlify Forms + fetch POST) =======
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("ok");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO page="contact" />

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-4">
              Contact Calvo Creativo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tell us about your goals. We’ll build a clear, measurable growth plan with
              strategic SEO, semantic IA, and content that converts.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+573046807443"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-11 rounded-md px-6"
              >
                Call now
              </a>
              <a
                href="mailto:rogermur1990@gmail.com"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-11 rounded-md px-6"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="text-sm text-muted-foreground">Phone</div>
              <a href="tel:+573046807443" className="text-xl font-semibold text-primary mt-1 inline-block">
                +57 304 680 7443
              </a>
              <p className="text-sm text-muted-foreground mt-2">Mon–Fri, 9am–5pm (ET)</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="text-sm text-muted-foreground">Email</div>
              <a
                href="mailto:rogermur1990@gmail.com"
                className="text-xl font-semibold text-primary mt-1 inline-block"
              >
                rogermur1990@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We reply within 1–2 business days</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="text-sm text-muted-foreground">Location</div>
              <div className="text-xl font-semibold text-primary mt-1">Florida, USA</div>
              <p className="text-sm text-muted-foreground mt-2">Serving Florida & global clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM (Netlify) */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-3">Tell us about your project</h2>
              <p className="text-muted-foreground mb-6">
                Share context, goals and timeline. We’ll get back to you within 24–48h with next steps
                and a quick call slot.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• English/Spanish available</li>
                <li>• Florida-based focus (statewide and national too)</li>
                <li>• Strategic SEO + storytelling + automation</li>
              </ul>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="p-6 rounded-xl border border-border bg-card"
            >
              {/* Netlify requires these hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" onChange={() => {}} />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Full name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="e.g. +1 305…"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Company (optional)</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Company"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-muted-foreground mb-1">Service interest</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="">Select…</option>
                  <option>Strategic SEO</option>
                  <option>Digital Storytelling</option>
                  <option>SEO Automation</option>
                  <option>Personal Branding</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-muted-foreground mb-1">Budget (optional)</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="">Not sure yet</option>
                  <option>Under $2,500</option>
                  <option>$2,500–$5,000</option>
                  <option>$5,000–$10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-muted-foreground mb-1">Project details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Goals, timeline, current SEO status, competitors…"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-11 rounded-md px-6 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : status === "ok" ? "Sent ✓" : "Send message"}
                </button>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-11 rounded-md px-6"
                >
                  View case studies
                </Link>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 mt-3">
                  Something went wrong. Please try again or email us at rogermur1990@gmail.com.
                </p>
              )}
              {status === "ok" && (
                <p className="text-sm text-teal mt-3">Thanks! We’ll get back to you within 24–48h.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/services" className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-primary mb-1">Services</h3>
              <p className="text-sm text-muted-foreground">Strategic SEO, storytelling, and automation.</p>
            </Link>
            <Link to="/case-studies" className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-primary mb-1">Case Studies</h3>
              <p className="text-sm text-muted-foreground">Real outcomes and learnings from clients.</p>
            </Link>
            <Link to="/resources" className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-primary mb-1">SEO Tools</h3>
              <p className="text-sm text-muted-foreground">Utilities to scale your workflow.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
