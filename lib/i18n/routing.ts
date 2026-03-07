import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uz', 'uz-cyrl', 'ru'],
  defaultLocale: 'uz',
  localeDetection: false,
  localePrefix: 'always'
});

export type AppLocale = (typeof routing.locales)[number];
