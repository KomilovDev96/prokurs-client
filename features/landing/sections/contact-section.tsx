'use client';

import {Card, Col, Row, Typography} from 'antd';
import {useTranslations} from 'next-intl';
import CourseRegistrationForm from '@/features/contact/components/course-registration-form';
import SectionShell from '@/shared/ui/section-shell';

export default function ContactSection() {
  const t = useTranslations('landing.contact');

  return (
    <SectionShell id="contact" title={t('title')} subtitle={t('subtitle')}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={10}>
          <div className="contact-list">
            <div className="contact-item">
              <Typography.Text type="secondary">{t('telegram')}</Typography.Text>
              <Typography.Title level={4} style={{marginTop: 8}}>
                <a href="https://t.me/prokasbhunar" target="_blank" rel="noreferrer">
                  @prokasbhunar
                </a>
              </Typography.Title>
            </div>

            <div className="contact-item">
              <Typography.Text type="secondary">{t('phone')}</Typography.Text>
              <Typography.Title level={4} style={{marginTop: 8}}>
                <a href="tel:+998901234567">+998 90 123 45 67</a>
              </Typography.Title>
            </div>

            <div className="contact-item">
              <Typography.Paragraph style={{marginBottom: 0}}>
                {t('socialText')}
              </Typography.Paragraph>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={14}>
          <Card className="premium-card" variant="borderless">
            <Typography.Title level={3}>{t('form.title')}</Typography.Title>
            <CourseRegistrationForm />
          </Card>
        </Col>
      </Row>
    </SectionShell>
  );
}


