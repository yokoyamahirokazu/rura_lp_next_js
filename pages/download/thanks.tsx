import { NextPage } from 'next';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';
import Image from 'next/image';

const Thanks: NextPage = () => {
  return (
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
            <Button bgColor="secondary" size="large" types="link" href="/" icon="download">
              資料ダウンロードはこちら
            </Button>
          </div>
          <p>
            この度は弊社へのお問い合わせをいただき、誠にありがとうございます。
            <br />
            お問い合わせ内容を確認の上、担当者よりご連絡させていただきます。
          </p>
          <div className={styles.thanksContentBtn}>
            <Button bgColor="primary" size="normal" types="link" href={'/'}>
              ホームへ戻る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
