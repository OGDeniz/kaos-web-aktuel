import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – KAOS Media',
  description: 'Impressum und rechtliche Informationen von KAOS Media, Aichach und Barcelona.',
  robots: { index: false, follow: false },
};

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
