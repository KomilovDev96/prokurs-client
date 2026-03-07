'use client';

import {Button, Form, Input, Select, message} from 'antd';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {submitCourseApplication} from '@/lib/api/applications';
import type {CourseRegistrationPayload} from '@/features/contact/model/types';

const countryValues = ['uzbekistan', 'russia', 'kazakhstan', 'turkiye'] as const;

const regionValues = [
  'tashkent',
  'samarkand',
  'andijan',
  'fargona',
  'namangan',
  'bukhara'
] as const;

export default function CourseRegistrationForm() {
  const [form] = Form.useForm<CourseRegistrationPayload>();
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations('landing.contact.form');

  const onCountryChange = (value: string) => {
    setSelectedCountry(value);

    if (value !== 'uzbekistan') {
      form.setFieldValue('region', undefined);
    }
  };

  const handleSubmit = async (values: CourseRegistrationPayload) => {
    try {
      setIsSubmitting(true);
      await submitCourseApplication(values);
      messageApi.success(t('success'));
      form.resetFields();
      setSelectedCountry(undefined);
    } catch (error) {
      messageApi.error(t('error'));
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isUzbekistan = selectedCountry === 'uzbekistan';

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="fullName"
          label={t('fullName')}
          rules={[{required: true, message: t('validation.fullName')}]}>
          <Input size="large" placeholder={t('fullNamePlaceholder')} />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label={t('phone')}
          rules={[
            {required: true, message: t('validation.phone')},
            {
              pattern: /^\+?[0-9\s()\-]{7,20}$/,
              message: t('validation.phoneInvalid')
            }
          ]}>
          <Input size="large" placeholder={t('phonePlaceholder')} />
        </Form.Item>

        <Form.Item
          name="country"
          label={t('country')}
          rules={[{required: true, message: t('validation.country')}]}>
          <Select
            size="large"
            placeholder={t('countryPlaceholder')}
            options={countryValues.map((value) => ({
              value,
              label: t(`countries.${value}`)
            }))}
            onChange={onCountryChange}
          />
        </Form.Item>

        {isUzbekistan ? (
          <Form.Item
            name="region"
            label={t('region')}
            rules={[{required: true, message: t('validation.region')}]}>
            <Select
              size="large"
              placeholder={t('regionPlaceholder')}
              options={regionValues.map((value) => ({
                value,
                label: t(`regions.${value}`)
              }))}
            />
          </Form.Item>
        ) : null}

        <Button type="primary" htmlType="submit" block loading={isSubmitting}>
          {t('submit')}
        </Button>
      </Form>
    </>
  );
}
