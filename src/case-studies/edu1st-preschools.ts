import { SITE, schemaConfigs } from "@/lib/seo";

export const caseStudy = {
  slug: "edu1st-preschools", 
  title: "Multi-Campus Digital Strategy",
  client: "Edu1st Preschools",
  industry: "Education / Preschool Services",
  location: "Florida, USA",
  summary: "Unified Edu1st Preschools' scattered digital presence across multiple campuses, creating parent-focused content strategy that achieved +80% increase in Google Maps actions and significant growth in admissions inquiries.",
  challenge: "Edu1st Preschools operated multiple campuses across Florida with a completely scattered online presence. Each location lacked individual visibility, there was no cohesive content strategy to engage parents, and admissions inquiries were inconsistent. They needed to establish authority in early childhood education while generating more parent engagement and tour bookings.",
  strategy: "Developed a comprehensive multi-campus digital strategy. Created a parent-focused blog with practical parenting guides and bilingual educational resources to serve Florida's diverse population. Designed downloadable coloring pages and activity sheets as lead magnets to capture parent information. Implemented location-specific SEO for each campus with optimized landing pages, consistent NAP citations, and LocalBusiness schema markup.",
  results: [
    "+80% increase in calls and actions from Google Maps",
    "Parents spent significantly more time engaging with content",
    "More tour bookings and admissions inquiries",
    "Significant growth in blog traffic and resource downloads",
    "Improved local visibility for each campus",
    "Stronger parent community engagement"
  ],
  hero: "/og-home.jpg", 
  metrics: [
    { label: "Google Maps Actions", value: "+80%" },
    { label: "Timeline", value: "8 months" },
    { label: "Content Engagement", value: "Significant growth" },
    { label: "Campuses Optimized", value: "Multiple" },
    { label: "Market", value: "Florida, USA" }
  ],
  services: [
    "Multi-Location SEO",
    "Content Marketing",
    "Lead Magnet Creation", 
    "Local Citation Management",
    "Educational Content Strategy",
    "Parent Engagement Optimization"
  ],
  testimonial: {
    quote: "The team understood exactly what parents are looking for. Our blog has become a trusted resource for families, and we're seeing tour requests from parents who discovered us through our educational content. Each campus now has a strong digital presence.",
    author: "Dr. Sarah Johnson",
    position: "Director, Edu1st Preschools"
  },
  metaTitle: "Case Study: Edu1st Preschools Multi-Campus SEO Success | +80% Google Actions",
  metaDescription: "How Edu1st Preschools achieved +80% growth in Google Maps actions and unified their multi-campus presence through strategic educational content marketing.",
  schema: schemaConfigs.caseStudy({
    name: "Edu1st Preschools: Multi-Campus Digital Strategy",
    url: `${SITE}/case-studies/edu1st-preschools`,
    client: "Edu1st Preschools",
    industry: "Education / Preschool Services",
    summary: "Unified Edu1st Preschools' scattered digital presence across multiple campuses, creating parent-focused content strategy that achieved +80% increase in Google Maps actions and significant growth in admissions inquiries.",
    results: [
      "+80% increase in calls and actions from Google Maps", 
      "More tour bookings and admissions inquiries",
      "Significant growth in blog traffic and downloads"
    ]
  })
};