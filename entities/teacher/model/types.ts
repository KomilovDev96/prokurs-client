export interface Teacher {
  id: string;
  slug: string;
  name: string;
  image: string;
  experienceYears: number;
  specialization: string;
  bio: string;
  achievements: string[];
  socials: {
    instagram?: string;
    telegram?: string;
    linkedin?: string;
    youtube?: string;
  };
  portfolio: {
    id: string;
    title: string;
    image: string;
  }[];
}
