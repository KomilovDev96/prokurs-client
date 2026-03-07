'use client';

import {Button, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import {Link} from '@/lib/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('landing.hero');

  const stats = [
    {value: '1200+', label: t('stats.students')},
    {value: '40+', label: t('stats.courses')},
    {value: '95%', label: t('stats.employment')}
  ];

  return (
    <section className="hero-section">
      <div className="pk-container">
        <div className="hero-surface">
          <span className="hero-badge">{t('badge')}</span>
          <Typography.Title className="hero-title">{t('title')}</Typography.Title>
          <Typography.Paragraph className="hero-subtitle">
            {t('subtitle')}
          </Typography.Paragraph>

          <div className="hero-actions">
            <Link href="/#courses">
              <Button type="primary" size="large">
                {t('viewCourses')}
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="large">{t('register')}</Button>
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

