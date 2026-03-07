'use client';

import {Select} from 'antd';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/lib/i18n/navigation';
import type {AppLocale} from '@/lib/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('languageSwitcher');

  return (
    <Select
      size="middle"
      value={locale}
      style={{minWidth: 150}}
      onChange={(nextLocale) =>
        router.replace(pathname, {locale: nextLocale as AppLocale})
      }
      options={[
        {value: 'uz', label: t('uz')},
        {value: 'uz-cyrl', label: t('uzCyrl')},
        {value: 'ru', label: t('ru')}
      ]}
    />
  );
}
