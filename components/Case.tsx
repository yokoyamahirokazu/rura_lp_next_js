import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Article {
  id?: string;
  caseName?: string;
  caseType?: string;
  caseBody?: string;
  width: number;
  height: number;
  caseImg?: {
    url: string;
  };
  caseLogo1?: {
    url: string;
  };
  caseLogo2?: {
    url: string;
  };
}
type CaesProps = {
  articles: Article[];
};

export const Case: React.FC<CaesProps> = (props) => {
  const settings = {
    arows: true,
    dots: true,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    nextArrow: <BsChevronRight />,
    prevArrow: <BsChevronLeft />,
  };

  return (
    <section id="case">
      <div className={styles.case_inner}>
        <div className={styles.headline_box}>
          <h2 className={styles.headline}>
            導入事例<span>導入店舗、ぞくぞく増加中！</span>
          </h2>
        </div>
        <Slick {...settings}>
          {props.articles.map((cases) => (
            <div className={styles.caseContents} key={cases.id}>
              <div className={styles.caseContentsTxt}>
                <h2>
                  {cases.caseName}
                  <span> {cases.caseType}</span>
                </h2>
                <p>{cases.caseBody}</p>
                <div className={styles.caseContentsLogo}>
                  {cases.caseLogo1 && (
                    <div className={styles.caseContentsLogoImg}>
                      <Image
                        src={cases.caseLogo1.url}
                        alt={cases.caseName}
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
                  )}
                  {cases.caseLogo2 && (
                    <div className={styles.caseContentsLogoImg}>
                      <Image
                        src={cases.caseLogo2.url}
                        alt={cases.caseName}
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.caseContentsImg}>
                <div className={styles.caseContentsImg_inner}>
                  {!!cases.caseImg && (
                    <Image
                      src={cases.caseImg && cases.caseImg.url}
                      alt={cases.caseName}
                      layout={'fill'}
                      objectFit={'cover'}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slick>
      </div>
    </section>
  );
};

export default Case;
