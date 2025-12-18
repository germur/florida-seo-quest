import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDice from '@/components/FloatingDice';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'SEO Strategy & Consulting for Florida Businesses | Calvo Creativo',
    template: '%s | Calvo Creativo',
  },
  description: '7+ years scaling brands with SEO strategy, technical audits, and content that converts.',
  verification: {
    google: 'Pf6XqzotH9a91PubzzPMega091eBnBCtvqOWG_90xnE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Providers>
          <FloatingDice />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
