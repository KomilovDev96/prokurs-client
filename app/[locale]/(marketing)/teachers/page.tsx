'use client';

import { Row, Col } from 'antd';
import { useTranslations } from 'next-intl';
import { mockTeachers } from '@/entities/teacher/model/mock-teachers';
import TeacherCard from '@/features/teacher/components/teacher-card';
import SectionShell from '@/shared/ui/section-shell';
import PageHeader from '@/shared/ui/page-header';

export default function TeachersPage() {
    const t = useTranslations('teachers');

    return (
        <>
            <PageHeader title={t('title')} subtitle={t('subtitle')} />
            <SectionShell id="teachers-list">
                <Row gutter={[24, 24]}>
                    {mockTeachers.map((teacher) => (
                        <Col key={teacher.id} xs={24} sm={12} lg={8}>
                            <TeacherCard teacher={teacher} t={t} />
                        </Col>
                    ))}
                </Row>
            </SectionShell>
        </>
    );
}
