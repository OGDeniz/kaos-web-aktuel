import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leistungen – Branding, Webdesign & Performance | KAOS Media',
  description: 'Branding, Webdesign, Content, Social Media und Performance Marketing – strukturierte Services, kreative Ergebnisse.',
  alternates: { canonical: 'https://kaosmedia.de/pages/leistungen' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/leistungen',
    title: 'Leistungen – Branding, Webdesign & Performance | KAOS Media',
    description: 'Branding, Webdesign, Content, Social Media und Performance Marketing – strukturierte Services, kreative Ergebnisse.',
    images: [{ url: 'https://kaosmedia.de/og-image.png', width: 1200, height: 630, alt: 'KAOS Media Leistungen' }],
  },
};

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
