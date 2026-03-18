'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import type { PortfolioPost } from '@/app/api/portfolio/route';
import styles from './ReferenzenSection.module.css';

function SkeletonCard() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonBody}>
        <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLineFull}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLineMd}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLineSm}`} />
      </div>
    </div>
  );
}

export default function ReferenzenSection() {
  const [posts, setPosts] = useState<PortfolioPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio?limit=3')
      .then(r => r.ok ? r.json() : [])
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper id="referenzen">
      <SectionHeading
        title="Unsere Arbeiten"
        subtitle="Ein Einblick in ausgewählte Projekte, die wir für unsere Kunden umgesetzt haben."
        label="Portfolio"
      />

      <div className={styles.grid}>
        {loading
          ? [0, 1, 2].map(i => <SkeletonCard key={i} />)
          : posts.map((post, i) => {
            const isInternal = post.url.startsWith('/');
            const cardContent = (
              <>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{post.category}</span>
                    <span className={styles.cardReadingTime}>{post.readingTime} Min.</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                </div>
              </>
            );
            return (
              <motion.article
                key={post.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={styles.card}
              >
                {isInternal ? (
                  <Link href={post.url}>{cardContent}</Link>
                ) : (
                  <a href={post.url} target="_blank" rel="noopener noreferrer">{cardContent}</a>
                )}
              </motion.article>
            );
          })
        }
      </div>

      <div className={styles.allProjectsLink}>
        <Link href="/pages/portfolio" className={styles.allProjectsAnchor}>
          Alle Projekte ansehen
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
