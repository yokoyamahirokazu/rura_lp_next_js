import Image from 'next/image';

import styles from '@styles/components/Components.module.css';

export const Scene: React.FC = () => {
  return (
    <section id='scene'>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            導入シーン
            <span>
              遠隔接客・リモート接客サービスが様々な業界で活用されています。
            </span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentFlex}>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxB}>
                  <Image
                    src='/images/rura_scene_clinic.png'
                    alt='クリニック'
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div className={styles.hoverTxt}>
                <h3 className={styles.headlineMin}>クリニック</h3>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxB}>
                  <Image
                    src='/images/rura_scene_hotel.png'
                    alt='ホテル'
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div className={styles.hoverTxt}>
                <h3 className={styles.headlineMin}>ホテル</h3>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxB}>
                  <Image
                    src='/images/rura_scene_estate.png'
                    alt='不動産'
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div className={styles.hoverTxt}>
                <h3 className={styles.headlineMin}>不動産</h3>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxB}>
                  <Image
                    src='/images/rura_scene_coworking.png'
                    alt='コワーキングスペース'
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div className={styles.hoverTxt}>
                <h3 className={styles.headlineMin}>コワーキングスペース</h3>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxB}>
                  <Image
                    src='/images/rura_scene_netcafe.png'
                    alt='ネットカフェ'
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div className={styles.hoverTxt}>
                <h3 className={styles.headlineMin}>ネットカフェ</h3>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.imageBoxB}>
                  <Image
                    src='/images/rura_scene_shop.png'
                    alt='小売店'
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div className={styles.hoverTxt}>
                <h3 className={styles.headlineMin}>小売店</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene;
