import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services page - Access and manage your content',
};

export default function ServiceDetailPage() {
  return <ServiceDetail />;
}