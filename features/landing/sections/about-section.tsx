'use client';

import { Card, Col, Row, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import SectionShell from '@/shared/ui/section-shell';
import { TeamOutlined, GlobalOutlined, ThunderboltOutlined } from '@ant-design/icons';

export default function AboutSection() {
  const t = useTranslations('landing.about');

  const items = [
    { key: 'teachers', icon: <TeamOutlined style={{ fontSize: '2rem', color: 'var(--pk-accent)' }} /> },
    { key: 'foreignCourses', icon: <GlobalOutlined style={{ fontSize: '2rem', color: 'var(--pk-accent)' }} /> },
    { key: 'practice', icon: <ThunderboltOutlined style={{ fontSize: '2rem', color: 'var(--pk-accent)' }} /> },
  ];

  return (
    <SectionShell id="about" title={t('title')} subtitle={t('subtitle')}>
      <Row gutter={[24, 24]}>
        {items.map((item) => (
          <Col key={item.key} xs={24} md={8}>
            <div style={{
              padding: '40px',
              background: 'rgba(30, 41, 59, 0.4)',
              borderRadius: '24px',
              height: '100%',
              border: '1px solid var(--pk-border)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ marginBottom: '24px' }}>{item.icon}</div>
              <Typography.Title level={3} style={{ color: '#fff', marginBottom: '16px', fontSize: '1.4rem' }}>
                {t(`items.${item.key}.title` as never)}
              </Typography.Title>
              <Typography.Paragraph style={{ color: 'var(--pk-text-soft)', fontSize: '1rem', margin: 0 }}>
                {t(`items.${item.key}.description` as never)}
              </Typography.Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </SectionShell>
  );
}


