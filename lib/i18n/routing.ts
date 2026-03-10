import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uz'],
  defaultLocale: 'uz',
  localeDetection: false,
  localePrefix: 'as-needed'
});

export type AppLocale = (typeof routing.locales)[number];
