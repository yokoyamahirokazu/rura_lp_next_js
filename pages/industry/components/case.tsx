import Image from 'next/image';

import styles from '@styles/components/Components.module.css';

export const Case: React.FC = () => {
  return (
    <section id='case'>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            <span className={styles.titleIcon}>活用事例</span>
            <span>葬儀業界で幅広く活用されています</span>
          </h2>
        </div>
        <div style={{ margin: '0 auto 4vw' }} className={styles.contentBox}>
          <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
            <div className={styles.boxRound_inner}>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxFlex}>
                  <div className={styles.solutionBoxFlexRight}>
                    <div
                      style={{ aspectRatio: '1.27' }}
                      className={styles.imageBox}>
                      <Image
                        src='/images/case_a.png'
                        alt=' 店舗の省人化で業務効率UP'
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
                  </div>
                  <div className={styles.solutionBoxFlexLeft}>
                    <h3>店舗の省人化で業務効率UP</h3>
                    <p>
                      店舗には新人スタッフ等の経験の浅いスタッフを配置。経験のあるサポートスタッフはRURAを活用して、必要に応じてモニター越しで対応。店舗での業務と経験の必要な業務を分業することで業務効率を向上されています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
            <div className={styles.boxRound_inner}>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxFlex}>
                  <div className={styles.solutionBoxFlexRight}>
                    <div
                      style={{ aspectRatio: '1' }}
                      className={styles.imageBox}>
                      <Image
                        src='/images/case_b.png'
                        alt=' 無人店舗拡大のためにRURAを活用'
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
                  </div>
                  <div className={styles.solutionBoxFlexLeft}>
                    <h3>無人店舗拡大のためにRURAを活用</h3>
                    <p>
                      本部で全拠点の状況を集中して管理・対応されています。来店時の受付をRURAでおこない、必要に応じてスタッフが店舗に駆け付ける運営体制を確立。従業員数をそのままに、効率的な無人店舗拡大を実現されています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
