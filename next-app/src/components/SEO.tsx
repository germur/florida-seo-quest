'use client';

import { usePathname, useSearchParams } from 'next/navigation';
// src/components/SEO.tsx
import { useEffect } from "react";
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
  const { pathname } = usePathname();

  useEffect(() => {
    const cfg = seoConfigs[page];
    const isLegalPage = LEGAL_PAGES.includes(page);

    // 1) Meta + Canonical
    const rawCanonical =
      customCanonical || cfg.canonical || `${SITE}${pathname}`;
    const canonical = rawCanonical.replace(/\/+$/, "");

    // 3) Schemas globales (siempre)
    addSchema(webSiteSchema, "schema-website");
    addSchema(localBusinessSchema, "schema-localbusiness");

    // 4) Schemas por tipo de página
    if (page === "services") {
      // Solo en el índice de servicios
      addSchema(
        schemaConfigs.service(
          "SEO Consulting Services",
          "Comprehensive SEO consulting and digital growth services",
          `${SITE}/services`
        ),
        "service-index-schema"
      );
    }
    // En detalle y programáticas NO metemos ese genérico
    // (ServiceDetail.tsx ya inyecta 'service-schema' con @graph)

    // 5) Cualquier schema adicional pasado por props
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