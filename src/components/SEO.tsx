import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageSEO, addSchema, seoConfigs, schemaConfigs } from '@/lib/seo';

const BASE = 'https://calvocreativo.com';

interface SEOProps {
  page: keyof typeof seoConfigs;
  customTitle?: string;
  customDescription?: string;
  customCanonical?: string;
  additionalSchemas?: Array<{ schema: any; id?: string }>;
}

/** Incluyo ambos keys posibles por si tu seoConfigs usa uno u otro */
const LEGAL_PAGES = new Set<SEOProps["page"]>([
  "privacyPolicy" as SEOProps["page"],
  "termsOfService" as SEOProps["page"],
  "terms" as SEOProps["page"],
  "cookiePolicy" as SEOProps["page"],
]);

// ---------- JSON-LD GLOBALS (UN SOLO LUGAR) ----------
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://calvocreativo.com/",
  "name": "Calvo Creativo",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://calvocreativo.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Calvo Creativo",
  "url": "https://calvocreativo.com/",
  "image": "https://calvocreativo.com/logo.png",
  "telephone": "+1-305-555-1234", // ← cámbialo por tu número real
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "postalCode": "33130",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rogermurillo/" // ← agrega más si quieres
  ]
};
// -----------------------------------------------------

const SEO: React.FC<SEOProps> = ({
  page,
  customTitle,
  customDescription,
  customCanonical,
  additionalSchemas = [],
}) => {
  const { pathname } = useLocation();
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const fallbackCanonical = `${BASE}${withSlash}`;

  useEffect(() => {
    const config = seoConfigs[page];
    const isLegal = LEGAL_PAGES.has(page);

    // 1) META base (no tocar en páginas legales)
    if (!isLegal) {
      updatePageSEO({
        title: customTitle ?? config.title,
        description: customDescription ?? config.description,
        canonical: customCanonical ?? (config as any).canonical ?? fallbackCanonical,
        keywords: (config as any).keywords,
      });
    }

    // 2) SCHEMAS GLOBALS (inserta 1 vez con IDs estables)
    addSchema(webSiteSchema, 'schema-website');
    addSchema(localBusinessSchema, 'schema-localbusiness');

    // 3) SCHEMAS ESPECÍFICOS POR TIPO DE PÁGINA
    switch (page) {
      case 'home': {
        // persona opcional si la tienes en schemaConfigs
        if ((schemaConfigs as any).person) {
          addSchema((schemaConfigs as any).person, 'person-schema');
        }
        break;
      }

      case 'services': {
        // Página índice de servicios → puedes exponer un Service genérico (opcional)
        addSchema(
          schemaConfigs.service(
            'SEO Consulting Services',
            'Comprehensive SEO consulting and digital growth services'
          ),
          'service-index-schema'
        );
        break;
      }

      case 'about': {
        if ((schemaConfigs as any).person) {
          addSchema((schemaConfigs as any).person, 'person-schema');
        }
        break;
      }

      case 'serviceDetail':
      case 'cityService': {
        // En detalle de servicio, si pasas título/desc custom, añade Service específico
        if (customTitle && customDescription) {
          addSchema(
            schemaConfigs.service(customTitle, customDescription),
            'service-schema'
          );
        }
        // Nota: Además, en ServiceDetail ya se inyecta schema desde generateSILOSchema()
        break;
      }

      case 'howWeWork': {
        addSchema(
          schemaConfigs.service(
            'SEO Process & Methodology',
            'Our proven SEO methodology and process for delivering results'
          ),
          'methodology-schema'
        );
        break;
      }

      case 'blog':
      case 'resources':
      case 'caseStudies':
      default:
        // sin schemas adicionales aquí para evitar ruido/duplicados
        break;
    }

    // 4) Schemas extra que quieras pasar desde la página
    additionalSchemas.forEach(({ schema, id }, index) => {
      addSchema(schema, id || `additional-schema-${index}`);
    });
  }, [
    page,
    customTitle,
    customDescription,
    customCanonical,
    additionalSchemas,
    pathname,
  ]);

  return null;
};

export default SEO;
