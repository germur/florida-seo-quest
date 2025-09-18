import React from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE, schemaConfigs } from "@/lib/seo";

type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  results: string[];
  hero?: string;
  metrics?: Array<{ label: string; value: string }>;
  services?: string[];
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  "paramount-property-restoration": {
    slug: "paramount-property-restoration",
    title: "Restoration SEO Turnaround",
    client: "Paramount Property Restoration",
    industry: "Property Restoration / Home Services",
    summary:
      "In 4 months we delivered +218% organic and 3.1× qualified leads by re-architecting service × city intent, launching programmatic pages, and strengthening internal links and entities.",
    results: [
      "+218% organic traffic (4 months)",
      "3.1× qualified leads",
      "12 Top-3 money keywords",
    ],
    hero: "/og-home.jpg",
    metrics: [
      { label: "Organic Traffic", value: "+218%" },
      { label: "Qualified Leads", value: "3.1×" },
      { label: "Top-3 Keywords", value: "12" },
    ],
    services: [
      "Strategic SEO Consulting",
      "Programmatic SEO",
      "Technical SEO",
      "Content & Interlinking",
    ],
  },
};

const CaseStudyDetail: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const data = CASE_STUDIES[slug];

  if (!data) {
    return (
      <main className="container mx-auto px-6 py-24">
        <SEO
          page="caseStudies"
          customTitle="Case Study not found | Calvo Creativo"
          customDescription="The requested case study was not found."
          customCanonical={`${SITE}/case-studies/${slug}`}
        />
        <h1 className="text-3xl font-bold text-primary mb-4">Case study not found</h1>
        <p className="text-muted-foreground mb-6">
          The case study you’re looking for doesn’t exist or was moved.
        </p>
        <Link
          to="/case-studies"
          className="inline-flex items-center px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
        >
          Back to Case Studies
        </Link>
      </main>
    );
  }

  const canonical = `${SITE}/case-studies/${data.slug}`;
  const title = `Case Study: ${data.client} — ${data.title} | Calvo Creativo`;
  const description =
    data.summary.length > 155 ? data.summary.slice(0, 152) + "..." : data.summary;

  const breadcrumbsSchema = schemaConfigs.breadcrumbs([
    { name: "Home", item: `${SITE}/` },
    { name: "Case Studies", item: `${SITE}/case-studies` },
    { name: data.client, item: canonical },
  ]);

  const caseStudySchema = schemaConfigs.caseStudy({
    name: `${data.client}: ${data.title}`,
    url: canonical,
    client: data.client,
    industry: data.industry,
    summary: data.summary,
    results: data.results,
  });

  return (
    <>
      <SEO
        page="caseStudies"
        customTitle={title}
        customDescription={description}
        customCanonical={canonical}
        additionalSchemas={[
          { schema: breadcrumbsSchema, id: "breadcrumbs-schema" },
          { schema: caseStudySchema, id: "case-study-schema" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 to-background border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-sm text-muted-foreground mb-2">
                <Link to="/" className="hover:text-primary">Home</Link> /{" "}
                <Link to="/case-studies" className="hover:text-primary">Case Studies</Link> /{" "}
                <span className="text-primary">{data.client}</span>
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
                {data.client}: {data.title}
              </h1>
              <p className="text-lg text-muted-foreground">{data.summary}</p>
            </div>
          </div>
        </section>

        {/* KPI Panel */}
        {data.metrics && data.metrics.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-extrabold text-primary mb-1">
                      {m.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Before → After / Challenge / Strategy / Results */}
        <section className="py-10">
          <div className="container mx-auto px-6 max-w-4xl space-y-8">
            <article className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold text-primary">Challenge</h2>
              <ul>
                <li>Thin content for service + location intent.</li>
                <li>Weak internal linking & breadcrumbs.</li>
                <li>Cannibalization in “near me” queries.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary">Strategy</h2>
              <ul>
                <li>Cluster map: service × cities.</li>
                <li>Programmatic templates (H1/H2, FAQs, CTAs, proof).</li>
                <li>Internal link graph: parent/child/sibling + breadcrumbs.</li>
                <li>Entity enrichment (FAQs, glossary, schema).</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary">Results</h2>
              <ul>
                {data.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </article>

            {/* Internal links */}
            <div className="border border-border rounded-xl p-6 bg-secondary/20">
              <h3 className="font-semibold text-primary mb-3">Related services</h3>
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
                  <Link to="/services/digital-storytelling-services" className="text-primary hover:underline">
                    Digital Storytelling
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link
                to="/case-studies"
                className="inline-flex items-center px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                All Case Studies
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 rounded-md bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 transition"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudyDetail;
