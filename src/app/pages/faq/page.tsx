import type { Metadata } from 'next';
import Layout from '@/layouts/Layout';
import { faqPageData } from '@/data/faq-page';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen | KAOS Media',
  description: 'Antworten auf die wichtigsten Fragen rund um Marketing, Agenturen, Google Ads, SEO und KI.',
  alternates: { canonical: 'https://kaosmedia.de/pages/faq' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/pages/faq',
    title: 'FAQ – Häufige Fragen | KAOS Media',
    description: 'Antworten auf die wichtigsten Fragen rund um Marketing, Agenturen, Google Ads, SEO und KI.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media FAQ' }],
  },
};

export default function FAQPage() {
  return (
    <Layout>
      <FAQPageClient items={faqPageData} />
    </Layout>
  );
}
