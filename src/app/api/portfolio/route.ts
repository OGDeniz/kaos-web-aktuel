import { NextRequest, NextResponse } from 'next/server';
import { getPortfolio } from '@/lib/getPortfolio';

export type { PortfolioPost } from '@/types/portfolio';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') ?? '9', 10);
  const posts = await getPortfolio(limit);
  return NextResponse.json(posts);
}
