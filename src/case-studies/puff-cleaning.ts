import { SITE, schemaConfigs } from "@/lib/seo";

export const caseStudy = {
  slug: "puff-cleaning",
  title: "Zero to Local Authority",
  client: "Puff Cleaning",
  industry: "Cleaning Services / Local Services", 
  location: "Bogotá, Colombia",
  summary: "Transformed Puff Cleaning from zero digital presence to local market authority, generating ~2,000 monthly organic visits and top 3 rankings for key cleaning services in Bogotá within one year.",
  challenge: "Puff Cleaning had absolutely zero digital presence in Bogotá's highly competitive local cleaning market. They were starting from scratch - no website authority, no Google presence, no organic traffic, and no digital lead generation. They needed to build credibility and visibility from the ground up while competing against established local players.",
  strategy: "Built a comprehensive local SEO authority framework. Created optimized service pages for each cleaning specialty (sofas, mattresses, carpets) with detailed FAQs addressing customer concerns. Strengthened Google Business Profile through verified customer reviews and local engagement. Designed the entire site for conversion with prominent WhatsApp integration, clear CTAs, and social proof throughout the customer journey.",
  results: [
    "From 0 to ~2,000 monthly organic visits in year one",
    "Top 3 rankings for 'sofa cleaning Bogotá', 'mattress cleaning Bogotá'",
    "Strong presence in local pack results",
    "Consistent leads through WhatsApp and contact forms", 
    "Established digital authority in cleaning services",
    "Mobile-optimized conversion funnel"
  ],
  hero: "/og-home.webp",
  metrics: [
    { label: "Monthly Organic Traffic", value: "~2,000" },
    { label: "Timeline", value: "1 year" },
    { label: "Top 3 Rankings", value: "Multiple keywords" },
    { label: "Starting Point", value: "Zero presence" },
    { label: "Market", value: "Bogotá, Colombia" }
  ],
  services: [
    "Local SEO Strategy",
    "Website Development", 
    "Google Business Profile Setup",
    "Content Creation",
    "WhatsApp Integration",
    "Review Management"
  ],
  testimonial: {
    quote: "Increíble transformación. Pasamos de ser invisibles online a recibir llamadas diarias. Nuestros clientes nos encuentran fácilmente y confían en nuestro servicio. El trabajo de Calvo Creativo superó todas nuestras expectativas.",
    author: "María González",
    position: "Founder, Puff Cleaning"
  },
  metaTitle: "Case Study: Puff Cleaning SEO Success | Zero to 2,000 Monthly Visits",
  metaDescription: "How Puff Cleaning went from zero digital presence to 2,000+ monthly organic visits and top 3 local rankings in Bogotá's competitive cleaning market.",
  schema: schemaConfigs.caseStudy({
    name: "Puff Cleaning: Zero to Local Authority",
    url: `${SITE}/case-studies/puff-cleaning`,
    client: "Puff Cleaning", 
    industry: "Cleaning Services / Local Services",
    summary: "Transformed Puff Cleaning from zero digital presence to local market authority, generating ~2,000 monthly organic visits and top 3 rankings for key cleaning services in Bogotá within one year.",
    results: [
      "From 0 to ~2,000 monthly organic visits in year one",
      "Top 3 rankings for key local keywords",
      "Strong presence in local pack results"
    ]
  })
};