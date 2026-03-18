export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  url: string;
  readingTime: number;
}

export interface LocalBlogPost extends BlogPost {
  slug: string;
}
