import { localPosts } from '@/content/portfolio/index';
import type { PortfolioPost } from '@/types/portfolio';

export async function getPortfolio(limit = 9): Promise<PortfolioPost[]> {
  return localPosts.slice(0, limit);
}
