import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageSEO, addSchema, seoConfigs, schemaConfigs } from '@/lib/seo';

const SITE = 'https://calvocreativo.com';

type PageKey = keyof typeof seoConfigs;

interface SEOProps {
  page: PageKey;
  customTitle?: string;
  customDescription?: string;
  customCanonical?: string;
  additionalSchemas?: Array<{ schema: any; id?: string }>;
}

// --- helpers ---
const ensureTrailingSlash = (url: string) => url.endsWith('/') ? url : `${url}/`;

// --- JSON-LD GLOBALS (una sola vez) ---
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": `${SITE}/`,
  "name": "Calvo Creativo",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Calvo Creativo",
  "url": `${SITE}/`,
  "image": `${SITE}/logo.png`,
  // ⬇️ Teléfono real (ajústalo si quieres otro)
  "telephone": "+573046807443",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "postalCode": "33130",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rogermurillo/"
  ]
};

// Páginas legales donde no queremos tocar metas por si tienen reglas especiales
const LEGAL_PAGES = new Set<PageKey>([
  'privacyPolicy' as PageKey,
  'terms' as PageKey,
  'termsOfService' as PageKey,
  'cookiePolicy' as PageKey,
]);

const SEO: React.FC<SEOProps> = ({
  page,
  customTitle,
  customDescription,
  customCanonical,
  additionalSchemas = [],
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const cfg = seoConfigs[page];

    // 1) META + CANÓNICA con slash final (consistencia total)
    if (!LEGAL_PAGES.has(page)) {
      // canónica por prioridad: custom -> cfg.canonical -> SITE + pathname
      const rawCanonical =
        customCanonical ||
        (cfg as any).canonical ||
        `${SITE}${pathname}`;
      const canonical = ensureTrailingSlash(rawCanonical);

      updatePageSEO({
        title: customTitle ?? cfg.title,
        description: customDescription ?? cfg.description,
        canonical,
        keywords: (cfg as any).keywords,
      });
    }

    // 2) SCHEMAS GLOBALES (siempre, una sola instancia por ID estático)
    addSchema(webSiteSchema, 'schema-website');
    addSchema(localBusinessSchema, 'schema-localbusiness');

    // 3) SCHEMAS por tipo de página (evitamos duplicados)
    switch (page) {
      case 'home': {
        // Si tienes Person global y lo quieres solo en About, no lo metas aquí.
        break;
      }

      case 'services': {
        // ⬇️ Schema genérico SÓLO para la página índice de servicios
        addSchema(
          schemaConfigs.service(
            'SEO Consulting Services',
            'Comprehensive SEO consulting and digital growth services'
          ),
          'service-index-schema'
        );
        break;
      }

      case 'serviceDetail':
      case 'cityService': {
        // En detalle NO metemos service-index-schema. Aquí sólo van
        // los schemas dinámicos que inyecta ServiceDetail (generateSILOSchema).
        // Si pasas customTitle/Description, puedes añadir un Service puntual:
        if (customTitle && customDescription) {
          addSchema(
            schemaConfigs.service(customTitle, customDescription),
            'service-extra-schema'
          );
        }
        break;
      }

      case 'about': {
        // Si quieres Person, mejor SOLO aquí:
        if ((schemaConfigs as any).person) {
          addSchema((schemaConfigs as any).person, 'person-schema');
        }
        break;
      }

      // otras páginas: blog, resources, caseStudies, howWeWork...
      default:
        break;
    }

    // 4) Cualquier schema adicional pasado por props
    additionalSchemas.forEach(({ schema, id }, i) => {
      addSchema(schema, id || `additional-schema-${i}`);
    });

  }, [page, customTitle, customDescription, customCanonical, additionalSchemas, pathname]);

  return null;
};

export default SEO;
