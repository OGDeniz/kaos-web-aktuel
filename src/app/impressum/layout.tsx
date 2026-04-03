import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – KAOS Media',
  description: 'Impressum der KAOS Media mit Angaben zu Geschäftsführern, Kontakt, Steuernummer und Haftungsausschluss.',
  robots: { index: false, follow: false },
};

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
