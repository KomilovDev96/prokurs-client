'use client';

import {App as AntdApp} from 'antd';
import {ThemeProvider} from './theme-provider';

export default function AppProviders({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AntdApp>{children}</AntdApp>
    </ThemeProvider>
  );
}
