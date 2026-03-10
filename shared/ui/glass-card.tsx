'use client';

import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function GlassCard({ children, className = '', style }: GlassCardProps) {
    return (
        <div
            className={`glass-card ${className}`}
            style={{
                background: 'var(--pk-bg-secondary)',
                border: '1px solid var(--pk-border)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease',
                ...style
            }}
        >
            {children}
        </div>
    );
}
