export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: 'business' | 'religious' | 'personal_growth';
  image: string;
  description: string;
  aiAnimationUrl?: string;
  tags: string[];
  rating: number;
}
