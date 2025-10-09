import { Metadata } from 'next';
import CaseStudies from '@/components/CaseStudies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Case Studies page - Access and manage your content',
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}