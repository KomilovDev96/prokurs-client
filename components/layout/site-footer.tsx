'use client';

import { Typography } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SiteFooter() {
  const t = useTranslations('footer');

  return (
    <footer className="pk-footer">
      <div className="pk-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Image
          src="/logo.jpg"
          alt="Pro Kasb logo"
          width={48}
          height={48}
          style={{ borderRadius: '8px', opacity: 0.8 }}
        />
        <Typography.Text style={{ color: 'inherit' }}>
          © {new Date().getFullYear()} Pro Kasb Hunar Markazi. {t('copyright')}
        </Typography.Text>
      </div>
    </footer>
  );
}

