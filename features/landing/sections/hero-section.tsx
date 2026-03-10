'use client';

import { Button, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('landing.hero');

  const stats = [
    { value: '1200+', label: t('stats.students') },
    { value: '40+', label: t('stats.courses') },
    { value: '95%', label: t('stats.employment') }
  ];

  return (
    <section className="hero-section">
      <div className="pk-container">
        <div style={{ textAlign: 'center', paddingTop: '40px' }}>
          <span className="hero-badge">{t('badge')}</span>
          <Typography.Title className="hero-title">{t('title')}</Typography.Title>
          <Typography.Paragraph className="hero-subtitle" style={{ margin: '0 auto 40px' }}>
            {t('subtitle')}
          </Typography.Paragraph>

          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/courses">
              <Button type="primary" size="large">
                {t('viewCourses')}
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="large">{t('register')}</Button>
            </Link>
          </div>

          <div className="hero-stats" style={{ marginTop: '80px' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

