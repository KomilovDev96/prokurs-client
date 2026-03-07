'use client';

import {ConfigProvider, theme} from 'antd';
import type {ThemeConfig} from 'antd';
import {createContext, useContext, useEffect, useMemo, useState} from 'react';

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

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const antdTheme: ThemeConfig = useMemo(
    () => ({
      algorithm:
        mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      token: {
        ...baseToken,
        colorBgBase: mode === 'dark' ? '#0B0F19' : '#F8FAFC',
        colorBgContainer: mode === 'dark' ? '#111827' : '#FFFFFF',
        colorTextBase: mode === 'dark' ? '#E5E7EB' : '#111827',
        colorTextSecondary: mode === 'dark' ? '#9CA3AF' : '#475569',
        colorBorderSecondary: mode === 'dark' ? 'rgba(59, 130, 246, 0.24)' : '#CBD5E1'
      },
      components: {
        Layout: {
          bodyBg: 'transparent',
          headerBg: 'transparent',
          siderBg: mode === 'dark' ? '#0F172A' : '#FFFFFF'
        },
        Card: {
          colorBgContainer:
            mode === 'dark' ? 'rgba(17, 24, 39, 0.86)' : 'rgba(255, 255, 255, 0.9)'
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
    [mode]
  );

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () =>
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
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
