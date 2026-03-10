'use client';

import { Typography, Row, Col, Button, Divider, List, Rate, Tag } from 'antd';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { mockCourses } from '@/entities/course/model/mock-courses';
import { mockTeachers } from '@/entities/teacher/model/mock-teachers';
import SectionShell from '@/shared/ui/section-shell';
import GlassCard from '@/shared/ui/glass-card';
import { InstagramOutlined, SendOutlined, LinkedinOutlined, YoutubeOutlined, TrophyOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
    const t = useTranslations('courses.detail');
    const course = mockCourses.find(c => c.slug === params.slug);

    if (!course) notFound();

    const teacher = mockTeachers.find(t => t.id === course.teacherId);

    return (
        <div style={{ paddingBottom: 80 }}>
            {/* Hero Header */}
            <div style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden', marginBottom: 40 }}>
                <Image src={course.image} alt={course.title} fill style={{ objectFit: 'cover', opacity: 0.4 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,15,25,0), #0b0f19)' }} />
                <div className="pk-container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
                    <Tag color="blue" style={{ width: 'fit-content', marginBottom: 12 }}>{course.category.toUpperCase()}</Tag>
                    <Typography.Title style={{ marginBottom: 16, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{course.title}</Typography.Title>
                    <Typography.Paragraph style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'var(--pk-text-soft)' }}>
                        {course.shortDescription}
                    </Typography.Paragraph>
                </div>
            </div>

            <div className="pk-container">
                <Row gutter={[40, 40]}>
                    <Col xs={24} lg={16}>
                        <section style={{ marginBottom: 48 }}>
                            <Typography.Title level={2}>{t('whyLearn')}</Typography.Title>
                            <Typography.Paragraph style={{ fontSize: '1.1rem' }}>
                                {course.whyLearn}
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                {course.fullDescription}
                            </Typography.Paragraph>
                        </section>

                        <section style={{ marginBottom: 48 }}>
                            <Typography.Title level={2}>{t('curriculum')}</Typography.Title>
                            {course.curriculum.map((module, idx) => (
                                <GlassCard key={idx} style={{ marginBottom: 16 }}>
                                    <Typography.Title level={4} style={{ margin: 0 }}>{module.title}</Typography.Title>
                                    <List
                                        dataSource={module.lessons}
                                        renderItem={(lesson) => (
                                            <List.Item style={{ border: 'none', padding: '8px 0' }}>
                                                <Space>
                                                    <CheckCircleOutlined style={{ color: 'var(--pk-accent)' }} />
                                                    <Typography.Text>{lesson}</Typography.Text>
                                                </Space>
                                            </List.Item>
                                        )}
                                    />
                                </GlassCard>
                            ))}
                        </section>

                        <section>
                            <Typography.Title level={2}>{t('reviews')}</Typography.Title>
                            <Row gutter={[16, 16]}>
                                {course.reviews.map((review) => (
                                    <Col key={review.id} span={24}>
                                        <GlassCard>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                                <Typography.Text strong>{review.user}</Typography.Text>
                                                <Rate disabled defaultValue={review.rating} />
                                            </div>
                                            <Typography.Text type="secondary">{review.comment}</Typography.Text>
                                        </GlassCard>
                                    </Col>
                                ))}
                            </Row>
                        </section>
                    </Col>

                    <Col xs={24} lg={8}>
                        <GlassCard style={{ position: 'sticky', top: 100 }}>
                            <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>{course.price}</Typography.Title>
                            <Button type="primary" size="large" block style={{ height: '56px', fontSize: '1.1rem', marginBottom: 24 }}>
                                {t('enroll')}
                            </Button>

                            <Divider dashed style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                            {teacher && (
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px', border: '2px solid var(--pk-accent)' }}>
                                        <Image src={teacher.image} alt={teacher.name} width={80} height={80} style={{ objectFit: 'cover' }} />
                                    </div>
                                    <Typography.Text strong style={{ display: 'block' }}>{teacher.name}</Typography.Text>
                                    <Typography.Text type="secondary" style={{ fontSize: '0.85rem' }}>{teacher.specialization}</Typography.Text>
                                </div>
                            )}
                        </GlassCard>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

import { Space } from 'antd';
