import Image from 'next/image';
import { IoPeople, IoHeart, IoAnalyticsOutline } from 'react-icons/io5';

import styles from '@styles/components/Components.module.css';

import Solution1 from '/public/images/solution_1.svg';
import Solution2 from '/public/images/solution_2.svg';
import Solution3 from '/public/images/solution_3.svg';

export const Solution: React.FC = () => {
  return (
    <section id='solution'>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            <span className={styles.titleIcon}>
              <IoPeople />
              人材不足を解消
            </span>
            <span>人材不足を独自のシステムや機能で解消</span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
            <div className={styles.boxRound_inner}>
              <div className={styles.solutionBox}>
                <div className={styles.solutionBoxFlex}>
                  <div className={styles.solutionBoxFlexRight}>
                    <Solution1 />
                  </div>
                  <div className={styles.solutionBoxFlexLeft}>
                    <h3>少人数で多拠点同時対応できる独自システム</h3>
                    <p>
                      一般的なビデオ通話や接客システムとの大きな違いは少人数のスタッフで多拠点対応できる点。約30店舗を3人で対応しているケースもあるように受付スタッフの省人化を実現します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            <span className={styles.titleIcon}>
              <IoHeart />
              機会損失を解消
            </span>
            <span>お客様のニーズに即座に対応する機能</span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={` ${styles.contentFlex}`}>
            <div
              className={`${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.solutionBox}>
                  <div className={styles.solutionFlexImage}>
                    <Solution2 />
                  </div>
                  <h3>
                    遠隔地から
                    <br />
                    複数店舗を対応
                  </h3>
                  <p>
                    RURAは、店頭に受付スタッフを配置していなくても、遠隔地から複数店舗の受付対応ができます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.solutionBox}>
                  <div className={styles.solutionFlexImage}>
                    <Solution3 />
                  </div>
                  <h3>
                    急な来店にも
                    <br />
                    すぐに気付ける通知機能
                  </h3>
                  <p>
                    店舗側モニターにはセンサーを設置。その他の作業をしていても画面表示や通知音で来店を知らせてくれる機能。お客様をお待たせしないのはもちろん、業務の効率化にもお役立ていただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            <span className={styles.titleIcon}>
              <IoAnalyticsOutline />
              売上低下を解消
            </span>
            <span>売上を上げるためのアイデアや機能</span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={` ${styles.contentFlex}`}>
            <div
              className={`${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.solutionBox}>
                  <div className={styles.solutionFlexImage}>
                    <Image
                      src='/images/solution_4.png'
                      alt=' 無人店舗の拡大による機会創出'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3>
                    無人店舗の拡大による
                    <br />
                    機会創出
                  </h3>
                  <p>
                    RURAは少人数で多拠点をカバーできるので、無人店舗の拡大にお役立ていただけます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.solutionBox}>
                  <div className={styles.solutionFlexImage}>
                    <Image
                      src='/images/solution_5.png'
                      alt='強力なデータ収集と分析機能'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <h3>
                    強力なデータ収集と
                    <br />
                    分析機能
                  </h3>
                  <p>
                    遠隔接客データを集積。データから「お客様が知りたい情報」を抽出し、RURAでの接客品質の向上や店舗案内の改善に役立ち、成約率向上につながります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
