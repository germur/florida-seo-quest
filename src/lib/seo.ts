interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  keywords?: string;
}

interface SchemaConfig {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export const updatePageSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  } else {
    const newMetaDescription = document.createElement('meta');
    newMetaDescription.name = 'description';
    newMetaDescription.content = config.description;
    document.head.appendChild(newMetaDescription);
  }
  
  // Update canonical URL
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', config.canonical);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', config.canonical);
      document.head.appendChild(canonical);
    }
  }
  
  // Update keywords
  if (config.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', config.keywords);
      document.head.appendChild(metaKeywords);
    }
  }
  
  // Handle noindex
  if (config.noindex) {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(robotsMeta);
    }
  }

  // Update Open Graph
  const updateOGMeta = (property: string, content: string) => {
    let ogMeta = document.querySelector(`meta[property="${property}"]`);
    if (ogMeta) {
      ogMeta.setAttribute('content', content);
    } else {
      ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', property);
      ogMeta.setAttribute('content', content);
      document.head.appendChild(ogMeta);
    }
  };

  updateOGMeta('og:title', config.title);
  updateOGMeta('og:description', config.description);
  if (config.canonical) {
    updateOGMeta('og:url', config.canonical);
  }

  // Update Twitter Card
  const updateTwitterMeta = (name: string, content: string) => {
    let twitterMeta = document.querySelector(`meta[name="${name}"]`);
    if (twitterMeta) {
      twitterMeta.setAttribute('content', content);
    } else {
      twitterMeta = document.createElement('meta');
      twitterMeta.setAttribute('name', name);
      twitterMeta.setAttribute('content', content);
      document.head.appendChild(twitterMeta);
    }
  };

  updateTwitterMeta('twitter:title', config.title);
  updateTwitterMeta('twitter:description', config.description);
};

export const addSchema = (schema: SchemaConfig, id?: string) => {
  // Remove existing schema with same ID if it exists
  if (id) {
    const existingSchema = document.getElementById(id);
    if (existingSchema) {
      existingSchema.remove();
    }
  }
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  if (id) {
    script.id = id;
  }
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// SEO configurations for each page
export const seoConfigs = {
  home: {
    title: 'Strategic SEO Consulting Florida | AI-Driven Growth Strategies',
    description: 'Elevate your Florida business with AI-driven strategic SEO consulting. Our 7+ years expertise delivers custom growth plans & measurable results. Partner with us!',
    canonical: 'https://calvocreativo.com/',
    keywords: 'seo consultant florida, strategic seo consulting, ai-driven seo, florida seo expert'
  },
  services: {
    title: 'AI SEO Services Florida | Strategic Consulting & Digital Growth',
    description: 'Transform your Florida business with AI-powered SEO services: strategic consulting, automation, digital storytelling & personal branding. Get results that matter.',
    canonical: 'https://calvocreativo.com/services',
    keywords: 'seo services florida, ai seo automation, digital storytelling, personal branding consulting'
  },
  caseStudies: {
    title: 'Florida SEO Success Stories | Real Case Studies, Proven Results',
    description: 'Explore our detailed SEO case studies from Florida businesses. Discover how our strategic SEO delivered triple leads, increased visibility & real organic growth.',
    canonical: 'https://calvocreativo.com/case-studies',
    keywords: 'seo case studies florida, seo success stories, organic growth results'
  },
  blog: {
    title: 'AI in SEO: Strategies, Tools & Future | Calvo Creativo Insights',
    description: 'Dive deep into AI SEO: automated keyword research, content creation & technical optimization. Stay ahead with expert insights & practical AI strategies.',
    canonical: 'https://calvocreativo.com/blog',
    keywords: 'ai seo strategies, seo automation tools, technical seo optimization'
  },
  resources: {
    title: 'Comprehensive SEO Guides: Master Basics, Technical & Link Building',
    description: 'Free SEO guides for beginners & pros: technical SEO, link building, on-page. Unlock expert knowledge to boost your rankings & understand Google algorithms.',
    canonical: 'https://calvocreativo.com/resources',
    keywords: 'seo guides, technical seo, link building, on-page optimization'
  },
  about: {
    title: 'Roger Murillo | Florida SEO Expert & AI Strategy Consultant',
    description: 'Meet Roger Murillo: 7+ years scaling Florida brands with AI-driven SEO strategies. From startups to enterprises, delivering measurable organic growth results.',
    canonical: 'https://calvocreativo.com/about',
    keywords: 'roger murillo seo, florida seo consultant, ai seo expert'
  },
  contact: {
    title: 'Contact Florida SEO Expert | Free Strategic Consultation',
    description: 'Ready to scale with strategic SEO? Book your free consultation with Florida SEO expert Roger Murillo. AI-driven strategies, proven results, measurable growth.',
    canonical: 'https://calvocreativo.com/contact',
    keywords: 'seo consultation florida, contact seo expert, florida seo services'
  },
  howWeWork: {
    title: 'Our SEO Process | Data-Driven Methodology & Florida Expertise',
    description: 'Discover our proven SEO methodology: strategic audits, AI automation, content optimization & growth tracking. See how we deliver results for Florida businesses.',
    canonical: 'https://calvocreativo.com/how-we-work',
    keywords: 'seo process, seo methodology, florida seo agency workflow'
  },
  
  // SILO Service Pages
  strategicSeo: {
    title: 'Strategic SEO Consulting Florida | AI-Driven Growth Strategies',
    description: 'Elevate your Florida business with AI-driven strategic SEO consulting. Our 7+ years expertise delivers custom growth plans & measurable results. Partner with us!',
    canonical: 'https://calvocreativo.com/services/strategic-seo',
    keywords: 'strategic seo consulting, seo strategy florida, ai driven seo, florida seo expert'
  },
  
  digitalStorytelling: {
    title: 'Digital Storytelling for Brands | Connect & Convert with Narrative',
    description: 'Transform your brand narrative with expert digital storytelling services. We craft compelling content that connects deeply with your US audience. See how we build brands!',
    canonical: 'https://calvocreativo.com/services/digital-storytelling',
    keywords: 'digital storytelling, brand narrative, content marketing florida, storytelling consulting'
  },
  
  seoAutomation: {
    title: 'AI SEO Automation & Data | Maximize Efficiency in Florida',
    description: 'Streamline SEO with advanced AI automation: keyword research, scraping, reporting. Get data-driven insights & boost efficiency for your Florida business. Start optimizing today!',
    canonical: 'https://calvocreativo.com/services/seo-automation',
    keywords: 'seo automation, ai seo tools, seo data analysis, automated seo florida'
  },
  
  personalBranding: {
    title: 'Personal Branding for Consultants in FL | Build Your Authority',
    description: 'Expert personal branding consultancy for Florida professionals. Leverage our AI-driven strategies to optimize your profile & rank on Google. Schedule a free diagnostic!',
    canonical: 'https://calvocreativo.com/services/personal-branding-consulting',
    keywords: 'personal branding consulting, consultant branding florida, professional branding, thought leadership seo'
  }
};

// Schema configurations
export const schemaConfigs = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Calvo Creativo",
    "description": "Strategic SEO consulting and AI-driven digital growth services for Florida businesses",
    "url": "https://calvocreativo.com",
    "logo": "https://calvocreativo.com/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png",
    "image": "https://calvocreativo.com/og-home.jpg",
    "telephone": "+573046807443",
    "email": "rogermur1990@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": [
      {"@type": "State", "name": "Florida"},
      {"@type": "Country", "name": "United States"}
    ],
    "serviceType": ["SEO Consulting", "Digital Marketing", "Content Strategy"],
    "founder": {
      "@type": "Person",
      "name": "Roger Murillo",
      "jobTitle": "SEO Strategist & Consultant"
    },
    "sameAs": ["https://x.com/Rogermu47429637"]
  },
  
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roger Murillo",
    "jobTitle": "SEO Strategist & AI Consultant",
    "description": "Florida-based SEO expert specializing in AI-driven strategies and organic growth",
    "url": "https://calvocreativo.com/about",
    "image": "https://calvocreativo.com/og-home.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "Calvo Creativo"
    },
    "sameAs": ["https://x.com/Rogermu47429637"],
    "knowsAbout": ["SEO", "Digital Marketing", "AI Automation", "Content Strategy"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "SEO Consultant",
      "occupationLocation": {
        "@type": "State",
        "name": "Florida"
      }
    }
  },

  service: (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Calvo Creativo",
      "areaServed": "Florida"
    },
    "serviceType": "SEO Consulting",
    "category": "Digital Marketing"
  }),

  article: (title: string, description: string, url: string, datePublished: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": "Roger Murillo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calvo Creativo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calvocreativo.com/lovable-uploads/15b81203-d4a9-4da9-ace4-976c55d22c82.png"
      }
    }
  }),

  faq: (faqs: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })
};