'use client';

import { Button, Card, Col, Row, Typography } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { mockBookCategories } from '@/entities/book/model/mock-book-categories';
import { Link } from '@/lib/i18n/navigation';
import SectionShell from '@/shared/ui/section-shell';

export default function BooksSection() {
  const t = useTranslations('landing.books');

  return (
    <SectionShell id="books" title={t('title')} subtitle={t('subtitle')}>
      <Row gutter={[20, 20]}>
        {mockBookCategories.map((category) => (
          <Col key={category.id} xs={24} sm={12} lg={6}>
            <Link href="/books">
              <Card
                className="premium-card"
                hoverable
                style={{ height: '100%', padding: '8px' }}
                bodyStyle={{ padding: '24px' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <BookOutlined style={{ fontSize: '1.5rem', color: 'var(--pk-accent)' }} />
                </div>
                <Typography.Title level={4} style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>
                  {t(`items.${category.slug}.title` as never)}
                </Typography.Title>
                <Typography.Paragraph type="secondary" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
                  {t(`items.${category.slug}.description` as never)}
                </Typography.Paragraph>
                <Typography.Text style={{ color: 'var(--pk-accent)', fontWeight: 600 }}>
                  {t('open')} →
                </Typography.Text>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </SectionShell>
  );
}


