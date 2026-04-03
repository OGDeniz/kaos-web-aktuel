import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KAOS Media – Kreativität trifft Struktur',
  description: 'Kreativagentur für digitales Marketing aus Heidelberg. Branding, Webdesign, Social Media & Strategie – Perfektion entsteht nur im KAOS.',
  alternates: { canonical: 'https://www.kaosmedia.de/start' },
};

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
