// SILO Architecture Configuration for Florida SEO Site
export interface SILONode {
  id: string;
  title: string;
  path: string;
  parent?: string;
  children?: string[];
  type: 'pillar' | 'service' | 'city' | 'category' | 'post' | 'tool' | 'page';
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  schemaType: string;
  isProgrammatic?: boolean;
  geoTargeted?: boolean;
}

// Florida cities for programmatic pages
export const FLORIDA_CITIES = [
  {
    name: 'Miami',
    slug: 'miami',
    population: '470,000+',
    region: 'South Florida',
    businessCount: '50,000+',
    keyIndustries: ['Tourism', 'Real Estate', 'Healthcare', 'Finance']
  },
  {
    name: 'Orlando',
    slug: 'orlando',
    population: '280,000+',
    region: 'Central Florida',
    businessCount: '30,000+',
    keyIndustries: ['Tourism', 'Healthcare', 'Technology', 'Agriculture']
  },
  {
    name: 'Tampa',
    slug: 'tampa',
    population: '380,000+',
    region: 'West Florida',
    businessCount: '40,000+',
    keyIndustries: ['Healthcare', 'Finance', 'Technology', 'Manufacturing']
  },
  {
    name: 'Jacksonville',
    slug: 'jacksonville',
    population: '950,000+',
    region: 'Northeast Florida',
    businessCount: '60,000+',
    keyIndustries: ['Logistics', 'Healthcare', 'Finance', 'Manufacturing']
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    population: '180,000+',
    region: 'South Florida',
    businessCount: '25,000+',
    keyIndustries: ['Marine', 'Real Estate', 'Technology', 'Tourism']
  },
  {
    name: 'St. Petersburg',
    slug: 'st-petersburg',
    population: '260,000+',
    region: 'West Florida',
    businessCount: '28,000+',
    keyIndustries: ['Healthcare', 'Arts', 'Technology', 'Marine']
  },
  {
    name: 'Sarasota',
    slug: 'sarasota',
    population: '57,000+',
    region: 'West Florida',
    businessCount: '15,000+',
    keyIndustries: ['Healthcare', 'Arts', 'Real Estate', 'Finance']
  },
  {
    name: 'Gainesville',
    slug: 'gainesville',
    population: '140,000+',
    region: 'North Florida',
    businessCount: '12,000+',
    keyIndustries: ['Education', 'Healthcare', 'Technology', 'Agriculture']
  }
];

// Main SILO Structure
export const SILO_STRUCTURE: { [key: string]: SILONode } = {
  // ROOT PILLAR: Services
  'services': {
    id: 'services',
    title: 'AI SEO Services Florida',
    path: '/services',
    type: 'pillar',
    children: ['strategic-seo', 'digital-storytelling', 'seo-automation', 'personal-branding-consulting'],
    keywords: ['seo services florida', 'ai seo consulting', 'florida seo agency', 'digital marketing florida'],
    metaTitle: 'AI SEO Services Florida | Strategic Consulting & Digital Growth',
    metaDescription: 'Transform your Florida business with AI-powered SEO services: strategic consulting, automation, digital storytelling & personal branding. Get results that matter.',
    schemaType: 'Service'
  },

  // SERVICE SUBPILLARS
  'strategic-seo': {
    id: 'strategic-seo',
    title: 'Strategic SEO Consulting Florida',
    path: '/services/strategic-seo',
    parent: 'services',
    type: 'service',
    children: FLORIDA_CITIES.map(city => `strategic-seo-${city.slug}`),
    keywords: ['strategic seo consulting', 'seo strategy florida', 'ai driven seo', 'florida seo expert'],
    metaTitle: 'Strategic SEO Consulting Florida | AI-Driven Growth Strategies',
    metaDescription: 'Elevate your Florida business with AI-driven strategic SEO consulting. Our 7+ years expertise delivers custom growth plans & measurable results. Partner with us!',
    schemaType: 'Service'
  },

  'digital-storytelling': {
    id: 'digital-storytelling',
    title: 'Digital Storytelling for Brands',
    path: '/services/digital-storytelling',
    parent: 'services',
    type: 'service',
    children: FLORIDA_CITIES.map(city => `digital-storytelling-${city.slug}`),
    keywords: ['digital storytelling', 'brand narrative', 'content marketing florida', 'storytelling consulting'],
    metaTitle: 'Digital Storytelling for Brands | Connect & Convert with Narrative',
    metaDescription: 'Transform your brand narrative with expert digital storytelling services. We craft compelling content that connects deeply with your US audience. See how we build brands!',
    schemaType: 'Service'
  },

  'seo-automation': {
    id: 'seo-automation',
    title: 'AI SEO Automation & Data',
    path: '/services/seo-automation',
    parent: 'services',
    type: 'service',
    children: FLORIDA_CITIES.map(city => `seo-automation-${city.slug}`),
    keywords: ['seo automation', 'ai seo tools', 'seo data analysis', 'automated seo florida'],
    metaTitle: 'AI SEO Automation & Data | Maximize Efficiency in Florida',
    metaDescription: 'Streamline SEO with advanced AI automation: keyword research, scraping, reporting. Get data-driven insights & boost efficiency for your Florida business. Start optimizing today!',
    schemaType: 'Service'
  },

  'personal-branding-consulting': {
    id: 'personal-branding-consulting',
    title: 'Personal Branding for Consultants in FL',
    path: '/services/personal-branding-consulting',
    parent: 'services',
    type: 'service',
    children: FLORIDA_CITIES.map(city => `personal-branding-${city.slug}`),
    keywords: ['personal branding consulting', 'consultant branding florida', 'professional branding', 'thought leadership seo'],
    metaTitle: 'Personal Branding for Consultants in FL | Build Your Authority',
    metaDescription: 'Expert personal branding consultancy for Florida professionals. Leverage our AI-driven strategies to optimize your profile & rank on Google. Schedule a free diagnostic!',
    schemaType: 'Service'
  },

  // EDUCATION PILLAR
  'education': {
    id: 'education',
    title: 'SEO Education & Guides',
    path: '/education',
    type: 'pillar',
    children: ['seo-guides', 'technical-seo', 'link-building', 'content-optimization'],
    keywords: ['seo education', 'seo guides florida', 'learn seo', 'seo training'],
    metaTitle: 'Comprehensive SEO Guides: Master Basics, Technical & Link Building',
    metaDescription: 'Free SEO guides for beginners & pros: technical SEO, link building, on-page. Unlock expert knowledge to boost your rankings & understand Google algorithms. Start learning now!',
    schemaType: 'EducationalOrganization'
  },

  // TOOLS PILLAR
  'tools': {
    id: 'tools',
    title: 'SEO Tools & Resources',
    path: '/tools',
    type: 'pillar',
    children: ['keyword-clustering', 'roi-calculator', 'title-analyzer', 'site-audit'],
    keywords: ['seo tools', 'free seo tools', 'seo calculator', 'keyword tools'],
    metaTitle: 'Free SEO Tools & Calculators | Professional Analysis & Reports',
    metaDescription: 'Access professional SEO tools: keyword clustering, ROI calculator, title analyzer & site audit. Get instant insights to improve your Florida business rankings.',
    schemaType: 'SoftwareApplication'
  },

  // BLOG CATEGORIES
  'blog-ai-seo': {
    id: 'blog-ai-seo',
    title: 'AI in SEO: Strategies & Tools',
    path: '/blog/ai-seo',
    parent: 'blog',
    type: 'category',
    keywords: ['ai seo', 'artificial intelligence seo', 'seo automation', 'machine learning seo'],
    metaTitle: 'AI in SEO: Strategies, Tools & Future | Calvo Creativo Insights',
    metaDescription: 'Dive deep into AI SEO: automated keyword research, content creation & technical optimization. Stay ahead with expert insights & practical AI strategies for search dominance.',
    schemaType: 'BlogPosting'
  }
};

// Generate programmatic city pages for each service
FLORIDA_CITIES.forEach(city => {
  // Strategic SEO city pages
  SILO_STRUCTURE[`strategic-seo-${city.slug}`] = {
    id: `strategic-seo-${city.slug}`,
    title: `Strategic SEO Consulting ${city.name} FL`,
    path: `/services/strategic-seo/${city.slug}`,
    parent: 'strategic-seo',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`seo consultant ${city.slug}`, `${city.name} seo services`, `seo agency ${city.slug}`, `digital marketing ${city.name}`],
    metaTitle: `Strategic SEO Consulting ${city.name} FL | AI-Driven Local Growth`,
    metaDescription: `Boost your ${city.name} business with expert SEO consulting. AI-driven strategies, local market expertise & proven results. Serving ${city.region} businesses. Get started today!`,
    schemaType: 'LocalBusiness'
  };

  // Digital Storytelling city pages
  SILO_STRUCTURE[`digital-storytelling-${city.slug}`] = {
    id: `digital-storytelling-${city.slug}`,
    title: `Digital Storytelling Services ${city.name} FL`,
    path: `/services/digital-storytelling/${city.slug}`,
    parent: 'digital-storytelling',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`digital storytelling ${city.slug}`, `brand storytelling ${city.name}`, `content marketing ${city.slug}`],
    metaTitle: `Digital Storytelling Services ${city.name} FL | Brand Narrative Expert`,
    metaDescription: `Transform your ${city.name} brand story with expert digital storytelling. Connect with local audiences, drive engagement & build trust. Serving ${city.region} businesses.`,
    schemaType: 'LocalBusiness'
  };

  // SEO Automation city pages
  SILO_STRUCTURE[`seo-automation-${city.slug}`] = {
    id: `seo-automation-${city.slug}`,
    title: `SEO Automation Services ${city.name} FL`,
    path: `/services/seo-automation/${city.slug}`,
    parent: 'seo-automation',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`seo automation ${city.slug}`, `ai seo ${city.name}`, `automated seo ${city.slug}`],
    metaTitle: `SEO Automation Services ${city.name} FL | AI-Powered Efficiency`,
    metaDescription: `Streamline your ${city.name} SEO with AI automation. Advanced tools, data-driven insights & efficient optimization for ${city.region} businesses. Maximize your ROI.`,
    schemaType: 'LocalBusiness'
  };

  // Personal Branding city pages
  SILO_STRUCTURE[`personal-branding-${city.slug}`] = {
    id: `personal-branding-${city.slug}`,
    title: `Personal Branding Consulting ${city.name} FL`,
    path: `/services/personal-branding-consulting/${city.slug}`,
    parent: 'personal-branding-consulting',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`personal branding ${city.slug}`, `professional branding ${city.name}`, `consultant branding ${city.slug}`],
    metaTitle: `Personal Branding Consulting ${city.name} FL | Build Authority`,
    metaDescription: `Establish your professional authority in ${city.name}. Expert personal branding for ${city.region} consultants & professionals. AI-driven strategies that get results.`,
    schemaType: 'LocalBusiness'
  };
});

export const getSILONode = (nodeId: string): SILONode | undefined => {
  return SILO_STRUCTURE[nodeId];
};

export const getChildNodes = (parentId: string): SILONode[] => {
  return Object.values(SILO_STRUCTURE).filter(node => node.parent === parentId);
};

export const getCityDataBySlug = (slug: string) => {
  return FLORIDA_CITIES.find(city => city.slug === slug);
};

export const generateSILOSchema = (node: SILONode, cityData?: any) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": node.schemaType,
    "name": node.title,
    "description": node.metaDescription,
    "url": `https://calvocreativo.com${node.path}`
  };

  if (node.geoTargeted && cityData) {
    return {
      ...baseSchema,
      "@type": "LocalBusiness",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityData.name,
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "City",
        "name": cityData.name,
        "addressRegion": "FL"
      },
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "addressLocality": cityData.name,
          "addressRegion": "FL"
        },
        "geoRadius": "50000"
      }
    };
  }

  if (node.schemaType === 'Service') {
    return {
      ...baseSchema,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Calvo Creativo",
        "areaServed": "Florida"
      },
      "serviceType": "SEO Consulting",
      "category": "Digital Marketing"
    };
  }

  return baseSchema;
};