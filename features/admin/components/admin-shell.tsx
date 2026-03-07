'use client';

import {
  AppstoreOutlined,
  BookOutlined,
  DashboardOutlined,
  FormOutlined,
  TeamOutlined
} from '@ant-design/icons';
import {Button, Layout, Menu, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import {useMemo} from 'react';
import LanguageSwitcher from '@/components/common/language-switcher';
import ThemeToggle from '@/components/common/theme-toggle';
import {Link, usePathname, useRouter} from '@/lib/i18n/navigation';

const {Header, Sider, Content} = Layout;

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({children}: AdminShellProps) {
  const t = useTranslations('admin');
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = useMemo(
    () => [
      {key: '/admin', icon: <DashboardOutlined />, label: t('menu.dashboard')},
      {key: '/admin/courses', icon: <AppstoreOutlined />, label: t('menu.courses')},
      {key: '/admin/teachers', icon: <TeamOutlined />, label: t('menu.teachers')},
      {key: '/admin/books', icon: <BookOutlined />, label: t('menu.books')},
      {
        key: '/admin/applications',
        icon: <FormOutlined />,
        label: t('menu.applications')
      }
    ],
    [t]
  );

  const selectedKey =
    menuItems.find(
      (item) => pathname === item.key || pathname.startsWith(`${item.key}/`)
    )?.key ?? '/admin';

  return (
    <Layout className="admin-shell">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          style={{
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid var(--pk-border)'
          }}>
          <Typography.Title level={4} style={{margin: 0}}>
            Pro Kasb
          </Typography.Title>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({key}) => router.push(key)}
          style={{borderInlineEnd: 0, paddingTop: 8}}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--pk-border)',
            paddingInline: 20
          }}>
          <Typography.Text strong>{t('headerTitle')}</Typography.Text>

          <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Link href="/">
              <Button>{t('goToSite')}</Button>
            </Link>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </Header>

        <Content className="admin-content">{children}</Content>
      </Layout>
    </Layout>
  );
}
