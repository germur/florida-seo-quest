import { Metadata } from 'next';
import Resources from '@/components/Resources';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Resources page - Access and manage your content',
};

export default function ResourcesPage() {
  return <Resources />;
}