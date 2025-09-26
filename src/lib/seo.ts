// src/lib/seo.ts
// ------------------------------------------------------------
// Helpers SEO para Calvo Creativo (versión estable y simple)
// - updatePageSEO() -> title, description, keywords, canonical
// - addSchema(schema, id)
// - normalizeCanonical() (NO fuerza "/")
// - ensureTrailingSlash() (por si lo necesitas en otras partes)
// - schemaConfigs: service, breadcrumbs, caseStudy
// - seoConfigs: metas base por página
// - webSiteSchema y localBusinessSchema listos
// ------------------------------------------------------------

/* =========================
 *   Utilidades generales
 * ========================= */

export const SITE = "https://calvocreativo.com";

// Mantengo esta por compatibilidad con tu código actual
export const ensureTrailingSlash = (url: string) =>
  url ? (url.endsWith("/") ? url : `${url}/`) : url;

// Nueva: canónica sin "/" final (excepto raíz) y sin dobles slashes
export function normalizeCanonical(href: string): string {
  try {
    const u = new URL(href);
    u.pathname = u.pathname.replace(/\/{2,}/g, "/"); // limpia // repetidos
    if (u.pathname !== "/") u.pathname = u.pathname.replace(/\/+$/, "");
    return u.toString();
  } catch {
    // Si llega un path relativo
    const full = `${SITE}${href.startsWith("/") ? "" : "/"}${href}`;
    return normalizeCanonical(full);
  }
}

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
  const normalized = normalizeCanonical(href);
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
  robots?: string;
}) {
  const { title, description, canonical, keywords, robots = "index, follow" } = opts;

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

  // robots meta tag
  const robotsSel = 'meta[name="robots"]';
  let robotsEl = document.querySelector<HTMLMetaElement>(robotsSel);
  
  if (robotsEl) {
    robotsEl.setAttribute("content", robots);
  } else {
    robotsEl = document.createElement("meta");
    robotsEl.setAttribute("name", "robots");
    robotsEl.setAttribute("content", robots);
    document.head.appendChild(robotsEl);
  }
}

// Permisiva a propósito para NO romper TS.
// Acepta cualquier JSON-LD (con @type o @graph).
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
      image: `${SITE}/og-home.webp`,
    },
    url: url ? normalizeCanonical(url) : undefined,
  }),

  // BreadcrumbList genérico
  breadcrumbs: (items: Array<{ name: string; item: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: normalizeCanonical(it.item),
    })),
  }),

  // CaseStudy básico (enriquece con KPIs cuando quieras)
  caseStudy: (data: {
    name: string;
    url: string;
    client?: string;
    industry?: string;
    summary?: string;
    results?: string[]; // ["+210% organic traffic", "3x leads", ...]
  }) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: data.name,
    url: normalizeCanonical(data.url),
    description: data.summary,
    ...(data.industry ? { about: data.industry } : {}),
    ...(data.client
      ? { audience: { "@type": "Organization", name: data.client } }
      : {}),
    ...(Array.isArray(data.results) && data.results.length
      ? { result: data.results.map((r) => ({ "@type": "Thing", name: r })) }
      : {}),
    provider: {
      "@type": "ProfessionalService",
      name: "Calvo Creativo",
      url: SITE + "/",
    },
  }),
};

/* =========================
 *   Configs de PAGE SEO
 * ========================= */

type SEOConfig = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
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
    canonical: `${SITE}/services`,
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
    canonical: `${SITE}/blog`,
  },
  resources: {
    title: "Resources | Calvo Creativo",
    description: "SEO tools and resources to scale your growth.",
    canonical: `${SITE}/resources`,
  },
  caseStudies: {
    title: "Case Studies | Calvo Creativo",
    description: "Real success stories and measurable results.",
    canonical: `${SITE}/case-studies`,
  },
  howWeWork: {
    title: "How We Work | Calvo Creativo",
    description: "Our methodology and process to deliver results.",
    canonical: `${SITE}/how-we-work`,
  },
  about: {
    title: "About | Calvo Creativo",
    description: "Meet Roger Murillo and the Calvo Creativo philosophy.",
    canonical: `${SITE}/about`,
  },
  contact: {
    title: "Contact | Calvo Creativo",
    description: "Book a consultation and let's plan your growth.",
    canonical: `${SITE}/contact`,
  },
  privacyPolicy: {
    title: "Privacy Policy | Calvo Creativo",
    description: "Our commitment to your privacy.",
    canonical: `${SITE}/privacy-policy`,
    noindex: true,
  },
  terms: {
    title: "Terms | Calvo Creativo",
    description: "Terms and conditions.",
    canonical: `${SITE}/terms`,
    noindex: true,
  },
  termsOfService: {
    title: "Terms of Service | Calvo Creativo",
    description: "Terms of service for Calvo Creativo.",
    canonical: `${SITE}/terms-of-service`,
    noindex: true,
  },
  cookiePolicy: {
    title: "Cookie Policy | Calvo Creativo",
    description: "How we use cookies on this site.",
    canonical: `${SITE}/cookie-policy`,
    noindex: true,
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

// Puedes dejar LocalBusiness o usar ProfessionalService.
// Dejo ProfessionalService (más específico para consultoría).
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Calvo Creativo",
  url: `${SITE}/`,
  logo: `${SITE}/calvo_creativo_logo.svg`,
  image: `${SITE}/og-home.webp`,
  telephone: "+573046807443",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33130",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/Rogermu47429637",
    "https://www.linkedin.com/in/rogermurillo/",
  ],
};