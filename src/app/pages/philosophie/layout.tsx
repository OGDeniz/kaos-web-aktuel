import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophie – Perfektion entsteht nur mit KAOS',
  description: 'Unsere vier Säulen: Mut, Klarheit, Authentizität und Transparenz. Wir arbeiten für Menschen, nicht für Awards – für nachhaltigen Erfolg.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/philosophie' },
};

export default function PhilosophieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
