'use client';

import { Card, Typography, Tag, Row, Col, Button, Divider } from 'antd';
import Image from 'next/image';
import { Institute } from '@/entities/institute/model/types';
import { Link } from '@/lib/i18n/navigation';
import GlassCard from '@/shared/ui/glass-card';
import { GlobalOutlined, EnvironmentOutlined } from '@ant-design/icons';

interface InstituteCardProps {
    institute: Institute;
    t: any;
}

export default function InstituteCard({ institute, t }: InstituteCardProps) {
    return (
        <Link href={`/institutes/${institute.slug}`}>
            <GlassCard className="premium-card" style={{ height: '100%', padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '160px', position: 'relative' }}>
                    <Image
                        src={institute.image}
                        alt={institute.name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <Tag
                        color={institute.location === 'local' ? 'green' : 'gold'}
                        style={{ position: 'absolute', top: 12, right: 12, margin: 0 }}
                    >
                        {institute.location === 'local' ? institute.country : institute.country}
                    </Tag>
                </div>
                <div style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 8 }}>
                        {institute.location === 'local' ? <EnvironmentOutlined /> : <GlobalOutlined />}
                        <Typography.Text type="secondary" style={{ fontSize: '0.8rem' }}>
                            {t(`locations.${institute.location}`)}
                        </Typography.Text>
                    </div>
                    <Typography.Title level={4} style={{ margin: '0 0 12px 0', fontSize: '1.1rem' }}>
                        {institute.name}
                    </Typography.Title>
                    <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ color: 'var(--pk-text-soft)', marginBottom: 16 }}>
                        {institute.description}
                    </Typography.Paragraph>
                    <Button type="primary" block ghost>
                        {t('details.howToPrepare')}
                    </Button>
                </div>
            </GlassCard>
        </Link>
    );
}
