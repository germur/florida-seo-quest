import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos", count: 24 },
    { id: "estrategia-seo", name: "Estrategia SEO", count: 8, color: "teal" },
    { id: "seo-tecnico", name: "SEO Técnico", count: 6, color: "electric-blue" },
    { id: "seo-ia", name: "SEO con IA", count: 4, color: "bright-orange" },
    { id: "seo-florida", name: "SEO Florida", count: 3, color: "purple" },
    { id: "estrategia-contenido", name: "Estrategia de Contenido", count: 3, color: "green" }
  ];

  const posts = [
    {
      id: "autoridad-topica-2025",
      title: "Topical Authority: Why It Wins in 2025",
      excerpt: "La autoridad tópica se ha convertido en el factor más importante para ranking. Descubre cómo construirla estratégicamente.",
      category: "estrategia-seo",
      readTime: "8 min",
      date: "2024-12-15",
      featured: true,
      tags: ["Topical Authority", "SEO Strategy", "Content Architecture"]
    },
    {
      id: "ia-seo-practico", 
      title: "AI in SEO: Practical Uses (No Hype)",
      excerpt: "Casos de uso reales de IA en SEO que funcionan. Sin buzzwords, solo aplicaciones prácticas que generan resultados.",
      category: "seo-ia",
      readTime: "6 min", 
      date: "2024-12-10",
      featured: true,
      tags: ["AI", "Automation", "Workflow"]
    },
    {
      id: "seo-florida-2025",
      title: "Florida SEO: Strategies That Work",
      excerpt: "Estrategias específicas para el mercado de Florida. Desde Miami hasta Jacksonville, qué funciona en el Sunshine State.",
      category: "seo-florida",
      readTime: "10 min",
      date: "2024-12-05", 
      featured: false,
      tags: ["Local SEO", "Florida Market", "Geographic SEO"]
    },
    {
      id: "core-web-vitals-2025",
      title: "Core Web Vitals: The 2025 Update",
      excerpt: "Los nuevos cambios en Core Web Vitals y cómo preparar tu sitio para mantener y mejorar rankings.",
      category: "seo-tecnico",
      readTime: "7 min",
      date: "2024-11-28",
      featured: false,
      tags: ["Technical SEO", "Page Speed", "User Experience"]
    },
    {
      id: "content-clusters-guide",
      title: "Content Clusters: The Complete Guide",
      excerpt: "Guía completa para crear topic clusters que posicionen. Desde la investigación hasta la implementación.",
      category: "estrategia-contenido",
      readTime: "12 min",
      date: "2024-11-20",
      featured: false,
      tags: ["Content Strategy", "Topic Clusters", "Information Architecture"]
    },
    {
      id: "seo-ecommerce-florida",
      title: "E-commerce SEO for Florida Businesses",
      excerpt: "Estrategias específicas de SEO para e-commerce en Florida. Casos reales y tácticas que funcionan.",
      category: "seo-florida",
      readTime: "9 min",
      date: "2024-11-15",
      featured: false,
      tags: ["E-commerce", "Local SEO", "Conversion Optimization"]
    }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Blog SEO & Marketing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Estrategias, casos de estudio y tendencias en SEO. 
              Todo lo que necesitas para hacer crecer tu negocio online.
            </p>
            
            <div className="flex items-center justify-center bg-card border border-border rounded-2xl p-4 max-w-md mx-auto">
              <Search className="h-5 w-5 text-muted-foreground mr-3" />
              <input 
                type="text" 
                placeholder="Buscar artículos..." 
                className="bg-transparent outline-none flex-1 text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8">Artículos Destacados</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => {
                  const category = categories.find(cat => cat.id === post.category);
                  return (
                    <article 
                      key={post.id}
                      className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 bg-${category?.color}/10 text-${category?.color} text-sm font-medium rounded-full`}>
                          {category?.name}
                        </span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <div className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories & Posts */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? `bg-${category.color || 'primary'} text-white`
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const category = categories.find(cat => cat.id === post.category);
                return (
                  <article 
                    key={post.id}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 bg-${category?.color}/10 text-${category?.color} text-xs font-medium rounded-full`}>
                        {category?.name}
                      </span>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <span>
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Cargar Más Artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            No te pierdas las últimas estrategias
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Recibe cada semana insights exclusivos, casos de estudio y las últimas tendencias en SEO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email..." 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
            />
            <Button variant="secondary" size="lg">
              Suscribirme
            </Button>
          </div>
          
          <p className="text-sm text-white/60 mt-4">
            Sin spam. Solo contenido valioso. Cancela cuando quieras.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;