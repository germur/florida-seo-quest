import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ⬅️ NUEVO
import { updatePageSEO, addSchema, seoConfigs, schemaConfigs } from '@/lib/seo';

const BASE = 'https://calvocreativo.com'; // ⬅️ NUEVO

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

const SEO: React.FC<SEOProps> = ({
  page,
  customTitle,
  customDescription,
  customCanonical,
  additionalSchemas = [],
}) => {
  const { pathname } = useLocation(); // ⬅️ NUEVO
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`; // ⬅️ NUEVO
  const fallbackCanonical = `${BASE}${withSlash}`; // ⬅️ NUEVO

  useEffect(() => {
    const config = seoConfigs[page];
    const isLegal = LEGAL_PAGES.has(page);

    // Páginas legales: NO tocamos title/description/robots/canonical desde aquí.
    if (isLegal) return;

    // Páginas normales → actualizar meta base (ahora con canónica de respaldo)
    updatePageSEO({
      title: customTitle ?? config.title,
      description: customDescription ?? config.description,
      canonical: customCanonical ?? config.canonical ?? fallbackCanonical, // ⬅️ usa fallback
      keywords: (config as any).keywords,
    });

    // Schemas por página (evitamos legales)
    switch (page) {
      case 'home':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(schemaConfigs.person, 'person-schema');
        break;

      case 'services':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(
          schemaConfigs.service(
            'SEO Consulting Services',
            'Comprehensive SEO consulting and digital growth services'
          ),
          'service-schema'
        );
        break;

      case 'about':
        addSchema(schemaConfigs.person, 'person-schema');
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;

      case 'caseStudies':
      case 'contact':
      case 'blog':
      case 'resources':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;

      case 'serviceDetail':
      case 'cityService':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        if (customTitle && customDescription) {
          addSchema(
            schemaConfigs.service(customTitle, customDescription),
            'service-schema'
          );
        }
        break;

      case 'howWeWork':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(
          schemaConfigs.service(
            'SEO Process & Methodology',
            'Our proven SEO methodology and process for delivering results'
          ),
          'methodology-schema'
        );
        break;

      case 'strategicSeo':
      case 'digitalStorytelling':
      case 'seoAutomation':
      case 'personalBranding': {
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        const safeTitle = (config.title || '').split(' | ')[0];
        addSchema(
          schemaConfigs.service(safeTitle, config.description),
          'service-schema'
        );
        break;
      }

      default:
        break;
    }

    // Schemas extra (si los pasas)
    additionalSchemas.forEach(({ schema, id }, index) => {
      addSchema(schema, id || `additional-schema-${index}`);
    });
  }, [
    page,
    customTitle,
    customDescription,
    customCanonical,
    additionalSchemas,
    pathname, // ⬅️ para recalcular si cambia la ruta
  ]);

  return null;
};

export default SEO;
