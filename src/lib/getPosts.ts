import { localPosts } from '@/content/blog/index';
import type { BlogPost } from '@/types/blog';

export async function getPosts(limit = 9): Promise<BlogPost[]> {
  return localPosts.slice(0, limit);
}
