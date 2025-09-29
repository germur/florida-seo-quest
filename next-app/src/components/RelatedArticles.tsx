'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getRelatedPosts, Post } from "@/lib/posts";

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory?: string;
}

const RelatedArticles = ({ currentSlug, currentCategory }: RelatedArticlesProps) => {
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const relatedPosts = await getRelatedPosts(currentSlug, currentCategory);
      setArticles(relatedPosts);
    };

    fetchRelatedPosts();
  }, [currentSlug, currentCategory]);

  if (articles.length === 0) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "SEO Strategy":
        return "bg-electric-blue/10 text-electric-blue border-electric-blue/20";
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
        <h3 className="text-xl font-bold text-primary">Related Articles</h3>
      </div>
      <div className="grid gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
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
              {article.metaDescription}
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
          <Link href="/blog">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RelatedArticles;