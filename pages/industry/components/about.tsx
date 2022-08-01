import styles from '@styles/components/Components.module.css';

import AboutImage from '/public/images/about_image.svg';

export const About: React.FC = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>遠隔接客サービスRURAとは？</h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.aboutImage}>
            <AboutImage />
          </div>
          <div className={styles.textCenter}>
            <p className={styles.textBold}>
              「RURA」は店頭に置かれたモニター越しに、遠隔地から接客できるシステムです。
              <br />
              スタッフからの声かけ、お客様からの呼び出しなど対面での接客と変わらない対応ができます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
