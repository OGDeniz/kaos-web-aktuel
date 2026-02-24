import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
  description: 'Deine kreative Agentur für digitales Marketing aus Heidelberg. Branding, Webdesign, Content & Performance.',
  keywords: ['KAOS', 'Media', 'Branding', 'Webdesign', 'Strategie', 'Marketing', 'Heidelberg'],
  authors: [{ name: 'KAOS Media', url: 'https://kaos.media' }],
  openGraph: {
    title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
    description: 'Deine kreative Agentur für digitales Marketing aus Heidelberg.',
    url: 'https://kaos.media',
    siteName: 'KAOS Media',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media' }],
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
