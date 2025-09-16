import { useEffect } from 'react';
import { updatePageSEO, addSchema, seoConfigs, schemaConfigs } from '@/lib/seo';

interface SEOProps {
  page: keyof typeof seoConfigs;
  customTitle?: string;
  customDescription?: string;
  customCanonical?: string;
  additionalSchemas?: Array<{schema: any, id?: string}>;
}

const SEO: React.FC<SEOProps> = ({ 
  page, 
  customTitle, 
  customDescription, 
  customCanonical,
  additionalSchemas = []
}) => {
  useEffect(() => {
    const config = seoConfigs[page];
    
    updatePageSEO({
      title: customTitle || config.title,
      description: customDescription || config.description,
      canonical: customCanonical || config.canonical,
      keywords: config.keywords
    });

    // Add page-specific schemas
    switch (page) {
      case 'home':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(schemaConfigs.person, 'person-schema');
        break;
      case 'services':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(schemaConfigs.service('SEO Consulting Services', 'Comprehensive SEO consulting and digital growth services'), 'service-schema');
        break;
      case 'about':
      case 'acercaDe':
        addSchema(schemaConfigs.person, 'person-schema');
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'caseStudies':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'contact':
      case 'contacto':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'blog':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'resources':
      case 'recursos':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'serviceDetail':
      case 'cityService':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        if (customTitle && customDescription) {
          addSchema(schemaConfigs.service(customTitle, customDescription), 'service-schema');
        }
        break;
      case 'howWeWork':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(schemaConfigs.service('SEO Process & Methodology', 'Our proven SEO methodology and process for delivering results'), 'methodology-schema');
        break;
      case 'strategicSeo':
      case 'digitalStorytelling':
      case 'seoAutomation':
      case 'personalBranding':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        addSchema(schemaConfigs.service(config.title.split(' | ')[0], config.description), 'service-schema');
        break;
    }

    // Add programmatic page schemas
    if (additionalSchemas) {
      additionalSchemas.forEach(({ schema, id }, index) => {
        addSchema(schema, id || `additional-schema-${index}`);
      });
    }
  }, [page, customTitle, customDescription, customCanonical, additionalSchemas]);

  return null;
};

export default SEO;