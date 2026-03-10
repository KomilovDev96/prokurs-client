'use client';

import { Row, Col, Typography, Empty, Segmented } from 'antd';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { mockBooks } from '@/entities/book/model/mock-books';
import BookCard from '@/features/book/components/book-card';
import AIAdvisor from '@/features/book/components/ai-advisor';
import SectionShell from '@/shared/ui/section-shell';
import PageHeader from '@/shared/ui/page-header';

export default function BooksPage() {
  const t = useTranslations('books');
  const [filter, setFilter] = useState<string>('all');

  const filteredBooks = mockBooks.filter(book => filter === 'all' || book.category === filter);

  return (
    <>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <SectionShell id="books-list">
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={16}>
            <div style={{ marginBottom: 24 }}>
              <Segmented
                block
                value={filter}
                onChange={(value) => setFilter(value as string)}
                options={[
                  { label: 'Barchasi', value: 'all' },
                  { label: t('categories.business'), value: 'business' },
                  { label: t('categories.religious'), value: 'religious' },
                  { label: t('categories.personal_growth'), value: 'personal_growth' },
                ]}
              />
            </div>

            <Row gutter={[16, 16]}>
              {filteredBooks.map((book) => (
                <Col key={book.id} xs={24} md={12}>
                  <BookCard book={book} t={t} />
                </Col>
              ))}
            </Row>

            {filteredBooks.length === 0 && <Empty />}
          </Col>

          <Col xs={24} lg={8}>
            <AIAdvisor t={t} />
          </Col>
        </Row>
      </SectionShell>
    </>
  );
}
