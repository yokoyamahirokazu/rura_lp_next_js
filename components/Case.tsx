import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
  return (
    <section>
      <div className={styles.case_inner}>
        <div className={styles.headline_box}>
          <h2 className={styles.headline}>
            導入事例<span>導入店舗、ぞくぞく増加中！</span>
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: '.swipePrev',
            nextEl: '.swipeNext',
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {props.articles.map((cases) => (
            <SwiperSlide key={cases.id}>
              <div className={styles.caseContents}>
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
            </SwiperSlide>
          ))}
          <div className="swipePrev">戻るよ</div>
          <div className="swipeNext">進むよ</div>
        </Swiper>
        ;
      </div>
    </section>
  );
};

export default Case;
