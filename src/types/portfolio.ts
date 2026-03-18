export interface PortfolioPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  url: string;
  readingTime: number;
}

export interface LocalPortfolioPost extends PortfolioPost {
  slug: string;
}
