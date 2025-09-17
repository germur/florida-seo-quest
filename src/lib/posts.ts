// Post loader utility for dynamic post imports

export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  featured?: boolean;
  schema: any;
  content: string;
}

// Dynamic import function for posts
export const loadPost = async (slug: string): Promise<Post | null> => {
  try {
    const module = await import(`../posts/${slug}.ts`);
    return module.post;
  } catch (error) {
    console.error(`Failed to load post: ${slug}`, error);
    return null;
  }
};

// Get all available posts (you'll need to manually maintain this list or use a build-time script)
export const getAllPosts = async (): Promise<Post[]> => {
  const postSlugs = [
    'wordpress-affordable-solution-or-anchor',
    'seo-no-murio-hype-estrategia'
  ];
  
  const posts = await Promise.all(
    postSlugs.map(slug => loadPost(slug))
  );
  
  return posts.filter((post): post is Post => post !== null);
};

// Get posts by category
export const getPostsByCategory = async (category?: string): Promise<Post[]> => {
  const allPosts = await getAllPosts();
  
  if (!category || category === 'All') {
    return allPosts;
  }
  
  return allPosts.filter(post => post.category === category);
};

// Get featured posts
export const getFeaturedPosts = async (): Promise<Post[]> => {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.featured);
};

// Get related posts based on category and tags
export const getRelatedPosts = async (currentSlug: string, currentCategory?: string): Promise<Post[]> => {
  const allPosts = await getAllPosts();
  
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => !currentCategory || post.category === currentCategory)
    .slice(0, 2);
};