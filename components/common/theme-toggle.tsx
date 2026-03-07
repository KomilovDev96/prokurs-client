'use client';

import {MoonFilled, SunFilled} from '@ant-design/icons';
import {Switch, Tooltip} from 'antd';
import {useTranslations} from 'next-intl';
import {useThemeMode} from '@/shared/providers/theme-provider';

export default function ThemeToggle() {
  const {mode, toggleMode} = useThemeMode();
  const t = useTranslations('theme');

  const nextThemeLabel = mode === 'dark' ? t('light') : t('dark');

  return (
    <Tooltip title={nextThemeLabel}>
      <Switch
        checked={mode === 'dark'}
        onChange={() => toggleMode()}
        checkedChildren={<MoonFilled />}
        unCheckedChildren={<SunFilled />}
      />
    </Tooltip>
  );
}
