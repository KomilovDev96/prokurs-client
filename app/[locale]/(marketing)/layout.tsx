import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import dynamic from 'next/dynamic';

const AnimatedTechBackground = dynamic(
  () => import('@/components/common/animated-tech-background'),
  {ssr: false}
);

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pk-shell">
      <AnimatedTechBackground />
      <div className="pk-shell-content">
        <SiteHeader />
        <main className="pk-main">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
