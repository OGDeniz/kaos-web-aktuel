import type { Metadata } from 'next';
import Layout from "@/layouts/Layout";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { getPortfolio } from "@/lib/getPortfolio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: 'Portfolio – Unsere Arbeiten',
  description: 'Ausgewählte Projekte von KAOS Media: Von der ersten Idee bis zum fertigen Webauftritt. Branding, Webdesign und mehr.',
  alternates: { canonical: 'https://www.kaosmedia.de/pages/portfolio' },
};

export default async function PortfolioPage() {
  const posts = await getPortfolio(9);

  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.container}>

          {/* Header */}
          <div className={styles.header}>
            <div className={styles.eyebrowRow}>
              <div className={styles.eyebrowLine} />
              <span className={styles.eyebrowLabel}>Portfolio</span>
              <div className={styles.eyebrowLine} />
            </div>
            <h1 className={styles.h1}>Unsere Arbeiten</h1>
            <p className={styles.headerSubtext}>
              Ausgewählte Projekte, die wir für unsere Kunden realisiert haben – von der ersten Idee bis zum fertigen Webauftritt.
            </p>
          </div>

          {posts.length > 0 ? (
            <PortfolioGrid posts={posts} />
          ) : (
            <p className={styles.emptyState}>Keine Artikel geladen.</p>
          )}

        </div>
      </section>
    </Layout>
  );
}
