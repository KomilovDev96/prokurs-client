import { Book } from './types';

export const mockBooks: Book[] = [
    {
        id: '1',
        slug: 'think-and-grow-rich',
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        category: 'business',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
        description: 'The classic guide to success that has sold millions of copies worldwide.',
        aiAnimationUrl: '/animations/rich.mp4',
        tags: ['Mindset', 'Success', 'Legacy'],
        rating: 4.8
    },
    {
        id: '2',
        slug: 'atomic-habits',
        title: 'Atomic Habits',
        author: 'James Clear',
        category: 'personal_growth',
        image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop',
        description: 'An easy and proven way to build good habits and break bad ones.',
        tags: ['Habits', 'Productivity', 'Psychology'],
        rating: 4.9
    },
    {
        id: '3',
        slug: 'prophet-biography',
        title: 'The Sealed Nectar',
        author: 'Safiur Rahman Mubarakpuri',
        category: 'religious',
        image: 'https://images.unsplash.com/photo-1585036156171-3839efc23101?w=400&h=600&fit=crop',
        description: 'A comprehensive biography of the Prophet Muhammad (PBUH).',
        aiAnimationUrl: '/animations/history.mp4',
        tags: ['History', 'Spirituality', 'Islam'],
        rating: 5.0
    }
];

export const mockBookCategories = [
    { id: 'business', labelRu: 'Бизнес', labelUz: 'Biznes', labelEn: 'Business' },
    { id: 'religious', labelRu: 'Религия', labelUz: 'Din', labelEn: 'Religion' },
    { id: 'personal_growth', labelRu: 'Личностный рост', labelUz: 'Shaxsiy rivojlanish', labelEn: 'Personal Growth' }
];
