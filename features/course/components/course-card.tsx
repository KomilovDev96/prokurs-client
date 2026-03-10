'use client';

import { Card, Tag, Typography, Button } from 'antd';
import Image from 'next/image';
import { Course } from '@/entities/course/model/types';
import { Teacher } from '@/entities/teacher/model/types';
import { Link } from '@/lib/i18n/navigation';
import GlassCard from '@/shared/ui/glass-card';

interface CourseCardProps {
    course: Course;
    teacher?: Teacher;
    t: any;
}

export default function CourseCard({ course, teacher, t }: CourseCardProps) {
    return (
        <Link href={`/courses/${course.slug}`}>
            <GlassCard className="premium-card" style={{ height: '100%', cursor: 'pointer', padding: 0, overflow: 'hidden' }}>
                <div className="media-wrap" style={{ height: '180px', position: 'relative' }}>
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <Tag color="blue" style={{ position: 'absolute', top: 12, right: 12, margin: 0 }}>
                        {t(`categories.${course.category}`)}
                    </Tag>
                </div>
                <div style={{ padding: '16px' }}>
                    <Typography.Title level={4} style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>
                        {course.title}
                    </Typography.Title>
                    <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ color: 'var(--pk-text-soft)', marginBottom: 12 }}>
                        {course.shortDescription}
                    </Typography.Paragraph>

                    {teacher && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 16 }}>
                            <Image
                                src={teacher.image}
                                alt={teacher.name}
                                width={24}
                                height={24}
                                style={{ borderRadius: '50%' }}
                            />
                            <Typography.Text style={{ color: 'var(--pk-text-soft)', fontSize: '0.85rem' }}>
                                {teacher.name}
                            </Typography.Text>
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography.Text strong style={{ fontSize: '1.2rem', color: 'var(--pk-accent)' }}>
                            {course.price}
                        </Typography.Text>
                        <Button type="primary" ghost size="small">
                            {t('details')}
                        </Button>
                    </div>
                </div>
            </GlassCard>
        </Link>
    );
}
