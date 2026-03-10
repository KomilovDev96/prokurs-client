'use client';

import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
}

const THEME_STORAGE_KEY = 'pk-theme-mode';

const ThemeModeContext = createContext<ThemeContextValue | null>(null);

const baseToken = {
  colorPrimary: '#2563EB',
  colorInfo: '#2563EB',
  colorLink: '#3B82F6',
  borderRadius: 14,
  fontFamily: 'var(--font-manrope), sans-serif'
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode: ThemeMode = 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const antdTheme: ThemeConfig = useMemo(
    () => ({
      algorithm: theme.darkAlgorithm,
      token: {
        ...baseToken,
        colorBgBase: '#0B0F19',
        colorBgContainer: '#111827',
        colorTextBase: '#E5E7EB',
        colorTextSecondary: '#9CA3AF',
        colorBorderSecondary: 'rgba(59, 130, 246, 0.24)'
      },
      components: {
        Layout: {
          bodyBg: 'transparent',
          headerBg: 'transparent',
          siderBg: '#0F172A'
        },
        Card: {
          colorBgContainer: 'rgba(17, 24, 39, 0.86)'
        },
        Button: {
          primaryShadow: 'none'
        },
        Menu: {
          darkItemBg: '#0F172A',
          darkSubMenuItemBg: '#0F172A',
          darkItemSelectedBg: 'rgba(37, 99, 235, 0.2)',
          darkItemSelectedColor: '#BFDBFE'
        }
      }
    }),
    []
  );

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => { }
    }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }

  return context;
}
