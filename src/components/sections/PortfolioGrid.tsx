'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioPost } from '@/app/api/portfolio/route';
import styles from './PortfolioGrid.module.css';

function CardInner({ post }: { post: PortfolioPost }) {
  return (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={styles.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.cardCategory}>{post.category}</span>
          <span className={styles.cardReadingTime}>{post.readingTime} Min.</span>
        </div>
        <h3 className={styles.cardTitle}>
          {post.title}
        </h3>
        <p className={styles.cardExcerpt}>
          {post.excerpt}
        </p>
        <p className={styles.cardDate}>{post.date}</p>
      </div>
    </>
  );
}

export default function PortfolioGrid({ posts }: { posts: PortfolioPost[] }) {
  return (
    <div className={styles.grid}>
      {posts.map((post, i) => {
        const isInternal = post.url.startsWith('/');
        return (
          <motion.article
            key={post.url}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={styles.card}
          >
            {isInternal ? (
              <Link href={post.url} className={styles.cardLink}>
                <CardInner post={post} />
              </Link>
            ) : (
              <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                <CardInner post={post} />
              </a>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}
