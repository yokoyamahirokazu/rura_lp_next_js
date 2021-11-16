import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';
import Image from 'next/image';
import { client } from '@framework/client';

declare global {
  interface Window {
    Formrun?: any;
  }
}

interface handbookItems {
  id?: string;
  title?: string;
  smallBanner?: string;
  comment?: string;
  url?: string;
  formAction?: string;
  img?: {
    url: string;
  };
  smallBannerImg?: {
    url: string;
  };
}

type IndexProps = {
  handbookItem: handbookItems;
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <div>
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
            <h1>
              {props.handbookItem.title}
              {(() => {
                if (props.handbookItem.smallBannerImg) {
                  return <span>導入ハンドブック</span>;
                }
              })()}
            </h1>
            <div className={styles.thanksDownload}>
              <h2>資料ダウンロードはこちら</h2>
              <Button
                bgColor="secondary"
                size="large"
                types="link"
                href={props.handbookItem.url}
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
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'whitepaper' });

  const paths = data.contents.map((content) => `/download/thanks/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'whitepaper', contentId: id });

  return {
    props: {
      handbookItem: data,
    },
  };
};

export default Index;
