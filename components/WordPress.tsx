import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/components/Components.module.css';

interface Article {
  id?: string;
  date?: string;
  title?: {
    rendered: string;
  };
  link?: string;
  yoast_head_json?: {
    og_image?: {
      url?: string;
    };
    og_description?: string;
  };
}
type wpProps = {
  articles: Article[];
};
export const WpPost: React.FC<wpProps> = (props) => {
  const onLoad = (e) => {
    if (e.target.srcset) {
      e.target.dataset.load = 'done';
    }
  };
  return (
    <section className={styles.ruraMagazineBannerSeciton}>
      <Link href='https://media.timeleap-rura.com/'>
        <a target='_blank'>
          <div className={styles.ruraMagazineBanner}>
            <p className={styles.ruraMagazineCopy}>
              遠隔（リモート）接客サービスの導入事例・比較・調査など配信中
            </p>
            <div className={styles.ruraMagazineLogo}>
              <Image
                src='/images/rura_magazine_logo_white.svg'
                alt='遠隔（リモート）接客サービスの導入事例・比較・調査など配信中 RURA Magazine'
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
            <p className={styles.ruraMagazineLeadCopy}>
              遠隔（リモート）接客をより身近に。未来の接客を探索するWEBメディア
            </p>
            <div className={styles.ruraMagazinePostImageWrapper}>
              {props.articles.map((wp) => {
                return (
                  <div key={wp.id} className={styles.ruraMagazinePostImage}>
                    <Image
                      className={styles.image}
                      onLoad={onLoad}
                      src={wp.yoast_head_json.og_image[0].url}
                      layout={'fill'}
                      objectFit={'cover'}
                      alt={wp.title.rendered}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default WpPost;
