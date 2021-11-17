import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Article {
  id?: string;
  company?: string;
  name?: string;
  body?: string;
  img?: {
    url: string;
  };
}
type CaesProps = {
  articles: Article[];
};
export const Recommend: React.FC<CaesProps> = (props) => {
  const settingsR = {
    arows: true,
    dots: true,
    arrows: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    nextArrow: <BsChevronRight />,
    prevArrow: <BsChevronLeft />,
    responsive: [
      {
        breakpoint: 1180, //399px以下のサイズに適用
        settings: {
          centerMode: true,
        },
      },
      {
        breakpoint: 767, //399px以下のサイズに適用
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center_nomargin}>
          <h2 className={styles.headline}>RURAをオススメする理由</h2>
        </div>
        <Slick {...settingsR}>
          {props.articles.map((recommend) => (
            <div className={styles.recommendContents} key={recommend.id}>
              <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                <div className={styles.boxRound_inner}>
                  <div className={styles.recommendContentsFlex}>
                    <div className={styles.recommendContentsImg}>
                      <div className={styles.imageCircle}>
                        <Image
                          src={recommend.img && recommend.img.url}
                          alt={recommend.name && recommend.name}
                          layout={'fill'}
                          objectFit={'cover'}
                        />
                      </div>
                    </div>
                    <div className={styles.recommendContentsTxt}>
                      <h3 className={styles.headlineMed}>{recommend.body && recommend.body}</h3>
                      <p>
                        <small>
                          {recommend.company && recommend.company}
                          <br />
                        </small>
                        {recommend.name && recommend.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slick>
      </div>
    </section>
  );
};

export default Recommend;
