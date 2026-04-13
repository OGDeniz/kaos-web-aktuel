import type { Metadata } from 'next';
import Layout from '@/layouts/Layout';
import { faqPageData } from '@/data/faq-page';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen | KAOS Media',
  description:
    'Antworten auf die wichtigsten Fragen rund um Marketing, Agenturen, Google Ads, SEO und KI.',
};

export default function FAQPage() {
  return (
    <Layout>
      <FAQPageClient items={faqPageData} />
    </Layout>
  );
}
