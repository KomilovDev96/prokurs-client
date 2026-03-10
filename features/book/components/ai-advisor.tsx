'use client';

import { Typography, Input, Button, Avatar, List } from 'antd';
import { RobotOutlined, UserOutlined, SendOutlined } from '@ant-design/icons';
import { useState } from 'react';
import GlassCard from '@/shared/ui/glass-card';

export default function AIAdvisor({ t }: { t: any }) {
    const [messages, setMessages] = useState([
        { role: 'ai', text: t('aiAdvisor.description') }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: 'На основе вашего запроса я рекомендую прочитать "Atomic Habits" Джеймса Клира. Эта книга поможет вам выстроить систему продуктивности.'
            }]);
        }, 1000);
    };

    return (
        <GlassCard style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 16 }}>
                <Avatar icon={<RobotOutlined />} style={{ backgroundColor: 'var(--pk-accent)' }} />
                <Typography.Title level={4} style={{ margin: 0 }}>{t('aiAdvisor.title')}</Typography.Title>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16, paddingRight: 8 }}>
                <List
                    dataSource={messages}
                    renderItem={(msg) => (
                        <div style={{
                            marginBottom: 12,
                            textAlign: msg.role === 'user' ? 'right' : 'left'
                        }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 12px',
                                borderRadius: '12px',
                                background: msg.role === 'user' ? 'var(--pk-accent)' : 'rgba(255,255,255,0.05)',
                                maxWidth: '80%'
                            }}>
                                <Typography.Text style={{ color: '#fff', fontSize: '0.9rem' }}>
                                    {msg.text}
                                </Typography.Text>
                            </div>
                        </div>
                    )}
                />
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                    placeholder={t('aiAdvisor.placeholder')}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onPressEnter={handleSend}
                />
                <Button type="primary" icon={<SendOutlined />} onClick={handleSend} />
            </div>
        </GlassCard>
    );
}
