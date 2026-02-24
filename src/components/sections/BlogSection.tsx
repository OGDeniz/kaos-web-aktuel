'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const posts = [
  {
    title: 'Warum Branding mehr als ein Logo ist',
    category: 'Branding',
    date: '15. Januar 2026',
    excerpt: 'Eine starke Marke beginnt mit Strategie – nicht mit Farben und Fonts. Wir zeigen, worauf es wirklich ankommt.',
    image: '/blog/branding.jpg',
  },
  {
    title: '5 Webdesign-Trends für 2026',
    category: 'Webdesign',
    date: '8. Januar 2026',
    excerpt: 'Von Dark Mode über Micro-Interactions bis Scroll-Storytelling: Diese Trends prägen das Web in diesem Jahr.',
    image: '/blog/webdesign.jpg',
  },
  {
    title: 'Performance Marketing: Der ROI-Guide',
    category: 'Marketing',
    date: '2. Januar 2026',
    excerpt: 'Wie ihr mit datengetriebenen Kampagnen echte Ergebnisse erzielt – Schritt für Schritt erklärt.',
    image: '/blog/marketing.jpg',
  },
];

export default function BlogSection() {
  return (
    <SectionWrapper id="blog">
      <SectionHeading
        title="Insights & News"
        subtitle="Wissen, Trends und Einblicke aus der Welt des digitalen Marketings."
        label="Blog"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 text-center"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
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
                <span className="text-text-muted text-xs">{post.date}</span>
              </div>
              <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
              <p className="mt-3 text-text-secondary text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
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
