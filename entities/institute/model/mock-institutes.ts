import { Institute } from './types';

export const mockInstitutes: Institute[] = [
    {
        id: '1',
        slug: 'wiut',
        name: 'Westminster International University in Tashkent',
        location: 'local',
        country: 'Uzbekistan',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
        description: 'One of the leading international universities in Central Asia.',
        history: 'Founded in 2002, WIUT provides world-class education based on the UK curriculum.',
        howToPrepare: {
            subjects: ['Math (Level A)', 'English (IELTS 6.0+)'],
            recommendedCourses: ['fullstack-react-mastery']
        },
        ourValue: 'Our IT and Business programs directly align with WIUT entrance requirements and first-year curriculum.'
    },
    {
        id: '2',
        slug: 'mit',
        name: 'Massachusetts Institute of Technology',
        location: 'international',
        country: 'USA',
        image: 'https://images.unsplash.com/photo-1592066409343-730623696568?w=800&h=500&fit=crop',
        description: 'Ranked #1 university in the world for engineering and technology.',
        history: 'MIT was founded in 1861 in response to the increasing industrialization of the United States.',
        howToPrepare: {
            subjects: ['Advanced Mathematics', 'Physics', 'SAT/ACT'],
            recommendedCourses: ['fullstack-react-mastery']
        },
        ourValue: 'We help students build a strong portfolio and foundational technical skills required for elite US universities.'
    }
];
