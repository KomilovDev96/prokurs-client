'use client';

import {Typography} from 'antd';
import {useTranslations} from 'next-intl';

export default function SiteFooter() {
  const t = useTranslations('footer');

  return (
    <footer className="pk-footer">
      <div className="pk-container">
        <Typography.Text style={{color: 'inherit'}}>
          © {new Date().getFullYear()} Pro Kasb Hunar Markazi. {t('copyright')}
        </Typography.Text>
      </div>
    </footer>
  );
}

