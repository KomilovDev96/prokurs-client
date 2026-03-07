import AboutSection from '@/features/landing/sections/about-section';
import BooksSection from '@/features/landing/sections/books-section';
import ContactSection from '@/features/landing/sections/contact-section';
import CoursesSection from '@/features/landing/sections/courses-section';
import HeroSection from '@/features/landing/sections/hero-section';
import TeachersSection from '@/features/landing/sections/teachers-section';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TeachersSection />
      <BooksSection />
      <ContactSection />
    </>
  );
}
