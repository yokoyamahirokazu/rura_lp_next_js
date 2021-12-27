import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import { client } from '@framework/client';
import SeoContent from '@components/SeoContent';
import { useRouter } from 'next/router';
import { config } from '@site.config';
import HubspotForm from 'react-hubspot-form';
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
  description?: string;
  hubspotId?: string;
}

type IndexProps = {
  handbookItem: handbookItems;
};

const Index: NextPage<IndexProps> = (props) => {
  const router = useRouter();

  return (
    <>
      <SeoContent
        pageTitle={props.handbookItem.title}
        pageDescription={props.handbookItem.description}
        ogpImg={props.handbookItem.img.url}
        pageUrl={router.asPath}
        noIndex={'true'}
      />
      <div className={styles.contactPageFlex}>
        <div className={styles.contactPageFlexLeft}>
          <div className={styles.contactPageFlexInner}>
            <h1 className={styles.headline}>
              {props.handbookItem.title}

              {(() => {
                if (props.handbookItem.smallBannerImg) {
                  return <span>導入ハンドブック</span>;
                }
              })()}
            </h1>
            <div className={styles.handbookContent}>
              <div className={styles.handbookImage}>
                <Image
                  src={props.handbookItem.img.url}
                  alt={props.handbookItem.title}
                  layout='fill'
                  objectFit='contain'
                />
              </div>

              <div
                className={styles.handbookTxt}
                dangerouslySetInnerHTML={{
                  __html: `${props.handbookItem.comment}`,
                }}
              />
            </div>
            <p>※資料はフォーム入力後にダウンロードできます。</p>
          </div>
        </div>
        <div className={styles.contactPageFlexRight}>
          <div className={styles.contactPageFlexInner}>
            <div className={styles.contactContent}>
              <HubspotForm
                portalId='21136941'
                formId={props.handbookItem.hubspotId}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'whitepaper',
    queries: { limit: config.defaultMaxLimit },
  });

  const paths = data.contents.map((content) => `/download/${content.id}`);
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
