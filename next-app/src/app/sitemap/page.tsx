import { Metadata } from 'next';
import Sitemap from '@/components/Sitemap';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Sitemap page - Access and manage your content',
};

export default function SitemapPage() {
  return <Sitemap />;
}