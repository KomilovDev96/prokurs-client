'use client';

import {Button, Card, Col, Row, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import {mockBookCategories} from '@/entities/book/model/mock-book-categories';
import {Link} from '@/lib/i18n/navigation';
import SectionShell from '@/shared/ui/section-shell';

export default function BooksSection() {
  const t = useTranslations('landing.books');

  return (
    <SectionShell id="books" title={t('title')} subtitle={t('subtitle')}>
      <Row gutter={[16, 16]}>
        {mockBookCategories.map((category) => (
          <Col key={category.id} xs={24} sm={12} lg={6}>
            <Link href="/books" className="books-link-card">
              <Card className="premium-card" variant="borderless" hoverable>
                <Typography.Title level={4}>
                  {t(`items.${category.slug}.title` as never)}
                </Typography.Title>
                <Typography.Paragraph>
                  {t(`items.${category.slug}.description` as never)}
                </Typography.Paragraph>
                <Button type="link" className="blue-accent">
                  {t('open')}
                </Button>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </SectionShell>
  );
}


