// SEO utilities and configurations
export const updatePageSEO = (config: {
  title: string;
  description: string;
  canonical: string;
  keywords: string | string[];
}) => {
  document.title = config.title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', config.description);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', Array.isArray(config.keywords) ? config.keywords.join(', ') : config.keywords);

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const baseUrl = window.location.origin;
  const canonicalUrl = config.canonical.startsWith('http') ? config.canonical : `${baseUrl}${config.canonical}`;
  canonicalLink.setAttribute('href', canonicalUrl);
};

export const addStructuredData = (schema: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const addSchema = (schema: any, id: string) => {
  // Remove existing schema with the same ID if it exists
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// SEO configurations for each page
export const seoConfigs = {
  // English Pages
  home: {
    title: 'Strategic SEO Consulting Florida | AI-Driven Growth Strategies',
    description: 'Elevate your Florida business with AI-driven strategic SEO consulting. Our 7+ years expertise delivers custom growth plans & measurable results. Partner with us!',
    canonical: '/',
    keywords: 'seo consultant florida, strategic seo consulting, ai-driven seo, florida seo expert'
  },
  services: {
    title: 'SEO Services Florida | Strategic Digital Growth Solutions',
    description: 'Professional SEO services in Florida: Strategic consulting, content optimization, technical SEO, and digital growth strategies. Proven results for local businesses.',
    canonical: '/services',
    keywords: 'seo services florida, digital marketing services, strategic seo, florida seo company'
  },
  about: {
    title: 'About Roger Murillo | Expert SEO Consultant Florida',
    description: 'Meet Roger Murillo: 7+ years scaling Florida brands with AI-driven SEO strategies. Proven track record in organic growth and measurable results.',
    canonical: '/about',
    keywords: 'roger murillo seo, seo consultant florida, ai-driven seo expert'
  },
  contact: {
    title: 'Contact SEO Consultant Florida | Free Strategic Consultation',
    description: 'Ready to scale with strategic SEO? Schedule your free consultation with Roger Murillo, Florida SEO expert. AI-driven strategies, proven results.',
    canonical: '/contact',
    keywords: 'seo consultation florida, contact seo expert, seo services'
  },
  caseStudies: {
    title: 'SEO Case Studies | Proven Results Florida Businesses',
    description: 'Real SEO success stories from Florida businesses. See documented growth in organic traffic, rankings, and revenue from our strategic SEO campaigns.',
    canonical: '/case-studies',
    keywords: 'seo case studies, seo results florida, organic growth case studies'
  },
  howWeWork: {
    title: 'Our SEO Process | MAES Framework | Calvo Creativo',
    description: 'Discover our proven MAES SEO framework: Map, Analyze, Execute, Supervise. Our systematic approach to delivering consistent SEO results.',
    canonical: '/how-we-work',
    keywords: 'seo process, maes framework, seo methodology'
  },
  blog: {
    title: 'SEO Blog | Digital Marketing Insights | Calvo Creativo',
    description: 'Latest SEO strategies, digital marketing trends, and actionable insights. Expert knowledge from 7+ years of Florida SEO experience.',
    canonical: '/blog',
    keywords: 'seo blog, digital marketing insights, seo strategies'
  },
  resources: {
    title: 'Free SEO Resources | Complete Guides and Tools',
    description: 'Free SEO tools and resources for beginners and professionals: technical SEO, link building, optimization guides. Expert knowledge to improve your rankings.',
    canonical: '/resources',
    keywords: 'free seo resources, seo tools, seo guides'
  },
  privacyPolicy: {
    title: 'Privacy Policy | Calvo Creativo',
    description: 'Privacy policy for Calvo Creativo. Information about data collection, usage, and protection of personal information.',
    canonical: '/privacy-policy',
    keywords: 'privacy policy, data protection'
  },
  termsOfService: {
    title: 'Terms of Service | Calvo Creativo',
    description: 'Terms and conditions for Calvo Creativo services. Rights, responsibilities, and usage conditions.',
    canonical: '/terms-of-service', 
    keywords: 'terms of service, service conditions'
  },
  cookiePolicy: {
    title: 'Cookie Policy | Calvo Creativo',
    description: 'Information about cookie usage on the Calvo Creativo website. Cookie types and preference management.',
    canonical: '/cookie-policy',
    keywords: 'cookie policy, website cookies'
  },
  sitemap: {
    title: 'Sitemap | Calvo Creativo',
    description: 'Complete sitemap of the Calvo Creativo website. Organized links to all pages, services, and resources.',
    canonical: '/sitemap',
    keywords: 'sitemap, website navigation'
  },

  // Service-specific pages
  strategicSeo: {
    title: 'Strategic SEO Consulting | Florida Expert | Calvo Creativo',
    description: 'Strategic SEO consulting for Florida businesses. MAES framework proven to increase organic traffic and conversions.',
    canonical: '/services/strategic-seo-consulting',
    keywords: 'strategic seo consulting, seo expert florida, maes framework'
  },
  digitalStorytelling: {
    title: 'Digital Storytelling Services | Content Marketing | Calvo Creativo',
    description: 'Specialized digital storytelling and content marketing services for Florida businesses. Narratives that connect and convert.',
    canonical: '/services/digital-storytelling-services',
    keywords: 'digital storytelling, content marketing, brand narrative florida'
  },
  seoAutomation: {
    title: 'SEO Automation | Tools & Processes | Calvo Creativo',
    description: 'SEO automation services for Florida businesses. Optimize processes, save time, and improve results with advanced technology.',
    canonical: '/services/seo-automation',
    keywords: 'seo automation, seo tools, automated seo processes'
  },
  personalBranding: {
    title: 'Personal Branding Consulting | Personal SEO | Calvo Creativo',
    description: 'Specialized personal branding and personal SEO consulting for Florida professionals and entrepreneurs. Build your online authority.',
    canonical: '/services/personal-branding-consulting',
    keywords: 'personal branding, personal seo, personal branding consulting florida'
  },

  // Spanish Pages
  homeEs: {
    title: 'SEO y Marketing Digital en Florida | Calvo Creativo',
    description: 'Especialista en SEO para empresas de Florida. Estrategias comprobadas que generan más tráfico, leads y ventas. Consultoría gratuita disponible.',
    keywords: ['seo florida', 'marketing digital florida', 'consultor seo', 'seo miami', 'seo orlando'],
    canonical: '/es'
  },
  servicesEs: {
    title: 'Servicios de SEO y Marketing Digital | Calvo Creativo',
    description: 'Servicios especializados de SEO: Consultoría Estratégica, Storytelling Digital, Automatización SEO y Marca Personal para empresas de Florida.',
    keywords: ['servicios seo', 'consultoria seo', 'marketing digital', 'seo tecnico'],
    canonical: '/es/servicios'
  },
  aboutEs: {
    title: 'Sobre Calvo Creativo | Especialista SEO Florida',
    description: 'Conoce la historia, valores y experiencia de Calvo Creativo. 7+ años ayudando empresas de Florida a crecer con SEO estratégico.',
    keywords: ['calvo creativo', 'especialista seo', 'consultor seo florida'],
    canonical: '/es/acerca-de'
  },
  contactEs: {
    title: 'Contacto | Consultoría SEO Gratuita | Calvo Creativo',
    description: 'Agenda una consultoría SEO gratuita. Respuesta garantizada en 24 horas. Especialista en empresas de Florida.',
    keywords: ['contacto seo', 'consultoria gratuita', 'consultor seo florida'],
    canonical: '/es/contacto'
  },
  resourcesEs: {
    title: 'Recursos SEO Gratuitos | Herramientas y Plantillas | Calvo Creativo',
    description: 'Herramientas, plantillas y recursos SEO gratuitos. Checklists, templates y guías para potenciar tu estrategia SEO.',
    keywords: ['recursos seo', 'herramientas seo', 'plantillas seo', 'checklist seo'],
    canonical: '/es/recursos'
  },
  caseStudiesEs: {
    title: 'Casos de Éxito SEO | Resultados Comprobados | Calvo Creativo',
    description: 'Descubre casos de éxito reales. Aumentos de +280% en tráfico orgánico y resultados medibles en empresas de Florida.',
    keywords: ['casos de exito seo', 'resultados seo', 'casos estudio seo'],
    canonical: '/es/casos-de-exito'
  },
  howWeWorkEs: {
    title: 'Cómo Trabajamos | Framework MAES | Calvo Creativo',
    description: 'Conoce nuestro Framework MAES: Mapear, Analizar, Ejecutar, Supervisar. Metodología probada para el éxito en SEO.',
    keywords: ['framework maes', 'metodologia seo', 'como trabajamos seo'],
    canonical: '/es/como-trabajamos'
  },
  blogEs: {
    title: 'Blog SEO | Estrategias y Tendencias | Calvo Creativo',
    description: 'Artículos sobre SEO, marketing digital y tendencias. Insights basados en experiencia real con empresas de Florida.',
    keywords: ['blog seo', 'articulos seo', 'tendencias seo', 'marketing digital'],
    canonical: '/es/blog'
  },
  privacyPolicyEs: {
    title: 'Política de Privacidad | Calvo Creativo',
    description: 'Política de privacidad de Calvo Creativo. Información sobre recopilación, uso y protección de datos personales.',
    keywords: ['politica privacidad', 'proteccion datos'],
    canonical: '/es/politica-de-privacidad'
  },
  termsOfServiceEs: {
    title: 'Términos de Servicio | Calvo Creativo',
    description: 'Términos y condiciones de los servicios de Calvo Creativo. Derechos, responsabilidades y condiciones de uso.',
    keywords: ['terminos servicio', 'condiciones uso'],
    canonical: '/es/terminos-de-servicio'
  },
  cookiePolicyEs: {
    title: 'Política de Cookies | Calvo Creativo',
    description: 'Información sobre el uso de cookies en el sitio web de Calvo Creativo. Tipos de cookies y gestión de preferencias.',
    keywords: ['politica cookies', 'cookies web'],
    canonical: '/es/politica-de-cookies'
  },
  sitemapEs: {
    title: 'Mapa del Sitio | Calvo Creativo',
    description: 'Mapa completo del sitio web de Calvo Creativo. Enlaces organizados a todas las páginas, servicios y recursos.',
    keywords: ['mapa sitio', 'navegacion web'],
    canonical: '/es/mapa-del-sitio'
  },

  // Service-specific pages for Spanish
  strategicSeoEs: {
    title: 'Consultoría SEO Estratégica | Especialista Florida | Calvo Creativo',
    description: 'Consultoría SEO estratégica para empresas de Florida. Framework MAES comprobado para aumentar tráfico orgánico y conversiones.',
    keywords: ['consultoria seo estrategica', 'especialista seo florida', 'framework maes'],
    canonical: '/es/servicios/strategic-seo-consulting'
  },
  digitalStorytellingEs: {
    title: 'Servicios de Storytelling Digital | Marketing de Contenidos | Calvo Creativo',
    description: 'Servicios especializados de storytelling digital y marketing de contenidos para empresas de Florida. Narrativas que conectan y convierten.',
    keywords: ['storytelling digital', 'marketing contenidos', 'narrativa marca florida'],
    canonical: '/es/servicios/digital-storytelling-services'
  },
  seoAutomationEs: {
    title: 'Automatización SEO | Herramientas y Procesos | Calvo Creativo',
    description: 'Servicios de automatización SEO para empresas de Florida. Optimiza procesos, ahorra tiempo y mejora resultados con tecnología avanzada.',
    keywords: ['automatizacion seo', 'herramientas seo', 'procesos seo automatizados'],
    canonical: '/es/servicios/seo-automation'
  },
  personalBrandingEs: {
    title: 'Consultoría de Marca Personal | SEO Personal | Calvo Creativo',
    description: 'Consultoría especializada en marca personal y SEO personal para profesionales y emprendedores de Florida. Construye tu autoridad online.',
    keywords: ['marca personal', 'seo personal', 'consultoria marca personal florida'],
    canonical: '/es/servicios/personal-branding-consulting'
  }
};

// Schema configurations
export const schemaConfigs = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Calvo Creativo",
    "description": "Strategic SEO consulting and digital growth services for Florida businesses",
    "url": "https://calvocreativo.com",
    "telephone": "+1-573-046-8074",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "State",
      "name": "Florida"
    }
  },
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roger Murillo",
    "jobTitle": "SEO Consultant & Digital Growth Strategist",
    "worksFor": {
      "@type": "Organization",
      "name": "Calvo Creativo"
    },
    "url": "https://calvocreativo.com/about",
    "sameAs": [
      "https://linkedin.com/in/rogermurillo",
      "https://twitter.com/calvocreativo"
    ],
    "knowsAbout": [
      "SEO",
      "Digital Marketing",
      "Content Strategy",
      "Technical SEO",
      "AI-driven Marketing"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  },
  service: (name: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Calvo Creativo",
      "url": "https://calvocreativo.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "serviceType": "SEO Consulting"
  }),
  article: (title: string, description: string, datePublished: string, dateModified: string, slug: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": "Roger Murillo",
      "url": "https://calvocreativo.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calvo Creativo",
      "url": "https://calvocreativo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calvocreativo.com/logo.png"
      }
    },
    "url": `https://calvocreativo.com/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://calvocreativo.com/blog/${slug}`
    }
  })
};