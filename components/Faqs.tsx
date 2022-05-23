import styles from '@styles/components/Components.module.css';

interface Article {
  id?: string;
  question?: string;
  answer?: string;
}
type CaesProps = {
  articles: Article[];
};
export const Faqs: React.FC<CaesProps> = (props) => {
  return (
    <section id='faq'>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>よくあるご質問</h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentFlex}>
            {props.articles.map((faq) => (
              <div
                key={faq.id}
                className={`${styles.contentFlexTwo} ${styles.boxShadowA} ${styles.boxRound}`}
              >
                <div className={styles.boxRound_inner}>
                  <div className={styles.faqContent}>
                    <div className={styles.txtBoxA}>
                      <h3 className={styles.headlineMin}>
                        Q {faq.question && faq.question}
                      </h3>
                      <p>{faq.answer && faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
