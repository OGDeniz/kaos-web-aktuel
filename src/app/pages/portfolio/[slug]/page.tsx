import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/layouts/Layout';
import { postRegistry } from '@/content/portfolio/index';
import styles from './page.module.css';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(postRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = postRegistry[slug];
  if (!entry) return {};
  return {
    title: `${entry.meta.title} | KAOS Media Portfolio`,
    description: entry.meta.excerpt,
  };
}

export default async function PortfolioPostPage({ params }: Props) {
  const { slug } = await params;
  const entry = postRegistry[slug];
  if (!entry) notFound();

  const { meta, Content } = entry;

  return (
    <Layout>
      <article className={styles.article}>
        <div className={styles.inner}>

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link href="/pages/portfolio" className={styles.backLink}>
              <span>&#8592;</span> Zurück zum Portfolio
            </Link>
          </nav>

          {/* Meta */}
          <div className={styles.metaBlock}>
            <div className={styles.metaRow}>
              <span className={styles.metaCategory}>{meta.category}</span>
              <span className={styles.metaSeparator}>·</span>
              <span className={styles.metaText}>{meta.readingTime} Min. Lesezeit</span>
              <span className={styles.metaSeparator}>·</span>
              <span className={styles.metaText}>{meta.date}</span>
            </div>
            <h1 className={styles.postTitle}>{meta.title}</h1>
            <p className={styles.postExcerpt}>{meta.excerpt}</p>
          </div>

          {/* Cover Image */}
          <div className={styles.coverWrapper}>
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Article Content */}
          <div className={styles.articleContent}>
            <Content />
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Interesse geweckt? Wir beraten euch gerne persönlich.
            </p>
            <Link href="/pages/contact" className={styles.ctaButton}>
              Jetzt Kontakt aufnehmen
            </Link>
          </div>

        </div>
      </article>
    </Layout>
  );
}
