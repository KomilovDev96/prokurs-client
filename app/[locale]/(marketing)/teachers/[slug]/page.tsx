'use client';

import { Typography, Row, Col, Space, Divider, Tag } from 'antd';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { mockTeachers } from '@/entities/teacher/model/mock-teachers';
import { mockCourses } from '@/entities/course/model/mock-courses';
import CourseCard from '@/features/course/components/course-card';
import GlassCard from '@/shared/ui/glass-card';
import { InstagramOutlined, SendOutlined, LinkedinOutlined, YoutubeOutlined, TrophyOutlined } from '@ant-design/icons';

export default function TeacherDetailPage({ params }: { params: { slug: string } }) {
    const t = useTranslations('teachers');
    const tCourse = useTranslations('courses');
    const teacher = mockTeachers.find(t => t.slug === params.slug);

    if (!teacher) notFound();

    const teacherCourses = mockCourses.filter(c => c.teacherId === teacher.id);

    return (
        <div className="pk-container" style={{ paddingTop: 40, paddingBottom: 80 }}>
            <Row gutter={[40, 40]}>
                <Col xs={24} md={8}>
                    <GlassCard style={{ textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 24px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--pk-accent)' }}>
                            <Image
                                src={teacher.image}
                                alt={teacher.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <Typography.Title level={2} style={{ margin: '0 0 8px 0' }}>{teacher.name}</Typography.Title>
                        <Typography.Text style={{ color: 'var(--pk-accent)', fontSize: '1.1rem', display: 'block', marginBottom: 16 }}>
                            {teacher.specialization}
                        </Typography.Text>

                        <Divider style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

                        <Space size="large" style={{ marginTop: 8 }}>
                            {teacher.socials.instagram && <InstagramOutlined style={{ fontSize: '1.5rem' }} />}
                            {teacher.socials.telegram && <SendOutlined style={{ fontSize: '1.5rem' }} />}
                            {teacher.socials.linkedin && <LinkedinOutlined style={{ fontSize: '1.5rem' }} />}
                            {teacher.socials.youtube && <YoutubeOutlined style={{ fontSize: '1.5rem' }} />}
                        </Space>
                    </GlassCard>
                </Col>

                <Col xs={24} md={16}>
                    <section style={{ marginBottom: 48 }}>
                        <Typography.Title level={3}>{t('achievements')}</Typography.Title>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {teacher.achievements.map((ach, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <TrophyOutlined style={{ color: 'var(--pk-accent)', fontSize: '1.2rem' }} />
                                    <Typography.Text style={{ fontSize: '1.05rem' }}>{ach}</Typography.Text>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section style={{ marginBottom: 48 }}>
                        <Typography.Title level={3}>{t('portfolio')}</Typography.Title>
                        <Row gutter={[16, 16]}>
                            {teacher.portfolio.map((item) => (
                                <Col key={item.id} xs={12} sm={8}>
                                    <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', height: '140px' }}>
                                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }} className="hover-overlay">
                                            <Typography.Text style={{ color: '#fff', fontSize: '0.8rem', textAlign: 'center', padding: '0 8px' }}>{item.title}</Typography.Text>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    <section>
                        <Typography.Title level={3}>{t('coursesTaught')}</Typography.Title>
                        <Row gutter={[16, 16]}>
                            {teacherCourses.map(course => (
                                <Col key={course.id} xs={24} sm={12}>
                                    <CourseCard course={course} t={tCourse} />
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Col>
            </Row>

            <style jsx>{`
        div:hover > .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
        </div>
    );
}
