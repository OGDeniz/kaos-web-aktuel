import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt – Kostenloses Erstgespräch sichern',
  description: 'Jetzt 30-minütiges Erstgespräch buchen: Wir analysieren deine Website, Ziele und Optimierungspotenziale kostenlos.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
