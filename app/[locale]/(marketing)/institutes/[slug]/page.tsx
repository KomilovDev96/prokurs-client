'use client';

import { Typography, Row, Col, List, Button, Tag, Space, Divider } from 'antd';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { mockInstitutes } from '@/entities/institute/model/mock-institutes';
import { mockCourses } from '@/entities/course/model/mock-courses';
import CourseCard from '@/features/course/components/course-card';
import GlassCard from '@/shared/ui/glass-card';
import { BookOutlined, CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

export default function InstituteDetailPage({ params }: { params: { slug: string } }) {
    const t = useTranslations('institutes.details');
    const tCourse = useTranslations('courses');
    const institute = mockInstitutes.find(i => i.slug === params.slug);

    if (!institute) notFound();

    const recommendedCourses = mockCourses.filter(c => institute.howToPrepare.recommendedCourses.includes(c.slug));

    return (
        <div className="pk-container" style={{ paddingTop: 40, paddingBottom: 80 }}>
            {/* Header Info */}
            <GlassCard style={{ marginBottom: 40, padding: 0, overflow: 'hidden' }}>
                <Row>
                    <Col xs={24} md={10} style={{ position: 'relative', minHeight: '300px' }}>
                        <Image src={institute.image} alt={institute.name} fill style={{ objectFit: 'cover' }} />
                    </Col>
                    <Col xs={24} md={14} style={{ padding: '32px' }}>
                        <Tag color="gold" style={{ marginBottom: 16 }}>{institute.country}</Tag>
                        <Typography.Title>{institute.name}</Typography.Title>
                        <Typography.Paragraph style={{ fontSize: '1.1rem', color: 'var(--pk-text-soft)' }}>
                            {institute.description}
                        </Typography.Paragraph>
                    </Col>
                </Row>
            </GlassCard>

            <Row gutter={[40, 40]}>
                <Col xs={24} lg={16}>
                    <section style={{ marginBottom: 48 }}>
                        <Typography.Title level={2}><InfoCircleOutlined /> {t('history')}</Typography.Title>
                        <Typography.Paragraph style={{ fontSize: '1.05rem' }}>
                            {institute.history}
                        </Typography.Paragraph>
                    </section>

                    <section style={{ marginBottom: 48 }}>
                        <Typography.Title level={2}><BookOutlined /> {t('howToPrepare')}</Typography.Title>
                        <GlassCard style={{ marginBottom: 24 }}>
                            <Typography.Title level={4}>{t('subjects')}</Typography.Title>
                            <List
                                dataSource={institute.howToPrepare.subjects}
                                renderItem={(item) => (
                                    <List.Item style={{ border: 'none', padding: '8px 0' }}>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: 'var(--pk-accent)' }} />
                                            <Typography.Text>{item}</Typography.Text>
                                        </Space>
                                    </List.Item>
                                )}
                            />
                        </GlassCard>

                        <Typography.Title level={4}>{t('recommendedCourses')}</Typography.Title>
                        <Row gutter={[16, 16]}>
                            {recommendedCourses.map(course => (
                                <Col key={course.id} xs={24} sm={12}>
                                    <CourseCard course={course} t={tCourse} />
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Col>

                <Col xs={24} lg={8}>
                    <GlassCard style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(0, 0, 0, 0.2))', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                        <Typography.Title level={3}>{t('ourValue')}</Typography.Title>
                        <Typography.Paragraph style={{ color: '#bfdbfe' }}>
                            {institute.ourValue}
                        </Typography.Paragraph>
                        <Button type="primary" block size="large" style={{ marginTop: 24 }}>
                            Maslahat olish
                        </Button>
                    </GlassCard>
                </Col>
            </Row>
        </div>
    );
}
