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
  { name: 'Miami, FL', slug: 'miami-fl', population: '470,000+', region: 'South Florida', businessCount: '50,000+', keyIndustries: ['Tourism','Real Estate','Healthcare','Finance'] },
  { name: 'Orlando, FL', slug: 'orlando-fl', population: '280,000+', region: 'Central Florida', businessCount: '30,000+', keyIndustries: ['Tourism','Healthcare','Technology','Agriculture'] },
  { name: 'Tampa, FL', slug: 'tampa-fl', population: '380,000+', region: 'West Florida', businessCount: '40,000+', keyIndustries: ['Healthcare','Finance','Technology','Manufacturing'] },
  { name: 'Jacksonville, FL', slug: 'jacksonville-fl', population: '950,000+', region: 'Northeast Florida', businessCount: '60,000+', keyIndustries: ['Logistics','Healthcare','Finance','Manufacturing'] },
  { name: 'Fort Lauderdale, FL', slug: 'fort-lauderdale-fl', population: '180,000+', region: 'South Florida', businessCount: '25,000+', keyIndustries: ['Marine','Real Estate','Technology','Tourism'] },
  { name: 'St. Petersburg, FL', slug: 'st-petersburg-fl', population: '260,000+', region: 'West Florida', businessCount: '28,000+', keyIndustries: ['Healthcare','Arts','Technology','Marine'] },
  { name: 'Sarasota, FL', slug: 'sarasota-fl', population: '57,000+', region: 'West Florida', businessCount: '15,000+', keyIndustries: ['Healthcare','Arts','Real Estate','Finance'] },
  { name: 'Gainesville, FL', slug: 'gainesville-fl', population: '140,000+', region: 'North Florida', businessCount: '12,000+', keyIndustries: ['Education','Healthcare','Technology','Agriculture'] },
];

// Main SILO Structure
export const SILO_STRUCTURE: { [key: string]: SILONode } = {
  // ROOT PILLAR: Services
  'services': {
    id: 'services',
    title: 'AI SEO Services Florida',
    path: '/services',
    type: 'pillar',
    children: ['strategic-seo-consulting','digital-storytelling-services','seo-automation','personal-branding-consulting'],
    keywords: ['seo services florida','ai seo consulting','florida seo agency','digital marketing florida'],
    metaTitle: 'AI SEO Services Florida | Strategic Consulting & Digital Growth',
    metaDescription: 'Transform your Florida business with AI-powered SEO services: strategic consulting, automation, digital storytelling & personal branding. Get results that matter.',
    schemaType: 'Service'
  },

  // SERVICE SUBPILLARS
  'strategic-seo-consulting': {
    id: 'strategic-seo-consulting',
    title: 'Strategic SEO Consulting Florida',
    path: '/services/strategic-seo-consulting',
    parent: 'services',
    type: 'service',
    children: FLORIDA_CITIES.map(city => `strategic-seo-consulting-${city.slug}`),
    keywords: ['strategic seo consulting','seo strategy florida','ai driven seo','florida seo expert'],
    metaTitle: 'Strategic SEO Consulting Florida | AI-Driven Growth Strategies',
    metaDescription: 'Elevate your Florida business with AI-driven strategic SEO consulting. Our 7+ years expertise delivers custom growth plans & measurable results. Partner with us!',
    schemaType: 'Service'
  },

  'digital-storytelling-services': {
    id: 'digital-storytelling-services',
    title: 'Digital Storytelling for Brands',
    path: '/services/digital-storytelling-services',
    parent: 'services',
    type: 'service',
    children: FLORIDA_CITIES.map(city => `digital-storytelling-services-${city.slug}`),
    keywords: ['digital storytelling','brand narrative','content marketing florida','storytelling consulting'],
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
    keywords: ['seo automation','ai seo tools','seo data analysis','automated seo florida'],
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
    children: FLORIDA_CITIES.map(city => `personal-branding-consulting-${city.slug}`),
    keywords: ['personal branding consulting','consultant branding florida','professional branding','thought leadership seo'],
    metaTitle: 'Personal Branding for Consultants in FL | Build Your Authority',
    metaDescription: 'Expert personal branding consultancy for Florida professionals. Leverage our AI-driven strategies to optimize your profile & rank on Google. Schedule a free diagnostic!',
    schemaType: 'Service'
  },

  // EDUCATION PILLAR (ejemplo)
  'education': {
    id: 'education',
    title: 'SEO Education & Guides',
    path: '/education',
    type: 'pillar',
    children: ['seo-guides','technical-seo','link-building','content-optimization'],
    keywords: ['seo education','seo guides florida','learn seo','seo training'],
    metaTitle: 'Comprehensive SEO Guides: Master Basics, Technical & Link Building',
    metaDescription: 'Free SEO guides for beginners & pros: technical SEO, link building, on-page. Unlock expert knowledge to boost your rankings & understand Google algorithms. Start learning now!',
    schemaType: 'EducationalOrganization'
  },

  // TOOLS PILLAR (ejemplo)
  'tools': {
    id: 'tools',
    title: 'SEO Tools & Resources',
    path: '/tools',
    type: 'pillar',
    children: ['keyword-clustering','roi-calculator','title-analyzer','site-audit'],
    keywords: ['seo tools','free seo tools','seo calculator','keyword tools'],
    metaTitle: 'Free SEO Tools & Calculators | Professional Analysis & Reports',
    metaDescription: 'Access professional SEO tools: keyword clustering, ROI calculator, title analyzer & site audit. Get instant insights to improve your Florida business rankings.',
    schemaType: 'SoftwareApplication'
  },

  // BLOG CATEGORY (ejemplo)
  'blog-ai-seo': {
    id: 'blog-ai-seo',
    title: 'AI in SEO: Strategies & Tools',
    path: '/blog/ai-seo',
    parent: 'blog',
    type: 'category',
    keywords: ['ai seo','artificial intelligence seo','seo automation','machine learning seo'],
    metaTitle: 'AI in SEO: Strategies, Tools & Future | Calvo Creativo Insights',
    metaDescription: 'Dive deep into AI SEO: automated keyword research, content creation & technical optimization. Stay ahead with expert insights & practical AI strategies for search dominance.',
    schemaType: 'BlogPosting'
  }
};

// H1 por ciudad / servicio (opcionalmente personalizados)
const cityServiceTitles: Record<string, Record<string, string>> = {
  'strategic-seo-consulting': {
    'miami-fl': 'Strategic SEO Consulting in Miami, FL',
    'orlando-fl': 'Strategic SEO Consulting for Businesses in Orlando, FL'
  },
  'digital-storytelling-services': {
    'tampa-fl': 'Digital Storytelling Services in Tampa, FL',
    'fort-lauderdale-fl': 'Digital Storytelling Solutions in Fort Lauderdale, FL'
  },
  'seo-automation': {
    'jacksonville-fl': 'SEO Automation in Jacksonville, FL',
    'orlando-fl': 'AI-Driven SEO Automation in Orlando, FL'
  },
  'personal-branding-consulting': {
    'miami-fl': 'Personal Branding Consulting in Miami, FL',
    'tampa-fl': 'Personal Branding SEO Consulting in Tampa, FL'
  }
};

// Genera páginas programáticas por ciudad para cada servicio
FLORIDA_CITIES.forEach(city => {
  // Strategic SEO
  SILO_STRUCTURE[`strategic-seo-consulting-${city.slug}`] = {
    id: `strategic-seo-consulting-${city.slug}`,
    title: cityServiceTitles['strategic-seo-consulting']?.[city.slug] || `Strategic SEO Consulting ${city.name}`,
    path: `/services/strategic-seo-consulting/${city.slug}/`,
    parent: 'strategic-seo-consulting',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`seo consultant ${city.slug}`, `${city.name} seo services`, `seo agency ${city.slug}`, `digital marketing ${city.name}`],
    metaTitle: `Strategic SEO Consulting ${city.name} | AI-Driven Local Growth`,
    metaDescription: `Boost your ${city.name} business with expert SEO consulting. AI-driven strategies, local market expertise & proven results. Serving ${city.region} businesses. Get started today!`,
    schemaType: 'LocalBusiness'
  };

  // Digital Storytelling
  SILO_STRUCTURE[`digital-storytelling-services-${city.slug}`] = {
    id: `digital-storytelling-services-${city.slug}`,
    title: cityServiceTitles['digital-storytelling-services']?.[city.slug] || `Digital Storytelling Services ${city.name}`,
    path: `/services/digital-storytelling-services/${city.slug}/`,
    parent: 'digital-storytelling-services',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`digital storytelling ${city.slug}`, `brand storytelling ${city.name}`, `content marketing ${city.slug}`],
    metaTitle: `Digital Storytelling Services ${city.name} | Brand Narrative Expert`,
    metaDescription: `Transform your ${city.name} brand story with expert digital storytelling. Connect with local audiences, drive engagement & build trust. Serving ${city.region} businesses.`,
    schemaType: 'LocalBusiness'
  };

  // SEO Automation
  SILO_STRUCTURE[`seo-automation-${city.slug}`] = {
    id: `seo-automation-${city.slug}`,
    title: cityServiceTitles['seo-automation']?.[city.slug] || `SEO Automation Services ${city.name}`,
    path: `/services/seo-automation/${city.slug}/`,
    parent: 'seo-automation',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`seo automation ${city.slug}`, `ai seo ${city.name}`, `automated seo ${city.slug}`],
    metaTitle: `SEO Automation Services ${city.name} | AI-Powered Efficiency`,
    metaDescription: `Streamline your ${city.name} SEO with AI automation. Advanced tools, data-driven insights & efficient optimization for ${city.region} businesses. Maximize your ROI.`,
    schemaType: 'LocalBusiness'
  };

  // Personal Branding
  SILO_STRUCTURE[`personal-branding-consulting-${city.slug}`] = {
    id: `personal-branding-consulting-${city.slug}`,
    title: cityServiceTitles['personal-branding-consulting']?.[city.slug] || `Personal Branding Consulting ${city.name}`,
    path: `/services/personal-branding-consulting/${city.slug}/`,
    parent: 'personal-branding-consulting',
    type: 'city',
    isProgrammatic: true,
    geoTargeted: true,
    keywords: [`personal branding ${city.slug}`, `professional branding ${city.name}`, `consultant branding ${city.slug}`],
    metaTitle: `Personal Branding Consulting ${city.name} | Build Authority`,
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

// ====== NEW: Schema generator with Service + BreadcrumbList (@graph) ======
export const generateSILOSchema = (node: SILONode, cityData?: any) => {
  const site = "https://calvocreativo.com";
  const nodeUrl = `${site}${node.path}`;
  const servicesUrl = `${site}/services`;

  // Build breadcrumbs (Home > Services > [Service] > [City])
  const items: any[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: site + "/" },
    { "@type": "ListItem", position: 2, name: "Services", item: servicesUrl },
  ];

  // If it's a service or a city, include the service breadcrumb
  let serviceNode: SILONode | undefined;
  if (node.type === 'service') {
    serviceNode = node;
    items.push({ "@type": "ListItem", position: 3, name: node.title, item: nodeUrl });
  } else if (node.type === 'city' && node.parent) {
    serviceNode = SILO_STRUCTURE[node.parent];
    if (serviceNode) {
      items.push({ "@type": "ListItem", position: 3, name: serviceNode.title, item: `${site}${serviceNode.path}` });
      items.push({ "@type": "ListItem", position: 4, name: node.title, item: nodeUrl });
    }
  }

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "itemListElement": items
  };

  // Build main entity (Service or LocalBusiness for geo pages)
  const isGeo = node.geoTargeted && cityData;
  const mainEntity = isGeo ? {
    "@type": "LocalBusiness",
    "name": "Calvo Creativo",
    "description": node.metaDescription,
    "url": nodeUrl,
    "image": `${site}/og.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData?.name,
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": { "@type": "City", "name": cityData?.name, "addressRegion": "FL" },
    "makesOffer": serviceNode ? {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": serviceNode.title,
        "description": serviceNode.metaDescription,
        "url": `${site}${serviceNode.path}`,
        "provider": { "@type": "ProfessionalService", "name": "Calvo Creativo", "areaServed": "Florida" },
        "serviceType": "SEO Consulting",
        "category": "Digital Marketing"
      }
    } : undefined
  } : {
    "@type": "Service",
    "name": node.title,
    "description": node.metaDescription,
    "url": nodeUrl,
    "provider": { "@type": "ProfessionalService", "name": "Calvo Creativo", "areaServed": "Florida" },
    "serviceType": "SEO Consulting",
    "category": "Digital Marketing",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [ mainEntity, breadcrumbList ]
  };
};
