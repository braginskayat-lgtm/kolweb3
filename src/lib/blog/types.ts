export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  content: BlogSection[];
}

export interface BlogSection {
  id: string;
  heading: string;
  level: 2 | 3;
  body: string; // HTML string
}
