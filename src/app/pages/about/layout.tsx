import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns – Die Macher von KAOS Media',
  description: 'Lern das Team hinter KAOS Media kennen: drei Gründer, eine Philosophie – kreativ, analytisch, originell, strukturiert.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
