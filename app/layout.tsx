import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Manrope, Rubik } from 'next/font/google';
import AppProviders from '@/shared/providers/app-providers';
import 'antd/dist/reset.css';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope'
});

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: 'Pro Kasb Hunar Markazi',
  description: "Zamonaviy kasb va moliyaviy ta'lim platformasi",
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    images: [{ url: '/logo.jpg' }],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${manrope.variable} ${rubik.variable}`}>
        <AntdRegistry>
          <AppProviders>{children}</AppProviders>
        </AntdRegistry>
      </body>
    </html>
  );
}
