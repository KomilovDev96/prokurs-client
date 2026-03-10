'use client';

import Image from 'next/image';
import { Button, Card, Col, Row, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { mockCourses } from '@/entities/course/model/mock-courses';
import SectionShell from '@/shared/ui/section-shell';

export default function CoursesSection() {
  const t = useTranslations('landing');

  return (
    <SectionShell
      id="courses"
      title={t('courses.title')}
      subtitle={t('courses.subtitle')}>
      <Row gutter={[16, 16]}>
        {mockCourses.map((course) => (
          <Col key={course.id} xs={24} sm={12} lg={6}>
            <Card className="premium-card" cover={
              <div className="media-wrap">
                <Image
                  src={course.image}
                  alt={t(`courses.items.${course.slug}.title` as never)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            }>
              <div style={{ padding: '24px' }}>
                <Typography.Title level={4} style={{ margin: '0 0 12px 0', fontSize: '1.2rem', color: '#fff' }}>
                  {t(`courses.items.${course.slug}.title` as never)}
                </Typography.Title>
                <Typography.Paragraph type="secondary" style={{ marginBottom: 20, fontSize: '0.95rem' }}>
                  {t(`courses.items.${course.slug}.description` as never)}
                </Typography.Paragraph>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <Typography.Text strong style={{ fontSize: '1.1rem', color: 'var(--pk-accent)' }}>
                    {course.price}
                  </Typography.Text>
                  <Button type="link" style={{ padding: 0 }}>
                    {t('courses.details')} →
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link href="/courses">
          <Button size="large">{t('courses.viewAll' as never) || 'Barcha kurslarni ko\'rish'}</Button>
        </Link>
      </div>
    </SectionShell>
  );
}


