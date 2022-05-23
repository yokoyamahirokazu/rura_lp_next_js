import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import SeoContent from '@components/SeoContent';
import HubspotForm from 'react-hubspot-form';

declare global {
  interface Window {
    Formrun?: any;
  }
}

const Index: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle='資料ダウンロード'
        pageDescription='資料ダウンロードページです。遠隔接客サービスRURAにご関心いただきありがとうございます。'
        noIndex={'true'}
      />
      <div className={styles.contactPageFlex}>
        <div className={styles.contactPageFlexLeft}>
          <div className={styles.contactPageFlexInner}>
            <h1 className={styles.headline}>資料ダウンロード</h1>
            <div>
              <p>
                RURAにご関心いただきありがとうございます。
                必須項目を入力の上、フォームの送信をお願いします。
              </p>
              <div className={styles.downloadFlex}>
                <div className={styles.downloadFlexImg}>
                  <div className={styles.downloadFlexImgBox}>
                    <Image
                      src='/images/rura_dl_document_1.png'
                      alt='資料ダウンロード・お問い合わせ'
                      layout={'fill'}
                      objectFit={'cover'}
                    />
                  </div>
                  <div className={styles.downloadFlexImgBox}>
                    <Image
                      src='/images/rura_dl_document_2.png'
                      alt='資料ダウンロード・お問い合わせ'
                      layout={'fill'}
                      objectFit={'cover'}
                    />
                  </div>
                </div>
                <div className={styles.downloadFlexRight}>
                  <p className={styles.downloadTxt}>
                    こんな方にオススメの資料です。
                    <span>
                      ・RURAをもっと知りたい
                      <br />
                      ・導入事例を見たい
                      <br />
                      ・料金プランを知りたい
                      <br />
                      ・コストダウンできる秘密を知りたい
                    </span>
                  </p>
                </div>
              </div>
              <p>※資料はフォーム入力後にダウンロードできます。</p>
            </div>
          </div>
        </div>
        <div className={styles.contactPageFlexRight}>
          <div className={styles.contactPageFlexInner}>
            <div className={styles.contactContent}>
              <HubspotForm
                portalId='21136941'
                formId='df368756-6d5c-48a7-b00b-7bd889cbcf0c'
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
