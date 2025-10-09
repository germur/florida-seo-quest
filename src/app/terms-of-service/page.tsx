import { Metadata } from 'next';
import TermsOfService from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms Of Service',
  description: 'Terms Of Service page - Access and manage your content',
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}