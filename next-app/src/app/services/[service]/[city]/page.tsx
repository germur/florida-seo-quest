import { Metadata } from 'next';
import ServiceCityDetail from '@/components/ServiceCityDetail';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services page - Access and manage your content',
};

export default function ServiceCityDetailPage() {
  return <ServiceCityDetail />;
}