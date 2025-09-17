import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Calendar, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SocialShare from "@/components/SocialShare";
import RelatedArticles from "@/components/RelatedArticles";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { addSchema } from "@/lib/seo";
import { loadPost, Post } from "@/lib/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  // All hooks must be at the top level - never after conditional returns
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const postData = await loadPost(slug);
      setPost(postData);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post?.schema) {
      addSchema(post.schema, 'article');
    }
  }, [post]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-8"></div>
                <div className="h-64 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO 
        page="blog"
        customTitle={post.metaTitle}
        customDescription={post.metaDescription}
        customCanonical={`https://calvocreativo.com/blog/${post.slug}`}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary font-medium">{post.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <article 
              className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t border-border pt-8 mb-16">
              <SocialShare 
                url={`https://calvocreativo.com/blog/${post.slug}`}
                title={post.title}
                description={post.metaDescription}
              />
            </div>

            <RelatedArticles 
              currentSlug={post.slug}
              currentCategory={post.category}
            />

            <div className="bg-gradient-to-br from-primary/5 to-electric-blue/5 border border-primary/20 rounded-2xl p-8 mt-16 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Transform Your SEO Strategy?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let your competitors dominate search results. Get a personalized SEO audit and strategy that delivers real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Your Free SEO Audit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPost;