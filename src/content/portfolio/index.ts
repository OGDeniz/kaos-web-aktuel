import type React from 'react';
import type { LocalPortfolioPost } from '@/types/portfolio';
import { meta as osteopathieMeta, default as OsteopathieContent } from './posts/osteopathie-weichselfelder';
import { meta as buerokratieMeta, default as BuerokratieContent } from './posts/buerokratiekompass';
import { meta as schluesselMeta, default as SchluesselContent } from './posts/schluesselrp';
import { meta as stickereimeta, default as StickereiContent } from './posts/stickerei-zschoche';

export const postRegistry: Record<
  string,
  { meta: LocalPortfolioPost; Content: React.ComponentType }
> = {
  'portfolio-osteopathie-weichselfelder': {
    meta: osteopathieMeta,
    Content: OsteopathieContent,
  },
  'portfolio-buerokratiekompass': {
    meta: buerokratieMeta,
    Content: BuerokratieContent,
  },
  'portfolio-schluesselrp': {
    meta: schluesselMeta,
    Content: SchluesselContent,
  },
  'portfolio-stickerei-zschoche': {
    meta: stickereimeta,
    Content: StickereiContent,
  },
};

export const localPosts: LocalPortfolioPost[] = Object.values(postRegistry).map((p) => p.meta);
