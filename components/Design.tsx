import styles from "@styles/components/Components.module.css";
import Image from "next/image";

export const Design: React.FC = () => {
  return (
    <section className={styles.slantBg} id='design'>
      <div className={styles.slantBg_inner}>
        <div className={styles.headline_box_nomargin}>
          <h2 className={styles.headline}>
            設置場所に
            <br />
            適応するデザイン
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.DesignWrapper}>
            <div className={styles.stepBoxWrapper}>
              <div className={styles.contentFlex}>
                <div className={styles.contentFlexTwo}>
                  <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                    <div className={styles.txtBoxA}>
                      <h3 className={styles.headlineMed}>
                        ディスプレイ、タブレット、
                        <br />
                        縦型画面、立体映像
                      </h3>
                      <p>
                        RURAはひとつのサービス上から <br />
                        あらゆる画面での接客を実現します。
                      </p>
                    </div>
                  </div>
                  <div className={styles.DesignImg}>
                    <Image
                      src='/images/rura_design_1.png'
                      alt='  ディスプレイ、タブレット、縦型画面、立体映'
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  </div>
                </div>
                <div className={styles.contentFlexTwo}>
                  <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                    <div className={styles.txtBoxA}>
                      <h3 className={styles.headlineMed}>
                        顔出し、キャラクター、 <br />
                        アバター、ボイスチェンジ
                      </h3>
                      <p>
                        世界観や顧客層に合わせた <br />
                        スタイルで接客できます。
                      </p>
                    </div>
                  </div>
                  <div className={styles.DesignImg}>
                    <Image
                      src='/images/rura_design_2.png'
                      alt='顔出し、キャラクター、アバター、ボイスチェンジ'
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  </div>
                </div>
                <div className={styles.contentFlexTwo}>
                  <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                    <div className={styles.txtBoxA}>
                      <h3 className={styles.headlineMed}>
                        画像、動画、 <br />
                        スクリーンセーバー、背景
                      </h3>
                      <p>
                        既存の画像や動画素材を活用して <br />
                        接客に使ったり待機中に流せます。
                      </p>
                    </div>
                  </div>
                  <div className={styles.DesignImg}>
                    <Image
                      src='/images/rura_design_3.png'
                      alt='画像、動画、スクリーンセーバー、背景'
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  </div>
                </div>
                <div className={styles.contentFlexTwo}>
                  <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                    <div className={styles.txtBoxA}>
                      <h3 className={styles.headlineMed}>
                        オリジナル制作{" "}
                        <span>（グラフィック・アバター・装飾・什器）</span>
                      </h3>
                      <p>
                        各種オリジナルデザインの制作も <br />
                        承っております。
                      </p>
                    </div>
                  </div>
                  <div className={styles.DesignImg}>
                    <Image
                      src='/images/rura_design_4.png'
                      alt='オリジナル制作（グラフィック・アバター・装飾・什器）</span>'
                      layout={"fill"}
                      objectFit={"contain"}
                    />
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

export default Design;
