import styles from "@styles/components/Components.module.css";
import Image from "next/image";
import { ReactElement } from "react";

export const Service: React.FC = (): ReactElement => {
  return (
    <section className={styles.slantBg} id='service'>
      <div className={styles.slantBg_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            遠隔接客サービス
            <span>
              RURAは店頭スタッフと変わらない接客サービスの提供を目指しています。
            </span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={`serviceWrap ${styles.contentFlex}`}>
            <div
              className={`fadein ${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}
            >
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxA}>
                  <Image
                    src='/images/rura_service_1.png'
                    alt='画面を見せながらの接客'
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
                <div className={styles.txtBoxA}>
                  <h3 className={styles.headlineMed}>画面を見せながらの接客</h3>
                  <p>
                    タブレットを見せながら接客しているかのように、画像や動画を出したり切り替えたりしながら案内できます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`fadein ${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}
            >
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxA}>
                  <Image
                    src='/images/rura_service_2.png'
                    alt='声かけ・呼び出し'
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
                <div className={styles.txtBoxA}>
                  <h3 className={styles.headlineMed}>声かけ・呼び出し</h3>
                  <p>
                    店頭同様にスタッフ側から声かけしたり、お客様側から呼び鈴で呼び出す形式のどちらもできます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`fadein ${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}
            >
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxA}>
                  <Image
                    src='/images/rura_service_3.png'
                    alt='いつものスタッフが画面から'
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
                <div className={styles.txtBoxA}>
                  <h3 className={styles.headlineMed}>
                    いつものスタッフが画面から
                  </h3>
                  <p>
                    店頭に立っていたスタッフが画面越しに多拠点接客できるようになります。
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`fadein ${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}
            >
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxA}>
                  <Image
                    src='/images/rura_service_4.png'
                    alt='顔出し、アバター、キャラクター'
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
                <div className={styles.txtBoxA}>
                  <h3 className={styles.headlineMed}>
                    顔出し、アバター、キャラクター
                  </h3>
                  <p>
                    店頭同様の顔出し接客はもちろん、画面越しならではのアバターやキャラクターも選べます。
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

export default Service;
