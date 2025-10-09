import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  // Aquí podrías cargar metadata del post si la tienes
  return {
    title: `${slug} - Calvo Creativo Blog`,
    description: `Read about ${slug} on Calvo Creativo`,
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  
  return <BlogPost slug={slug} />;
}
