import { Metadata } from 'next';
import CookiePolicy from '@/components/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy page - Access and manage your content',
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}