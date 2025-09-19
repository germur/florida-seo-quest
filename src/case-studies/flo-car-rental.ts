import { SITE, schemaConfigs } from "@/lib/seo";

export const caseStudy = {
  slug: "flo-car-rental",
  title: "Local SEO & Conversion Optimization",
  client: "Flo Car Rental",
  industry: "Car Rental / Local Services",
  location: "Miami, USA",
  summary: "Helped Flo Car Rental compete against global giants through frictionless booking optimization and local SEO mastery, achieving +120% growth in Google Business Profile actions in 6 months.",
  challenge: "Flo Car Rental was competing directly with global car rental giants like Hertz and Enterprise in Miami's competitive market. They needed a website that made booking effortless for customers while building stronger visibility on Google Maps and local search results. The existing booking process was complicated and their local presence was minimal.",
  strategy: "We focused on two key areas: conversion optimization and local SEO dominance. Built a frictionless booking flow with minimal steps, mobile-first design, and trust elements throughout. Optimized their Google Business Profile with strategic review management, high-quality photos, Q&A optimization, and regular updates. Targeted long-tail local queries like 'Miami airport car rental no deposit' and 'luxury SUV rental Miami'.",
  results: [
    "+120% growth in GBP actions (calls, directions)",
    "More calls, directions, and visits from Google",
    "Higher conversion rates on booking funnel",
    "CTR boost on high-value rental queries",
    "Stronger local pack presence",
    "Improved mobile booking experience"
  ],
  hero: "/og-home.jpg",
  metrics: [
    { label: "GBP Actions Growth", value: "+120%" },
    { label: "Timeline", value: "6 months" },
    { label: "Conversion Rate", value: "Significant boost" },
    { label: "Local Visibility", value: "Strong presence" },
    { label: "Market", value: "Miami, FL" }
  ],
  services: [
    "Local SEO Optimization",
    "Google Business Profile Management",
    "Conversion Rate Optimization",
    "Mobile UX Design",
    "Review Management",
    "Local Citation Building"
  ],
  testimonial: {
    quote: "The results speak for themselves. We're now competing head-to-head with the big chains in Miami. Our phone rings constantly with bookings, and our Google presence has never been stronger.",
    author: "Carlos Mendez",
    position: "Owner, Flo Car Rental"
  },
  metaTitle: "Case Study: Flo Car Rental Local SEO Success | +120% Google Actions Growth",
  metaDescription: "How Flo Car Rental achieved +120% growth in Google Business Profile actions and competed with global giants through local SEO and booking optimization.",
  schema: schemaConfigs.caseStudy({
    name: "Flo Car Rental: Local SEO & Conversion Optimization", 
    url: `${SITE}/case-studies/flo-car-rental`,
    client: "Flo Car Rental",
    industry: "Car Rental / Local Services", 
    summary: "Helped Flo Car Rental compete against global giants through frictionless booking optimization and local SEO mastery, achieving +120% growth in Google Business Profile actions in 6 months.",
    results: [
      "+120% growth in GBP actions (calls, directions)",
      "Higher conversion rates on booking funnel",
      "CTR boost on high-value rental queries"
    ]
  })
};