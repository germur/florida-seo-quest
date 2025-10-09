import { Metadata } from 'next';
import HowWeWork from '@/components/HowWeWork';

export const metadata: Metadata = {
  title: 'How We Work',
  description: 'How We Work page - Access and manage your content',
};

export default function HowWeWorkPage() {
  return <HowWeWork />;
}