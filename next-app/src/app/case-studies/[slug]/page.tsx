import { Metadata } from 'next';
import CaseStudyDetail from '@/components/CaseStudyDetail';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Case Studies page - Access and manage your content',
};

export default function CaseStudyDetailPage() {
  return <CaseStudyDetail />;
}