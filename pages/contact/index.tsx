import { NextPage } from 'next';
import Script from 'react-load-script';
import React, { useCallback } from 'react';
import { useTabIndex } from 'react-tabindex';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';
import SeoContent from '@components/SeoContent';
import ReCAPTCHA from 'react-google-recaptcha';
import Head from 'next/head'

declare global {
  interface Window {
    Formrun?: any;
  }
}

const Index: NextPage = () => {
  const tabIndex = useTabIndex();
  const onLoadFormrun = useCallback(() => {
    window.Formrun?.init('.formrun');
  }, []);


  return (
    <>

      <SeoContent
        pageTitle="お問い合わせ"
        pageDescription="遠隔接客サービスRURAへのお問い合わせページです。"
      />
        <Head>
      <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=6LeonngdAAAAANrnHlpwM84GtxNxxQg-ZyMb6Bcm" async defer></script>
    </Head>
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
              <Script onLoad={onLoadFormrun} url="https://sdk.form.run/js/v2/formrun.js"></Script>
              <form
                className={'formrun'}
                action={'https://form.run/api/v1/r/7f2p3yy9yrknpi16oqc2w1c9'}
                method={'post'}
              >
                <div className={styles.formContentBox}>
                  <label>
                    会社名<span className={styles.required}>必須</span>
                  </label>
                  <input name={'会社名'} type={'text'} data-formrun-required />
                  <div className={styles.errorText} data-formrun-show-if-error={'会社名'}>
                    お名前を入力してください
                  </div>
                </div>
                <div className={styles.formContentBoxFlex}>
                  <div className={styles.formContentBox}>
                    <label>
                      部署<span>任意</span>
                    </label>
                    <input name={'部署'} type={'text'} />
                  </div>
                  <div className={styles.formContentBox}>
                    <label>
                      役職<span>任意</span>
                    </label>
                    <input name={'役職'} type={'text'} />
                  </div>
                </div>
                <div className={styles.formContentBox}>
                  <label>
                    お名前<span className={styles.required}>必須</span>
                  </label>
                  <input name={'お名前'} type={'text'} data-formrun-required />
                  <div className={styles.errorText} data-formrun-show-if-error={'お名前'}>
                    お名前を入力してください
                  </div>
                </div>
                <div className={styles.formContentBox}>
                  <label>
                    メールアドレス<span className={styles.required}>必須</span>
                  </label>
                  <input
                    name={'メールアドレス'}
                    type={'text'}
                    data-formrun-type={'email'}
                    data-formrun-required
                  />
                  <div className={styles.errorText} data-formrun-show-if-error={'メールアドレス'}>
                    メールアドレスを正しく入力してください
                  </div>
                </div>
                <div className={styles.formContentBox}>
                  <label>
                    電話番号<span className={styles.required}>必須</span>
                  </label>
                  <input
                    name={'電話番号'}
                    type={'text'}
                    data-formrun-type={'tel'}
                    data-formrun-required
                  />
                  <div className={styles.errorText} data-formrun-show-if-error={'電話番号'}>
                    電話番号を入力してください
                  </div>
                </div>
                <div className={styles.formContentBox}>
                  <label>
                    お問い合わせ内容<span className={styles.required}>必須</span>
                  </label>
                  <textarea name={'お問い合わせ'} data-formrun-required></textarea>
                  <div className={styles.errorText} data-formrun-show-if-error={'お問い合わせ'}>
                    お問い合わせ入力してください
                  </div>
                </div>

                <div className={styles._formrun_gotcha}>
                  <label>If you are a human, ignore this field</label>
                  <input
                    type="text"
                    name="_formrun_gotcha"
                    id="_formrun_gotcha"
                    tabIndex={tabIndex}
                  />
                </div>
                <input type={'hidden'} name={'リードソース'} value={'問い合わせフォーム'} />
                <div className={styles.formContentBox}>
                  <ReCAPTCHA sitekey="6LeonngdAAAAAFhZcAqOlCzr-G5gXGEVUPpWjQIo" />
                </div>

                <div>
                  <Button
                    bgColor="primary"
                    size="large"
                    types="submit"
                    errorText={'未入力の項目があります'}
                    submittingText={'送信中...'}
                  >
                    送信する
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
