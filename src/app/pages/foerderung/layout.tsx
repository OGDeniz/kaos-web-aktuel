import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Förderung – Bis zu 50 % staatliche Förderung',
  description: 'Digitales Marketing teilweise staatlich gefördert: BAFA, go-digital und regionale Programme. Wir begleiten dich durch den Prozess – kostenlos und unverbindlich.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/foerderung' },
};

export default function FoerderungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
