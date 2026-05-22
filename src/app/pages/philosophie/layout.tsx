import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophie – Perfektion entsteht nur mit KAOS',
  description: 'Perfektion entsteht nur im Chaos. Kreativ, analytisch, originell, strukturiert – die Philosophie hinter KAOS Media.',
  alternates: { canonical: 'https://kaosmedia.de/pages/philosophie' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/philosophie',
    title: 'Philosophie – Perfektion entsteht nur mit KAOS',
    description: 'Perfektion entsteht nur im Chaos. Kreativ, analytisch, originell, strukturiert – die Philosophie hinter KAOS Media.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media Philosophie' }],
  },
};

export default function PhilosophieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
