'use client';

import { Typography, Tag, Rate } from 'antd';
import Image from 'next/image';
import { Book } from '@/entities/book/model/types';
import GlassCard from '@/shared/ui/glass-card';
import { PlayCircleOutlined } from '@ant-design/icons';

interface BookCardProps {
    book: Book;
    t: any;
}

export default function BookCard({ book, t }: BookCardProps) {
    return (
        <GlassCard className="premium-card" style={{ height: '100%', padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '120px', height: '180px', position: 'relative', flexShrink: 0 }}>
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div style={{ padding: '16px', flex: 1 }}>
                    <Tag color="purple" style={{ marginBottom: 8 }}>{t(`categories.${book.category}`)}</Tag>
                    <Typography.Title level={4} style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>
                        {book.title}
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ display: 'block', fontSize: '0.85rem', marginBottom: 8 }}>
                        {book.author}
                    </Typography.Text>
                    <Rate disabled defaultValue={book.rating} style={{ fontSize: '0.8rem', marginBottom: 8 }} />
                    <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ fontSize: '0.8rem', color: 'var(--pk-text-soft)', marginBottom: 12 }}>
                        {book.description}
                    </Typography.Paragraph>

                    {book.aiAnimationUrl && (
                        <div style={{
                            background: 'rgba(37, 99, 235, 0.1)',
                            borderRadius: '8px',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid rgba(37, 99, 235, 0.2)',
                            cursor: 'pointer'
                        }}>
                            <PlayCircleOutlined style={{ color: 'var(--pk-accent)', fontSize: '1.2rem' }} />
                            <Typography.Text style={{ color: 'var(--pk-accent)', fontSize: '0.75rem' }}>
                                {t('aiAnimation')}
                            </Typography.Text>
                        </div>
                    )}
                </div>
            </div>
        </GlassCard>
    );
}
