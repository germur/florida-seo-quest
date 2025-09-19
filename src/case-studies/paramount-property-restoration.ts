import { SITE, schemaConfigs } from "@/lib/seo";

export const caseStudy = {
  slug: "paramount-property-restoration",
  title: "Restoration SEO Turnaround",
  client: "Paramount Property Restoration",
  industry: "Property Restoration / Home Services",
  location: "Florida, USA",
  summary: "In 4 months we delivered +218% organic and 3.1× qualified leads by re-architecting service × city intent, launching programmatic pages, and strengthening internal links and entities.",
  challenge: "Paramount Property Restoration was invisible in Florida's saturated restoration market. Zero rankings for critical 'service + city' searches meant no emergency leads when people needed help most. Their existing website had thin content, weak internal linking, poor breadcrumb structure, and massive cannibalization issues for 'near me' queries.",
  strategy: "We implemented our signature MAES methodology: Market research revealed 50+ high-intent service × city combinations. Architecture phase involved designing a programmatic SILO with parent/child/sibling relationships. Execution included launching 200+ optimized landing pages with H1/H2 templates, local FAQs, compelling CTAs, and social proof. Scaling phase focused on entity enrichment through glossaries, schema markup, and strategic internal linking.",
  results: [
    "+218% organic traffic (4 months)",
    "3.1× qualified leads",
    "12 Top-3 money keywords",
    "200+ optimized pages live",
    "Multi-city emergency coverage",
    "First SEO leads in <6 months"
  ],
  hero: "/og-home.jpg",
  metrics: [
    { label: "Organic Traffic", value: "+218%" },
    { label: "Qualified Leads", value: "3.1×" },
    { label: "Top-3 Keywords", value: "12" },
    { label: "Pages Created", value: "200+" },
    { label: "Timeline", value: "4 months" },
  ],
  services: [
    "Strategic SEO Consulting",
    "Programmatic SEO",
    "Technical SEO Audit",
    "Content Architecture",
    "Local SEO Optimization",
    "Schema Implementation"
  ],
  testimonial: {
    quote: "Calvo Creativo transformed our digital presence completely. We went from zero emergency leads to having calls coming in daily from organic search. Their programmatic approach gave us coverage across all our service areas.",
    author: "Mike Rodriguez",
    position: "Owner, Paramount Property Restoration"
  },
  metaTitle: "Case Study: Paramount Property Restoration SEO Success | +218% Organic Traffic",
  metaDescription: "How we achieved +218% organic traffic and 3.1× more qualified leads for Paramount Property Restoration through strategic programmatic SEO in just 4 months.",
  schema: schemaConfigs.caseStudy({
    name: "Paramount Property Restoration: Restoration SEO Turnaround",
    url: `${SITE}/case-studies/paramount-property-restoration`,
    client: "Paramount Property Restoration",
    industry: "Property Restoration / Home Services",
    summary: "In 4 months we delivered +218% organic and 3.1× qualified leads by re-architecting service × city intent, launching programmatic pages, and strengthening internal links and entities.",
    results: [
      "+218% organic traffic (4 months)",
      "3.1× qualified leads", 
      "12 Top-3 money keywords"
    ]
  })
};