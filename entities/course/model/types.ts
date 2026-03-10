export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'it' | 'business' | 'design' | 'marketing';
  image: string;
  price: string;
  teacherId: string;
  shortDescription: string;
  fullDescription: string;
  whyLearn: string;
  curriculum: {
    title: string;
    lessons: string[];
  }[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
  }[];
}
