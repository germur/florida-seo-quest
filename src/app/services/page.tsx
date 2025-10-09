import { Metadata } from 'next';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services page - Access and manage your content',
};

export default function ServicesPage() {
  return <Services />;
}