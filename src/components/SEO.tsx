import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { seoConfigs, addSchema, schemaConfigs } from '@/lib/seo';

interface SEOProps {
  page: string;
  customTitle?: string;
  customDescription?: string; 
  customCanonical?: string;
  additionalSchemas?: any[];
}

const SEO: React.FC<SEOProps> = ({ 
  page, 
  customTitle, 
  customDescription, 
  customCanonical,
  additionalSchemas = []
}) => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Get base URL
    const baseUrl = window.location.origin;
    
    // Build language-specific page key
    const pageKey = language === 'es' ? `${page}Es` : page;
    
    // Get SEO config for current language and page
    const config = seoConfigs[pageKey] || seoConfigs[page];
    
    if (config) {
      // Update document title
      document.title = customTitle || config.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', customDescription || config.description);
      
      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', Array.isArray(config.keywords) ? config.keywords.join(', ') : config.keywords);
      
      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      const canonicalUrl = customCanonical || config.canonical;
      canonicalLink.setAttribute('href', canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`);
    }
    
    // Add hreflang tags
    const existingHreflang = document.querySelectorAll('link[hreflang]');
    existingHreflang.forEach(link => link.remove());
    
    const currentPath = window.location.pathname;
    let enPath = currentPath;
    let esPath = currentPath;
    
    // Convert paths for hreflang
    if (language === 'es') {
      enPath = currentPath.replace('/es', '') || '/';
      esPath = currentPath;
    } else {
      enPath = currentPath;
      esPath = currentPath === '/' ? '/es' : `/es${currentPath}`;
    }
    
    // Add hreflang tags
    const hreflangEn = document.createElement('link');
    hreflangEn.rel = 'alternate';
    hreflangEn.hreflang = 'en';
    hreflangEn.href = `${baseUrl}${enPath}`;
    document.head.appendChild(hreflangEn);
    
    const hreflangEs = document.createElement('link');
    hreflangEs.rel = 'alternate';
    hreflangEs.hreflang = 'es';  
    hreflangEs.href = `${baseUrl}${esPath}`;
    document.head.appendChild(hreflangEs);
    
    const hreflangDefault = document.createElement('link');
    hreflangDefault.rel = 'alternate';
    hreflangDefault.hreflang = 'x-default';
    hreflangDefault.href = `${baseUrl}${enPath}`;
    document.head.appendChild(hreflangDefault);
    
    // Add structured data based on page type
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
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'contact':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'blog':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
      case 'resources':
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
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
        if (config) {
          addSchema(schemaConfigs.service(config.title.split(' | ')[0], config.description), 'service-schema');
        }
        break;
      default:
        // Add basic organization schema for other pages
        addSchema(schemaConfigs.localBusiness, 'local-business-schema');
        break;
    }
    
    // Add any additional schemas
    additionalSchemas.forEach((schema, index) => {
      addSchema(schema, `additional-schema-${index}`);
    });
    
  }, [page, customTitle, customDescription, customCanonical, additionalSchemas, language]);

  return null;
};

export default SEO;