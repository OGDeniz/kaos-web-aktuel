'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import type { BlogPost } from '@/app/api/blog/route';

function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-surface border border-border overflow-hidden animate-pulse">
      <div className="h-48 bg-surface-light" />
      <div className="p-6 space-y-3">
        <div className="h-3 w-24 bg-surface-light rounded mx-auto" />
        <div className="h-5 bg-surface-light rounded" />
        <div className="h-4 bg-surface-light rounded w-5/6 mx-auto" />
        <div className="h-4 bg-surface-light rounded w-4/6 mx-auto" />
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog?limit=3')
      .then(r => r.ok ? r.json() : [])
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper id="blog">
      <SectionHeading
        title="Insights & News"
        subtitle="Wissen, Trends und Einblicke aus der Welt des digitalen Marketings."
        label="Blog"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {loading
          ? [0, 1, 2].map(i => <SkeletonCard key={i} />)
          : posts.map((post, i) => (
            <motion.article
              key={post.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 text-center"
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest">{post.category}</span>
                    <span className="text-text-muted text-xs">{post.readingTime} Min.</span>
                  </div>
                  <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors leading-snug line-clamp-2">{post.title}</h3>
                  <p className="mt-3 text-text-secondary text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
              </a>
            </motion.article>
          ))
        }
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/pages/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors text-lg"
        >
          Alle Beiträge lesen
          <span className="text-xl">&rarr;</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
