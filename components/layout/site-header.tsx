'use client';

import {MenuOutlined} from '@ant-design/icons';
import {Button, Drawer, Space} from 'antd';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Link} from '@/lib/i18n/navigation';
import LanguageSwitcher from '@/components/common/language-switcher';
import ThemeToggle from '@/components/common/theme-toggle';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');

  const navItems = [
    {href: '/#about', label: t('about')},
    {href: '/#courses', label: t('courses')},
    {href: '/#teachers', label: t('teachers')},
    {href: '/books', label: t('books')},
    {href: '/#contact', label: t('contact')},
    {href: '/admin', label: t('admin')}
  ];

  return (
    <header className="pk-header">
      <div className="pk-container pk-header-inner">
        <Link href="/" className="pk-brand">
          Pro Kasb <span className="blue-accent">Hunar</span> Markazi
        </Link>

        <nav className="pk-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="pk-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pk-header-actions">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            className="pk-mobile-menu"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          />
        </div>

        <Drawer
          title="Pro Kasb Hunar Markazi"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Space direction="vertical" size="large" style={{width: '100%'}}>
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

