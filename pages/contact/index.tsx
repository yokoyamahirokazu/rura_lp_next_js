import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';
import HubspotForm from 'react-hubspot-form';

declare global {
  interface Window {
    Formrun?: any;
    grecaptcha?: any;
  }
}

const Index: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="お問い合わせ"
        pageDescription="遠隔接客サービスRURAへのお問い合わせページになります。"
      />
      <div className={styles.contactPageFlex}>
        <div className={styles.contactPageFlexLeft}>
          <div className={styles.contactPageFlexInner}>
            <h1 className={styles.headline}>お問い合わせ</h1>
            <p>
              RURAにご関心いただきありがとうございます。
              必須項目を入力の上、フォームの送信をお願いします。
              担当者が内容を確認の上、折り返し連絡させていただきます。
            </p>
          </div>
        </div>
        <div className={styles.contactPageFlexRight}>
          <div className={styles.contactPageFlexInner}>
            <div className={styles.contactContent}>
              <HubspotForm
                portalId="21136941"
                formId="694f4564-50b6-45dc-ba3c-c540fd9af18b"
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
