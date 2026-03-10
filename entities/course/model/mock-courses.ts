import { Course } from './types';

export const mockCourses: Course[] = [
  {
    id: '1',
    slug: 'fullstack-react-mastery',
    title: 'Fullstack React Mastery',
    category: 'it',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    price: '$299',
    teacherId: '1',
    shortDescription: 'Master modern web development from basics to advanced cloud deployment.',
    fullDescription: 'This comprehensive course covers everything you need to become a professional Fullstack developer. We start with the core concepts of React and move through Node.js, databases, and DevOps.',
    whyLearn: 'The IT industry is booming, and React developers are in the highest demand globally. Mastering this stack opens doors to international remote work and high salaries.',
    curriculum: [
      {
        title: 'Modern Frontend with React',
        lessons: ['Introduction to Hooks', 'State Management with Redux/Zustand', 'Performance Optimization']
      },
      {
        title: 'Backend & API Design',
        lessons: ['Express.js Fundamentals', 'PostgreSQL vs MongoDB', 'Authentication with JWT']
      }
    ],
    reviews: [
      { id: 'r1', user: 'Aziz Bek', rating: 5, comment: 'Best course ever! I got a job after 3 months of learning.' },
      { id: 'r2', user: 'Zarina', rating: 4, comment: 'Very deep content, though some parts are challenging.' }
    ]
  },
  {
    id: '2',
    slug: 'digital-marketing-pro',
    title: 'Digital Marketing Excellence',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=450&fit=crop',
    price: '$150',
    teacherId: '2',
    shortDescription: 'Learn how to build a brand and drive sales using modern digital tools.',
    fullDescription: 'In this course, we dive deep into SMM, SEO, and paid advertising. You will learn how to create marketing strategies that actually work for businesses.',
    whyLearn: 'In a digital world, marketing is the heart of every business. Knowing how to attract customers is a skill that will never become obsolete.',
    curriculum: [
      {
        title: 'Social Media Strategy',
        lessons: ['Content Planning', 'TikTok & Instagram Algorithms', 'Targeted Ads']
      }
    ],
    reviews: [
      { id: 'r3', user: 'Davron', rating: 5, comment: 'Helped me grow my business account from 1k to 50k followers.' }
    ]
  }
];
