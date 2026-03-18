import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/lib/getPosts';

// Re-export so existing imports like `import type { BlogPost } from '@/app/api/blog/route'` keep working
export type { BlogPost } from '@/types/blog';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') ?? '9', 10);
  const posts = await getPosts(limit);
  return NextResponse.json(posts);
}
