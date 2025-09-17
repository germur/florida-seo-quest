import { useState, useEffect } from "react";
import { Search, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { getAllPosts, getFeaturedPosts, getPostsByCategory, Post } from "@/lib/posts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "SEO Strategy", "Web Development", "Digital Marketing", "Case Studies"];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const [allPosts, featured] = await Promise.all([
          getAllPosts(),
          getFeaturedPosts()
        ]);
        setPosts(allPosts);
        setFeaturedPosts(featured);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchFilteredPosts = async () => {
      const filtered = await getPostsByCategory(selectedCategory);
      setPosts(filtered);
    };

    if (selectedCategory) {
      fetchFilteredPosts();
      console.log('Posts loaded:', posts);
      console.log('Featured posts:', featuredPosts);
      console.log('Regular posts:', regularPosts);
      console.log('Filtered posts:', filteredPosts);
    }
  }, [selectedCategory]);

  // Filter posts based on selected category
  const regularPosts = posts.filter(post => !post.featured);
  const filteredPosts = selectedCategory === "All" 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen pt-16">
      <SEO page="blog" />
      <Header />
      
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

      {/* Featured Articles */}
      {!loading && featuredPosts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12">Featured Articles</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featuredPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block"
                  >
                    <article className="bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className={`px-3 py-1 rounded-full font-medium ${
                          post.category === 'SEO Strategy' ? 'bg-electric-blue/10 text-electric-blue' :
                          post.category === 'Web Development' ? 'bg-bright-orange/10 text-bright-orange' :
                          'bg-teal/10 text-teal'
                        }`}>
                          {post.category}
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
                        {post.metaDescription}
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
                  </Link>
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
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-teal text-white'
                      : 'bg-card text-muted-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      {loading ? (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-8 bg-muted rounded mb-4"></div>
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded mb-8"></div>
                    <div className="h-32 bg-muted rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredPosts.length === 0 ? (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-muted-foreground text-lg">No articles found for this category.</p>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <Link 
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="block"
                    >
                      <article className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
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
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {post.metaDescription}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 text-xs rounded font-medium ${
                            post.category === 'SEO Strategy' ? 'bg-electric-blue/10 text-electric-blue' :
                            post.category === 'Web Development' ? 'bg-bright-orange/10 text-bright-orange' :
                            'bg-teal/10 text-teal'
                          }`}>
                            {post.category}
                          </span>
                          
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-teal group-hover:translate-x-1 transition-all" />
                        </div>
                      </article>
                    </Link>
                  ))
                )}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">No articles found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get weekly insights and strategies to grow your business with SEO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">
                Subscribe
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;