'use client';

import Image from 'next/image';
import {Button, Card, Col, Row, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import {mockCourses} from '@/entities/course/model/mock-courses';
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
            <Card className="premium-card" variant="borderless">
              <div className="media-wrap">
                <Image
                  src={course.image}
                  alt={t(`courses.items.${course.slug}.title` as never)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <Typography.Title level={4} style={{marginTop: 16}}>
                {t(`courses.items.${course.slug}.title` as never)}
              </Typography.Title>
              <Typography.Paragraph>
                {t(`courses.items.${course.slug}.description` as never)}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Typography.Text strong>{t('courses.priceLabel')}:</Typography.Text>{' '}
                <span className="blue-accent">{course.price}</span>
              </Typography.Paragraph>
              <Button type="primary" ghost block>
                {t('courses.details')}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionShell>
  );
}


