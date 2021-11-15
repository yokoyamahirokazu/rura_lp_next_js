import { NextPage } from 'next';
import Script from 'react-load-script';
import React, { useCallback } from 'react';
import { useTabIndex } from 'react-tabindex';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';
import Image from 'next/image';

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
                    src="/images/rura_dl_document_1.png"
                    alt="資料ダウンロード・お問い合わせ"
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
                <div className={styles.downloadFlexImgBox}>
                  <Image
                    src="/images/rura_dl_document_2.png"
                    alt="資料ダウンロード・お問い合わせ"
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
                <div data-formrun-show-if-error={'会社名'}>お名前を入力してください</div>
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
                <div data-formrun-show-if-error={'お名前'}>お名前を入力してください</div>
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
                <div data-formrun-show-if-error={'メールアドレス'}>
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
                <div data-formrun-show-if-error={'電話番号'}>電話番号を入力してください</div>
              </div>
              <div className={styles.formContentBox}>
                <label>
                  コメント<span>任意</span>
                </label>
                <textarea
                  name={'コメント'}
                  placeholder={'ご質問・ご要望等ございましたらご記入ください。'}
                ></textarea>
                <div data-formrun-show-if-error={'コメント'}>お問い合わせ入力してください</div>
              </div>

              <div className={styles._formrun_gotcha}>
                <label>If you are a human, ignore this field</label>
                <input
                  type={'text'}
                  name={'_formrun_gotcha'}
                  id={'_formrun_gotcha'}
                  tabIndex={tabIndex}
                />
              </div>
              <input type={'hidden'} name={'リードソース'} value={'問い合わせフォーム'} />
              <div>
                {/* <button
                  type={'submit'}
                  data-formrun-error-text={'未入力の項目があります'}
                  data-formrun-submitting-text={'送信中...'}
                >
                  送信する
                </button> */}

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
  );
};

export default Index;
