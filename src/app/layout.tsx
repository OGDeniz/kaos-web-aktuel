import '../styles/globals.css';
import { Manrope, Outfit } from 'next/font/google';
import type { Metadata } from 'next';
import ScrollProgress from '@/components/ui/ScrollProgress';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  icons: {
    icon: '/icons/favIcon.png',
  },
  title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
  description: 'Deine kreative Agentur für digitales Marketing aus Heidelberg. Branding, Webdesign, Content & Performance.',
  keywords: ['KAOS', 'Media', 'Branding', 'Webdesign', 'Strategie', 'Marketing', 'Heidelberg'],
  authors: [{ name: 'KAOS Media', url: 'https://kaosmedia.de' }],
  openGraph: {
    title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
    description: 'Deine kreative Agentur für digitales Marketing aus Heidelberg.',
    url: 'https://kaosmedia.de',
    siteName: 'KAOS Media',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media' }],
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.className} ${outfit.variable}`}>
      <body className="bg-background text-text-primary antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
