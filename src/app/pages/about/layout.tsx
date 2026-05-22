import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns – Die Macher von KAOS Media',
  description: 'Das Team hinter KAOS Media: Florian, Anna und Deniz. Boutique-Agentur mit Gründer-Know-how und Herzblut.',
  alternates: { canonical: 'https://kaosmedia.de/pages/about' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/about',
    title: 'Über uns – Die Macher von KAOS Media',
    description: 'Das Team hinter KAOS Media: Florian, Anna und Deniz. Boutique-Agentur mit Gründer-Know-how und Herzblut.',
    images: [{ url: 'https://kaosmedia.de/og-image.png', width: 1200, height: 630, alt: 'KAOS Media Team' }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
