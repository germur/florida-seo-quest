import { useEffect } from 'react';
import { updatePageSEO, addSchema, seoConfigs, schemaConfigs } from '@/lib/seo';

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
  useEffect(() => {
    const config = seoConfigs[page];
    const isLegal = LEGAL_PAGES.has(page);

    // Páginas legales: NO tocamos title/description/robots/canonical desde aquí.
    // (Eso lo maneja <Helmet> dentro de cada página legal)
    if (isLegal) return;

    // Páginas normales → actualizar meta base (aquí sí pasamos objeto completo)
    updatePageSEO({
      title: customTitle ?? config.title,
      description: customDescription ?? config.description,
      canonical: customCanonical ?? config.canonical,
      keywords: config.keywords,
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
  }, [page, customTitle, customDescription, customCanonical, additionalSchemas]);

  return null;
};

export default SEO;
