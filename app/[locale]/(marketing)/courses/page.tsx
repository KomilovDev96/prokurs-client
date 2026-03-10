'use client';

import { Row, Col, Typography, Input, Segmented } from 'antd';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { mockCourses } from '@/entities/course/model/mock-courses';
import { mockTeachers } from '@/entities/teacher/model/mock-teachers';
import CourseCard from '@/features/course/components/course-card';
import SectionShell from '@/shared/ui/section-shell';
import PageHeader from '@/shared/ui/page-header';

export default function CoursesPage() {
    const t = useTranslations('courses');
    const [filter, setFilter] = useState<string>('all');
    const [search, setSearch] = useState('');

    const filteredCourses = mockCourses.filter(course => {
        const matchesFilter = filter === 'all' || course.category === filter;
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <>
            <PageHeader title={t('title')} subtitle={t('subtitle')} />
            <SectionShell id="courses-list">
                <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Row gutter={[16, 16]} align="middle">
                        <Col xs={24} md={12}>
                            <Segmented
                                block
                                value={filter}
                                onChange={(value) => setFilter(value as string)}
                                options={[
                                    { label: t('categories.all'), value: 'all' },
                                    { label: t('categories.it'), value: 'it' },
                                    { label: t('categories.business'), value: 'business' },
                                    { label: t('categories.design'), value: 'design' },
                                    { label: t('categories.marketing'), value: 'marketing' },
                                ]}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <Input.Search
                                placeholder={t('searchPlaceholder')}
                                allowClear
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Col>
                    </Row>
                </div>

                <Row gutter={[24, 24]}>
                    {filteredCourses.map((course) => (
                        <Col key={course.id} xs={24} sm={12} lg={8}>
                            <CourseCard
                                course={course}
                                teacher={mockTeachers.find(t => t.id === course.teacherId)}
                                t={t}
                            />
                        </Col>
                    ))}
                </Row>

                {filteredCourses.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <Typography.Text type="secondary">{t('noResults')}</Typography.Text>
                    </div>
                )}
            </SectionShell>
        </>
    );
}
