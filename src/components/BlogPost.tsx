'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Post, loadPost } from '@/lib/posts';
import { createRoot } from 'react-dom/client';
import { MarketShareChart, SentimentChart, FocusRadarChart, PriceProjectionChart } from '@/components/SemrushCharts';

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const loadedPost = await loadPost(slug);

      if (!loadedPost) {
        router.push('/blog');
      } else {
        setPost(loadedPost);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, router]);

  // Mount charts after content is rendered
  useEffect(() => {
    if (!post || !contentRef.current) return;

    // Chart placeholders mapping
    const chartComponents: Record<string, React.ComponentType> = {
      'chart-market-share': MarketShareChart,
      'chart-sentiment': SentimentChart,
      'chart-focus-radar': FocusRadarChart,
      'chart-price-projection': PriceProjectionChart,
    };

    const roots: any[] = [];

    // Find and mount each chart
    Object.entries(chartComponents).forEach(([id, Component]) => {
      const element = contentRef.current?.querySelector(`#${id}`);
      if (element && !element.hasAttribute('data-chart-mounted')) {
        const root = createRoot(element);
        root.render(<Component />);
        roots.push(root);
        element.setAttribute('data-chart-mounted', 'true');
      }
    });

    // Cleanup function to unmount charts
    return () => {
      roots.forEach(root => {
        try {
          root.unmount();
        } catch (e) {
          // Ignore unmount errors
        }
      });
    };
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <article className="container mx-auto px-6 py-12 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </header>

      <div
        ref={contentRef}
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags && post.tags.length > 0 && (
        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
