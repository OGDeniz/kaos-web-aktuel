import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preise – Transparente Pakete & Konditionen | KAOS Media',
  description: 'Transparente Preise für Branding, Webdesign, SEO und Social Media. Flexible Pakete, monatlich kündbar, bis zu 50 % staatlich förderbar.',
  alternates: { canonical: 'https://kaosmedia.de/pages/preise' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/preise',
    title: 'Preise – Transparente Pakete & Konditionen | KAOS Media',
    description: 'Transparente Preise für Branding, Webdesign, SEO und Social Media. Flexible Pakete, monatlich kündbar, bis zu 50 % staatlich förderbar.',
    images: [{ url: 'https://kaosmedia.de/og-image.png', width: 1200, height: 630, alt: 'KAOS Media Preise' }],
  },
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
