'use client';

import Image from 'next/image';
import { Button, Card, Col, Row, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { mockTeachers } from '@/entities/teacher/model/mock-teachers';
import SectionShell from '@/shared/ui/section-shell';

export default function TeachersSection() {
  const t = useTranslations('landing.teachers');

  return (
    <SectionShell id="teachers" title={t('title')} subtitle={t('subtitle')}>
      <Row gutter={[16, 16]}>
        {mockTeachers.map((teacher) => (
          <Col key={teacher.id} xs={24} md={12} lg={8}>
            <Card className="premium-card" variant="borderless">
              <div className="media-wrap">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <Typography.Title level={4} style={{ marginTop: 16 }}>
                {teacher.name}
              </Typography.Title>
              <Typography.Paragraph>
                <Typography.Text strong>{t('experience')}:</Typography.Text>{' '}
                {teacher.experienceYears} {t('years')}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Typography.Text strong>{t('specialization')}:</Typography.Text>{' '}
                {t(`items.${teacher.slug}.specialization` as never)}
              </Typography.Paragraph>
              <Typography.Paragraph>
                {t(`items.${teacher.slug}.bio` as never)}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link href="/teachers">
          <Button size="large">{t('viewAll' as never) || 'Barcha ustozlarni ko\'rish'}</Button>
        </Link>
      </div>
    </SectionShell>
  );
}


