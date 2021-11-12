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
  return (
    <section>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center_nomargin}>
          <h2 className={styles.headline}>RURAをオススメする理由</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1.8}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: '.swipePrev',
            nextEl: '.swipeNext',
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {props.articles.map((recommend) => (
            <SwiperSlide key={recommend.id}>
              <div className={styles.recommendContents}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recommend;
