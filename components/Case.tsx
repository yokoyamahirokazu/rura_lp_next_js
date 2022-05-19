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
          variableWidth: false,
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
    <section id="case">
      <div className={styles.case_inner}>
        <div className={styles.headline_box}>
          <h2 className={styles.headline}>
            導入事例<span>導入店舗、ぞくぞく増加中！</span>
          </h2>
        </div>
        <Slick {...settings}>
          {props.articles.map((caseItems) => (
            <div className={styles.caseContents} key={caseItems.id}>
              <div className={styles.caseContentsImg}>
                <div className={styles.caseContentsImg_inner}>
                  {!!caseItems.caseImg && (
                    <Image
                      src={caseItems.caseImg && caseItems.caseImg.url}
                      alt={caseItems.caseName}
                      layout={'fill'}
                      objectFit={'cover'}
                    />
                  )}
                </div>
              </div>
              <div className={styles.caseContentsTxt}>
                <h2>
                  {caseItems.caseName}
                  <span> {caseItems.caseType}</span>
                </h2>
                <p>{caseItems.caseBody}</p>
                <div className={styles.caseContentsLogo}>
                  {caseItems.caseLogo1 && (
                    <div className={styles.caseContentsLogoImg}>
                      <Image
                        src={caseItems.caseLogo1.url}
                        alt={caseItems.caseName}
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
                  )}
                  {caseItems.caseLogo2 && (
                    <div className={styles.caseContentsLogoImg}>
                      <Image
                        src={caseItems.caseLogo2.url}
                        alt={caseItems.caseName}
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
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
