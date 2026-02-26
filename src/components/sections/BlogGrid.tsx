'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { BlogPost } from '@/app/api/blog/route';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <motion.article
          key={post.url}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 text-center flex flex-col"
        >
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-1">
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">{post.category}</span>
                <span className="text-text-muted text-xs">{post.readingTime} Min.</span>
              </div>
              <h3 className="text-white font-bold text-base group-hover:text-accent transition-colors leading-snug line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <p className="mt-4 text-text-muted text-xs">{post.date}</p>
            </div>
          </a>
        </motion.article>
      ))}
    </div>
  );
}
