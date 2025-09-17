import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const posts = [
    {
      id: "wordpress-affordable-solution-or-anchor",
      title: "WordPress: Affordable Solution or Anchor of Problems?",
      date: "Jan 20, 2025",
      readTime: "10 min read",
      excerpt: "WordPress powers 40% of websites, but is it really the ideal solution? A critical analysis of hidden costs, maintenance burdens, and performance issues.",
      color: "from-bright-orange/10 to-transparent"
    },
    {
      id: "seo-didnt-die-hype-strategy",
      title: "SEO Didn't Die: From Hype to Strategy That Actually Works",
      date: "Jan 15, 2025", 
      readTime: "12 min read",
      excerpt: "Critical analysis of digital marketing trends: voice, visual and AEO. Why real SEO remains what Google has wanted for 20 years.",
      color: "from-electric-blue/10 to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            Learn SEO & AI in Action
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {posts.map((post, index) => (
              <Link key={index} to={`/blog/${post.id}`} className="block">
                <article 
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
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-electric-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-electric-blue font-medium group-hover:text-bright-orange transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
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