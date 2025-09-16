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
        addSchema(schemaConfigs.person, 'person-schema');
        break;
      case 'caseStudies':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'contact':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
    }

    // Add any additional schemas
    additionalSchemas.forEach(({ schema, id }, index) => {
      addSchema(schema, id || `additional-schema-${index}`);
    });
  }, [page, customTitle, customDescription, customCanonical, additionalSchemas]);

  return null;
};

export default SEO;