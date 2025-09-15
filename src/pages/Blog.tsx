import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", count: 24 },
    { id: "seo-strategy", name: "SEO Strategy", count: 8, color: "teal" },
    { id: "technical-seo", name: "Technical SEO", count: 6, color: "electric-blue" },
    { id: "seo-ai", name: "SEO with AI", count: 4, color: "bright-orange" },
    { id: "florida-seo", name: "Florida SEO", count: 3, color: "purple" },
    { id: "content-strategy", name: "Content Strategy", count: 3, color: "green" }
  ];

  const posts = [
    {
      id: "topical-authority-2025",
      title: "Topical Authority: Why It Wins in 2025",
      excerpt: "Topical authority has become the most important ranking factor. Discover how to build it strategically.",
      category: "seo-strategy",
      readTime: "8 min",
      date: "2024-12-15",
      featured: true,
      tags: ["Topical Authority", "SEO Strategy", "Content Architecture"]
    },
    {
      id: "ai-seo-practical", 
      title: "AI in SEO: Practical Uses (No Hype)",
      excerpt: "Real AI use cases in SEO that actually work. No buzzwords, just practical applications that generate results.",
      category: "seo-ai",
      readTime: "6 min", 
      date: "2024-12-10",
      featured: true,
      tags: ["AI", "Automation", "Workflow"]
    },
    {
      id: "florida-seo-2025",
      title: "Florida SEO: Strategies That Work",
      excerpt: "Specific strategies for the Florida market. From Miami to Jacksonville, what works in the Sunshine State.",
      category: "florida-seo",
      readTime: "10 min",
      date: "2024-12-05", 
      featured: false,
      tags: ["Local SEO", "Florida Market", "Geographic SEO"]
    },
    {
      id: "core-web-vitals-2025",
      title: "Core Web Vitals: Complete Guide 2025",
      excerpt: "Everything you need to know about Core Web Vitals and how to optimize them for better rankings.",
      category: "technical-seo",
      readTime: "12 min",
      date: "2024-11-28",
      featured: false,
      tags: ["Core Web Vitals", "Technical SEO", "Page Speed"]
    },
    {
      id: "content-clusters-strategy",
      title: "Content Clusters: Complete Implementation Guide",
      excerpt: "How to build content clusters that generate topical authority and sustainable organic traffic.",
      category: "content-strategy",
      readTime: "9 min",
      date: "2024-11-20",
      featured: false,
      tags: ["Content Clusters", "Topical Authority", "Content Strategy"]
    },
    {
      id: "seo-audit-checklist",
      title: "SEO Audit: Complete Checklist 2025",
      excerpt: "A comprehensive checklist for conducting professional SEO audits that identify real growth opportunities.",
      category: "seo-strategy",
      readTime: "15 min",
      date: "2024-11-15",
      featured: false,
      tags: ["SEO Audit", "Checklist", "SEO Analysis"]
    }
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const filteredPosts = selectedCategory === "all" 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              SEO Blog & Resources
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Strategic insights, practical guides, and case studies to help you grow with SEO.
            </p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12">Featured Articles</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featuredPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className={`px-3 py-1 bg-${categories.find(c => c.id === post.category)?.color}/10 text-${categories.find(c => c.id === post.category)?.color} rounded-full font-medium`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-teal transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-teal font-medium group-hover:text-electric-blue transition-colors">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-${category.color || 'teal'} text-white` 
                      : 'bg-card text-muted-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-teal transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 bg-${categories.find(c => c.id === post.category)?.color}/10 text-${categories.find(c => c.id === post.category)?.color} text-xs rounded font-medium`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-teal group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No articles found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get weekly insights and strategies to grow your business with SEO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;