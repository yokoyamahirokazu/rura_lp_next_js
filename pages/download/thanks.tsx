import { NextPage } from 'next';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';
import Image from 'next/image';
import SeoContent from '@components/SeoContent';

const Thanks: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="資料ダウンロード送信完了"
        pageDescription="資料ダウンロードフォームの送信が完了しました。この度は遠隔接客サービスRURAの資料ダウンロードをお申し込みいただき誠にありがとうございました。"
        noIndex={'true'}
      />
      <section className={styles.thanksPage}>
        <div className={styles.thanksPageBg}>
          <Image
            src="/images/contact_section_bg.jpg"
            alt="お問い合わせありがとうございます。"
            layout={'fill'}
            objectFit={'cover'}
          />
          <div className={styles.thanksPageBgOverlay}></div>
        </div>
        <div className={styles.thanksContentBg}>
          <div className={styles.thanksContent}>
            <h1>お問い合わせいただきありがとうございます。</h1>
            <div className={styles.thanksDownload}>
              <h2>資料ダウンロードはこちら</h2>
              <Button
                bgColor="secondary"
                size="large"
                types="link"
                href="https://drive.google.com/file/d/1YvNmlliK4gPVTtgfebTQ6AKVf0mmo1om/view"
                icon="download"
              >
                資料ダウンロードはこちら
              </Button>
            </div>
            <p>
              この度は資料ダウンロードをお申し込みいただき誠にありがとうございます。
              <br />
              上記リンクボタンより資料をダウンロードできます。
              <br />
              その他不明な点がございましたらお気軽にお問い合わせください。
            </p>
            <div className={styles.thanksContentBtn}>
              <Button bgColor="primary" size="normal" types="link" href={'/'}>
                ホームへ戻る
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thanks;
