// src/lib/seo.ts
// ------------------------------------------------------------
// Helpers SEO para Calvo Creativo (versión estable y simple)
// - addSchema(schema: any) para evitar fricciones de TypeScript
// - updatePageSEO() -> title, description, canonical (con "/")
// - ensureTrailingSlash()
// - schemaConfigs (Service de índice) y seoConfigs (metas base)
// - webSiteSchema y localBusinessSchema listos para usar
// ------------------------------------------------------------

/* =========================
 *   Utilidades generales
 * ========================= */

export const SITE = "https://calvocreativo.com";

export const ensureTrailingSlash = (url: string) =>
  url ? (url.endsWith("/") ? url : `${url}/`) : url;

const setMeta = (name: string, content?: string) => {
  if (!content) return;
  let el =
    document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ||
    document.createElement("meta");
  el.setAttribute("name", name);
  el.setAttribute("content", content);
  if (!el.parentNode) document.head.appendChild(el);
};

const setOG = (property: string, content?: string) => {
  if (!content) return;
  let el =
    document.querySelector<HTMLMetaElement>(
      `meta[property="${property}"]`
    ) || document.createElement("meta");
  el.setAttribute("property", property);
  el.setAttribute("content", content);
  if (!el.parentNode) document.head.appendChild(el);
};

const setTwitter = (name: string, content?: string) => {
  if (!content) return;
  let el =
    document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ||
    document.createElement("meta");
  el.setAttribute("name", name);
  el.setAttribute("content", content);
  if (!el.parentNode) document.head.appendChild(el);
};

const setCanonical = (href: string) => {
  if (!href) return;
  const normalized = ensureTrailingSlash(href);
  let link =
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ||
    document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", normalized);
  if (!link.parentNode) document.head.appendChild(link);
  setOG("og:url", normalized);
};

/* =========================
 *    API pública SEO
 * ========================= */

export function updatePageSEO(opts: {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}) {
  const { title, description, canonical, keywords } = opts;

  if (title) {
    document.title = title;
    setOG("og:title", title);
    setTwitter("twitter:title", title);
  }
  if (description) {
    setMeta("description", description);
    setOG("og:description", description);
    setTwitter("twitter:description", description);
  }
  if (keywords) setMeta("keywords", keywords);
  if (canonical) setCanonical(canonical);
}

// 👇 A propósito super-permisiva para NO romper el build.
// Acepta cualquier JSON-LD (con @type o con @graph).
export function addSchema(schema: any, id: string) {
  if (!schema || !id) return;
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.id = id;
  el.text = JSON.stringify(schema);
  document.head.appendChild(el);
}

/* =========================
 *   Configs de SCHEMAS
 * ========================= */

export const schemaConfigs = {
  // Para /services (índice). NO usar en detalle.
  service: (name: string, description: string, url?: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "SEO Consulting",
    category: "Digital Marketing",
    provider: {
      "@type": "ProfessionalService",
      name: "Calvo Creativo",
      areaServed: "Florida",
      url: SITE + "/",
      image: `${SITE}/og-home.jpg`,
    },
    url: url ? ensureTrailingSlash(url) : undefined,
  }),

  // Si quieres Person, úsalo solo en About (opcional).
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roger Murillo",
    url: `${SITE}/about/`,
    image: `${SITE}/og-home.jpg`,
    jobTitle: "SEO Strategist & Consultant",
    worksFor: { "@type": "Organization", name: "Calvo Creativo" },
    sameAs: ["https://x.com/Rogermu47429637", "https://linkedin.com/in/rogermurillo"],
  },
};

/* =========================
 *   Configs de PAGE SEO
 * ========================= */

type SEOConfig = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
};

export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: "Calvo Creativo | SEO Strategy & Consulting",
    description:
      "AI-driven SEO strategy, technical audits, and storytelling that converts. Programmatic SEO, topical authority, and automation.",
    canonical: `${SITE}/`,
    keywords:
      "seo strategy, programmatic seo, topical authority, seo consultant florida",
  },
  services: {
    title: "Services | Calvo Creativo",
    description:
      "Strategic SEO consulting, digital storytelling, SEO automation, and personal branding consulting.",
    canonical: `${SITE}/services/`,
  },
  serviceDetail: {
    title: "Service | Calvo Creativo",
    description: "Detail of a specific service by Calvo Creativo.",
  },
  cityService: {
    title: "Local Service | Calvo Creativo",
    description: "Local service page for a specific Florida city.",
  },
  blog: {
    title: "Blog | Calvo Creativo",
    description: "SEO strategy, growth and storytelling insights.",
    canonical: `${SITE}/blog/`,
  },
  resources: {
    title: "Resources | Calvo Creativo",
    description: "SEO tools and resources to scale your growth.",
    canonical: `${SITE}/resources/`,
  },
  caseStudies: {
    title: "Case Studies | Calvo Creativo",
    description: "Real success stories and measurable results.",
    canonical: `${SITE}/case-studies/`,
  },
  howWeWork: {
    title: "How We Work | Calvo Creativo",
    description: "Our methodology and process to deliver results.",
    canonical: `${SITE}/how-we-work/`,
  },
  about: {
    title: "About | Calvo Creativo",
    description: "Meet Roger Murillo and the Calvo Creativo philosophy.",
    canonical: `${SITE}/about/`,
  },
  contact: {
    title: "Contact | Calvo Creativo",
    description: "Book a consultation and let’s plan your growth.",
    canonical: `${SITE}/contact/`,
  },
  privacyPolicy: {
    title: "Privacy Policy | Calvo Creativo",
    description: "Our commitment to your privacy.",
    canonical: `${SITE}/privacy-policy/`,
  },
  terms: {
    title: "Terms | Calvo Creativo",
    description: "Terms and conditions.",
    canonical: `${SITE}/terms/`,
  },
  termsOfService: {
    title: "Terms of Service | Calvo Creativo",
    description: "Terms of service for Calvo Creativo.",
    canonical: `${SITE}/terms-of-service/`,
  },
  cookiePolicy: {
    title: "Cookie Policy | Calvo Creativo",
    description: "How we use cookies on this site.",
    canonical: `${SITE}/cookie-policy/`,
  },
};

/* =========================
 *  WebSite & LocalBusiness
 * ========================= */

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: `${SITE}/`,
  name: "Calvo Creativo",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Calvo Creativo",
  url: `${SITE}/`,
  image: `${SITE}/logo.png`,
  telephone: "+573046807443", // usa tu número real
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33130",
    addressCountry: "US",
  },
  sameAs: ["https://www.linkedin.com/in/rogermurillo/"],
};
