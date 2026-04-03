import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – KAOS Media',
  description: 'Datenschutzerklärung der KAOS Media gemäß DSGVO. Informationen zu Datenverarbeitung, Cookies, Google Analytics und deinen Rechten.',
  robots: { index: false, follow: false },
};

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
