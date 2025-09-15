import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const posts = [
    {
      title: "Topical Authority: Why It Wins in 2025",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      excerpt: "How semantic SEO and content clusters drive sustainable growth.",
      color: "from-teal/10 to-transparent"
    },
    {
      title: "AI in SEO: Practical Uses (No Hype)",
      date: "Mar 10, 2024", 
      readTime: "7 min read",
      excerpt: "Real AI applications that actually improve SEO workflows.",
      color: "from-electric-blue/10 to-transparent"
    },
    {
      title: "Florida SEO: Strategies That Work",
      date: "Mar 5, 2024",
      readTime: "6 min read", 
      excerpt: "Local insights and strategies for dominating Florida markets.",
      color: "from-bright-orange/10 to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Brand Circle Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, hsl(var(--teal)) 8%, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(var(--bright-orange)) 6%, transparent 40%),
              radial-gradient(circle at 60% 10%, hsl(var(--electric-blue)) 4%, transparent 30%)
            `,
            backgroundSize: '250px 250px, 180px 180px, 300px 300px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Floating Brand Analytics Icon */}
          <div className="absolute top-12 right-12 opacity-15">
            <svg className="h-16 w-16 text-electric-blue" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="32" width="6" height="8" fill="hsl(var(--neutral-gray))"/>
              <rect x="18" y="20" width="6" height="20" fill="hsl(var(--bright-orange))"/>
              <rect x="28" y="16" width="6" height="24" fill="hsl(var(--teal))"/>
              <rect x="38" y="8" width="6" height="32" fill="currentColor"/>
              <path d="M6 40h36" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            Learn SEO & AI in Action
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <article 
                key={index}
                className={`bg-gradient-to-br ${post.color} bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-teal font-medium group-hover:text-electric-blue transition-colors">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/blog">
                Visit the Blog
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;