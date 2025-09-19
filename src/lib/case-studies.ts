// Case study loader utility for dynamic case study imports

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: string[];
  hero?: string;
  metrics?: Array<{ label: string; value: string }>;
  services?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  metaTitle: string;
  metaDescription: string;
  schema: any;
}

// Dynamic import function for case studies
export const loadCaseStudy = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const module = await import(`../case-studies/${slug}.ts`);
    return module.caseStudy;
  } catch (error) {
    console.error(`Failed to load case study: ${slug}`, error);
    return null;
  }
};

// Get all available case studies
export const getAllCaseStudies = async (): Promise<CaseStudy[]> => {
  const caseStudySlugs = [
    'paramount-property-restoration',
    'craftd-london',
    'flo-car-rental',
    'puff-cleaning', 
    'edu1st-preschools',
    'le-gramme'
  ];
  
  const caseStudies = await Promise.all(
    caseStudySlugs.map(slug => loadCaseStudy(slug))
  );
  
  return caseStudies.filter((caseStudy): caseStudy is CaseStudy => caseStudy !== null);
};

// Get case studies by industry
export const getCaseStudiesByIndustry = async (industry?: string): Promise<CaseStudy[]> => {
  const allCaseStudies = await getAllCaseStudies();
  
  if (!industry || industry === 'All') {
    return allCaseStudies;
  }
  
  return allCaseStudies.filter(caseStudy => 
    caseStudy.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

// Get related case studies based on industry
export const getRelatedCaseStudies = async (currentSlug: string, currentIndustry?: string): Promise<CaseStudy[]> => {
  const allCaseStudies = await getAllCaseStudies();
  
  return allCaseStudies
    .filter(caseStudy => caseStudy.slug !== currentSlug)
    .filter(caseStudy => !currentIndustry || caseStudy.industry.includes(currentIndustry))
    .slice(0, 2);
};