import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leistungen – Branding, Webdesign, Content & Performance',
  description: 'Unsere Services: Branding & Positionierung, Web Design & Development, Content & Social Media, Performance & Automatisierung – bis zu 50 % förderbar.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/leistungen' },
};

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
