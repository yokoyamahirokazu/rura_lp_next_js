import Button from '@components/Button';
import SeoContent from '@components/SeoContent';
import { client } from '@framework/client';
import { config } from '@site.config';
import styles from '@styles/components/Components.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type DetailProps = {
  id?: string;
  title?: string;
  hubSpotPortalId?: string;
};

type IndexProps = {
  newsItem: DetailProps;
};

const Index: NextPage<IndexProps> = (props) => {
  const router = useRouter();

  return (
    <>
      {props.newsItem.hubSpotPortalId && (
        <>
          <SeoContent
            pageTitle={`${props.newsItem.title}のダウンロードフォーム送信完了`}
            pageDescription={`${props.newsItem.title}のダウンロードフォームの送信が完了しました。この度は遠隔接客サービスRURAの資料ダウンロードをお申し込みいただき誠にありがとうございました。`}
            pageUrl={router.asPath}
            noIndex={'true'}
          />
          <div>
            <section className={styles.thanksPage}>
              <div className={styles.thanksPageBg}>
                <Image
                  src='/images/contact_section_bg.jpg'
                  alt='お問い合わせありがとうございます。'
                  layout={'fill'}
                  objectFit={'cover'}
                />
                <div className={styles.thanksPageBgOverlay}></div>
              </div>
              <div className={styles.thanksContentBg}>
                <div className={styles.thanksContent}>
                  <h1 style={{ lineHeight: '1.5' }}>
                    <span style={{ margin: '0 0 16px ' }}>
                      お申し込みありがとうございます
                    </span>
                    {props.newsItem.title}
                  </h1>
                  <p>
                    この度はお申し込みいただき誠にありがとうございます。
                    <br />
                    お申し込み内容を確認の上、担当者よりご連絡させていただきます。
                  </p>
                  <div className={styles.thanksContentBtn}>
                    <Button
                      bgColor='primary'
                      size='normal'
                      types='link'
                      href={'/'}>
                      ホームへ戻る
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: config.defaultMaxLimit,
      filters: `hubSpotPortalId[exists]`,
    },
  });

  const paths = data.contents.map((content) => `/news/thanks/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      newsItem: data,
    },
  };
};

export default Index;
