import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink, Wrench, FileText, BookOpen } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      id: "tools",
      title: "Tools",
      description: "Technical tools and resources for SEO",
      icon: <Wrench className="h-6 w-6" />,
      color: "teal"
    },
    {
      id: "templates", 
      title: "Templates",
      description: "Ready-to-use templates and frameworks",
      icon: <FileText className="h-6 w-6" />,
      color: "electric-blue"
    },
    {
      id: "glossary",
      title: "Glossary",
      description: "SEO terms and concepts explained",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bright-orange"
    }
  ];

  const tools = [
    {
      name: "SEO Audit Checklist",
      description: "Complete checklist to audit any website. Includes technical, on-page, and UX aspects.",
      type: "PDF Checklist",
      category: "tools",
      downloadCount: "2.3k",
      size: "2.1 MB"
    },
    {
      name: "Keyword Research Spreadsheet",
      description: "Advanced Excel template for keyword research with automated formulas.",
      type: "Excel Template",
      category: "templates", 
      downloadCount: "1.8k",
      size: "1.5 MB"
    },
    {
      name: "Content Calendar Template",
      description: "SEO-optimized editorial calendar with topic and keyword planning.",
      type: "Google Sheets",
      category: "templates",
      downloadCount: "1.4k",
      size: "850 KB"
    },
    {
      name: "MAES Framework Guide",
      description: "Complete implementation guide for the MAES methodology with practical examples.",
      type: "PDF Guide",
      category: "tools",
      downloadCount: "3.1k",
      size: "4.2 MB"
    },
    {
      name: "Technical SEO Checklist",
      description: "Comprehensive technical audit checklist covering Core Web Vitals, indexing, and crawling.",
      type: "PDF Checklist", 
      category: "tools",
      downloadCount: "2.7k",
      size: "1.8 MB"
    },
    {
      name: "Content Brief Template",
      description: "SEO content brief template for writers and content teams.",
      type: "Word Template",
      category: "templates",
      downloadCount: "1.9k", 
      size: "1.2 MB"
    }
  ];

  const glossaryTerms = [
    {
      term: "Topical Authority",
      definition: "The perceived expertise and credibility of a website on a specific topic, built through comprehensive, high-quality content coverage.",
      category: "Content Strategy"
    },
    {
      term: "Search Intent",
      definition: "The reason behind a user's search query - what they're trying to accomplish or find when they search for something.",
      category: "SEO Fundamentals"
    },
    {
      term: "Semantic Architecture",
      definition: "The strategic organization of content and site structure based on topic relationships and semantic connections.",
      category: "Technical SEO"
    },
    {
      term: "MAES Framework",
      definition: "Methodology for SEO strategy: Market research, Architecture planning, Execution strategy, and Scaling optimization.",
      category: "SEO Strategy"
    },
    {
      term: "Core Web Vitals",
      definition: "Google's metrics for measuring user experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).",
      category: "Technical SEO"
    },
    {
      term: "Content Clusters",
      definition: "Groups of related content pieces organized around a main pillar page to demonstrate topical expertise.",
      category: "Content Strategy"
    }
  ];

  const externalTools = [
    {
      name: "Google Search Console",
      description: "Essential free tool for monitoring your site's search performance.",
      url: "https://search.google.com/search-console",
      category: "Free Tools",
      color: "teal"
    },
    {
      name: "Google PageSpeed Insights",
      description: "Analyze and optimize your website's loading performance.",
      url: "https://pagespeed.web.dev/",
      category: "Performance",
      color: "electric-blue"
    },
    {
      name: "Screaming Frog SEO Spider",
      description: "Powerful desktop tool for technical SEO audits and site crawling.",
      url: "https://www.screamingfrog.co.uk/seo-spider/",
      category: "Paid Tools",
      color: "bright-orange"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              SEO Resources & Tools
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Free tools, templates, and guides to help you implement professional SEO strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Browse by Category</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {resourceCategories.map((category) => (
                <div 
                  key={category.id}
                  className={`bg-gradient-to-br from-${category.color}/10 to-${category.color}/5 border border-${category.color}/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${category.color}/20 rounded-2xl mb-6 group-hover:bg-${category.color}/30 transition-all duration-300`}>
                    <div className={`text-${category.color}`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Free Downloads</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-teal transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-sm bg-secondary text-muted-foreground px-3 py-1 rounded-full">
                        {tool.type}
                      </span>
                    </div>
                    <Download className="h-6 w-6 text-muted-foreground group-hover:text-teal transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{tool.downloadCount} downloads</span>
                    <span>{tool.size}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all">
                    Download Free
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Glossary */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">SEO Glossary</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {glossaryTerms.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">{item.term}</h3>
                    <span className="text-xs bg-teal/10 text-teal px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View Complete Glossary
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* External Tools */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Recommended External Tools</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {externalTools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-teal transition-colors">
                        {tool.name}
                      </h3>
                      <span className={`text-sm bg-${tool.color}/10 text-${tool.color} px-3 py-1 rounded-full`}>
                        {tool.category}
                      </span>
                    </div>
                    <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-teal transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  
                  <Button variant="outline" className="w-full group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all">
                    Visit Tool
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get personalized guidance and advanced strategies with our SEO consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;