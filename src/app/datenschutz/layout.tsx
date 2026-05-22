import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – KAOS Media',
  description: 'Datenschutzerklärung der KAOS Media – DSGVO-konform. Informationen zu Cookies, Tracking und deinen Rechten.',
  robots: { index: false, follow: false },
};

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
