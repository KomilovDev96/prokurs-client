'use client';

import { Row, Col, Typography, Segmented } from 'antd';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { mockInstitutes } from '@/entities/institute/model/mock-institutes';
import InstituteCard from '@/features/institute/components/institute-card';
import SectionShell from '@/shared/ui/section-shell';
import PageHeader from '@/shared/ui/page-header';

export default function InstitutesPage() {
    const t = useTranslations('institutes');
    const [filter, setFilter] = useState<string>('all');

    const filtered = mockInstitutes.filter(
        item => filter === 'all' || item.location === filter
    );

    return (
        <>
            <PageHeader title={t('title')} subtitle={t('subtitle')} />
            <SectionShell id="institutes-list">
                <div style={{ marginBottom: 32 }}>
                    <Segmented
                        block
                        value={filter}
                        onChange={(value) => setFilter(value as string)}
                        options={[
                            { label: 'Barchasi', value: 'all' },
                            { label: t('locations.local'), value: 'local' },
                            { label: t('locations.international'), value: 'international' },
                        ]}
                    />
                </div>

                <Row gutter={[24, 24]}>
                    {filtered.map((item) => (
                        <Col key={item.id} xs={24} sm={12} lg={8}>
                            <InstituteCard institute={item} t={t} />
                        </Col>
                    ))}
                </Row>
            </SectionShell>
        </>
    );
}
