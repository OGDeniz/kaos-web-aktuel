import Layout from '@/layouts/Layout';
import BlogGrid from '@/components/sections/BlogGrid';
import type { BlogPost } from '@/app/api/blog/route';

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/blog?limit=9`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Layout>
      <section className="px-6 md:px-12 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto max-w-5xl space-y-20">

          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.75 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Blog</span>
              <div className="w-12 h-0.75 bg-accent rounded-full" />
            </div>
            <h1 className="text-white">Insights & Ideen</h1>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Aktuelle Themen, kreative Impulse & bewährte Strategien rund um Branding, Webdesign und digitales Marketing.
            </p>
          </div>

          {posts.length > 0 ? (
            <BlogGrid posts={posts} />
          ) : (
            <p className="text-center text-text-muted">Keine Artikel geladen.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
