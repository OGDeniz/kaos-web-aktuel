import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard – KAOS Media',
  description: 'Internes Dashboard von KAOS Media.',
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <div>Dashboard</div>;
}
