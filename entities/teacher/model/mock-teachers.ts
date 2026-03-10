import { Teacher } from './types';

export const mockTeachers: Teacher[] = [
  {
    id: '1',
    slug: 'alisher-rustamov',
    name: 'Alisher Rustamov',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    experienceYears: 12,
    specialization: 'Senior Fullstack Engineer & Mentor',
    bio: 'Alisher has over 12 years of experience in building scalable web applications. He specialized in React, Node.js and Cloud architectures.',
    achievements: [
      'Built 50+ successful commercial projects',
      'Mentored over 500 students who now work in Top IT companies',
      'Google Certified Professional Cloud Architect'
    ],
    socials: {
      instagram: 'https://instagram.com/',
      telegram: 'https://t.me/',
      linkedin: 'https://linkedin.com/'
    },
    portfolio: [
      { id: 'p1', title: 'FinTech Dashboard', image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?w=400&h=300&fit=crop' },
      { id: 'p2', title: 'E-commerce App', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop' }
    ]
  },
  {
    id: '2',
    slug: 'madina-ikramova',
    name: 'Madina Ikramova',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    experienceYears: 8,
    specialization: 'Business Strategy & Marketing Expert',
    bio: 'Madina is a certified coach and business consultant. She helps start-ups grow from zero to million dollar revenue.',
    achievements: [
      'Fortune 500 consultant',
      'Author of "Modern Business Ecosystems"',
      'Speaker at TEDx Tashkent'
    ],
    socials: {
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/'
    },
    portfolio: [
      { id: 'p3', title: 'Growth Strategy for Bank', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' }
    ]
  }
];
