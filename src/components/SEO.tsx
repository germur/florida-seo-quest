// src/components/SEO.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  updatePageSEO,
  addSchema,
  seoConfigs,
  schemaConfigs,
  ensureTrailingSlash,
  SITE,
  webSiteSchema,
  localBusinessSchema,
} from "@/lib/seo";

type PageKey = keyof typeof seoConfigs;

interface SEOProps {
  page: PageKey;
  customTitle?: string;
  customDescription?: string;
  customCanonical?: string;
  keywords?: string;
  additionalSchemas?: Array<{ schema: any; id?: string }>;
}

const LEGAL_PAGES: PageKey[] = [
  "privacyPolicy",
  "terms",
  "termsOfService",
  "cookiePolicy",
] as PageKey[];

const SEO: React.FC<SEOProps> = ({
  page,
  customTitle,
  customDescription,
  customCanonical,
  keywords,
  additionalSchemas = [],
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const cfg = seoConfigs[page];

    // 1) Meta + Canonical
    const rawCanonical =
      customCanonical || cfg.canonical || `${SITE}${pathname}`;
    const canonical = rawCanonical.replace(/\/+$/, "");

    if (!LEGAL_PAGES.includes(page)) {
      updatePageSEO({
        title: customTitle ?? cfg.title,
        description: customDescription ?? cfg.description,
        canonical,
        keywords: keywords ?? cfg.keywords,
      });
    }

    // 2) Schemas globales (siempre)
    addSchema(webSiteSchema, "schema-website");
    addSchema(localBusinessSchema, "schema-localbusiness");

    // 3) Schemas por tipo de página
    if (page === "services") {
      // Solo en el índice de servicios
      addSchema(
        schemaConfigs.service(
          "SEO Consulting Services",
          "Comprehensive SEO consulting and digital growth services",
          `${SITE}/services/`
        ),
        "service-index-schema"
      );
    }
    // En detalle y programáticas NO metemos ese genérico
    // (ServiceDetail.tsx ya inyecta 'service-schema' con @graph)

    // 4) Cualquier schema adicional pasado por props
    additionalSchemas.forEach(({ schema, id }, i) => {
      addSchema(schema, id || `additional-schema-${i}`);
    });
  }, [
    page,
    customTitle,
    customDescription,
    customCanonical,
    keywords,
    pathname,
    additionalSchemas,
  ]);

  return null;
};

export default SEO;
