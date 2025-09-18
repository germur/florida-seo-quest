import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE, schemaConfigs } from "@/lib/seo";

const About: React.FC = () => {
  const canonical = `${SITE}/about`;
  const title = "About Calvo Creativo — Strategic SEO Consultant in Florida";
  const description =
    "7+ years driving AI-driven SEO strategies, programmatic pages, and technical audits. See our method, proof, and real outcomes.";

  const breadcrumbsSchema = schemaConfigs.breadcrumbs([
    { name: "Home", item: `${SITE}/` },
    { name: "About", item: canonical },
  ]);

  // Person schema (E-E-A-T)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roger Murillo",
    url: `${SITE}/about`,
    image: `${SITE}/og-home.jpg`,
    jobTitle: "SEO Strategist & Consultant",
    worksFor: { "@type": "Organization", name: "Calvo Creativo" },
    sameAs: [
      "https://x.com/Rogermu47429637",
      "https://www.linkedin.com/in/rogermurillo/",
    ],
  };

  return (
    <>
      <SEO
        page="about"
        customTitle={title}
        customDescription={description}
        customCanonical={canonical}
        additionalSchemas={[
          { schema: breadcrumbsSchema, id: "breadcrumbs-schema" },
          { schema: personSchema, id: "person-schema" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero (piramide invertida: valor inmediato + micro-proof) */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 to-background border-b border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
              About Calvo Creativo
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              AI-driven SEO strategy for Florida businesses: semantic architecture,
              programmatic pages, and UX writing that converts.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { k: "Organic Growth", v: "200–400% (6–9 months)" },
                { k: "Qualified Leads", v: "3.1× avg" },
                { k: "Top-3 Money KWs", v: "12+" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <div className="text-sm text-muted-foreground">{m.k}</div>
                  <div className="text-xl font-bold text-primary">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 rounded-md bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 transition"
              >
                Book Consultation
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Why work with us
            </h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {[
                "Strategic, not just checklists.",
                "Semantic architecture + programmatic SEO.",
                "Data storytelling that drives conversions.",
              ].map((b, i) => (
                <li
                  key={i}
                  className="bg-secondary/20 border border-border rounded-xl p-4 text-sm text-muted-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Founder story (storytelling breve) */}
        <section className="py-8">
          <div className="container mx-auto px-6 max-w-3xl prose prose-neutral">
            <h2 className="text-2xl font-bold text-primary">Founder’s story</h2>
            <p>
              I started as an in-house SEO fixing crawling issues and thin
              content. The turning point was building semantic maps and
              programmatic pages for multi-city services. Today, I combine
              technical SEO, AI, and UX writing to ship predictable growth.
            </p>
          </div>
        </section>

        {/* Method (MAES) */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Our MAES method
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  t: "Market research",
                  d: "Competitive mapping, SERP anatomy, intent gaps.",
                },
                {
                  t: "Architecture",
                  d: "Clusters, silos, internal links, breadcrumbs.",
                },
                {
                  t: "Execution",
                  d: "Content playbooks & programmatic SEO.",
                },
                {
                  t: "Scaling",
                  d: "Testing, dashboards, compounding interlinks.",
                },
              ].map((s) => (
                <div key={s.t} className="bg-card border border-border rounded-xl p-6">
                  <div className="text-lg font-semibold text-primary mb-1">
                    {s.t}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof (mini-testimonios / sectores) */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-primary mb-4">Proof</h2>
            <ul className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <li className="bg-secondary/20 border border-border rounded-xl p-4">
                “From scattered content to a semantic structure that actually
                ranks and converts.” — Home Services
              </li>
              <li className="bg-secondary/20 border border-border rounded-xl p-4">
                “Playbooks + automation cut our time-to-publish in half.” — B2B
                Services
              </li>
              <li className="bg-secondary/20 border border-border rounded-xl p-4">
                “Predictable growth milestones and clean dev tickets.” — SMB
                Founder
              </li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="font-semibold text-primary mb-3">Explore next</h3>
            <ul className="list-disc list-inside text-sm">
              <li>
                <Link to="/services/strategic-seo-consulting" className="text-primary hover:underline">
                  Strategic SEO Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/seo-automation" className="text-primary hover:underline">
                  SEO Automation
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-primary hover:underline">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-6">FAQs</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  What industries do you specialize in?
                </summary>
                <p className="mt-2">
                  Home services, professional services, and B2B. Multi-service,
                  multi-city models fit perfectly with our architecture.
                </p>
              </details>
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  How fast can we see results?
                </summary>
                <p className="mt-2">
                  Early traction in 60–90 days; compounding growth by months 6–9.
                </p>
              </details>
              <details className="bg-card border border-border rounded-lg p-4">
                <summary className="font-medium text-primary">
                  Do you handle content production?
                </summary>
                <p className="mt-2">
                  Yes—playbooks + AI-assisted workflows for quality and speed.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
