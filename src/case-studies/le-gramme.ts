import { SITE, schemaConfigs } from "@/lib/seo";

export const caseStudy = {
  slug: "le-gramme",
  title: "Luxury International SEO",
  client: "LE GRAMME",
  industry: "Luxury Jewelry / International E-commerce",
  location: "France & Global",
  summary: "Expanded LE GRAMME's luxury jewelry brand internationally while maintaining design-first identity, achieving +40% impressions on flagship collections and multiple luxury keywords in top 10 across French and English markets.",
  challenge: "LE GRAMME needed to expand their luxury minimalist jewelry brand internationally without compromising their sophisticated, design-first identity. The challenge was creating SEO content that felt authentic to the luxury market while driving visibility across different countries and languages. They needed to compete in both French and English-speaking luxury markets.",
  strategy: "Crafted a luxury-aligned content strategy focusing on heritage, craftsmanship stories, and sophisticated buying guides that matched the brand's aesthetic. Implemented comprehensive international SEO with hreflang tags, proper site architecture, and localized Product schema markup. Built authority through strategic PR and editorial link placements in high-end design and lifestyle publications.",
  results: [
    "+40% impressions on flagship collections",
    "Multiple transactional luxury keywords in top 10",
    "Increased organic visibility in English and French markets",
    "SEO strategy seamlessly aligned with luxury branding",
    "Stronger international brand recognition",
    "Quality editorial backlinks from design publications"
  ],
  hero: "/og-home.jpg",
  metrics: [
    { label: "Flagship Impressions", value: "+40%" },
    { label: "Timeline", value: "6 months" },
    { label: "Markets", value: "French & English" },
    { label: "Top 10 Keywords", value: "Multiple luxury terms" },
    { label: "Brand Positioning", value: "Luxury maintained" }
  ],
  services: [
    "Luxury Brand SEO",
    "International SEO Strategy",
    "Hreflang Implementation",
    "Content Marketing", 
    "Digital PR & Link Building",
    "Product Schema Optimization"
  ],
  testimonial: {
    quote: "Calvo Creativo understood our luxury positioning perfectly. They created an international SEO strategy that enhanced our brand rather than diluted it. Our organic presence in both French and English markets has grown substantially.",
    author: "Antoine Dubois",
    position: "Digital Marketing Director, LE GRAMME"
  },
  metaTitle: "Case Study: LE GRAMME Luxury Jewelry International SEO | +40% Impressions",
  metaDescription: "How LE GRAMME achieved +40% impressions and international expansion through luxury-aligned SEO strategy across French and English markets.",
  schema: schemaConfigs.caseStudy({
    name: "LE GRAMME: Luxury International SEO",
    url: `${SITE}/case-studies/le-gramme`,
    client: "LE GRAMME", 
    industry: "Luxury Jewelry / International E-commerce",
    summary: "Expanded LE GRAMME's luxury jewelry brand internationally while maintaining design-first identity, achieving +40% impressions on flagship collections and multiple luxury keywords in top 10 across French and English markets.",
    results: [
      "+40% impressions on flagship collections",
      "Multiple transactional luxury keywords in top 10", 
      "Increased organic visibility in English and French markets"
    ]
  })
};