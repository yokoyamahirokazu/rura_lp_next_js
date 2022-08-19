import Image from 'next/image';

import styles from '@styles/components/Components.module.css';

export const Functions: React.FC = () => {
  return (
    <section id='features'>
      <div className={styles.section_inner}>
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
                      src='/images/functions_1.png'
                      alt='どんな方でも使いやすい画面設計'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    どんな方でも
                    <br />
                    使いやすい画面設計
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
                      src='/images/functions_2.png'
                      alt='画像・動画表示機能'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>画像・動画表示機能</h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.imageBoxB}>
                    <Image
                      src='/images/functions_3.png'
                      alt='スタッフ間の音声コミュニケーション機能'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    スタッフ間の
                    <br />
                    音声コミュニケーション機能
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
                      src='/images/functions_4.png'
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
                      src='/images/functions_5.png'
                      alt='表情や手元も見える複数カメラ切替'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    表情や手元も見える
                    <br />
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
                      src='/images/functions_6.png'
                      alt='遠隔（リモート）操作での迅速な障害対応'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3 className={styles.headlineMin}>
                    遠隔（リモート）操作での迅速な障害対応
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

export default Functions;
