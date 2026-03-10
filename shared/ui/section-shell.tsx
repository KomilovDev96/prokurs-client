'use client';

import { Typography } from 'antd';

interface SectionShellProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionShell({
  id,
  title,
  subtitle,
  children
}: SectionShellProps) {
  return (
    <section id={id} className="pk-section" style={{ borderBottom: '1px solid var(--pk-border)' }}>
      <div className="pk-container">
        {title && (
          <div style={{ marginBottom: '48px' }}>
            <Typography.Title level={2} className="pk-section-title">
              {title}
            </Typography.Title>
            {subtitle && (
              <Typography.Paragraph className="pk-section-subtitle">
                {subtitle}
              </Typography.Paragraph>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

