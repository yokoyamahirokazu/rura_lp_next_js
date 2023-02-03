import Image from 'next/image';

import styles from '@styles/components/Components.module.css';

export const Company: React.FC = () => {
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
  ];

  return (
    <section id='company' className={styles.companyContent}>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>運営会社</h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.companyFlex}>
            <div className={styles.companyFlexLogo}>
              <div className={styles.companyTimeleapLogo}>
                <Image
                  src='/images/timeleap_logo_black.svg'
                  alt='タイムリープ株式会社'
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </div>
            <div className={styles.companyFlexText}>
              <div className={styles.companyVision}>
                <h3 style={{ color: '#000' }}>
                  最も大切なことに時間を使える世の中を実現する
                </h3>
              </div>

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
        </div>
      </div>
    </section>
  );
};

export default Company;
