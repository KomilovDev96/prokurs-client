export interface Institute {
    id: string;
    slug: string;
    name: string;
    location: 'local' | 'international';
    country: string;
    image: string;
    description: string;
    history: string;
    howToPrepare: {
        subjects: string[];
        recommendedCourses: string[]; // slugs of courses from our platform
    };
    ourValue: string;
}
