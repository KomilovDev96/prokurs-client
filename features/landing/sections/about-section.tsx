'use client';

import {Card, Col, Row, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import SectionShell from '@/shared/ui/section-shell';

export default function AboutSection() {
  const t = useTranslations('landing.about');

  const items = ['teachers', 'foreignCourses', 'practice'];

  return (
    <SectionShell id="about" title={t('title')} subtitle={t('subtitle')}>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item} xs={24} md={8}>
            <Card className="premium-card" variant="borderless">
              <Typography.Title level={4}>
                {t(`items.${item}.title` as never)}
              </Typography.Title>
              <Typography.Paragraph>
                {t(`items.${item}.description` as never)}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionShell>
  );
}


