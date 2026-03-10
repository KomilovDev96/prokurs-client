'use client';

import { Typography, Button, Space } from 'antd';
import Image from 'next/image';
import { Teacher } from '@/entities/teacher/model/types';
import { Link } from '@/lib/i18n/navigation';
import GlassCard from '@/shared/ui/glass-card';
import { InstagramOutlined, SendOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';

interface TeacherCardProps {
    teacher: Teacher;
    t: any;
}

export default function TeacherCard({ teacher, t }: TeacherCardProps) {
    return (
        <Link href={`/teachers/${teacher.slug}`}>
            <GlassCard className="premium-card" style={{ height: '100%', cursor: 'pointer', textAlign: 'center' }}>
                <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 16px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--pk-accent)' }}>
                    <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <Typography.Title level={4} style={{ margin: '0 0 4px 0' }}>
                    {teacher.name}
                </Typography.Title>
                <Typography.Text style={{ color: 'var(--pk-accent)', display: 'block', marginBottom: 12 }}>
                    {teacher.specialization}
                </Typography.Text>
                <Typography.Text style={{ color: 'var(--pk-text-soft)', display: 'block', marginBottom: 16 }}>
                    {teacher.experienceYears} {t('experience')}
                </Typography.Text>

                <Space size="middle" style={{ marginBottom: 20 }}>
                    {teacher.socials.instagram && <InstagramOutlined style={{ fontSize: '1.2rem' }} />}
                    {teacher.socials.telegram && <SendOutlined style={{ fontSize: '1.2rem' }} />}
                    {teacher.socials.linkedin && <LinkedinOutlined style={{ fontSize: '1.2rem' }} />}
                    {teacher.socials.youtube && <YoutubeOutlined style={{ fontSize: '1.2rem' }} />}
                </Space>

                <Button type="primary" ghost block>
                    {t('portfolio')}
                </Button>
            </GlassCard>
        </Link>
    );
}
