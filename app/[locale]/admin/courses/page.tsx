'use client';

import {Card, Typography} from 'antd';
import {useTranslations} from 'next-intl';

export default function AdminCoursesPage() {
  const t = useTranslations('admin.pages.courses');

  return (
    <Card className="admin-card">
      <Typography.Title level={3}>{t('title')}</Typography.Title>
      <Typography.Paragraph>{t('description')}</Typography.Paragraph>
    </Card>
  );
}

