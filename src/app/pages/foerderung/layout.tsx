import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Förderung – Bis zu 50 % staatliche Förderung | KAOS Media',
  description: 'Digitales Marketing bis zu 50 % staatlich förderbar – BAFA, go-digital, Landesprogramme. Kostenloser Förder-Check von KAOS Media.',
  alternates: { canonical: 'https://kaosmedia.de/pages/foerderung' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/foerderung',
    title: 'Förderung – Bis zu 50 % staatliche Förderung | KAOS Media',
    description: 'Digitales Marketing bis zu 50 % staatlich förderbar – BAFA, go-digital, Landesprogramme. Kostenloser Förder-Check von KAOS Media.',
    images: [{ url: 'https://kaosmedia.de/og-image.png', width: 1200, height: 630, alt: 'KAOS Media Förderung' }],
  },
};

export default function FoerderungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
