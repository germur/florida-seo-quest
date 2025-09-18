import React from "react";
import SEO from "@/components/SEO";
import { SITE, schemaConfigs } from "@/lib/seo";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const canonical = `${SITE}/contact`;
  const title = "Contact Calvo Creativo — Book a Strategic SEO Consultation";
  const description =
    "Let’s map your growth: quick diagnostic, priorities, and a 90-day plan. Phone, email, and calendar.";

  const breadcrumbsSchema = schemaConfigs.breadcrumbs([
    { name: "Home", item: `${SITE}/` },
    { name: "Contact", item: canonical },
  ]);

  return (
    <>
      <SEO
        page="contact"
        customTitle={title}
        customDescription={description}
        customCanonical={canonical}
        additionalSchemas={[{ schema: breadcrumbsSchema, id: "breadcrumbs-schema" }]}
      />

      <main className="min-h-screen">
        {/* Hero con beneficio */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 to-background border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Book a strategic SEO consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              We’ll identify quick wins, map your architecture, and outline a
              90-day plan.
            </p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
              {[
                "Quick diagnostic",
                "90-day priorities & KPIs",
                "Clear next steps",
              ].map((b) => (
                <li key={b} className="bg-card border border-border rounded-lg p-3">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Form + Alternativas */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl grid lg:grid-cols-3 gap-8">
            {/* Form (simple, listo para mailto) */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  Tell us about your project
                </h2>
                <form
                  className="grid gap-4"
                  method="POST"
                  action="mailto:rogermur1990@gmail.com"
                >
                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground">Name</span>
                    <input
                      className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <input
                      className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      required
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground">Website</span>
                    <input
                      className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                      type="url"
                      name="website"
                      placeholder="https://yourdomain.com"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground">
                      Goals / blockers / target locations
                    </span>
                    <textarea
                      className="min-h-[120px] rounded-md border border-border bg-background px-3 py-2 text-sm"
                      name="message"
                      placeholder="Tell us about your goals, blockers, and target cities/services..."
                      required
                    />
                  </label>
                  <p className="text-xs text-muted-foreground">
                    We’ll only use your info to reply. No spam.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 transition w-full sm:w-auto"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>

            {/* Alternativas / NAP / Links */}
            <aside className="space-y-6">
              <div className="bg-secondary/20 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Quick contact</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    Phone:{" "}
                    <a className="text-primary hover:underline" href="tel:+573046807443">
                      +57 304 680 7443
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      className="text-primary hover:underline"
                      href="mailto:rogermur1990@gmail.com"
                    >
                      rogermur1990@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Service area</h3>
                <p className="text-sm text-muted-foreground">
                  Miami, FL — Mon–Fri 9:00–18:00
                </p>
              </div>

              <div className="bg-secondary/20 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Explore next</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>
                    <Link to="/services" className="text-primary hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/strategic-seo-consulting"
                      className="text-primary hover:underline"
                    >
                      Strategic SEO Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/case-studies" className="text-primary hover:underline">
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQs (evitar soft-404; cubrir intención) */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-6">FAQs</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  What happens after I submit the form?
                </summary>
                <p className="mt-2">
                  We confirm, review your site, and propose time slots for a 15–30 min call.
                </p>
              </details>
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  Is the consultation free?
                </summary>
                <p className="mt-2">Yes, it’s a strategic assessment call.</p>
              </details>
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  How long does a typical engagement last?
                </summary>
                <p className="mt-2">Initial 8–12 weeks; ongoing optimization optional.</p>
              </details>
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  Do you work with in-house teams?
                </summary>
                <p className="mt-2">
                  Yes—we spec tasks and ship dev/content tickets ready to implement.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
