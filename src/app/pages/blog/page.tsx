"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";

const blogPosts = [
  {
    title: "Kreatives Webdesign: Trends 2026",
    excerpt: "Welche Designtrends setzen sich durch? Ein Blick auf Typografie, Animationen und UX-Prinzipien.",
    image: "/blog/designtrends.jpg",
    category: "Webdesign",
    date: "15. Januar 2026",
  },
  {
    title: "Strategisches Branding für KMU",
    excerpt: "Wie du deine Marke klar positionierst und Vertrauen bei deiner Zielgruppe aufbaust.",
    image: "/blog/branding-kmu.jpg",
    category: "Branding",
    date: "8. Januar 2026",
  },
  {
    title: "SEO in Klartext erklärt",
    excerpt: "Ohne Bullshit: Worauf es bei Suchmaschinenoptimierung wirklich ankommt.",
    image: "/blog/seo-guide.jpg",
    category: "SEO",
    date: "2. Januar 2026",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="mx-auto max-w-5xl space-y-20">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Blog</span>
              <div className="w-12 h-[3px] bg-accent rounded-full" />
            </div>
            <h1 className="text-white">Insights & Ideen</h1>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Aktuelle Themen, kreative Impulse & bewährte Strategien rund um Branding, Webdesign und digitales Marketing.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 cursor-pointer text-center"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest">{post.category}</span>
                    <span className="text-text-muted text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
