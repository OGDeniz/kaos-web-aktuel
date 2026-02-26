import { NextRequest, NextResponse } from 'next/server';

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  url: string;
  readingTime: number;
}

const TAG_QUERIES = [
  'marketing',
  'webdev',
  'design',
  'seo',
  'branding',
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') ?? '9', 10);

  try {
    const results = await Promise.all(
      TAG_QUERIES.map(tag =>
        fetch(
          `https://dev.to/api/articles?tag=${tag}&per_page=5&top=7`,
          { next: { revalidate: 3600 } }
        ).then(r => r.json())
      )
    );

    const seen = new Set<number>();
    const posts: BlogPost[] = [];

    for (const articles of results) {
      if (!Array.isArray(articles)) continue;
      for (const a of articles) {
        if (seen.has(a.id) || !a.cover_image) continue;
        seen.add(a.id);
        posts.push({
          title: a.title,
          excerpt: a.description ?? '',
          image: a.cover_image,
          category: a.tag_list?.[0] ?? 'Tech',
          date: formatDate(a.published_at),
          url: a.url,
          readingTime: a.reading_time_minutes ?? 5,
        });
        if (posts.length >= limit) break;
      }
      if (posts.length >= limit) break;
    }

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
