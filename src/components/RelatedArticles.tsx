import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  tags: string[];
}

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory?: string;
}

const RelatedArticles = ({ currentSlug, currentCategory }: RelatedArticlesProps) => {
  // Mock data - in a real app this would come from your blog data
  const allArticles: Article[] = [
    {
      slug: "seo-no-murio-hype-estrategia",
      title: "SEO no murió: del hype a la estrategia que sí funciona",
      excerpt: "Un análisis profundo sobre las modas del SEO y qué estrategias realmente funcionan en 2025.",
      readTime: "12 min",
      category: "SEO Strategy",
      tags: ["SEO Myths", "Voice Search", "Visual Search", "AEO"]
    },
    {
      slug: "wordpress-affordable-solution-or-anchor",
      title: "WordPress: Affordable Solution or Anchor of Problems?",
      excerpt: "Exploring the real pros and cons of WordPress for your next project and when it becomes more of a hindrance than help.",
      readTime: "15 min",
      category: "Web Development",
      tags: ["WordPress", "CMS", "Performance", "SEO Issues"]
    }
  ];

  // Filter out current article and get related articles
  const relatedArticles = allArticles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 2);

  // If no related articles, show all except current
  const articlesToShow = relatedArticles.length > 0 ? relatedArticles : allArticles.filter(a => a.slug !== currentSlug).slice(0, 2);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "SEO Strategy":
        return "bg-teal/10 text-teal border-teal/20";
      case "Web Development":
        return "bg-purple/10 text-purple border-purple/20";
      default:
        return "bg-blue/10 text-blue border-blue/20";
    }
  };

  return (
    <div className="bg-gradient-to-br from-background to-muted/20 border border-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">Más artículos</h3>
      </div>

      <div className="grid gap-6">
        {articlesToShow.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="group block p-6 bg-background border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
              {article.title}
            </h4>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-3 h-3 text-muted-foreground" />
                <div className="flex gap-1">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      {tag}
                      {index < article.tags.slice(0, 2).length - 1 && ", "}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
              
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link to="/blog">
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RelatedArticles;