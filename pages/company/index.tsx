import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import styles from '@styles/components/Company.module.css';

const Index: NextPage = () => {
  const companyOutline = [
    { id: '1', item: '会社名', content: 'タイムリープ株式会社' },
    {
      id: '2',
      item: '住所',
      content: '東京都千代田区岩本町1-9-1 アイアンビルヂング3F',
    },
    { id: '3', item: '電話番号', content: '03-5825-4576' },
    { id: '4', item: '会社設立', content: '2019年6月3日' },
    { id: '5', item: '資本金', content: '4億3,191万8千円（資本準備金含む）' },
    { id: '6', item: '代表取締役', content: '望月 亮輔' },
    { id: '7', item: '取締役', content: '小路 龍太郎' },
  ];

  return (
    <>
      <SeoContent
        pageTitle='運営会社'
        pageDescription='遠隔接客サービスRURAの運営会社タイムリープ株式会社をご紹介します。'
      />
      <div className={styles.companyContent}>
        <section>
          <div className={styles.companyTimeleapLogo}>
            <Image
              src='/images/timeleap_logo.svg'
              alt='タイムリープ株式会社'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </section>
        <section>
          <div className={styles.companyContentFlex}>
            <div className={styles.companyContentFlexLeft}>
              <h2>VISION</h2>
            </div>
            <div className={styles.companyContentFlexRight}>
              <div className={styles.companyVision}>
                <h3>最も大切なことに時間を使える世の中を実現する</h3>
                <p>
                  世界中の社会人が、年間2,000時間を仕事に費やしています。
                  何百年もの間、それが当たり前のように。
                  テクノロジーの力で社会構造を変えることで、人類を労働から解放し、
                  一番大切なことに時間を使える世界を実現していきます。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.companyContentFlex}>
            <div className={styles.companyContentFlexLeft}>
              <h2>COMPANY</h2>
            </div>
            <div className={styles.companyContentFlexRight}>
              <table>
                <tbody>
                  {companyOutline.map((items) => (
                    <tr key={items.id}>
                      <th>{items.item}</th>
                      <td>{items.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <ContactSection downloadId='companyD' contactId='companyC' />
    </>
  );
};

export default Index;
