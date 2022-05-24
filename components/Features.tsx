import styles from '@styles/components/Components.module.css';
import Image from 'next/image';

export const Features: React.FC = () => {
  return (
    <section className={styles.slantBg} id='features'>
      <div className={styles.slantBg_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            RURAの特徴的な機能
            <span>日々進化し続けています。</span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentFlex}>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/rura_unique_1.png'
                      alt='画面を見せながらの接客'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    少人数で多拠点同時対応できる
                    <br />
                    独自システム
                  </h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/rura_unique_2.png'
                      alt='来店を察せるセンサー通知'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    来店を察せるセンサー通知
                  </h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/rura_unique_3.png'
                      alt='表情や手元も見える複数カメラ切替'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    表情や手元も見える <br />
                    複数カメラ切替
                  </h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/rura_unique_4.png'
                      alt='接客スタッフや接客情報の一元管理'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    接客スタッフや接客情報の
                    <br />
                    一元管理
                  </h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/rura_unique_5.png'
                      alt='強力なデータ収集と分析機能'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    強力なデータ収集と分析機能
                  </h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/rura_unique_6.png'
                      alt='遠隔操作での迅速な障害対応'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    遠隔操作での迅速な障害対応
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
