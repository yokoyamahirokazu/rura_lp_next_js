import styles from '@styles/components/Components.module.css';

import IconStaff from '/public/images/icon_staff.svg';
import IconBrokenHeart from '/public/images/icon_broken_heart.svg';
import IconDown from '/public/images/icon_down.svg';

export const Task: React.FC = () => {
  return (
    <section id='task'>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            葬儀業の運営でお困りではないですか？
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={`${styles.contentFlex} ${styles.taskFlex}`}>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.taskBoxFlex}>
                    <div className={styles.task_icon}>
                      <IconStaff />
                    </div>
                    <h3 className={styles.task_title}>
                      人材不足
                      <span>
                        夜間業務スタッフの
                        <br />
                        確保ができない
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.taskBoxFlex}>
                    <div className={styles.task_icon}>
                      <IconBrokenHeart />
                    </div>
                    <h3 className={styles.task_title}>
                      機会損失
                      <span>
                        突然の来客にも対応できる
                        <br />
                        安定した体制が作れない
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.contentFlexThree} ${styles.boxShadowA} ${styles.boxRound}`}>
              <div className={styles.boxRound_inner}>
                <div className={styles.txtBoxB}>
                  <div className={styles.taskBoxFlex}>
                    <div className={styles.task_icon}>
                      <IconDown />
                    </div>
                    <h3 className={styles.task_title}>
                      売上低下
                      <span>
                        ニーズの変化によって
                        <br />
                        単価が低下傾向
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className={styles.task_solution}>
          「遠隔（リモート）接客サービスRURA」は、この課題解決にお役立ていただけます！
        </h3>
      </div>
    </section>
  );
};

export default Task;
