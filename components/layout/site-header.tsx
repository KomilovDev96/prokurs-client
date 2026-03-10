'use client';

import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Space } from 'antd';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/lib/i18n/navigation';
import Image from 'next/image';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');

  const navItems = [
    { href: '/#about', label: t('about') },
    { href: '/courses', label: t('courses') },
    { href: '/teachers', label: t('teachers') },
    { href: '/books', label: t('books') },
    { href: '/institutes', label: t('institutes') },
    { href: '/#contact', label: t('contact') },
    { href: '/admin', label: t('admin') }
  ];

  return (
    <header className="pk-header">
      <div className="pk-container pk-header-inner">
        <Link href="/" className="pk-brand">
          <Image
            src="/logo.jpg"
            alt="Pro Kasb logo"
            width={44}
            height={44}
            style={{ borderRadius: '10px', objectFit: 'cover', border: '2px solid rgba(59, 130, 246, 0.5)', marginRight: '12px' }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontSize: '1.2rem', color: '#fff' }}>Pro Kasb</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--pk-accent)', fontWeight: 600 }}>Hunar Markazi</span>
          </span>
        </Link>

        <nav className="pk-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="pk-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pk-header-actions">
          <Button
            className="pk-mobile-menu"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          />
        </div>

        <Drawer
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={32}
                height={32}
                style={{ borderRadius: '6px' }}
              />
              <span>Pro Kasb Hunar Markazi</span>
            </div>
          }
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </Space>
        </Drawer>
      </div>
    </header>
  );
}

