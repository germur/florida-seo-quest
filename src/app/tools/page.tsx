import { Metadata } from 'next';
import Resources from '@/components/Resources';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Tools page - Access and manage your content',
};

export default function ResourcesPage() {
  return <Resources />;
}