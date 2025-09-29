'use client';

import { SITE, schemaConfigs } from "@/lib/seo";

export const caseStudy = {
  slug: "craftd-london",
  title: "Men's Jewelry SEO Scale",
  client: "CRAFTD London",
  industry: "Men's Jewelry / E-commerce",
  location: "UK & US",
  summary: "Scaled CRAFTD London's SEO without losing brand identity by building a full-funnel content strategy that achieved 50+ keywords in top 10 within 4 months and significant CTR lift through rich snippets.",
  challenge: "CRAFTD London faced intense competition in the men's jewelry market. As a design-first brand, they needed to scale SEO visibility while maintaining their premium aesthetic and brand identity. The challenge was creating content that educated customers about men's jewelry while driving conversions without appearing too commercial.",
  strategy: "We developed a comprehensive full-funnel content strategy. TOFU content included style guides and trend articles to attract fashion-conscious men. MOFU content featured detailed size guides and product comparisons to help decision-making. BOFU optimization focused on product and category pages with Product schema markup. We reinforced the entire funnel with strategic internal linking across product families.",
  results: [
    "50+ keywords in top 10 within 4 months",
    "Higher visibility for core product categories", 
    "Content that educates and converts",
    "CTR lift thanks to rich snippets",
    "Stronger brand presence in competitive searches",
    "Improved product discovery through internal linking"
  ],
  hero: "/og-home.webp",
  metrics: [
    { label: "Keywords in Top 10", value: "50+" },
    { label: "Timeline", value: "4 months" },
    { label: "CTR Improvement", value: "Significant" },
    { label: "Content Strategy", value: "Full-funnel" },
    { label: "Markets", value: "UK & US" }
  ],
  services: [
    "Content Strategy",
    "E-commerce SEO",
    "Product Schema Implementation", 
    "Internal Link Architecture",
    "Brand-Aligned SEO",
    "International SEO"
  ],
  testimonial: {
    quote: "The team understood our brand vision perfectly. They created an SEO strategy that drove results while keeping our premium positioning intact. Our organic visibility has never been stronger.",
    author: "James Mitchell",
    position: "Head of Digital, CRAFTD London"
  },
  metaTitle: "Case Study: CRAFTD London Men's Jewelry SEO Success | 50+ Top 10 Keywords",
  metaDescription: "How we helped CRAFTD London achieve 50+ top 10 keywords in 4 months through brand-aligned content strategy and e-commerce SEO optimization.",
  schema: schemaConfigs.caseStudy({
    name: "CRAFTD London: Men's Jewelry SEO Scale",
    url: `${SITE}/case-studies/craftd-london`, 
    client: "CRAFTD London",
    industry: "Men's Jewelry / E-commerce",
    summary: "Scaled CRAFTD London's SEO without losing brand identity by building a full-funnel content strategy that achieved 50+ keywords in top 10 within 4 months and significant CTR lift through rich snippets.",
    results: [
      "50+ keywords in top 10 within 4 months",
      "Higher visibility for core product categories",
      "CTR lift thanks to rich snippets"
    ]
  })
};