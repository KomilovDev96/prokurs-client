'use client';

import {Button, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import {Link} from '@/lib/i18n/navigation';

export default function BooksPage() {
  const t = useTranslations('booksPage');

  return (
    <section className="pk-section">
      <div className="pk-container">
        <Typography.Title level={2} className="pk-section-title">
          {t('title')}
        </Typography.Title>
        <div className="books-page-panel">
          <Typography.Paragraph style={{fontSize: '1.1rem'}}>
            {t('construction')}
          </Typography.Paragraph>
          <Link href="/">
            <Button type="primary">{t('back')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

