'use client';

import { Typography } from 'antd';
import GlassCard from './glass-card';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div style={{
            padding: '60px 0 40px',
            background: 'linear-gradient(to bottom, rgba(37, 99, 235, 0.1), transparent)',
            marginBottom: 40
        }}>
            <div className="pk-container">
                <Typography.Title style={{ margin: 0, fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800 }}>
                    {title}
                </Typography.Title>
                {subtitle && (
                    <Typography.Paragraph style={{ fontSize: '1.2rem', color: 'var(--pk-text-soft)', marginTop: 16, maxWidth: '600px' }}>
                        {subtitle}
                    </Typography.Paragraph>
                )}
            </div>
        </div>
    );
}
