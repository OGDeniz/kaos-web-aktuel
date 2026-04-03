import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preise – Transparente Pakete & Konditionen',
  description: 'Faire und flexible Preise: Startup-Pakete ab 2.200 €, monatliche Betreuungspakete ab 240 €/Monat – bis zu 50 % staatlich förderbar.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/preise' },
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
