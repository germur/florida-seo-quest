// src/pages/Contact.tsx
import React from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/seo";

/* ---------- helper compatible con ES2019+ (sin replaceAll) ---------- */
const slugify = (s: string) =>
  s.toLowerCase().replace(/[,\.]/g, "").replace(/\s+/g, "-");

/* ================================================
 *  Schemas specific to Contact
 * ================================================ */
const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE}/contact/` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Calvo Creativo",
  url: `${SITE}/contact/`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Calvo Creativo",
    url: `${SITE}/`,
  },
};

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* SEO + specific schemas */}
      <SEO
        page="contact"
        additionalSchemas={[
          { schema: breadcrumbs, id: "schema-breadcrumbs" },
          { schema: contactPageSchema, id: "schema-contactpage" },
        ]}
      />

      {/* NAVBAR */}
      <Header />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Contact Calvo Creativo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Strategic SEO, storytelling and AI-driven growth — let’s plan the roadmap that actually moves the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+573046807443"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-11 rounded-md px-8"
              >
                Call Now
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-11 rounded-md px-8"
                href="mailto:rogermur1990@gmail.com"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <a
              href="tel:+573046807443"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92z" />
                </svg>
                <h3 className="text-lg font-semibold text-primary">Phone</h3>
              </div>
              <p className="text-muted-foreground text-sm">+57 304 680 7443</p>
            </a>

            <a
              href="mailto:rogermur1990@gmail.com"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <h3 className="text-lg font-semibold text-primary">Email</h3>
              </div>
              <p className="text-muted-foreground text-sm">rogermur1990@gmail.com</p>
            </a>

            <a
              href="https://wa.me/573046807443"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 1 1 4.219 4.2L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.18 1.593 6.736 0 10.42-4.988 10.42-9.313 0-5.154-4.338-9.332-9.67-9.332-5.38 0-9.705 4.178-9.705 9.332 0 1.82.532 3.534 1.617 5.08L3.7 20.3l2.954-.107z"/>
                </svg>
                <h3 className="text-lg font-semibold text-primary">WhatsApp</h3>
              </div>
              <p className="text-muted-foreground text-sm">Message us on WhatsApp</p>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM (Netlify Forms) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Tell us about your project</h2>
              <p className="text-muted-foreground mb-4">
                Share context, goals and timeline. We’ll get back to you within 24–48h with next steps and a quick call slot.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• English/Spanish available</li>
                <li>• Florida-based focus (statewide and national too)</li>
                <li>• Strategic SEO + storytelling + automation</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Full name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Company (optional)</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-primary mb-1">Service interest</label>
                  <select
                    name="service"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    defaultValue="Strategic SEO"
                  >
                    <option>Strategic SEO</option>
                    <option>Digital Storytelling</option>
                    <option>SEO Automation</option>
                    <option>Personal Branding</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-primary mb-1">Budget (optional)</label>
                  <select
                    name="budget"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    defaultValue="Not sure yet"
                  >
                    <option>Not sure yet</option>
                    <option>$2,500 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-primary mb-1">Project details</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Current situation, goals, timelines…"
                  />
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-10 rounded-md px-6"
                  >
                    Send message
                  </button>
                  <a
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-10 rounded-md px-6"
                  >
                    View case studies
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE & RESPONSE TIME */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Miami, FL — serving Florida and beyond.</p>
              <a
                href="https://maps.google.com/?q=Miami,FL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary mt-3 inline-block hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Office hours</h3>
              <p className="text-muted-foreground text-sm">Mon–Fri · 9:00 – 17:00 (ET)</p>
              <p className="text-muted-foreground text-sm mt-2">English / Spanish</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Response time</h3>
              <p className="text-muted-foreground text-sm">24–48 hours for new inquiries.</p>
              <p className="text-muted-foreground text-sm mt-2">
                Priority support for active clients via Slack/Email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-primary mb-2">Serving Florida Businesses</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Local expertise with statewide reach
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Miami, FL",
                "Orlando, FL",
                "Tampa, FL",
                "Jacksonville, FL",
                "Fort Lauderdale, FL",
                "St. Petersburg, FL",
                "Sarasota, FL",
                "Gainesville, FL",
              ].map((city) => (
                <a
                  key={city}
                  href={`/services/strategic-seo-consulting/${slugify(city)}/`}
                  className="text-xs px-3 py-1 rounded-full border border-border bg-card hover:shadow"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (short) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do you offer a free intro call?",
                  a: "Yes — we start with a short discovery call to define goals, constraints and success criteria.",
                },
                {
                  q: "Do you work only in Florida?",
                  a: "Florida is our core focus, but we support national and international projects when there’s strategic fit.",
                },
                {
                  q: "How soon can we start?",
                  a: "Typical onboarding happens within 1–2 weeks after scope alignment and proposal approval.",
                },
              ].map((item, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl p-5">
                  <summary className="cursor-pointer list-none flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-primary pr-4">{item.q}</h3>
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-3 text-sm text-muted-foreground">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Let’s build your growth plan</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We’ll audit, architect and execute a strategy that compounds authority and results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+573046807443"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
            >
              Call Now
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:text-primary-foreground transition-all duration-200 h-11 rounded-md px-8 border-white/30 text-white hover:bg-white/10"
              href="mailto:rogermur1990@gmail.com"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
