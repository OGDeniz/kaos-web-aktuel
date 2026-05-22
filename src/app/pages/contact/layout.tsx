import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt – Kostenloses Erstgespräch sichern | KAOS Media',
  description: 'Kostenlose 30-Minuten Strategie-Session mit KAOS Media. Website-Analyse, konkrete Empfehlungen, keine Verpflichtung.',
  alternates: { canonical: 'https://kaosmedia.de/pages/contact' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/contact',
    title: 'Kontakt – Kostenloses Erstgespräch sichern | KAOS Media',
    description: 'Kostenlose 30-Minuten Strategie-Session mit KAOS Media. Website-Analyse, konkrete Empfehlungen, keine Verpflichtung.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media Kontakt' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
